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


export const CreateReviewForm = () => {
    const [communityResource, setCommunityResource] = useState([])
    const { contactId } = useParams()
    const [review, setReview] = useState({})
    const history = useHistory()
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

    useEffect(() => {
        fetchCommunityResources()

    }, [])

    const handleControlledInputChange = (event) => {
        const newReviewState = Object.assign({}, review)          // Create copy
        newReviewState[event.target.name] = event.target.value
        // Modify copy
        setReview(newReviewState)                                 // Set copy as new state
    }

    const constructNewReview = () => {
            createReview({
                reviewer: parseInt(localStorage.getItem("halp_user_id")),
                communityResourceId: parseInt(communityResource.id),
                title: review.title,
                content: review.content,
                rating: review.rating,
                isPublished: true,
                approved: true
            })
                .then(() => history.push("/reviews/:contactId"))
        
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Write a Review</h2>


            <h3>{communityResource.community_resource} </h3>


            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name={review.rating}
                    value={review.rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
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
                        // defaultValue={game.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Review: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
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
                className="btn btn-primary">SUBMIT</button>
        </form>
    )
}