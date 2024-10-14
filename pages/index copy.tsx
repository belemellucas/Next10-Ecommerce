import type { InferGetStaticPropsType } from "next"
import {getAllProducts} from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)
  return {
    props: {
      products
      }, 
    revalidate: 4 * 60 * 60
  }
}

export default function Home({  
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
   <>
    <Grid>

      { products.slice(0,9).map(product => 
         <ProductCard 
         key={product.id}
         product={product} />
        )}
    </Grid>
 
    <Hero
    headline="Introducing our one-of-a-kind clothing brand, where fashion."
    description="We're not just another clothing brand - we're a lifestyle. Our brand is all about breaking boundaries and embracing individuality. We believe that fashion should be a form of self-expression and our clothing allows you to do just that.
    Our collection features unique designs and patterns that you won't find anywhere else. From bold prints to subtle hues, we've got it all. Each piece is carefully crafted with high-quality materials that are meant to last. We believe that clothing should not only look good but also feel good, so we use fabrics that are soft, stretchy, and breathable."
    />
    <Marquee>
      { products.slice(0,5).map(product => 
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
          />
        )}
    </Marquee>
    <Grid layout="B">
      {products.slice(9,18).map(product =>
      <ProductCard 
         key={product.id}
         product={product}
         />
      )}
    </Grid>
    <Marquee variant="secondary">
      { products.slice(5,10).map(product => 
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
          />
        )}
    </Marquee>
    </>
  )
}

Home.Layout = Layout
