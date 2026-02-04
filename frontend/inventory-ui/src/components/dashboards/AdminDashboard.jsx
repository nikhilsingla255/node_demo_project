import { useEffect, useState } from "react";
import api from "../../api/api";
import Navbar from "../Navbar";

export default function AdminDashboard() {
    const [products,setProducts] = useState([]);

    const loadProducts = async () => {
        try{
            const res = await api.get("/products");
            setProducts(res.data)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        loadProducts()
    },[])

    return(
        <>
        <Navbar />
        <div className="container">
            <h3>Admin Dashboard</h3>

            //list products
            <ProductTable products={products} onChange={loadProducts} />
        </div>
        </>
    )
}