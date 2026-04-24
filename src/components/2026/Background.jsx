import backgroundImage from "@/images/2026/background2.png";
import Image from "next/image";
import Meteor from "@/components/2026/Meteor";
import { useMemo } from "react";

export default function Background() {
    // Meteor 參數只初始化一次
    const meteors = useMemo(
        () =>
            [...Array(30)].map(() => ({
                duration: 2 + Math.random() * 2,
                size: 2 + Math.random() * 2,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 1.2,
            })),
        []
    );

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 text-center top-28">
            <Image
                src={backgroundImage}
                alt=""
                width={1000}
                height={1200}
                priority
                unoptimized
                onContextMenu={() => false}
                onSelectStart={() => false}
                className="inline-block"
            />
            {meteors.map((m, i) => (
                <Meteor
                    key={i}
                    duration={m.duration}
                    size={m.size}
                    left={m.left}
                    top={m.top}
                    delay={m.delay}
                    className="z-10"
                />
            ))}
        </div>
    );
}