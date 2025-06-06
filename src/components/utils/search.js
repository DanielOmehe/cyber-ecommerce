import Image from "next/image"

const SearchField = ({ width }) => {
    return(
        <div className={`${width} ml-10 flex gap-4 bg-[#f5f5f5] h-[56px] rounded-lg px-4`}>
            <Image src={"/assets/icons/icon-search.svg"} width={20} height={20} alt="search-icon" />
            <input className="w-full outline-none" type="text" placeholder="Search" />
        </div>
    )
}

export default SearchField