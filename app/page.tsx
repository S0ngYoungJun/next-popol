import styles from "@/styles/index.module.scss";
import Myinfo from "@/components/Myinfo/myinfo";
import Mystack from "@/components/Stack/stack";
import Projects from "@/components/Projects/projects";
import { VscAccount,  } from 'react-icons/vsc';
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";


export default function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.navbarwrapper}>
      <div className={styles.navbar}>
          <ul>
            <li><a href="#me"> 
              <VscAccount/>
              <span>Intro</span>
            </a>
            </li>  
            <li><a href="#project"><GoProjectRoadmap /><span>Project</span></a></li>
            {/* <li><a href="#project2"><GoProjectRoadmap /><span>프로젝트 2</span></a></li>
            <li><a href="#project3"><GoProjectRoadmap /><span>프로젝트 3</span></a></li> */}
            <li><a href="#skill"><HiOutlineSquare3Stack3D/><span>Skill</span></a></li>
          </ul>
        </div>
        </div>
     <div className={styles.main}>
        <section className={styles.myinfo} id="me">
          <Myinfo />
        </section>
        <section className={styles.project} id="project">
          <Projects/>
        </section>
        <section className={styles.stackContainer} id="skill" >
        
          <Mystack/>
        </section>
        </div>
      </main>
      
  );
}
