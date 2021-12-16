export const getAllCommunityResources = () => {
    return fetch("https://halp-server.herokuapp.com/community_resources", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getCommunityResourceById = (id) => {
    return fetch(`https://halp-server.herokuapp.com/community_resources/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};


export const getCommunityResourceByContactType = (type) => {
    return fetch(`https://halp-server.herokuapp.com/community_resources?contact_type=${type}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("halp_user_id")}`
        }
    })
    .then(res => res.json())
};








