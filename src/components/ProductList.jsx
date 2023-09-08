import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";
import { useDispatch, useSelector } from "react-redux";
import { getError, getLoading, getProducts } from "../store/selectors/productSelectors";
import { requestAllProductBegin, requestAllProductFail, requestAllProductSuccess } from "../store/actions/productActions";

export const ProductList = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    const BASE_URL_API = " http://localhost:3000/products?_page=1&_limit=5";

    // useSelector 
    const products = useSelector(getProducts)
    const error = useSelector(getError)
    const loading = useSelector(getLoading)

    // useDispatch()
    const dispatch = useDispatch()
    // charger les produits via l'api

    const fetchProducts = async () => {
        // on lance le chargement
        dispatch(requestAllProductBegin())
        try {
            const { data } = await axios.get(BASE_URL_API);
            dispatch(requestAllProductSuccess(data))
        } catch (error) {
            dispatch(requestAllProductFail(error.message))
        }
    };
    // lancer la requête lorsque le composant est crée
    useEffect(() => {
        fetchProducts();
    }, []);


    /* ERROR */
    if (error) {
        return <p className="text-red-700 text-xl my-3 font-bold">Erreur : {error}</p>;
    }

    /* CHARGEMENT */
    if (loading) {
        return (
            <div className="mt-10 mb-20 gap-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {[...Array(5)].map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        );
    }

    /* PRODUCTS CARDS */
    return (
        <div className="mt-10 mb-20 gap-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.length && !loading
                ? products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
                : null}
        </div>
    );
};