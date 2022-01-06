// Renders the filtered artist dates by watching for changes in search state
import { useEffect, useState } from "react"

export const SearchList = ({ searchState }) => {
    const [searchResults, updateSearchResults] = useState({})
    const [artistDates, setADs] = useState([])

    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/artistDates`)
                .then(response => response.json())
                .then((data) => {
                    setADs(data)

                })
        },
        []
    )

    useEffect(
        () => {
            if (searchState !== "") {
                const filteredDates = artistDates.find(date => date.title.startsWith(searchState)) //filters based on search state, modified in on-change and rerenders
                if (filteredDates !== undefined) {

                    updateSearchResults(filteredDates) // modifies search results
                }
            } else {
                updateSearchResults({})
            }
        },
        [searchState]
    )

    // search results render underneath the input field
    return (
        <>
            <div className="search-results-container">
                <p ><a className={searchState === "" ? "no-style" : "date-link search-results"} href={searchResults.link}>{searchResults?.title}</a></p>
            </div>
        </>
    )
}