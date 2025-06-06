import Link from "next/link";

const navRoutes = [
    { name: "Home", path: '/' },
    { name: "About", path: '/about' },
    { name: "Contact Us", path: '/contact' },
    { name: "Blog", path: '/blog' },
]

const NavItems = () => {
    return (
        <ul className="ml-10 flex gap-12">
            {
                navRoutes.map(route => <Link key={route.name} href={route.path} className="text-sm">{route.name}</Link>)
            }
        </ul>
    )
}

export default NavItems