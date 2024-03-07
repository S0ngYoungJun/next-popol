"use client"

import React, { useState, useEffect } from "react";
import styles from "@/styles/index.module.scss";
import Snowflakes from "@/components/fallobject";
import SwiperTest from "@/components/Slide/Slide";
import Swiperproject2 from "@/components/Slide/Slide2";
import Swiperproject3 from "@/components/Slide/Slide3";
import Link from 'next/link';
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
  // 나머지 이미지와 텍스트도 동일하게 정의합니다.
};


export default function Home() {
  const [visibleProject, setVisibleProject] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [fadeProject, setfadeProject] = useState(0);

  // 이미지를 클릭했을 때 호출되는 이벤트 핸들러
  const handleIconClick = (src : any) => {
    // 해당 이미지에 대한 텍스트를 가져옵니다.
    const text = iconTextMap[src];
    setSelectedIcon(text); // 선택된 텍스트를 상태로 설정합니다.
  };
 
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop)
      // 원하는 위치에 따라 visibleProject 상태 업데이트
      if (scrollTop > 200 && scrollTop <= 600) {
        setVisibleProject(1);
      } else if (scrollTop > 600 && scrollTop <= 900) {
        setVisibleProject(2);
      } else if (scrollTop > 900) {
        setVisibleProject(3);
      } else {
        setVisibleProject(0);
      }

      if(scrollTop > 1500){
        setfadeProject(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.root}>
     <Snowflakes></Snowflakes>
     <div className={styles.main}>
      <h1>
        안녕하세요. @@@@@@@@@@@@@
      </h1>
      <h1>
        @@@@@@@@@@@@@@@@@@
        </h1>
        <h1>
        @@@@@@@@@@@@ 송영준입니다.
      </h1>
      <table>
        <tbody>
          <tr>
            <td>이름 </td>
            <td>송영준</td>
          </tr>
          <tr>
            <td>나이 </td>
            <td>만 27세</td>
          </tr>
          <tr>
            <td>연락처 </td>
            <td>010-3280-2490</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>https://github.com/S0ngYoungJun</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>clesaaaaaa@gmail.com</td>
          </tr>
          <tr>
            <td>학력</td>
            <td>한남대학교(수학교육과 졸업)</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.project}>
          <div className={`${styles.project1} ${visibleProject >= 1 && styles.visible}`}>
            <div className={styles.ps1}>
              <SwiperTest/>
            </div>
            <div className={styles.info1}>
            <h1>도형을 쌓아 그림을 그려요. This is block</h1>
            <p>
              물리엔진 matter-js 라이브러리와 클릭이벤트를 사용해 만든 웹페이지 입니다. 도형을 쌓아 그림을 만드는 미술을 보고 생각나 만들었습니다.
              matter.js 뿐만 아니라 다른 물리엔진 라이브러리도 다양하게 사용해보면서 각 라이브러리마다 장단점을 느껴봤고 도형과 벽을 만들기 위해 Canvas와 좌표값을 이용하는 부분을 중점적으로 공부했습니다.
              스크린샷 기능을 통해 사용자가 자신이 만든 그림을 가져갈 수 있도록 했습니다.
            </p>
            <Link href="https://github.com/S0ngYoungJun/nextsand" legacyBehavior>
              <a target="_blank">GitHub 페이지</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="https://nextsand.vercel.app/" legacyBehavior>
              <a target="_blank">URL</a>
            </Link>
            </div>
          </div>
          <div className={`${styles.project2} ${visibleProject >= 2 && styles.visible}`}>
            <div className={styles.info2}>
            <h1>팀 프로젝트, 커피원두 E-commerce 웹사이트</h1>
            <p>
              Next.js를 사용해 만든 커피원두 E-commerce 웹사이트입니다. ERP 구조를 공부하기위해 관리자 페이지와 사용자 페이지를 나눴으며 관리자 페이지에서 사용자 페이지에 보여지는 부분을 간편하게 조작할 수 있는점을 중점적으로 보고 제작하였습니다.
              저는 팀프로젝트에서 메인페이지의 상단메뉴바, 상품 슬라이드, 회원가입,로그인, 상품 판매 상세페이지, 결제 이후 서버에서 DB의 날짜를 조회해 자동으로 연장되는 구독시스템 등의 만드는 부분을 맡았습니다.
            </p>
            <Link href="https://github.com/S0ngYoungJun/nextsand" legacyBehavior>
              <a target="_blank">GitHub 페이지</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="http://13.124.205.12/" legacyBehavior>
              <a target="_blank">URL</a>
            </Link>
            </div>
            <div className={styles.ps2}>
              <Swiperproject2/>
            </div>
          </div>
          <div className={`${styles.project3} ${visibleProject >= 3 && styles.visible}`}>
          <div className={styles.ps3}>
              <Swiperproject3/>
            </div>
            <div className={styles.info3}>
            <h1>유럽 미술사의 흐름을 한눈에 보기, Arthistory</h1>
            <p>
              서양미술사 책을 읽다가 책의 흐름을 그림으로 한눈에 보면 좋겠다는 생각으로 제작하였습니다. Next.js에서 app router 기능을 중점적으로 공부하면서 layout을 통해 상태를 유지하고 Rerendering을 방지하면서 자체 경로 안의 컴포넌트와 UI를 쉽게 공유할 수 있는점을 생각하면서 어떻게 하면 더 유연하고 빠르게 페이지를 이동할수 있는지 고민했습니다.
              마커를 클릭해 특정 좌표로 비행기가 이동하고 비행기가 도착하면 모달창이 나오는 이벤트를 구현해서 사용자가 재미를 느끼도록 만들었습니다.
            </p>
      
            <Link href="https://github.com/S0ngYoungJun/nextsand" legacyBehavior>
              <a target="_blank">GitHub 페이지</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="https://arthistory-tau.vercel.app/" legacyBehavior>
              <a target="_blank">URL</a>
            </Link>
            </div>

          </div>
          </div>
          <div className={`${styles.stackContainer} ${fadeProject >= 1 && styles.fadein}`} >
            <div className={`${styles.iconContainer} ${fadeProject >= 1 && styles.fadein}`}>
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
          </div>
        </div>
      </main>
      
  );
}
