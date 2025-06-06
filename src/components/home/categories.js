import Image from "next/image";

const categories = [
    { name: 'Phones', icon: '/assets/icons/icon-phones.svg' },
    { name: 'Smart Watches', icon: '/assets/icons/icon-watches.svg' },
    { name: 'Cameras', icon: '/assets/icons/icon-cameras.svg' },
    { name: 'Headphones', icon: '/assets/icons/icon-headphones.svg' },
    { name: 'Computers', icon: '/assets/icons/icon-computers.svg' },
    { name: 'Gaming', icon: '/assets/icons/icon-gaming.svg' },
];

const BrowseCategories = () => {
    return (
        <section className="px-50 py-20 w-screen bg-[#fafafa]">
            <h2 className="text-2xl mb-10">Browse By Category</h2>
            <article className="flex items-center justify-between">{
                categories.map((category, indx) => <CategoryCard key={indx.toString()} category={category} />)
            }</article>
        </section>
    )
}

export default BrowseCategories

const CategoryCard = ({category}) => {
    return (
        <div className="bg-[#ededed] w-[160px] h-[128px] rounded-xl text-center flex flex-col items-center justify-center">
            <Image src={category.icon} width={50} height={50} alt={category.name} />
            <p>{category.name}</p>
        </div>
    )
}