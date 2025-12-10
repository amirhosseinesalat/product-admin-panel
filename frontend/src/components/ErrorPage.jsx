import styles from "./ErrorPage.module.css";
import { FiAlertTriangle } from "react-icons/fi";

function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <FiAlertTriangle className={styles.icon} />

        <h1 className={styles.title}>خطا رخ داده!</h1>
        <p className={styles.text}>
          متأسفانه مشکلی در بارگذاری صفحه پیش آمده است.
        </p>

        <button
          className={styles.btn}
          onClick={() => (window.location.href = "/")}
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
