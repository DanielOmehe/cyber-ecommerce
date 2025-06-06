import SearchField from "@/components/utils/search"
import Image from "next/image"
import NavItems from "./navItems"
import IconButton from "@/components/utils/iconButton"

const Navbar =()=>{
    return(
        <nav className="w-screen flex gap-5 items-center justify-between px-50 py-5">
            <Image src={"/assets/images/logo.png"} width={60} height={10} alt="logo" />
            <SearchField width={"w-[372px]"} />
            <NavItems />
            <div className="flex items-center gap-6 ml-12">
                <IconButton>
                    <Image src={"/assets/icons/icon-wishlist.svg"} width={20} height={20} alt="icon-wishlist" />
                </IconButton>
                <IconButton>
                    <Image src={"/assets/icons/icon-cart.svg"} width={20} height={20} alt="icon-cart" />
                </IconButton>
                <IconButton>
                    <Image src={"/assets/icons/icon-avatar.svg"} width={20} height={20} alt="icon-avatar" />
                </IconButton>
            </div>
        </nav>
    )
}

export default Navbar