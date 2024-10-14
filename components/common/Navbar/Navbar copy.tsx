
import { FC } from "react"
import { Container } from "@components/ui"
import s from "./Navbar.module.css"
import Link from "next/link"
import { Usernav } from "@components/common"

const Navbar: FC = () => {
   return (
    <Container>
        <div className={s.root}>
            <div className={s.items}>
          <Link href="/">
             <a className={s.logo}>
                 <h1>NEXT_STORE</h1>
             </a>
          </Link>  
          <nav className="ml-6 space-x-6">
            <Link href="/">
                <a className={s.link}>All</a>
            </Link>
            <Link href="/">
                <a className={s.link}>Clothes</a>
            </Link>
            <Link href="/">
                <a className={s.link}>Accessories</a>
            </Link>
            <Link href="/">
                <a className={s.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
             <Usernav />
          </div>
          </div>
        </div>    
    </Container>
   )
}

export default Navbar 