import Image from "next/image"
import Button from "./button"

const ProductCard = ({ product }) => {

    const formatPrice = (price) => {
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);

        return formatted
    }
    return (
        <div className="bg-[#F6F6F6]">
            <div><Image src={'/assets/icons/icon-wishlist.svg'} alt="heart" width={20} height={20} /></div>
            <Image src={product.path} width={160} height={160} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <h2>{formatPrice(parseInt(product.price ))}</h2>
            </div>
            <Button>Buy Now</Button>
        </div>
    )
}

export default ProductCard