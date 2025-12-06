import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.pagination}>
      {/* PREVIOUS BUTTON */}
      <button
        className={`${styles.btn} ${
          currentPage === 1 ? styles.disabled : styles.active
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        قبلی
      </button>

    {/* PAGE NUMBERS */}
      <div className={styles.pages}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`${styles.pageNumber} ${
              currentPage === num ? styles.selected : ""
            }`}
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        ))}
      </div>

 
      <button
        className={`${styles.btn} ${
          currentPage === totalPages ? styles.disabled : styles.active
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
