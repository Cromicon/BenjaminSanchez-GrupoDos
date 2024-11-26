import { Link } from "react-router-dom"

export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[10px] mx-[10px]">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            
            <h4 className="text-[18px] font-bold mt-[15px] mb-[10px]">$ {price}</h4>
            
            <Link to={`/products/${id}`} className="text-[22px] font-bold tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</Link>
        </div>
    )
}
