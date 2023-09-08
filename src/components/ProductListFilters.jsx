import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";

export const ProductListFilters = ({ products, error, loading }) => {

    /* ERROR */
    if (error) {
        return <p className="text-red-700 text-xl my-3 font-bold">Erreur : {error}</p>;
    }
    /* CHARGEMENT */
    if (loading) {
        return (
            <div className="mt-10 mb-20 gap-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {[...Array(15)].map((_, index) => (
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