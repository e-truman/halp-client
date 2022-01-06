// Renders the filtered artist dates by watching for changes in search state
import { useEffect, useState } from "react"
import { searchCommunityResources, getAllCommunityResources } from "./CommunityResourceManager"
import "./CommunityResource.css"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useHistory } from "react-router-dom"
import { MenuItem } from "@mui/material";

export const SearchList = ({ searchState }) => {
    // const [searchResults, updateSearchResults] = useState({})
    const [searchResults, setSearch] = useState([])
    const [contact, setContact] = React.useState([]);
    const history = useHistory()
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
            if (searchState != "" || "") {
                searchCommunityResources(searchState)
                    .then((data) => {
                        setSearch(data)
                    })
            } else {
                searchCommunityResources(searchState)
                    .then((data) => {
                        setSearch([])
                    }
                    )

            }
        },
        [searchState]

    )

    const searchDropdown = () => {
        return <div>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
            <InputLabel shrink htmlFor="select-multiple-native">
                {/* Native */}
            </InputLabel>
            <Select
                multiple
                native
                value={contact}
                // @ts-ignore Typings are not considering `native`
                onChange={handleChangeMultiple}
                // label="Native"
                inputProps={{
                    id: 'select-multiple-native',
                }}
            >
                {searchResults.map((searchResult) => ( 
                    <option  key={searchResult.id} onClick={() => history.push("/")} value={searchResult.id}>
                        {searchResult.contact}
                    </option>
                ))}
            </Select>
        </FormControl>
    </div>

        
    }

    return (
        <>

         {searchState === "" ? "" : searchDropdown()}  


        </>
    )
}

// className={searchState === [] ? "no-style" : "date-link search-results"}




