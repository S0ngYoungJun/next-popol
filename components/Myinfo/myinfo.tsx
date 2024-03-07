import styles from "@/styles/myinfo.module.scss";

export default function Myinfo() {
  return (
      <main className={styles.myinfo}>
        <h1>
          안녕하세요. @@@@@@@@@@@@@
        </h1>
        <h1>
          @@@@@@@@@@@@@@@@@@
        </h1>
        <h1>
          @@@@@@@@@@@@송영준입니다.
        </h1>
        <table>
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
      </main>
  );
}
