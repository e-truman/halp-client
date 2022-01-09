import "./CommunityResource.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Search = ({ updateSearchState }) => { // from ArtistDatesView use effect, modifies searchTerm

    return (
        <>
            <div className="search-container">

                <section>



                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Search for a community resource or category of service" variant="outlined" 
                        onChange={
                            (evt) => {
                                const search = evt.target.value
                                updateSearchState(search)
                            }
                        }
                        required autoFocus
                        />
                        
                    </Box>








                    {/* <form className="form--search" onSubmit={(event) => { event.preventDefault() }}>
                        <fieldset className="searchField">
                            <input onChange={
                                (evt) => {
                                    const search = evt.target.value
                                    updateSearchState(search)
                                }
                            }
                                type="text"
                                className="search"
                                placeholder="SEARCH"
                                required autoFocus />
                        </fieldset>
                    </form> */}
                </section>
            </div>
        </>
    )
}