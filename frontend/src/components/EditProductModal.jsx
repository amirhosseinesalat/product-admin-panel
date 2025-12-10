import { useState, useEffect } from "react";
import styles from "./EditProductModal.module.css";

function EditProductModal({ product, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setStock(product.quantity);
      setPrice(product.price);
    }
  }, [product]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      id: product.id,
      name,
      quantity: Number(stock),
      price: Number(price),
    });

    onClose();
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3>ویرایش محصول</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>نام کالا</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>موجودی</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <label>قیمت</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className={styles.actions}>
            <button type="submit" className={styles.saveBtn}>
              ثبت اطلاعات جدید
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelBtn}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
