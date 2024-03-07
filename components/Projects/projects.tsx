import styles from "@/styles/project.module.scss";
import SwiperTest from "../Slide/Slide";
import Link from "next/link";
import Swiperproject3 from "../Slide/Slide3";
import Swiperproject2 from "../Slide/Slide2";


export default function Projects() {
  return (
      <main className={styles.project}>
        <div className={styles.project1}>
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
          <div className={styles.project2}>
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
          <div className={styles.project3}>
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

      </main>
  );
}
