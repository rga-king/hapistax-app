import Image from "next/image";
import { MUGSHOT_ALT } from "@/lib/constants";
import mugshot from "@/assets/images/mugshot.png";

type MugshotProps = {
  width?: number,
  height?: number
}

export default function Mugshot({ width = 122, height = 122 }: MugshotProps) {
  return (
    <Image
      src={mugshot}
      width={width}
      height={height}
      alt={MUGSHOT_ALT}
    />
  );
}