import * as yup from "yup";

export const signupSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("وارد کردن نام کاربری الزامیست!"),

  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(15, "رمز عبور باید حداکثر 15 کاراکتر باشد")
    .required("رمز عبور الزامیست!"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "تکرار رمز عبور مطابقت ندارد!")
    .required("تکرار رمز عبور الزامیست!"),
});
