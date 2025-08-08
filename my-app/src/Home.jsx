import ProductCard from "./components/ProductCard";
import data from "./data/data";

export default function Home() {


    return (
        <>
            <div>
                {data.map((p) => (
                    <div key = {p.id} >
                        <ProductCard product = {p} />
                    </div>
                ))}
            </div>
        </>
    )
}