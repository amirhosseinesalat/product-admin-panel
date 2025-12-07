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
        <h3>افزودن محصول جدید</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="نام کالا"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="موجودی"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="قیمت"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className={styles.actions}>
            <button type="submit" className={styles.addBtn}>
              افزودن
            </button>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              لغو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
