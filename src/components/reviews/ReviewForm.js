import React, { useState, useEffect } from "react"
import { createReview, updateReview, getReviewById } from "./ReviewManager"
import { useParams, useHistory } from 'react-router-dom'
// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { getCommunityResourceById } from "../communityResources/CommunityResourceManager";


export const ReviewForm = () => {
    const [communityResource, setCommunityResource] = useState({})
    const { contactId, reviewId, reviewerId } = useParams()
    const [review, setReview] = useState({
        rating:0
    })
    const history = useHistory()
    const editMode = reviewId ? true : false  // true or false
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const fetchCommunityResources = () => {
        getCommunityResourceById(contactId)
            .then(data => setCommunityResource(data))
    }

    // useEffect(() => {
    //     fetchCommunityResources()

    // }, [])

    useEffect(() => {
        if (editMode) {
            getReviewById(parseInt(reviewId)).then((res) => {
                // debugger
                setReview({
                    id: res.id,
                    reviewer: res.reviewer,
                    communityResource: res.community_resource,
                    title: res.title,
                    content: res.content,
                    rating: res.rating,
                    createdOn: res.created_on,
                    isPublished: res.is_published,
                    approved: res.approved

                })
            }
            )
        }
    else {
        fetchCommunityResources()

    }


        // getGameTypes().then(gameTypesData => setGameTypes(gameTypesData))
    }, [])


    const handleControlledInputChange = (event) => {
        const newReviewState = Object.assign({}, review)          // Create copy
        newReviewState[event.target.name] = event.target.value
        // Modify copy
        setReview(newReviewState)                                 // Set copy as new state
    }

    const constructNewReview = () => {
       
        if (editMode) {
            // PUT: 
            updateReview({
                id: review.id,
                reviewer: review.reviewer,
                communityResourceId: review?.communityResource.id,
                title: review.title,
                content: review.content,
                rating: review.rating,
                isPublished: review.isPublished,
                createdOn: review.createdOn,
                approved: review.approved
            })
                .then(() => history.push('/community_resources'))
        } else {
            // POST
            createReview({
                reviewer: localStorage.getItem("halp_user_id"),   // a token is in my local storage rather than an integer
                communityResourceId: communityResource.id,
                title: review.title,
                content: review.content,
                rating: review.rating,
                isPublished: true,
                approved: true
            })
                .then(() => history.push('/community_resources'))
        }
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">{editMode ? "Edit Review" : "Write a Review"}</h2>


            <h3> {editMode ? `${review?.communityResource?.contact}` : `${communityResource.contact}`}</h3>


            {/* <option value="0">Select a Game</option>
                        {
                            games?.map(g => (
                                g.id == event.gameId ? <option selected key={g.id} value={g.id}>
                                    {g.title}
                                </option> :
                                <option key={g.id} value={g.id}>
                                    {g.title}
                                </option> */}



            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                
                <Rating
                    name='rating'
                    value={review.rating}
                    precision={0.5}
                    onChange={handleControlledInputChange} 
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={review.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Review: </label>
                    <input type="textarea" name="content" required className="form-control"
                        value={review.content}
                        // defaultValue={game.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewReview()
                }}
                className="btn btn-primary">{editMode ? "Save Updates" : "Create"}</button>
        </form>
    )
}