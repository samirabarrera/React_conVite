import { useEffect, useState } from "react";
import {collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.js";

export default function Products () {

    const [products, setProducts] = useState([]);
    const loadProducts = async () => {
        try {
            const collectionRef = collection(db,"products")
            const querySnapshot = await getDocs(collectionRef)
            console.log(querySnapshot.docs);
            const productsInCollection = querySnapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(productsInCollection)
        } catch (err) {
            console.error("Error cargando productos: ", err)
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])
    return (
        <>
        <h2>Products</h2>
        <div>
            {products.map(product => (
                <div>
                    <div>{product.name}</div>
                    <div> <img src="{product.image}" /> </div>
                </div>
            ))}
        </div>
        </>
    )
}