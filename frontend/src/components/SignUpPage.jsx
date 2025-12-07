import styles from "./signPage.module.css";
import Union from "../images/Union.png";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validation/signupSchema";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registerUser } from "../api/auth";

function SignUpPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  async function submitHandler(data) {
    try {
     
      const sendData = {
        username: data.username,
        password: data.password,
      };

      const res = await registerUser(sendData);

      toast.success("ثبت‌نام موفق! در حال ورود...");

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "خطا در ثبت‌نام!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
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
              placeholder="تکرار رمز عبور"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <button type="submit">ثبت نام</button>

            <Link to="/signin" className={styles.span}>
              <span>حساب کاربری دارید؟</span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpPage;
