import ProductGrid from "../components/ProductGrid"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import { products } from "../data/products"

function HomePage() {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="space-y-20">
      <HeroSection />

      <FeaturesSection />

      {/* Featured Products Section */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* All Products Section */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">All Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our complete collection of amazing products
          </p>
        </div>
        <ProductGrid products={products} />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Join thousands of satisfied customers and discover amazing products
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🚚</span>
            <span className="font-medium">Free Shipping</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🔒</span>
            <span className="font-medium">Secure Checkout</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">↩️</span>
            <span className="font-medium">30-Day Returns</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
