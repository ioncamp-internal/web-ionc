import Image from "next/image";
import { useEffect, useRef } from "react";
import computerSrc from "@/images/2026/computer.png";
import Halftone from "@/components/2026/Halftone";

const PAPER   = '#FCFCFE';
const GRID_C  = 'rgba(77,91,218,0.13)'; // iris-deep faint

// ── Hero canvas: expanding perspective grid (dark gradient bg) ───────────────
function runHeroCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let raf;
    let offset = 0;

    function resize() {
        const r = canvas.getBoundingClientRect();
        canvas.width  = r.width  * dpr;
        canvas.height = r.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    function draw() {
        const W = canvas.width  / dpr;
        const H = canvas.height / dpr;

        // Deep blue → purple gradient background
        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, '#1D03F1');
        grad.addColorStop(1, '#A361DD');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        const vx = W / 2;
        const vy = H * 0.40; // vanishing point at 40% height

        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 1;

        // ── Radial spokes from vanishing point (static) ──
        const spokeCount = 24;
        for (let i = 0; i < spokeCount; i++) {
            const angle = (i / spokeCount) * Math.PI * 2;
            const reach = Math.max(W, H) * 1.5;
            ctx.globalAlpha = 0.07;
            ctx.beginPath();
            ctx.moveTo(vx, vy);
            ctx.lineTo(vx + Math.cos(angle) * reach, vy + Math.sin(angle) * reach);
            ctx.stroke();
        }

        // ── Expanding concentric frames (animated outward) ──
        const frameCount = 14;
        for (let i = 0; i < frameCount; i++) {
            const t = ((i / frameCount) + offset) % 1; // 0=center, 1=edge
            const scale = t;
            const maxW = W * 1.8;
            const maxH = H * 1.8;
            const fw = maxW * scale;
            const fh = maxH * scale;
            const fx = vx - fw / 2;
            const fy = vy - fh / 2;

            ctx.globalAlpha = (1 - scale) * 0.18;
            ctx.beginPath();
            ctx.rect(fx, fy, fw, fh);
            ctx.stroke();
        }

        // ── Perspective floor lines (horizontal, animated outward) ──
        const hLineCount = 18;
        for (let i = 0; i < hLineCount; i++) {
            const t = ((i / hLineCount) + offset) % 1;
            const y = vy + (H - vy) * t;
            const halfW = (W * 0.8) * t + W * 0.02;

            ctx.globalAlpha = t * 0.14;
            ctx.beginPath();
            ctx.moveTo(Math.max(0, vx - halfW), y);
            ctx.lineTo(Math.min(W, vx + halfW), y);
            ctx.stroke();
        }

        ctx.globalAlpha = 1;
        offset = (offset + 0.0025) % 1;
    }

    function loop() { draw(); raf = requestAnimationFrame(loop); }
    raf = requestAnimationFrame(loop);

    const onResize = () => { resize(); };
    window.addEventListener('resize', onResize);

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
}

// ── Content canvas: subtle grid ──────────────────────────────────────────────
function runContentCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let raf;

    function resize() {
        const r = canvas.getBoundingClientRect();
        canvas.width  = r.width  * dpr;
        canvas.height = r.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    function draw() {
        const W = canvas.width  / dpr;
        const H = canvas.height / dpr;

        ctx.fillStyle = PAPER;
        ctx.fillRect(0, 0, W, H);

        // ── Static grid ──
        ctx.strokeStyle = GRID_C;
        ctx.lineWidth = 1;
        const g = 32;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        for (let x = 0; x <= W; x += g) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
        for (let y = 0; y <= H; y += g) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    function loop() { draw(); raf = requestAnimationFrame(loop); }
    raf = requestAnimationFrame(loop);

    const onResize = () => { resize(); };
    window.addEventListener('resize', onResize);

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
}

// ── Component ────────────────────────────────────────────────────────────────
export default function Background({ currentPage }) {
    const isHero    = currentPage === 0;
    const heroRef   = useRef(null);
    const contentRef= useRef(null);

    // Hero canvas (gradient + animated grid)
    useEffect(() => {
        const canvas = heroRef.current;
        if (!canvas) return;
        return runHeroCanvas(canvas);
    }, []);

    // Content canvas — grid only
    useEffect(() => {
        const canvas = contentRef.current;
        if (!canvas) return;
        return runContentCanvas(canvas);
    }, []);

    return (
        <div
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
            style={{ background: PAPER }}
        >
            {/* Hero canvas — expanding grid */}
            <canvas
                ref={heroRef}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: isHero ? 1 : 0, transition: 'opacity 700ms ease-in-out' }}
            />

            {/* Content canvas — grid + computer */}
            <canvas
                ref={contentRef}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: isHero ? 0 : 1, transition: 'opacity 700ms ease-in-out' }}
            />

            {/* Halftone overlay — Hero 頁才顯示 */}
            <Halftone visible={isHero} />

            {/* Computer — 手機：置中，無左偏 */}
            <div className="absolute inset-0 pointer-events-none block lg:hidden">
                <Image
                    src={computerSrc}
                    alt=""
                    width={300}
                    height={300}
                    style={{
                        objectFit: 'contain',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: isHero ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(2)',
                        opacity: isHero ? 0.5 : 0.07,
                        transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
                    }}
                    priority
                    unoptimized
                />
            </div>

            {/* Computer — 桌面：hero 左偏，其他置中 */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <Image
                    src={computerSrc}
                    alt=""
                    width={300}
                    height={300}
                    style={{
                        objectFit: 'contain',
                        position: 'absolute',
                        left: isHero ? '45%' : '50%',
                        top: '50%',
                        transform: isHero ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(2)',
                        opacity: isHero ? 0.5 : 0.07,
                        transition: 'left 700ms ease-in-out, opacity 700ms ease-in-out, transform 700ms ease-in-out',
                    }}
                    priority
                    unoptimized
                />
            </div>
        </div>
    );
}
