import data from "../data/data";

export default function ProductCard({product}) {

    return (
        <div>
            <h1>{p.title}</h1>
            <p>{p.desc}</p>
            <button href = {`Product/${p.id}`} >Description</button>
        </div>
    )
}