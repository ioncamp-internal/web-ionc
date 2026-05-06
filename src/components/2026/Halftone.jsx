import { useEffect, useRef } from 'react';

// ── 預設參數 ─────────────────────────────────────────────────────────────────
const DEFAULTS = {
    color:          '#D4D4D4', // 圓點顏色
    gridStep:       12,        // 基礎網格間距 (px)
    gridStepMobile: 12,        // 行動裝置網格間距 (px)
    baseSize:       3,         // 桌面最大基礎半徑 (px)
    baseSizeMobile: 3,         // 行動裝置最大基礎半徑 (px)
    jitter:         0,         // 座標抖動幅度 (px)，實際位移為 ±jitter
    jitterMobile:   0,
    leftZone:       0.40,      // 左側密集區結束位置 (0~1，相對畫布寬度)
    rightZone:      0.80,      // 右側密集區開始位置 (0~1，相對畫布寬度)
    leftMaxDensity: 0.95,      // 左側最邊緣的最高密度 (0~1)
    rightMaxDensity:0.80,      // 右側最邊緣的最高密度 (0~1)
    edgeDensity:    0.08,      // 左右密集區交接中間的最低密度
    centerDensity:  0.03,      // 中間區的最高稀疏密度
};

// ── 密度權重計算 ─────────────────────────────────────────────────────────────
function densityAt(x, W, cfg) {
    const leftEdge  = W * cfg.leftZone;
    const rightEdge = W * cfg.rightZone;

    if (x <= leftEdge) {
        const slope = (cfg.leftMaxDensity - cfg.edgeDensity) / leftEdge;
        return cfg.leftMaxDensity - slope * x;
    }
    if (x >= rightEdge) {
        const slope = (cfg.rightMaxDensity - cfg.edgeDensity) / (W - rightEdge);
        return cfg.edgeDensity + slope * (x - rightEdge);
    }
    // 中間：以二次函數保持極低稀疏
    const t = (x - leftEdge) / (rightEdge - leftEdge) - 0.5;
    return cfg.centerDensity * Math.pow(t, 2) * 4;
}

// ── 半色調渲染 ───────────────────────────────────────────────────────────────
function renderHalftone(canvas, cfg) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    function resize() {
        const r = canvas.getBoundingClientRect();
        canvas.width  = r.width  * dpr;
        canvas.height = r.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
        resize();
        const W = canvas.width  / dpr;
        const H = canvas.height / dpr;
        const isMobile = W < 768;

        const step     = isMobile ? cfg.gridStepMobile : cfg.gridStep;
        const jitter   = isMobile ? cfg.jitterMobile   : cfg.jitter;
        const baseSize = isMobile ? cfg.baseSizeMobile  : cfg.baseSize;

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = cfg.color;

        for (let gx = 0; gx < W + step; gx += step) {
            for (let gy = 0; gy < H + step; gy += step) {
                const d = densityAt(gx, W, cfg);
                if (Math.random() >= d) continue;

                const posX  = gx + (Math.random() - 0.5) * jitter * 2;
                const posY  = gy + (Math.random() - 0.5) * jitter * 2;
                const noise = 0.8 + Math.random() * 0.4;
                const r     = Math.max(0.5, baseSize * d * noise);

                ctx.beginPath();
                ctx.arc(posX, posY, r, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    draw();

    const onResize = () => draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
}

// ── Component ────────────────────────────────────────────────────────────────
/**
 * Halftone — 有機半色調點陣背景
 *
 * Props（皆為選填，有預設值）：
 *   visible         {boolean}  是否顯示（fade in/out）
 *   color           {string}   圓點顏色，預設 '#D4D4D4'
 *   gridStep        {number}   桌面網格間距 px，預設 24
 *   gridStepMobile  {number}   行動裝置網格間距 px，預設 30
 *   baseSize        {number}   桌面基礎半徑 px，預設 8.5
 *   baseSizeMobile  {number}   行動裝置基礎半徑 px，預設 5
 *   jitter          {number}   座標抖動幅度 px，預設 5
 *   jitterMobile    {number}   行動裝置座標抖動幅度 px，預設 4
 *   leftZone        {number}   左側密集區結束比例 0~1，預設 0.40
 *   rightZone       {number}   右側密集區起始比例 0~1，預設 0.80
 *   leftMaxDensity  {number}   左側最高密度 0~1，預設 0.95
 *   rightMaxDensity {number}   右側最高密度 0~1，預設 0.80
 *   edgeDensity     {number}   密集區邊緣最低密度，預設 0.08
 *   centerDensity   {number}   中心區最大密度，預設 0.03
 *   topOffset       {number}   從頂部裁切的高度 px（避免蓋住 header），預設 72
 */
export default function Halftone({ visible, topOffset = 80, ...props }) {
    const ref = useRef(null);
    const cfg = { ...DEFAULTS, ...props };

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        return renderHalftone(canvas, cfg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <canvas
            ref={ref}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                opacity:    visible ? 1 : 0,
                transition: 'opacity 700ms ease-in-out',
                clipPath:   `inset(${topOffset}px 0 0 0)`,
            }}
        />
    );
}
