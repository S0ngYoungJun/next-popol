"use client"

import styles from "@/styles/myinfo.module.scss";
import {VscGithubInverted } from 'react-icons/vsc';


export default function Myinfo() {

  const copyToClipboard = () => {
    const email = 'clesaaaaaa@gmail.com';
    navigator.clipboard.writeText(email);
    alert('이메일 주소가 복사되었습니다.');
  };

  return (
      <main className={styles.myinfo}>
        <div className={styles.hello}>
          안녕하세요. 편안함을 찾고있는 개발자 송영준입니다. <br/>
          다양한 학습을 좋아하며 성장하는 습관을 만들기 위해 <br/>
          노력하고 있습니다.
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>이름</td>
              <td>송영준</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>만 27세(1996년생)</td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>010-3280-2490</td>
            </tr>
            <tr>
              <td>GitHub <VscGithubInverted /></td>
              <td> <a href="https://github.com/S0ngYoungJun" target="_blank" rel="noopener noreferrer">
              https://github.com/S0ngYoungJun
              </a></td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>
              clesaaaaaa@gmail.com
              <button onClick={copyToClipboard}>Copy</button>
              </td>
            </tr>
            <tr>
              <td>학력</td>
              <td>한남대학교(수학교육과 졸업)</td>
            </tr>
            <tr>
              <td>활동</td>
              <td>대전그린컴퓨터아트학원 수료 2023.08~2024.03</td>
            </tr>
          </tbody>
        </table>
      </main>
  );
}