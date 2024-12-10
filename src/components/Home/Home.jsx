import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function HomePage() {
    const imgBanner = './slide-bg-1.jpg';
    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
               
            </div>
            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
    
            </div>
        </div>
    );
}