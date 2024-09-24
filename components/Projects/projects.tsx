import styles from "@/styles/project.module.scss";
import SwiperTest from "../Slide/Slide";
import Link from "next/link";
import Swiperproject3 from "../Slide/Slide3";
import Swiperproject2 from "../Slide/Slide2";
import Swiperproject4 from "../Slide/Slide4";

export default function Projects() {
  return (
      <main className={styles.project}>
        <div className={styles.project1} id="#project1">
          <div className={styles.ps1}>
              <SwiperTest/>
            </div>
            <div className={styles.info1}>
            <h1>TO do list</h1>
            <p>
              간단하게 체크완료기능과 검색기능을 넣은 todolist입니다. 
              React를 빌드속도를 향상시키기 위해 개발툴로 vite를 사용했습니다. 
              Redux로 상태 관리를 구현했습니다.
            </p>
            {/* <ul>
              <li>Next.js</li>
              <li>matter.js</li>
              <li>canvas</li>
            </ul> */}
            <div className={styles.link}>
            <Link href="https://github.com/S0ngYoungJun/nextsand" legacyBehavior>
              <a target="_blank">GitHub 페이지</a>
            </Link>
            <Link href="https://nextsand.vercel.app/" legacyBehavior>
              <a target="_blank">URL</a>
            </Link>
            </div>
            </div>
          </div>
          <div className={styles.project2} id="#project2">
            <div className={styles.info2}>
            <h1>커피원두 E-commerce 웹사이트</h1>
            <p>
              Next.js를 사용해 만든 커피원두 E-commerce 웹사이트입니다. 팀프로젝트의 관리자 페이지에서 사용자 페이지에 보여지는 부분을 간편하게 조작할 수 있는점을 중점적으로 보고 제작하였습니다.
              저는 팀프로젝트에서 메인페이지의 상단메뉴바, 상품 슬라이드, 회원가입,로그인, 상품 판매 상세페이지, 마이페이지, 결제 이후 서버에서 DB의 날짜를 조회해 자동으로 연장되는 구독시스템 등의 만드는 부분을 맡았습니다.
            </p>
            {/* <ul>
              <li>Next.js</li>
              <li>MariaDB</li>
              <li>Node.js</li>
            </ul> */}
            <div className={styles.link}>
            <Link href="https://github.com/S0ngYoungJun/team-coffee" legacyBehavior>
              <a target="_blank">GitHub 페이지</a>
            </Link>
            <Link href="http://15.164.244.183/" legacyBehavior>
              <a target="_blank">URL</a>
            </Link>
            </div>
            </div>
            <div className={styles.ps2}>
              <Swiperproject2/>
            </div>
          </div>
          <div className={styles.project3} id="#project3">
          <div className={styles.ps3}>
              <Swiperproject3/>
            </div>
            <div className={styles.info3}>
            <h1>유럽 미술사책을 한눈에 보기</h1>
            <p>
              서양미술사 책을 읽다가 책의 흐름을 그림으로 한눈에 보면 좋겠다는 생각으로 제작하였습니다. 
              Next.js에서 app router 기능을 중점적으로 공부하면서 layout을 통해 상태를 유지하고 Rerendering을 방지하면서 자체 경로 안의 컴포넌트와 UI를 쉽게 공유할 수 있는점을 생각하면서 어떻게 하면 더 유연하고 빠르게 페이지를 이동할수 있는지 고민했습니다.
              마커를 클릭해 특정 좌표로 비행기가 이동하고 비행기가 도착하면 모달창이 나오는 이벤트를 구현했습니다.
            </p>
            <div className={styles.link}>
            <Link href="https://github.com/S0ngYoungJun/Arthistory" legacyBehavior>
              <a target="_blank">GitHub 페이지</a>
            </Link>
            <Link href="https://arthistory-tau.vercel.app/" legacyBehavior>
              <a target="_blank">URL</a>
            </Link>
            </div>
            </div>
            </div>
            <div className={styles.project4} id="#project4">
              <div className={styles.info4}>
              <h1>다양한 도형 쌓아보기</h1>
              <p>
                물리엔진 matter-js 라이브러리와 Next.js를 사용해 만든 웹페이지 입니다.
                여러 물리엔진 라이브러리와 canvas를 공부해보기 위해 만들어봤습니다.
                사용자가 도형의 크기, 색깔, 모양, 배경색깔 등을 조절할 수 있게 만들었습니다. 
                스크린샷 기능을 통해 사용자가 자신이 만든 도형쌓기를 가져갈 수 있도록 했습니다.
              </p>
              <div className={styles.link}>
              <Link href="https://github.com/S0ngYoungJun/tftcal" legacyBehavior>
                <a target="_blank">GitHub 페이지</a>
              </Link>
              <Link href="https://tftcal.vercel.app/" legacyBehavior>
                <a target="_blank">URL</a>
              </Link>
              </div>
              </div>
              <div className={styles.ps4}>
                <Swiperproject4/>
              </div>
          </div>       
      </main>
  );
}
