import styles from "@/styles/index.module.scss";
import Myinfo from "@/components/Myinfo/myinfo";
import Mystack from "@/components/Stack/stack";
import Projects from "@/components/Projects/projects";
import { VscAccount,  } from 'react-icons/vsc';
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import Flowerrain from "@/components/fallobject";

export default function Home() {
  return (
    <main className={styles.root}>
      <Flowerrain></Flowerrain>
      <div className={styles.navbarwrapper}>
      <div className={styles.navbar}>
          <ul>
            <li><a href="#안녕하세요저는송영준입니다."> 
              <VscAccount/>
              <span>Home</span>
            </a>
            </li>  
            <li><a href="#project1"><GoProjectRoadmap /><span>프로젝트 1</span></a></li>
            <li><a href="#project2"><GoProjectRoadmap /><span>프로젝트 1</span></a></li>
            <li><a href="#project3"><GoProjectRoadmap /><span>프로젝트 1</span></a></li>
            <li><a href="#project3"><HiOutlineSquare3Stack3D/><span>프로젝트 1</span></a></li>
          </ul>
        </div>
        </div>
     <div className={styles.main}>
        <section className={styles.myinfo} id="안녕하세요저는송영준입니다.">
          <Myinfo />
        </section>
        <section className={styles.project}>
          <Projects/>
        </section>
        <section className={styles.stackContainer} >
          <Mystack/>
        </section>
        </div>
      </main>
      
  );
}
