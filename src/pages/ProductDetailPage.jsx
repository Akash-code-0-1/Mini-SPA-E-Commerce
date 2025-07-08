"use client"
import { useParams, Navigate } from "react-router-dom"
import ProductDetail from "../components/ProductDetail"
import { products } from "../data/products"

function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return <Navigate to="/" replace />
  }

  return <ProductDetail product={product} />
}

export default ProductDetailPage
