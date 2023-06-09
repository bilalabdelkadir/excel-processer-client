import UploadFile from "./components/UploadFile"

function App() {

  return (
      <div className="bg-gray-900 min-h-screen flex-col justify-center">
        <h1 className="text-4xl text-center font-bold text-gray-200 pt-10 pb-4">
          Please upload your excel file upto 10MB
        </h1>
        <p className="text-gray-300 text-center pb-2">we will process your data and make it easy to edit.</p>
        <UploadFile />
        <div className="flex justify-center items-center my-8">
        <button type="button" className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Upload Now</button>
        </div>
      </div>
      
  )
}

export default App
