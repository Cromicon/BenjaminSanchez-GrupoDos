import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1); // el estado de la cantidad

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1); //la incrementea
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); //la disminuye solo si es mayor a 1
        }
    };

    const handleAddToCart = () => {
        alert(`Agregado ${quantity} ${product.name}(s) al carrito`); //aqui tengo que añadir la cantidad en el data de los items aun :(
    };

    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2">
                <div className="span-col-1">
                    <img src={product.img} alt={`Imagen de ${product.name}`} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="mb-2">{product.description}</p>
                    <p className="font-semibold mb-2">Price: ${product.price}</p>
                    <p className="mb-4">Stock: {product.stock}</p>

                    <div className="flex items-center mb-4">
                        <button
                            onClick={handleDecrease}
                            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
                        >
                            -
                        </button>
                        <span className="mx-2 text-lg">{quantity}</span>
                        <button
                            onClick={handleIncrease}
                            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r"
                        >
                            +
                        </button>
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAddToCart}
                    >
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
