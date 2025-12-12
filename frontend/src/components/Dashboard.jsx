import ManageProducts from "./ManageProducts";
import SearchBox from "./SearchBox";
import TableProducts from "./TableProducts";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import AddProductModal from "./AddProductModal";
import DeleteProductModal from "./DeleteProductModal";
import EditProductModal from "./EditProductModal";
import http from "../api/http";
import toast from "react-hot-toast";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setIsShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredProducts = products.filter((p) => {
    return p.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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

      const newTotal = filteredProducts.length - 1;
      const maxPage = Math.ceil(newTotal / itemsPerPage);
      if (currentPage > maxPage && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch {
      toast.error("خطا در حذف محصول!");
    }
  }

  function handleEditClick(product) {
    setEditProduct(product);
    setShowEditModal(true);
  }

  async function updateProduct(data) {
    try {
      const body = {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
      };

      const res = await http.put(`/products/${data.id}`, body);

      setProducts((prev) => prev.map((p) => (p.id === data.id ? res.data : p)));

      toast.success("ویرایش انجام شد");
      setShowEditModal(false);
    } catch {
      toast.error("خطا در ویرایش محصول");
    }
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <SearchBox onSearch={(value) => setSearchQuery(value)} />

      <ManageProducts onAdd={() => setIsShowForm(true)} />

      <TableProducts
        products={paginatedProducts}
        onDelete={handleDeleteClick}
        onEdit={handleEditClick}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {showForm && (
        <AddProductModal
          onClose={() => setIsShowForm(false)}
          onSubmit={addProduct}
        />
      )}

      {showEditModal && (
        <EditProductModal
          product={editProduct}
          onClose={() => setShowEditModal(false)}
          onSubmit={updateProduct}
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
