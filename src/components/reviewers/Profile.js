import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getMyProfile, deleteProfile, updateProfile, getReviewerById  } from "./ReviewerManager";

export const Profile = (props) => {
    console.log(props)
    const history = useHistory()
    const [reviewer, setReviewer] = useState({})
    // const [showComments, setShowComments ] = useState(false)
    const { reviewerId } = useParams()
    const otherProfileMode = reviewerId ? true : false


    const fetchReviewer = () => {
        if (otherProfileMode) {
            getReviewerById(reviewerId)
                .then(data => setReviewer(data))
        } else {
            getMyProfile()
                .then(data => setReviewer(data))
        }
    }


    useEffect(() => {
        fetchReviewer()

    }, [])

    const handleDelete = (id, func) => {
        deleteProfile(id, func)
    }

    // const toggleForm = () => {
    //     if (showComments == true) {
    //         setShowComments(false)
    //     } else {
    //         setShowComments(true)
    //     }
    // }

    return (
        <>

            <h2 className="title">My Reviews</h2>
            <div className="allReviews">

                
                   
                        return <>
                            <div className="space-between">
                            
                                <p>Author: {reviewer.user?.first_name} {reviewer?.user?.last_name}</p>
                                {/* <p>Date: {review.publication_date}</p> */}
                                {/* <p>{review.content}</p> */}
                                
                                <div className="buttons">
                                    {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                                    <button className="btn" value={reviewer.id} onClick={() => { handleDelete(reviewer.id, fetchReviewer) }}>DELETE</button>

                                </div>
                            </div>
                        </>
                    
                

                

            </div>

        </>
    )
}
