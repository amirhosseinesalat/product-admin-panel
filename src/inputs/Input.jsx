import styles from "../components/signPage.module.css";
function Input({ error, ...rest }) {
  return (
    <>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        {...rest}
      />

      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}

export default Input;
