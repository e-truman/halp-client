export const getAllReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getReviewById = (id) => {
    return fetch(`http://localhost:8000/reviews/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const deleteReview = (reviewId, func) => {
    fetch(`http://localhost:8000/reviews/${reviewId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
        .then(func)
}


export const getReviewsByCommunityResource = (communityResourceId) => {
    return fetch(`http://localhost:8000/reviews?community_resource=${communityResourceId}}`,{
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`
        }})
    .then(res => res.json())
}

export const getMyReviews = (reviewerId) => {
    return fetch(`http://localhost:8000/reviews?reviewer_id=${reviewerId}}`,{
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`
        }})
    .then(res => res.json())
}

export const publishOrUnpublish = (reviewId) => {
    return fetch(`http://localhost:8000/reviews/${reviewId}/publish`, {
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type" : "application/json"
        },
    })
        .then(getAllReviews)
}

export const createReview = (review) => {
    return fetch(`http://localhost:8000/reviews`,{
        method: "review",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
}

export const updateReview = (review) => {
    return fetch(`http://localhost:8000/reviews/${review.id}`,{
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
}