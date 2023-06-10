import { useState } from "react";
import { deleteProductByIdUrl, updateProductUrl } from "../utils/config";

const Product = ({ product }: any) => {
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const onDelete = async (id: string) => {
    try {
      const res = await fetch(deleteProductByIdUrl(id), {
        method: "DELETE"
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = async (id: string) => {
    try {
      const res = await fetch(updateProductUrl(id), {
        method: "PATCH",
        body: JSON.stringify(editedProduct),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      console.log(res);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct: any) => ({
      ...prevProduct,
      [name]: value
    }));
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
      <div className="w-[5%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <input
            type="text"
            name="unit"
            value={editedProduct.unit}
            onChange={handleInputChange}
            className="w-full bg-white text-gray-700 rounded p-2 focus:outline-none"
          />
        ) : (
          <p>{editedProduct.unit || "-"}</p>
        )}
      </div>
      <div className="w-[15%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <input
            type="text"
            name="qty"
            value={editedProduct.qty}
            onChange={handleInputChange}
            className="w-full bg-white text-gray-700 rounded p-2 focus:outline-none"
          />
        ) : (
          <p>{editedProduct.qty || "-"}</p>
        )}
      </div>
      <div className="w-[5%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <input
            type="text"
            name="rate"
            value={editedProduct.rate}
            onChange={handleInputChange}
            className="w-full bg-white text-gray-700 rounded p-2 focus:outline-none"
          />
        ) : (
          <p>{editedProduct.rate || "-"}</p>
        )}
      </div>
      <div className="w-[15%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <input
            type="text"
            name="amount"
            value={editedProduct.amount}
            onChange={handleInputChange}
            className="w-full bg-white text-gray-700 rounded p-2 focus:outline-none"
          />
        ) : (
          <p>{editedProduct.amount || "-"}</p>
        )}
      </div>
      <div className="w-[10%] border-r-2 pr-2 flex justify-center items-center">
        {editing ? (
          <button
            onClick={() => onEdit(product.id)}
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
          onClick={() => onDelete(product.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
