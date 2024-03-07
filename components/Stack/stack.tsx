'use client'
import styles from "@/styles/myinfo.module.scss";
import React, { useState } from "react";
import Image from "next/image";

interface IconTextMap {
  [key: string]: string;
}

const iconTextMap: IconTextMap = {
  '/image/icon/html5.svg': '웹표준을 지키려 노력합니다.',
  '/image/icon/css3.svg': 'SCSS 문법에 익숙합니다. \n styled-component, emotion을 쓸 수 있습니다.',
  '/image/icon/javascript.svg': 'JavaScript',
  '/image/icon/typescript.svg': 'TypeScript',
  '/image/icon/react.svg': 'React',
  '/image/icon/node-js.svg': 'Node.js',
  '/image/icon/mysql.svg': 'MySQL',
  '/image/icon/mongodb.svg': 'MongoDB',
  '/image/icon/github.svg': 'GitHub',
  '/image/icon/aws.svg': 'AWS',
  '/image/icon/docker.svg': 'Docker',
};

export default function Mystack() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
 
  // 이미지를 클릭했을 때 호출되는 이벤트 핸들러
  const handleIconClick = (src : any) => {
    // 해당 이미지에 대한 텍스트를 가져옵니다.
    const text = iconTextMap[src];
    setSelectedIcon(text); // 선택된 텍스트를 상태로 설정합니다.
  };
 

  return (
      <main className={styles.myinfo}>
        <div className={styles.iconContainer}>
              {Object.keys(iconTextMap).map((src, index) => (
                <div className={styles.icons} key={index} onClick={() => handleIconClick(src)}>
                  <Image src={src} alt="Icon" fill={true} />
                </div>
              ))}
            </div>
            <div className={styles.takeTh}>
              {selectedIcon && selectedIcon.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
      </main>
  );
}
