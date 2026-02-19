"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, X, Plus, Minus, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: "apparel" | "accessories"
}

interface CartItem extends Product {
  quantity: number
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartHover, setCartHover] = useState(false)
  const [hoverProduct, setHoverProduct] = useState<string | null>(null)
  const [hoverCheckout, setHoverCheckout] = useState(false)

  const products: Product[] = [
    {
      id: "1",
      name: "SOAR T-Shirt",
      price: 20.0,
      description: "Premium SOAR branded t-shirt with embroidered logo",
      image: "/shophero.png",
      category: "apparel",
    },
    {
      id: "2",
      name: "SOAR Quarter-Zip",
      price: 45.0,
      description: "Comfortable quarter-zip pullover featuring SOAR branding",
      image: "/logo.png",
      category: "apparel",
    },
    {
      id: "3",
      name: "SOAR Tote Bag",
      price: 18.0,
      description: "Durable canvas tote bag perfect for carrying essentials",
      image: "/logo.png",
      category: "accessories",
    },
    {
      id: "4",
      name: "SOAR Hoodie",
      price: 50.0,
      description: "Cozy hoodie with SOAR logo, ideal for team spirit",
      image: "/logo.png",
      category: "apparel",
    },
  ]

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    )
  }

  // Donation functionality removed — shop is merchandise only

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      })

      const data = await response.json()

      if (data.error) {
        alert("Error: " + data.error)
        return
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        alert("Error: No checkout URL received")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Failed to initiate checkout. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHeader title="THE SHOP" subtitle="Support SOAR USF by purchasing merchandise" />

      {/* Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        onMouseEnter={() => setCartHover(true)}
        onMouseLeave={() => setCartHover(false)}
        className="fixed top-32 right-8 z-40 cursor-pointer text-white p-4 rounded-full shadow-lg transition"
        style={{ backgroundColor: cartHover ? "#222" : "#000" }}
      >
        <ShoppingCart className="w-6 h-6" />
        {cartItemCount > 0 && (
          <span
            className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            style={{ backgroundColor: "#CFC493" }}
          >
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            onClick={() => setIsCartOpen(false)}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 top-0 h-full w-full sm:max-w-md max-w-sm bg-white shadow-xl overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#006747" }}>Shopping Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6 cursor-pointer" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{`$${item.price.toFixed(2)}`}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-5 h-5 cursor-pointer" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex items-center justify-between text-xl font-bold">
                      <span style={{ color: "#006747" }}>Total:</span>
                      <span style={{ color: "#006747" }}>{`$${cartTotal.toFixed(2)}`}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    onMouseEnter={() => setHoverCheckout(true)}
                    onMouseLeave={() => setHoverCheckout(false)}
                    className="w-full text-white py-3 rounded-lg font-bold cursor-pointer uppercase transition-colors"
                    style={{
                      backgroundColor: hoverCheckout ? "#004D31" : "#006747",
                      transition: "background-color 150ms",
                    }}
                  >
                    Checkout with Stripe
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>


      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase" style={{ color: "#006747" }}>
            SOAR Merchandise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col h-full">
                <div className="relative h-[28rem] sm:h-96 md:h-96 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-none">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  ) : (
                    <div className="text-center p-8">
                      <Image
                        src="/images/soar-logo.png"
                        alt="SOAR Logo"
                        width={120}
                        height={120}
                        className="object-contain opacity-20 mx-auto"
                      />
                      <p className="text-gray-400 font-semibold mt-4">{product.name}</p>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: "#006747" }}>{`$${product.price.toFixed(2)}`}</span>
                    <button
                      onClick={() => addToCart(product)}
                      onMouseEnter={() => setHoverProduct(product.id)}
                      onMouseLeave={() => setHoverProduct(null)}
                      className="text-white px-6 py-2 rounded-lg cursor-pointer font-semibold transition min-w-[140px] text-center"
                      style={{
                        backgroundColor: hoverProduct === product.id ? "#004D31" : "#006747",
                        transition: "background-color 150ms",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
