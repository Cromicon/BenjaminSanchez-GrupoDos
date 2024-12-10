import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import './ItemList.css';

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);
    const [category, setCategory] = useState(''); 

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    const filteredProducts = category
        ? products.filter((prod) => prod.category === category)
        : products;

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div>
                    {}
                    <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                    <h2 className="text-[#ffffff] font-bold text-[100px] leading-[80px] uppercase">
                        Productos
                    </h2>
             
                
                </div>
                    <div className="filter-container">
                        <label htmlFor="category">Filtrar por categoría: </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Todas</option>
                            {Array.from(new Set(products.map((prod) => prod.category))).map(
                                (cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                   
                    <div className="item-container">
                        {filteredProducts.map((prod) => (
                            <Item {...prod} key={prod.id} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
