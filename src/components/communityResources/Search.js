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
                            '& > :not(style)': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Search by organization or category of service" variant="outlined" 
                        onChange={
                            (evt) => {
                                const search = evt.target.value
                                updateSearchState(search)
                            }
                        }
                        />
                        
                    </Box>



                </section>
            </div>
        </>
    )
}