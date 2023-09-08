import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../store/actions/cartActions";

export const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const goToProduct = () => {
        navigate(`/product-detail/${product.slug}`)
    }

    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addProductToCart(product))
    }


    return (
        <div className="md:w-64 mx-2 h-75 bg-transparent overflow-hidden shadow shadow-black group cursor-pointer transition duration-200 ease-in transform z-1 sm:hover:scale-105">
            <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
            />
            <div className="px-6 py-4">
                <h3
                    onClick={goToProduct}
                    className="font-bold text-xl mb-2 transition-all duration-100 0 ease-in-out group-hover:text-green-700">
                    {product.title}
                </h3>
                <div className="px-6 py-4 flex items-center justify-between">
                    <p className="text-2xl">{product.price}$</p>
                    <button
                        onClick={addProduct}
                        className="bg-green-50 text-green-700 shadow-sm shadow-black hover:bg-green-300 hover:text-gray-900 py-2 px-4">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};