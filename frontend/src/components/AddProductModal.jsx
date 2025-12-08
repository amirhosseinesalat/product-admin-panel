import { useState } from "react";
import styles from "./AddProductModal.module.css";

function AddProductModal({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      name,
      stock: Number(stock),
      price: Number(price),
    });

    onClose();
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3 className={styles.title}>ایجاد محصول جدید</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>نام کالا</label>
          <input
            className={styles.input}
            type="text"
            placeholder="نام کالا"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className={styles.label}>تعداد موجودی</label>
          <input
            className={styles.input}
            type="number"
            placeholder="تعداد"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <label className={styles.label}>قیمت</label>
          <input
            className={styles.input}
            type="number"
            placeholder="قیمت"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className={styles.actions}>
            <button type="submit" className={styles.submit}>
              ایجاد
            </button>
            <button type="button" onClick={onClose} className={styles.cancel}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
