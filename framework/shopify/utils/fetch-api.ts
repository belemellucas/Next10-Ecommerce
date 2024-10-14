import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api"
import { API_URL, STOREFRONT_TOKEN } from "@framework/const"
const ABSOLUTE_API_URL = "https://akasha-technology-6995.myshopify.com/api/2023-04/graphql.json" // URL absoluta correta

const fetchApi = async <T>({
    query,
    variables
}: ApiFetcherOptions
    ): Promise<ApiFetcherResults<T>> => {

    const res = await fetch(ABSOLUTE_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN!
        },
        body: JSON.stringify({
            query,
            variables
        })
    })

    const {data, errors} = await res.json()
    
    if(errors) {
        throw new Error(errors[0].message ?? errors.message)
    }
    return { data }
}

export default fetchApi