'use client'
import React, { useState, useEffect } from "react";
import styles from "../styles/fall.module.scss"; // CSS 모듈로 import
import { generateRandomNumber } from "./utils/math";
import IconFlower from "./icons/flower";

interface Flowerrain {
  left: number;
  fallDelay: number;
  shakeDelay: number;
  blur: number;
  opacity: number;
  size: number;
}

interface FlowerrainProps {
  count?: number;
}

export default function Flowerrain({ count = 17 }: FlowerrainProps) {
  const [flowerrain, setFlowerrain] = useState<Flowerrain[]>([]);
  const isShow = true;

  useEffect(() => {
    const newFlowerrain = Array.from({ length: count }).map(() => {
      const fallDelay = generateRandomNumber(0, 15, { fixed: 2 });
      const shakeDelay = Math.min(
        generateRandomNumber(0, 10, { fixed: 1 }),
        Number.parseFloat((fallDelay - 0.07).toFixed(1))
      );
      return {
        left: generateRandomNumber(0, 100),
        fallDelay,
        shakeDelay,
        blur: generateRandomNumber(0.2, 0.5, { fixed: 1 }),
        opacity: generateRandomNumber(0.55, 0.95, { fixed: 2 }),
        size: generateRandomNumber(12, 18),
      };
    });
    setFlowerrain(newFlowerrain);
  }, []);

  return (
    <div
      className={`${styles.flowerrain} ${isShow && flowerrain.length ? styles.visible : styles.hidden}`} // CSS 모듈 클래스 적용
      aria-hidden="true"
    >
      {flowerrain.map((flake, index) => (
        <div
          key={`flake-${index}`}
          className={styles.flowerrain} // CSS 모듈 클래스 적용
          style={{
            left: `${flake.left}%`,
            filter: `blur(${flake.blur}px)`,
            opacity: `${flake.opacity}`,
            animationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
            WebkitAnimationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
          }}
        >
          <IconFlower/>
        </div>
      ))}
    </div>
  );
}
