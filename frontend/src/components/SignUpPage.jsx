import styles from "./signPage.module.css";
import Union from "../images/Union.png";
import Input from "../inputs/Input";
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
          <Input
            type="text"
            placeholder="نام کاربری"
            error={errors.username?.message}
            {...register("username")}
          />
          <Input
            type="password"
            placeholder="رمز عبور"
            error={errors.password?.message}
            {...register("password")}
          />
          <Input
            type="password"
            placeholder=" تکرار رمز عبور"
            error={errors.password?.message}
            {...register("repeat pass")}
          />
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
