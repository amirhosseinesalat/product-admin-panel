import styles from "./DeleteProductModal.module.css";
import Close from "../images/Close.png";
function DeleteProductModal({ onClose, onConfirm, product }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.iconWrapper}>
          <img src={Close} alt="warning" />
        </div>

        <p className={styles.title}>آیا از حذف {product.name} محصول مطمئنید؟</p>

        <div className={styles.actions}>
          <button className={styles.deleteBtn} onClick={onConfirm}>
            حذف
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;
