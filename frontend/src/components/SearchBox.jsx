import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBox.module.css";
import profile from "../images/profile.png";

function SearchBox({ onSearch }) {
  return (
    <div className={styles.header}>
      <div className={styles.searchBox}>
        <AiOutlineSearch size={20} color="#777" />
        <input
          type="text"
          placeholder="جستجو کالا..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.divider}></div>

        <img className={styles.avatar} src={profile} alt="profile" />

        <div className={styles.userInfo}>
          <p className={styles.name}>امیرحسین اصالت</p>
          <span className={styles.role}>مدیر</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
