import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBox.module.css";
function SearchBox() {
  return (
    <div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="جستجو کالا" />
        <AiOutlineSearch size={22} color="#555" />
      </div>
    </div>
  );
}

export default SearchBox;
