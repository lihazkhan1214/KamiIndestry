import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

interface CartState {
  products: Product[];
  quantity: number;
  total: number;
}

const initialState: CartState = loadCartStateFromLocalStorage() || {
  products: [],
  quantity: 0,
  total: 0,
};

function loadCartStateFromLocalStorage(): CartState | null {
  const cartStateJSON = localStorage.getItem("cart");
  return cartStateJSON ? JSON.parse(cartStateJSON) : null;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;

      saveCartStateToLocalStorage(state);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate && productToUpdate.quantity < productToUpdate.stock) {
        productToUpdate.quantity++;
        state.quantity++;
        state.total += productToUpdate.price;

        saveCartStateToLocalStorage(state);
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );

      if (productToUpdate && productToUpdate.quantity > 1) {
        productToUpdate.quantity--;
        state.quantity--;
        state.total -= productToUpdate.price;

        saveCartStateToLocalStorage(state);
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const removedProduct = state.products.find(
        (product) => product.id === productId
      );

      if (removedProduct) {
        const updatedProducts = state.products.filter(
          (product) => product.id !== productId
        );

        state.products = updatedProducts;
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;

        saveCartStateToLocalStorage(state);
      }
    },

    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;

      saveCartStateToLocalStorage(state);
    },
  },
});

function saveCartStateToLocalStorage(cartState: CartState) {
  localStorage.setItem("cart", JSON.stringify(cartState));
}

export const {
  addProduct,
  removeProduct,
  reset,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
