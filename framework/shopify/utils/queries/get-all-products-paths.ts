import { GetAllProductPathsQuery } from "@framework/schema";


const getAllProductsPathsQuery = `
    query getAllProductsPaths($first: Int = 250) {
        products(first: $first) {
            edges {
                node {
                    handle
                }
            }
        }
    }
`


export default GetAllProductPathsQuery