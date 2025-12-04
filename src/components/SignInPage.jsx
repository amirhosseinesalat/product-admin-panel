import styles from "./SignInPage.module.css";
import Union from "../images/Union.png";
function SignInPage() {
  return (
    <>
      <div className={styles.h2}>
        <h2>بوت کمپ بوتواستارت</h2>
      </div>
      <div className={styles.container}>
        <img src={Union} alt="logo" />
        <h4>فرم ورود</h4>
        <div className={styles.actives}>
          <input type="text" placeholder="نام کاربری" />
          <input type="password" placeholder="رمز عبور" />
          <button>ورود</button>
        </div>
        <span>ایجاد حساب کاربری</span>
      </div>
    </>
  );
}

export default SignInPage;
