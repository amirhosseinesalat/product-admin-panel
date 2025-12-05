import * as yup from "yup";
export const validateSchema = yup.object({
  username: yup.string().trim().required("وارد کردن نام کاربری الزامیست!"),
  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(15, "رمز عبور باید حداکثر 15 کاراکتر باشد")
    .required("وارد کردن رمز عبور الزامیست!"),
});
