import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getMyProfile, deleteProfile, updateProfile, getReviewerById } from "./ReviewerManager";
import "./Profile.css"

export const Profile = (props) => {
    console.log(props)
    const history = useHistory()
    const [profile, setReviewer] = useState({})
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




return (
    <>

        <h2 className="title">{profile?.reviewer?.user?.username}</h2>
       


            <div className="profile">
                <p></p>
                <img className="profile-pic" src={profile?.reviewer?.profile_pic} alt="profile picture" />
                <p>Username: {profile?.reviewer?.user?.username} </p>
                <p>Email: {profile.reviewer?.user?.email} </p>
                {/* <p>Date: {review.publication_date}</p> */}
                {/* <p>{review.content}</p> */}

                <div className="buttons">
                    {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                    <button className="btn" value={profile?.reviewer?.user?.id} >
                        
                        {
                            (localStorage.getItem("halp_user_id") !== null) ?

                                <p className="link"
                                    onClick={() => {
                                        handleDelete(profile.reviewer.id, fetchReviewer)
                                        localStorage.removeItem("halp_user_id")
                                        history.push({ pathname: "/" })
                                    }}
                                >DELETE</p>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                        }
                        </button>

                </div>

                <h2 className="title">My Reviews</h2>
                
            
                <div className="allReviews">



                 {
    profile.reviews.map((review) => {
            return <>
                <div className="space-between">
                    <h4 className="mp-title" key={`review--${review.id}`}><Link to={`/reviews/${review.id}`}>Title: {review.title}</Link></h4>
                    <p>Author: {review.user?.first_name} {review?.reviewer?.user?.last_name}</p>
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
                        {/* <button className="btn" value={review.id} onClick={() => { handleDelete(review.id, fetchMyReviews) }}>DELETE</button> */}

                    </div>
                </div>
            </>
        }
    )

}


</div> 





        </div>

    </>
)
}






