import backgroundImage from "@/images/background2.png";
import Image from "next/image";
import Meteor from "@/components/Meteor";

export default function Background() {
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
            {[...Array(30)].map((_, i) => (
                <Meteor
                    key={i}
                    duration={2 + Math.random() * 2}
                    size={2 + Math.random() * 2}
                    className="z-10"
                />
            ))}
        </div>
    )
}