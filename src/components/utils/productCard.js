import Image from "next/image"
import Button from "./button"

const ProductCard = ({ product })=>{
    return(
        <div>
            <div><Image src={'/assets/icons/icon-wishlist.svg'} alt="heart" width={20} height={20} /></div>
            <Image src={product.path} width={160} height={160} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <h2>{product.price}</h2>
            </div>
            <Button>Buy Now</Button>
        </div>
    )
}

export default ProductCard