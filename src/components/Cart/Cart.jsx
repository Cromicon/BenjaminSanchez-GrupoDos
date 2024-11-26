import React from 'react';
import { useCartStore } from '../../stores/cartStore';

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto max-w-[1170px] py-[50px]">
                <h1 className="text-[30px] font-medium">Carrito vacío</h1>
                <p>Agrega productos para comenzar tu compra.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-[1170px] py-[50px]">
            <h1 className="text-[30px] font-medium mb-[20px]">Carrito de compras</h1>
            <table className="w-full border-collapse border border-gray-300 text-left">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-[10px]">Producto</th>
                        <th className="border border-gray-300 p-[10px]">Cantidad</th>
                        <th className="border border-gray-300 p-[10px]">Precio Unitario</th>
                        <th className="border border-gray-300 p-[10px]">Total</th>
                        <th className="border border-gray-300 p-[10px]">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const price = parseFloat(item.price);
                        const quantity = parseInt(item.quantity, 10);
                        const total = price * quantity;

                        return (
                            <tr key={item.id}>
                                <td className="border border-gray-300 p-[10px]">{item.name}</td>
                                <td className="border border-gray-300 p-[10px]">{quantity}</td>
                                <td className="border border-gray-300 p-[10px]">${price.toFixed(2)}</td>
                                <td className="border border-gray-300 p-[10px]">${total.toFixed(2)}</td>
                                <td className="border border-gray-300 p-[10px]">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-[10px] py-[5px] rounded hover:bg-red-600"
                                    >
                                        Eliminar Productos
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mt-[20px]">
                <button
                    onClick={clearCart}
                    className="bg-gray-800 text-white px-[20px] py-[10px] rounded hover:bg-gray-900"
                >
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
}
