import ManageProducts from "./ManageProducts";
import SearchBox from "./SearchBox";
import TableProducts from "./TableProducts";
import { useState } from "react";
import Pagination from "./Pagination";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  return (
    <>
      <SearchBox />
      <ManageProducts />
      <TableProducts products={products} />
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      /> */}
    </>
  );
}

export default Dashboard;
