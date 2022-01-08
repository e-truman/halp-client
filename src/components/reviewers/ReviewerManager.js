export const getMyProfile = () => {
    return fetch("http://localhost:8000/profile", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getReviewerById = (id) => {
    return fetch(`http://localhost:8000/reviewers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const deleteProfile = (id, func) => {
    fetch(`http://localhost:8000/profile/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
        .then(func)
}


export const updateProfile = (reviewer) => {
    return fetch(`http://localhost:8000/profile/${reviewer.id}`,{
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewer)
    })
}