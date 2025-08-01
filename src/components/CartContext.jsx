"use client"

import { createContext, useContext, useReducer } from "react"

const initialState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false,
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      }

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case "OPEN_CHECKOUT":
      return {
        ...state,
        isCheckoutOpen: true,
      }

    case "CLOSE_CHECKOUT":
      return {
        ...state,
        isCheckoutOpen: false,
      }

    default:
      return state
  }
}

const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  const openCheckout = () => {
    dispatch({ type: "OPEN_CHECKOUT" })
  }

  const closeCheckout = () => {
    dispatch({ type: "CLOSE_CHECKOUT" })
  }

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        openCheckout,
        closeCheckout,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
