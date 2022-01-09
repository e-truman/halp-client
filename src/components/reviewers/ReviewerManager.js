export const getMyProfile = () => {
    return fetch("https://halp-server.herokuapp.com/reviewers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getReviewerById = (id) => {
    return fetch(`https://halp-server.herokuapp.com/reviewers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const deleteProfile = (id, func) => {
    fetch(`https://halp-server.herokuapp.com/reviewers/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
        .then(func)
}


export const updateProfile = (reviewer) => {
    return fetch(`https://halp-server.herokuapp.com/reviewers/${reviewer.id}`,{
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("halp_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewer)
    })
}

export const date = (createdOn) => {
    let humanDate = new Date(createdOn);
    let dd = String(humanDate.getDate()).padStart(2, '0');
    let mm = String(humanDate.getMonth() + 1).padStart(2, '0');
    let yyyy = humanDate.getFullYear();
    humanDate = `${mm}/${dd}/${yyyy}`;
    return humanDate
}