export const getAllReviews = () => {
    return fetch("https://halp-server.herokuapp.com/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getReviewById = (id) => {
    return fetch(`https://halp-server.herokuapp.com/reviews/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const deleteReview = (reviewId, func) => {
    fetch(`https://halp-server.herokuapp.com/reviews/${reviewId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
        .then(func)
}


export const getReviewsByCommunityResource = (communityResourceId) => {
    return fetch(`https://halp-server.herokuapp.com/reviews?community_resource=${communityResourceId}`,{
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`
        }})
    .then(res => res.json())
}

export const getMyReviews = () => {
    return fetch(`https://halp-server.herokuapp.com/reviews?reviewer=true`,{
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`
        }})
    .then(res => res.json())
}

export const publishOrUnpublish = (reviewId) => {
    return fetch(`https://halp-server.herokuapp.com/reviews/${reviewId}/publish`, {
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type" : "application/json"
        },
    })
        .then(getAllReviews)
}

export const createReview = (review) => {
    return fetch(`https://halp-server.herokuapp.com/reviews`,{
        method: "POST",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
}

export const updateReview = (review) => {
    return fetch(`https://halp-server.herokuapp.com/reviews/${review.id}`,{
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
}




export const UnlikeReview = (reviewId, reaction) => {
    return fetch(`https://halp-server.herokuapp.com/reviews/${ reviewId }/react`, {
        method: "POST",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({reactions:reaction})
    })
        .then(response => response.json())
}


export const LikeReview = (reviewId, reaction) => {
    return fetch(`https://halp-server.herokuapp.com/reviews/${ reviewId }/react`, {
        method: "POST",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({reactions:reaction})
    })
        .then(response => response.json())
        
}

