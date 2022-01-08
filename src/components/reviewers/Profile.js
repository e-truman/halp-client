import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getMyProfile, deleteProfile, updateProfile, getReviewerById } from "./ReviewerManager";

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

//     const logout = () => {
//         {
//             (localStorage.getItem("halp_user_id") !== null) ?

//                 localStorage.removeItem("halp_user_id")
//                         history.push({ pathname: "/" })
                  
    
//                 :
// <>
//     <li className="nav-item">
//         <Link className="nav-link" to="/login">Login</Link>
//     </li>
//     <li className="nav-item">
//         <Link className="nav-link" to="/register">Register</Link>
//     </li>
// </>
//         }
//     }



return (
    <>

        <h2 className="title">{reviewer.user?.first_name} {reviewer?.user?.last_name}</h2>
        <p>Username: {reviewer.user?.username} </p>
        <div className="allReviews">




            <div className="space-between">
                <p></p>
                <img src={reviewer.profile_pic} alt="profile picture" />
                <p>Username: {reviewer.user?.username} </p>
                <p>Email: {reviewer.user?.email} </p>
                {/* <p>Date: {review.publication_date}</p> */}
                {/* <p>{review.content}</p> */}

                <div className="buttons">
                    {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                    <button className="btn" value={reviewer.id} >
                        
                        {
                            (localStorage.getItem("halp_user_id") !== null) ?

                                <p className="link"
                                    onClick={() => {
                                        handleDelete(reviewer.id, fetchReviewer)
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
            </div>






        </div>

    </>
)
}
