import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadExcelFile } from "../utils/api";
import Loader from "./Loader";

const UploadFile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      setError(""); 
      const file = e.target.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await uploadExcelFile(formData);
        console.log(res);
        setLoading(false);
        navigate("/product");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("An error occurred during file upload."); // Set the error message
    }
  };

  return (
    <>
    <div className="flex items-center justify-center w-4/5 md:w-2/4 border-dashed border-gray-400 border-2 mx-auto">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Excel File (MAX. 10MB)</p>
        </div>
        <input
          type="file"
          id="dropzone-file"
          className="hidden"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />
      </label>
    </div>
      {loading && <Loader />}
      {error && <p className="text-red-500 w-3/6 my-2 rounded-lg p-5 bg-red-500 bg-opacity-25 mx-auto">{error}</p>} 
    </>
  );
};

export default UploadFile;
