import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getReviewsByCommunityResource, getMyReviews, deleteReview, LikeReview, UnlikeReview } from "./ReviewManager";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';


// import * as React from 'react';
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

export const ReviewList = (props) => {
    console.log(props)
    const history = useHistory()
    const [reviews, setReviews] = useState([])
    // const [showComments, setShowComments ] = useState(false)
    const { contactId } = useParams()
    const contactsMode = contactId ? true : false
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(2);


    const fetchReviews = () => {

        if (contactsMode) {
            getReviewsByCommunityResource(contactId)

                .then(data => setReviews(data))
        }
        else {
            getMyReviews()
                .then(data => setReviews(data))
        }
    }


    useEffect(() => {
        fetchReviews()

    }, [])


    const handleDelete = (id, func) => {
        deleteReview(id, func)
    }




    const buttons = (id) => {
        if (contactsMode === false) {
            return <div>
                <IconButton className="btn" onClick={() => history.push(`/edit_review/${id}`)}><EditIcon /></IconButton>
                <IconButton className="btn" value={id} onClick={() => { handleDelete(id, fetchReviews) }}><DeleteIcon /></IconButton>
            </div>
        }
    }

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    // export default function RecipeReviewCard() {
    //     const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    // const toggleForm = () => {
    //     if (showComments == true) {
    //         setShowComments(false)
    //     } else {
    //         setShowComments(true)
    //     }
    // }

    return (
        <>

            <h2 className="title">{contactsMode ? "All Reviews" : "Your Reviews"}</h2>
            <div className="allReviews">

                {
                    reviews.map((review) => {
                        return <>




                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {review?.reviewer?.user?.first_name[0]}
                                        </Avatar>
                                    }
                                    // action={
                                    //     <IconButton aria-label="settings">
                                    //         <MoreVertIcon />
                                    //     </IconButton>
                                    // }
                                    title={review?.community_resource?.contact}
                                // subheader="September 14, 2016"
                                />


                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.title}
                                    </Typography>


                                    <Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >

                                        <Rating name="read-only" value={review.rating} readOnly />

                                    </Box>



                                </CardContent>
                                <CardActions disableSpacing>

                                        
                                    {
                                        review.current_user_reactions && review.current_user_reactions[0]?.is_liked
                                            ? 
                                                <IconButton aria-label="add to favorites" onClick={() => UnlikeReview(review.id, false).then(() => fetchReviews())}>
                                                    <FavoriteIcon />
                                                </IconButton>
                                           
                                            : 
                                                <IconButton aria-label="add to favorites" onClick={() => LikeReview(review.id, true).then(() => fetchReviews())}>
                                                    <FavoriteBorderIcon />
                                                </IconButton>
    
                                    }


                                    {/* <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton> */}
                                    {contactsMode === false ? buttons(review.id) : ""}
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            {review.content}
                                        </Typography>

                                    </CardContent>
                                </Collapse>
                            </Card>


                        </>
                    }
                    )

                }

            </div>

        </>
    )
}
