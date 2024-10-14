import { Product } from "@common/types/product"
import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import s from "./ProductCard.module.css"

interface Props {
    product: Product
    variant?: "simple" | "slim"
}

const placeholderImage="/product-image-placeholder.svg"
const ProductCard: FC<Props> = ({product, variant = "simple"}) => {
 
    return (
      <Link href={`/products/${product.slug}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5 my-14px-5
      md:px-0 transform overflow-hidden bg-white duration-200 hover:scale-105
      cursor-pointer">
        <div className="flex justify-center">
          <Image
            className={s.productImage}
            alt={product.name ?? "Product image"}
            src={product.images[0].url.replace('/images/','') ?? placeholderImage}
            height={200}
            width={200}
            quality="85"
            layout="fixed"
          />
        </div>
        <div className="text-center px-4">
          <h2 className="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap max-w-[70%] mx-auto">
            {product.name.split(' ').slice(0, 6).join(' ')}
            <br />
            {product.name.split(' ').slice(6).join(' ')}
          </h2>
          <div className="flex items-center text-black/[0.5] justify-center">
            {product.price.formatted_with_symbol}
          </div>
        </div>
      </div>
    </Link>
    )
}

export default ProductCard