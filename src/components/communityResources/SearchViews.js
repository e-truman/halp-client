import { useState } from "react"
import { ContactTypeList } from "./ContactType"
import { Search } from "./Search"
import { SearchList } from "./SearchList"
import "./CommunityResource.css"


export const ContactTypeWithSearch = () => {
    const [searchTerm, updateSearchTerm] = useState("") // children inherit props from parent 

    return (
        <>
            <Search updateSearchState={updateSearchTerm} />
            <SearchList searchState={searchTerm} />
            <ContactTypeList />
        </>
    )

}