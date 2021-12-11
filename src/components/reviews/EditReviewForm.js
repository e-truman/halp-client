import React, { useState, useEffect } from "react"
import { createReview, updateReview, getReviewById } from "./ReviewManager"
import { useParams, useHistory } from 'react-router-dom'
// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


export const EditReviewForm = () => {
    const { reviewId } = useParams()
    const [review, setReview] = useState({
                    id: 0,
                    reviewer: "",
                    communityResourceId: 0,
                    title: "",
                    content: "",
                    rating: 0,
                    isPublished: false,
                    approved: false
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



    useEffect(() => {
        if (editMode) {
            getReviewById(parseInt(reviewId)).then((res) => {
                setReview({
                    id: res.id,
                    reviewer: res.reviewer,
                    communityResource: res.community_resource,
                    title: res.title,
                    content: res.community_resource,
                    rating: res.rating,
                    isPublished: res.is_published,
                    approved: res.approved

                })
            })
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
        // debugger
        if (editMode) {
            // PUT: 
            updateReview({


                id: review.id,
                reviewer: review.reviewer,
                communityResource: review.community_resource,
                title: review.title,
                content: review.content,
                rating: review.rating,
                isPublished: review.is_published,
                approved: review.approved
            })
                .then(() => history.push("/games"))
        } else {
            // POST
            createReview({
                reviewer: parseInt(localStorage.getItem("halp_user_id")),
                communityResource: review.community_resource,
                title: review.title,
                content: review.content,
                rating: review.rating,
                isPublished: true,
                approved: true
            })
                .then(() => history.push("/games"))
        }
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">{editMode ? "Edit Review" : "Write a Review"}</h2>


            <h3>{review.communityResourceId} </h3>


            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
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


            {/* <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Maker: </label>
                        <input type="text" name="maker" required autoFocus className="form-control"
                            value={game.maker}
                            // defaultValue={game.maker}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset> */}



            {/* <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Number Of Players: </label>
                        <input type="number" name="numberOfPlayers" min="1" max="100" required autoFocus className="form-control"
                            value={game.numberOfPlayers}
                            // value={game.numberOfPlayers}
                            // defaultValue={game.numberOfPlayers}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset> */}



            {/* 
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="gameTypeId">Game Type: </label>
                        <select name="gameTypeId" className="form-control"
                            value={game.gameTypeId}
                            // defaultValue={game.gameTypeId}
                            onChange={handleControlledInputChange}>

                            <option value="0">Select a Game Type</option>
                            {
                                gameTypes.map(type => (
                                    type.id == game.gameTypeId ? <option selected key={type.id} value={type.id}>
                                        {type.label}  </option> :
                                        <option key={type.id} value={type.id}>
                                            {type.label}
                                        </option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset> */}


            {/* 
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Skill Level: </label>
                        <input type="number" name="skillLevel" min="1" max="10" required autoFocus className="form-control"
                            defaultValue="Please Enter a Number"
                            value={game.skillLevel}
                            // defaultValue={game.skillLevel}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset> */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewReview()
                }}
                className="btn btn-primary">{editMode ? "Save Updates" : "Create"}</button>
        </form>
    )
}