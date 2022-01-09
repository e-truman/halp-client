import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getMyProfile, deleteProfile, updateProfile, getReviewerById } from "./ReviewerManager";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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

            



            <div className="profile">
                
                <img className="profile-pic" src={profile?.profile_pic} alt="profile picture" />
               
                {/* <p>Date: {review.publication_date}</p> */}
                {/* <p>{review.content}</p> */}

                <div className="buttons">
                    {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                    <button className="btn" value={profile?.user?.id} >

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
                <div>

                <h2 className="title">{profile?.user?.first_name} {profile?.user?.last_name}</h2>
                <p>Username: {profile?.user?.username} </p>
                <p>Email: {profile.user?.email} </p>




                </div>




            </div>

        </>
    )
}






