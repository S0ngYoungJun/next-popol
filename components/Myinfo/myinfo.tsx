"use client"

import { useState, useEffect } from 'react';
import styles from "@/styles/myinfo.module.scss";
import { VscGithubInverted } from 'react-icons/vsc';

export default function Myinfo() {
  const text = "안녕하세요.<br>유연하고노력하는개발자<br>송영준입니다."
  const [displayText, setDisplayText] = useState(''); // 화면에 보여지는 텍스트 상태

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let delay = 100; // 글자 간 딜레이 시간

    const type = () => {
      const fullText = text;
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setDisplayText(currentText);

      // 타이핑이 끝나면 지우기로 전환
      if (!isDeleting && currentText === fullText) {
        isDeleting = true;
        delay = 300; // 타이핑이 끝나고 1.5초 후에 지우기 시작
      }
      // 지우기가 끝나면 다음 텍스트로 전환
      else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % text.length;
        delay = 50; // 다음 텍스트로 전환한 후 0.5초 후에 다시 타이핑 시작
      }

      setTimeout(type, delay);
    };

    type();
  }, []);


  return (
      <main className={styles.root}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: displayText }}/>
        <table className={styles.myinfo}>
          <tbody>
            <tr>
              <td>이름</td>
              <td>송영준</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>만 27세</td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>010-3280-2490</td>
            </tr>
            <tr>
              <td>GitHub <VscGithubInverted /></td>
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
      </main>
  );
}
