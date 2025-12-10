import { useEffect, useState } from "react";
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
        <h3 className={styles.title}>ویرایش محصول</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>نام کالا</label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className={styles.label}>تعداد موجودی</label>
          <input
            className={styles.input}
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <label className={styles.label}>قیمت</label>
          <input
            className={styles.input}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className={styles.actions}>
            <button type="submit" className={styles.submit}>
              ذخیره تغییرات
            </button>
            <button type="button" className={styles.cancel} onClick={onClose}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
