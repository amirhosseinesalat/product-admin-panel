import styles from "./TableProducts.module.css";
import { FiEdit, FiTrash } from "react-icons/fi";

function TableProducts({ products }) {
  if (!Array.isArray(products)) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th> شناسه کالا</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" className={styles.empty}>
                هیچ محصولی یافت نشد
              </td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>{p.id}</td>
                <td className={styles.actions}>
                  <button className={styles.edit}>
                    <FiEdit />
                  </button>
                  <button className={styles.delete}>
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableProducts;
