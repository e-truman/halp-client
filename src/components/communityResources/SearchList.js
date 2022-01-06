// Renders the filtered artist dates by watching for changes in search state
import { useEffect, useState } from "react"
import { searchCommunityResources, getAllCommunityResources } from "./CommunityResourceManager"
import "./CommunityResource.css"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SearchList = ({ searchState }) => {
    // const [searchResults, updateSearchResults] = useState({})
    const [searchResults, setSearch] = useState([])
    const [contact, setContact] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setContact(value);
  };

    useEffect(
        () => {
            if (searchState != ""){
            searchCommunityResources(searchState)
                .then((data) => {
                    setSearch(data)})
} else {
    searchCommunityResources({})
}
                },
                    [searchState]
            
    )


    // const searchContacts = () => {
    //     search(searchState)
    //     search(searchState)
    // }

    // useEffect(
    //     () => {


    //         updateSearchResults(searchState) // modifies search results

    //     },
    //     [searchState]
    // )

    // useEffect(
    //     () => {
    //         return fetch(`https://artists-api-f85cm.ondigitalocean.app/artistDates`)
    //             .then(response => response.json())
    //             .then((data) => {
    //                 setADs(data)

    //             })
    //     },
    //     []
    // )

    // useEffect(
    //     () => {
    //         if (searchState !== "") {
    //             const filteredDates = artistDates.find(date => date.title.startsWith(searchState)) //filters based on search state, modified in on-change and rerenders
    //             if (filteredDates !== undefined) {

    //                 updateSearchResults(filteredDates) // modifies search results
    //             }
    //         } else {
    //             updateSearchResults({})
    //         }
    //     },
    //     [searchState]
    // )

    // search results render underneath the input field
    return (
        <>




<div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={contact}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {searchResults.map((searchResult) => (
            <option key={searchResult.id} value={searchResult.id}>
              {searchResult.contact}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>






            {/* <div className="search-results-container">
                {searchResults.map((searchResult)=>{

                <p>{searchResult.contact}</p>
                })}
            </div> */}
            {/* <div className="search-results-container">
                {searchResults.map((searchResult)=>{

                <p>{searchResult.contact}</p>
                })}
            </div> */}
        </>
    )
}




// className={searchState === "" ? "no-style" : "date-link search-results"}