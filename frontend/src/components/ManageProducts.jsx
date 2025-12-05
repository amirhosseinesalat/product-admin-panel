import styles from "./ManageProducts.module.css";
import { CiBoxList } from "react-icons/ci";

function ManageProducts() {
  return (
    <div className={styles.headerRight}>
      <div className={styles.title}>
        <CiBoxList className={styles.titleIcon} />
        <span>مدیریت کالا</span>
      </div>

      <button className={styles.addBtn}>افزودن محصول</button>
    </div>
  );
}

export default ManageProducts;
