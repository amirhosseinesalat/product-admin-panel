import ManageProducts from "./ManageProducts";
import SearchBox from "./SearchBox";
import TableProducts from "./TableProducts";
import { useState } from "react";
import Pagination from "./Pagination";
import AddProductModal from "./AddProductModal";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const [showForm, setIsShowForm] = useState(false);
  return (
    <>
      <SearchBox />
      <ManageProducts onAdd={() => setIsShowForm(true)} />
      <TableProducts products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {showForm && (
        <AddProductModal
          onClose={() => setIsShowForm(false)}
          onSubmit={(newProducts) => setProducts([...products, newProducts])}
        />
      )}
    </>
  );
}

export default Dashboard;
