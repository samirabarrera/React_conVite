import { createContext, useContext, useReducer, useEffect } from "react";
import { db } from "../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const CartContext = createContext();

const initialState = {
  carrito: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "agregar_producto":
      const nuevoCarrito = [...state.carrito, action.payload];
      guardarCarritoFirestore(nuevoCarrito);
      return { ...state, carrito: nuevoCarrito };

    case "eliminar_producto":
      const filtrado = state.carrito.filter((p) => p.id !== action.payload);
      guardarCarritoFirestore(filtrado);
      return { ...state, carrito: filtrado };

    case "vaciar_carrito":
      guardarCarritoFirestore([]);
      return { ...state, carrito: [] };

    case "set_carrito":
      return { ...state, carrito: action.payload };

    default:
      return state;
  }
}

async function guardarCarritoFirestore(carrito) {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    await setDoc(doc(db, "carritos", email), {
      productos: carrito,
      actualizado: new Date(),
    });
  } catch (error) {
    console.error("Error al guardar carrito:", error);
  }
}

// 📥 Carga desde Firestore
async function cargarCarritoFirestore(dispatch) {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const docRef = doc(db, "carritos", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      dispatch({ type: "set_carrito", payload: data.productos || [] });
    }
  } catch (error) {
    console.error("Error al cargar carrito:", error);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    cargarCarritoFirestore(dispatch);
  }, []);

  return (
    <CartContext.Provider value={{ carrito: state.carrito, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
