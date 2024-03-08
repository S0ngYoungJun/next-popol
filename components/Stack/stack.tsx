'use client'
import styles from "@/styles/mystack.module.scss";
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
  '/image/icon/node-js.svg': '서버 측 JavaScript 환경에서 백엔드 서버를 개발할 수 있습니다 \n Express.js를 사용하여 라우팅 및 미들웨어를 구성할 수 있습니다. \n RESTful API 또는 GraphQL 엔드포인트를 구현할 수 있습니다.',
  '/image/icon/mysql.svg': '데이터베이스 설계 및 관리: 테이블 설계, 인덱스 생성 등의 기술을 활용하여 데이터베이스를 구축하고 관리할 수 있습니다. \n CRUD 작업: SQL 문법을 사용하여 데이터의 생성, 읽기, 갱신, 삭제 작업을 수행할 수 있습니다.',
  '/image/icon/mongodb.svg': 'MongoDB',
  '/image/icon/github.svg': 'GitHub',
  '/image/icon/aws.svg': '데이터베이스 및 스토리지: AWS RDS, S3 등의 서비스를 사용하여 데이터베이스와 스토리지를 관리할 수 있습니다. \n 클라우드 컴퓨팅: AWS의 ec2, amplyfi 등의 서비스를 활용하여 애플리케이션을 배포하고 확장할 수 있습니다.',
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
      <main className={styles.stackContainer}>
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
