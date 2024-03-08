import styles from "@/styles/index.module.scss";
import Myinfo from "@/components/Myinfo/myinfo";
import Mystack from "@/components/Stack/stack";
import Projects from "@/components/Projects/projects";
import { BsHouseDoorFill } from 'react-icons/bs';

export default function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.navbar}>
          <ul>
            <li><a href="#안녕하세요저는송영준입니다."> 
              <BsHouseDoorFill />
              <span>Home</span>
            </a>
            </li>  
            <li><a href="#project1">프로젝트 1</a></li>
            <li><a href="#project2">프로젝트 2</a></li>
            <li><a href="#project3">프로젝트 3</a></li>
          </ul>
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
