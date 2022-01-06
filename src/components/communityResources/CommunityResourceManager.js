export const getAllCommunityResources = () => {
    return fetch("http://localhost:8000/community_resources", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getCommunityResourceById = (id) => {
    return fetch(`http://localhost:8000/community_resources/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};


export const getCommunityResourceByContactType = (type) => {
    return fetch(`http://localhost:8000/community_resources?contact_type=${type}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};


export const search = (searchtext) => {
    return fetch(`http://localhost:8000/community_resources?q=${searchtext}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};



