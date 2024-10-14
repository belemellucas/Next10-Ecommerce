import { ApiConfig } from "@common/types/api"
import { Product } from "@common/types/product"
import { ProductConnection } from "@framework/schema"
import getAllProductQuery from "@framework/utils/queries/get-all-products"

type ReturnType = {
    products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {

  const { data } = await config.fetch<{products: ProductConnection}>({
        query: getAllProductQuery})

  const products = data.products.edges.map(({node: {handle}}) => {
    return {
        slug: handle
    }
  })
  return { products }
}

export default getAllProductsPaths