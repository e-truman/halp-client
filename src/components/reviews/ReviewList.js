import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllReviews, deleteReview} from "./ReviewManager";

export const ReviewList = (props) => {
    console.log(props)
    const history = useHistory()
    const [reviews, setReviews] = useState([])
    // const [showComments, setShowComments ] = useState(false)

    const fetchReviews = ()=>{
        getAllReviews()
        .then(data => setReviews(data))
    } 

    useEffect(() => {
        fetchReviews()

    }, [])

    // const toggleForm = () => {
    //     if (showComments == true) {
    //         setShowComments(false)
    //     } else {
    //         setShowComments(true)
    //     }
    // }

    return (
        <>

            <h2 className="title">All Reviews</h2>
            <div className="allReviews">

                {
                    reviews.map((review) => {
                            return <>
                                <div className="space-between">
                                    <h4 className="mp-title" key={`review--${review.id}`}><Link to={`/reviews/${review.id}`}>Title: {review.title}</Link></h4>
                                    <p>Author: {review.author?.user?.first_name} {review.author?.user?.last_name}</p>
                                    <p>Date: {review.publication_date}</p>
                                    <p>{review.content}</p>
                                    <p>Category: {review.category?.label}</p>
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
                                        <button className="btn" value={review.id} onClick={() => { deleteReview(review.id, fetchReviews) }}>DELETE</button>

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
