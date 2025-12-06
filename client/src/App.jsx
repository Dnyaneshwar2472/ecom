import axios from "axios";
import { useState, useEffect } from "react";
import "./addProduct.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null); // track which product is being edited

  // Fetch products
  async function getProducts() {
    try {
      const res = await axios.get("http://localhost:5000/product/");
      setProducts(res.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        // 👉 Update existing product
        const newProduct = {
          title: product.title,
          price: product.price,
          category: product.category,
          image: product.image,
        };

        try {
          const response = await axios.put(
            `http://localhost:5000/product/${editingId}`,
            newProduct,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          getProducts();
          console.log("✅ Product Added:", response.data); // use only this
        } catch (error) {
          console.error("❌ Error adding product:", error);
        }

        // update state locally
        // setProducts(products.map((p) => (p._id === editingId ? res.data : p)));
      } else {
        // 👉 Add new product
        const newProduct = {
          title: product.title,
          price: product.price,
          category: product.category,
          image: product.image,
        };

        try {
          const response = await axios.post(
            "http://localhost:5000/product/",
            newProduct,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          getProducts();
          console.log("✅ Product Added:", response.data); // use only this
        } catch (error) {
          console.error("❌ Error adding product:", error);
        }
      }
    } catch (error) {
      console.error("❌ Error saving product:", error);
    }

    // reset form
    setProduct({ title: "", price: "", category: "", image: "" });

    setEditingId(null);
  };

  // Edit product (prefill form)
  const handleEdit = (p) => {
    setProduct({
      title: p.title,
      price: p.price,
      category: p.category,
      image: p.image,
    });
    setEditingId(p._id);
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      console.log("✅ Product deleted");
    } catch (error) {
      console.error("❌ Delete error:", error);
    }
  };

  return (
    <>
      <div className="container">
        {products.map((p) => (
          <div className="card" key={p._id}>
            <h2>{p.title}</h2>
            <img src={p.image} alt={p.title} />
            <h3>₹{p.price}</h3>
            <h4>{p.category}</h4>

            <div className="actions">
              <button onClick={() => handleEdit(p)}>✏️ Edit</button>
              <button onClick={() => handleDelete(p._id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="form-container">
        <h2>{editingId ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Enter product title"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
          <button type="submit">
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
