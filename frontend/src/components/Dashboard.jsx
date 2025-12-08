import ManageProducts from "./ManageProducts";
import SearchBox from "./SearchBox";
import TableProducts from "./TableProducts";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import AddProductModal from "./AddProductModal";
import http from "../api/http";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setIsShowForm] = useState(false);

  const itemsPerPage = 5;

  async function fetchProducts() {
    try {
      const res = await http.get("/products");

      const list = Array.isArray(res.data)
        ? res.data
        : res.data.products || res.data.data || [];

      setProducts(list);
    } catch {
      toast.error("خطا در دریافت محصولات!");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function addProduct(data) {
    try {
      const res = await http.post("/products", {
        name: data.name,
        price: data.price,
        quantity: data.stock,
      });

      setProducts((prev) => [...prev, res.data]);

      toast.success("محصول اضافه شد");
    } catch {
      toast.error("خطا در افزودن محصول");
    }
  }

  // صفحه‌بندی ↓↓
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <SearchBox />
      <ManageProducts onAdd={() => setIsShowForm(true)} />

      <TableProducts products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {showForm && (
        <AddProductModal
          onClose={() => setIsShowForm(false)}
          onSubmit={addProduct}
        />
      )}
    </>
  );
}

export default Dashboard;
