export const getMyProfile = () => {
    return fetch("http://localhost:8000/reviewers", {
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
    fetch(`http://localhost:8000/reviewers/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
        .then(func)
}


export const updateProfile = (reviewer) => {
    return fetch(`http://localhost:8000/reviewers/${reviewer.id}`,{
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewer)
    })
}