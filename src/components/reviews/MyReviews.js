import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getMyReviews, deleteReview } from "./ReviewManager";

export const MyReviewList = (props) => {
    console.log(props)
    const history = useHistory()
    const [reviews, setReviews] = useState([])
    // const [showComments, setShowComments ] = useState(false)
   const { reviewerId } = useParams()

   

    const fetchMyReviews = ()=>{
        getMyReviews(reviewerId)
        .then(data => setReviews(data))
    } 


    useEffect(() => {
        fetchMyReviews()

    }, [])

    const handleDelete = (id, func) => {
        deleteReview(id, func)
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

                {
                    reviews.map((review) => {
                            return <>
                                <div className="space-between">
                                    <h4 className="mp-title" key={`review--${review.id}`}><Link to={`/reviews/${review.id}`}>Title: {review.title}</Link></h4>
                                    <p>Author: {review.reviewer?.user?.first_name} {review.reviewer?.user?.last_name}</p>
                                    {/* <p>Date: {review.publication_date}</p> */}
                                    <p>{review.content}</p>
                                    {/* <p>Category: {review.category?.label}</p> */}
                                    {/* <button onClick={() => history.push(`/commentForm/${review.id}`)}
                                        className='comment-btn'>Add Comment</button>  */}
                                    {/* { showComments ?
                                        <button onClick={() => toggleForm()}>Hide Comments</button>
                                        :
                                        <button onClick={() => toggleForm()}>Show Comments</button>
                                    }
                                    { showComments ?
                                        <ul>
                                            <h3>{review.comment.subject}</h3>
                                            <p>{review.comment.content}</p>
                                        </ul>
                                        : ""
                                    } */}
                                    <div className="buttons">
                                        {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                                        <button className="btn" value={review.id} onClick={() => { handleDelete(review.id, fetchMyReviews) }}>DELETE</button>

                                    </div>
                                </div>
                            </>
                        }
                    )
                
                }

            </div>

        </>
    )
}
