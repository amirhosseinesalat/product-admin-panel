import styles from "./signPage.module.css";
import Union from "../images/Union.png";
function SignUpPage() {
  return (
    <>
      <div className={styles.h2}>
        <h2>بوت کمپ بوتواستارت</h2>
      </div>
      <div className={styles.container}>
        <img src={Union} alt="logo" />
        <h4>فرم ثبت نام</h4>
        <div className={styles.actives}>
          <input type="text" placeholder="نام کاربری" />
          <input type="password" placeholder="رمز عبور" />
          <input type="password" placeholder=" تکرار رمز عبور" />
          <button>ثبت نام</button>
        </div>
        <div className={styles.span}>
          <span>حساب کاربری دارید؟</span>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
