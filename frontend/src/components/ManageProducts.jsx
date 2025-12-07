import styles from "./ManageProducts.module.css";
import { CiBoxList } from "react-icons/ci";

function ManageProducts({ onAdd }) {
  return (
    <div className={styles.headerRight}>
      <div className={styles.title}>
        <CiBoxList className={styles.titleIcon} />
        <span>مدیریت کالا</span>
      </div>

      <button className={styles.addBtn} onClick={onAdd}>
        افزودن محصول
      </button>
    </div>
  );
}

export default ManageProducts;
