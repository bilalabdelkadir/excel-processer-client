import { useState } from "react";
import { onDelete, onEdit } from "../utils/api";
import { Product } from "../utils/api";

const Product = ({ product }: any) => {
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleEdit = async (id) => {
    try {
      await onEdit(id, editedProduct);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await onDelete(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[90%] py-4 px-2 bg-slate-700 text-gray-300 flex justify-between my-2 gap-2 shadow-sm rounded-lg shadow-green-100 mx-auto">
      <div className="w-[20%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <input
            type="text"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
            className="w-full bg-white text-gray-700 rounded p-2 focus:outline-none"
          />
        ) : (
          <p>{editedProduct.description}</p>
        )}
      </div>
      {/* Rest of the code */}
      <div className="w-[10%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <button
            onClick={() => handleEdit(product.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        )}
      </div>
      <div className="w-[10%] pr-2 flex justify-center items-center">
        <button
          onClick={() => handleDelete(product.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
