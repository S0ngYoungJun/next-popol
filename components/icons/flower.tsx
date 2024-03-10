import * as React from "react";
import Image from "next/image";



export default function IconFlower() {
  return (
    <Image
      src="/image/flower1.png" // 'public' 폴더 내의 SVG 파일 경로
      width={30}
      height={30}
      alt="Flower Icon"
    />
  );
}
