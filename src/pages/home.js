import  { useState ,useEffect } from 'react';
import { Fragment} from "react";
import Card from '../componets/Card';
import { useSearchParams } from 'react-router-dom';


export default function Home() {
    const [products,setProduct] = useState([]);
    const [SearchParams,setSearchParams] = useSearchParams("")

    useEffect(() =>{
        fetch(process.env.REACT_APP_API_URL +"/product?"+SearchParams)
        .then(res =>res.json())
        .then(res => {setProduct(res.products)
        })
        
    },[SearchParams])
         
    return <Fragment>
             <h1 id="products_heading">Latest Products</h1>

                <section id="products" className="container mt-5">
                <div className="row">
                   
                {products.map((products) => <Card product ={products} />)}
                </div>
                </section>

   

    </Fragment>
}