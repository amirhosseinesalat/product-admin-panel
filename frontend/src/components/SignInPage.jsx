import styles from "./signPage.module.css";
import Union from "../images/Union.png";
import Input from "../inputs/Input";
import { validateSchema } from "../validation/validateSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../api/auth";
import { Link } from "react-router-dom";
function SignInPage() {
  function submitHandler(data) {
    console.log(data);
  }

  async function submitHandler(data) {
    try {
      const res = await login(data);
      console.log("LOGIN SUCCESS:", res.data);
    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data || err.message);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.h2}>
          <h2>بوت کمپ بوتواستارت</h2>
        </div>
        <div className={styles.container}>
          <img src={Union} alt="logo" />
          <h4>فرم ورود</h4>
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
            <button type="submit">ورود</button>
          </div>

          <Link to="/signup" className={styles.span}>
            <span>ایجاد حساب کاربری!</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignInPage;
