import data from "../data/data";

export default function ProductCard({product}) {
    const [isClicked , setIsClicked] = useState(false);
    return (
        <div>
            <h1>{product.title}</h1>
            <button onClick = {() => setIsClicked(!isClicked)} >Show Description</button>
            {isClicked && (<p>{product.desc}</p>)}
            <p>---------------------------</p>
            {/* <p>{product.desc}</p> */}
            {/* <button href = {`Product/${product.id}`} >Description</button> */}
        </div>
    )
}