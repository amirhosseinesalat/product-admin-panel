import ManageProducts from "./ManageProducts";
import SearchBox from "./SearchBox";
import TableProducts from "./TableProducts";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import AddProductModal from "./AddProductModal";
import DeleteProductModal from "./DeleteProductModal";
import http from "../api/http";
import toast from "react-hot-toast";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setIsShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  function handleDeleteClick(product) {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  }

  async function handleDeleteConfirm() {
    try {
      await http.delete(`/products/${selectedProduct.id}`);

      setProducts((prev) =>
        prev.filter((item) => item.id !== selectedProduct.id)
      );

      toast.success("محصول حذف شد");
      setShowDeleteModal(false);
    } catch {
      toast.error("خطا در حذف محصول!");
    }
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <SearchBox />
      <ManageProducts onAdd={() => setIsShowForm(true)} />

    
      <TableProducts products={paginatedProducts} onDelete={handleDeleteClick} />

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

      {showDeleteModal && (
        <DeleteProductModal
          product={selectedProduct}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
}

export default Dashboard;
