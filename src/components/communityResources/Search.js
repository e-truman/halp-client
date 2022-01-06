import "./CommunityResource.css"
export const Search = ({ updateSearchState }) => { // from ArtistDatesView use effect, modifies searchTerm

    return (
        <>
            <div className="search-container">

                <section>
                    <form className="form--search" onSubmit={(event) => { event.preventDefault() }}>
                        <fieldset className="searchField">
                            <input onChange={
                                (evt) => {
                                    const search = evt.target.value
                                    updateSearchState(search)
                                }
                            }
                                type="text"
                                className="search"
                                placeholder= "SEARCH"
                                required autoFocus />
                        </fieldset>
                    </form>
                </section>
            </div>
        </>
    )
}