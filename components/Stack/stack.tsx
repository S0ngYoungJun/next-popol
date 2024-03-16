'use client'
import styles from "@/styles/mystack.module.scss";
import React, { useState } from "react";
import Image from "next/image";

const iconPaths = [
  '/image/icon/HTML.svg',
  '/image/icon/CSS.svg',
  '/image/icon/Sass.svg',
  '/image/icon/JavaScript.svg',
  '/image/icon/TypeScript.svg',
  '/image/icon/React.svg',
  '/image/icon/NextJS-Light.svg',
  '/image/icon/Gatsby.svg',
  '/image/icon/VueJS-Light.svg',
  '/image/icon/NuxtJS-Light.svg',
  '/image/icon/NodeJS.svg',
  '/image/icon/NestJS-Light.svg',
  '/image/icon/MySQL-Light.svg',
  '/image/icon/MongoDB.svg',
  '/image/icon/Git.svg',
  '/image/icon/AWS-Light.svg',
  '/image/icon/Docker.svg',
  '/image/icon/Python-Light.svg',

];

export default function Mystack() {


  return (
    <main className={styles.skillContainer}>
      <div className={styles.skillinfo}>
        아래와 같은 기술들을 공부하고 사용해보고 있습니다. 아직 부족한점이 많지만 열심히 하겠습니다. 
      </div>
      <div className={styles.iconContainer}>
        {iconPaths.map((path, index) => (
          <div className={styles.icons} key={index} >
            <Image src={path} alt="Icon" fill={true} />
          </div>
        ))}
      </div>
    </main>
  );
}