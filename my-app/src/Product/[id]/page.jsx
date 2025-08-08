 import data from "../../data/data";

 export default function ProductDetail({params}) {
    const found = data.find((p) => p.id == params.id);

    return (
        <div>
            <h1>The Description For id : {found.id}</h1>
            <h2>{found.title}</h2>
            <p>{found.desc}</p>
        </div>
    )
 }