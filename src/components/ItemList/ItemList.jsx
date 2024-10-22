import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react" // Importamos Hookreact useState
import Loading from "../Loading/Loading"; // Importamos el componente Loading


export default function ItemList(){
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true); // Declaramos las variables loading y setloading
   
    useEffect(() => {
        getProducts().then((data) =>{
            setProducts(data)
            setLoading(false);
        });
    }, []);


    return(
        <>
        
        {loading?
            (
                <Loading />
            ):(
                <div className="flex flex-wrap justify-center">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )
        }
        
        </>
    )
}

