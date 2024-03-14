"use client"

import styles from "@/styles/myinfo.module.scss";
import {VscGithubInverted } from 'react-icons/vsc';
export default function Myinfo() {
  return (
      <main className={styles.myinfo}>
        <div className={styles.hello}>
          안녕하세요. <br></br>
          @@@@@@@@@@@@송영준입니다.
        </div>
        <table className={styles.table}>
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
            <tr>
              <td>활동</td>
              <td>대전그린컴퓨터아트학원 수료 2023.08~2024.03</td>
            </tr>
          </tbody>
        </table>
      </main>
  );
}