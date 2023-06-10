import Product from "../components/Product"
import { getProducts } from "../utils/api"
import { useState, useEffect } from "react"

const ProductPage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError("")
        const res = await getProducts()
        console.log(res)
        setProducts(res.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
        setError("An error occurred while fetching products.")
      }

    }
    fetchProducts()
  }, [])

  return (
    <div className="bg-gray-800 min-h-screen flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold text-gray-200 text-center p-5 ">Products</h1>
      {loading && <p className="text-gray-200 text-center">Loading...</p>}
      {error && <p className="text-gray-200 text-center">{error}</p>}
      {products && products.map((product) => <Product key={product.id} product={product} />)}
    </div>
  )
}

export default ProductPage