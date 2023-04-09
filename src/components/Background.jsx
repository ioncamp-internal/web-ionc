import backgroundImage from "@/images/background2.png";
import Image from "next/image";

export default function Background() {
    return (
        <Image
            className="absolute top-28 translate-y-[-18%] z-0"
            // className="absolute left-7 top-14 translate-x-[-55%] translate-y-[-20%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
            src={backgroundImage}
            alt=""
            width={1000}
            height={1200}
            priority
            unoptimized
            oncontextmenu="return false;"
            onselectstart="return false;"

        />
    )
}