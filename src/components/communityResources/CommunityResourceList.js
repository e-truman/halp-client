import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCommunityResourceByContactType } from "./CommunityResourceManager";

export const CommunityResourceList = (props) => {
    console.log(props)
    const history = useHistory()
    const [communityResources, setCommunityResources] = useState([])
    const { contactType } = useParams()
    // const [showComments, setShowComments ] = useState(false)

    const fetchCommunityResources = ()=>{
        getCommunityResourceByContactType(contactType)
        .then(data => setCommunityResources(data))
    } 

    useEffect(() => {
        fetchCommunityResources()

    }, [])

    // const toggleForm = () => {
    //     if (showComments == true) {
    //         setShowComments(false)
    //     } else {
    //         setShowComments(true)
    //     }
    // }

    return (
        <>

            <h2 className="title">Community Resource Categories</h2>
            <div className="contactTypes">

                {
                    communityResources.map((communityResource) => {
                            return <>
                                <div className="space-between">
                                    <h4 className="mp-title" key={`post--${communityResource.id}`}><Link to={`/community_resource/${communityResource.contact}`}>Title: {communityResource.contact}</Link></h4>
                                    
                                    {/* <button onClick={() => history.push(`/commentForm/${post.id}`)}
                                        className='comment-btn'>Add Comment</button>  */}
                                    {/* { showComments ?
                                        <button onClick={() => toggleForm()}>Hide Comments</button>
                                        :
                                        <button onClick={() => toggleForm()}>Show Comments</button>
                                    }
                                    { showComments ?
                                        <ul>
                                            <h3>{post.comment.subject}</h3>
                                            <p>{post.comment.content}</p>
                                        </ul>
                                        : ""
                                    } */}
                        
                                </div>
                            </>
                        }
                    )
                
                }

            </div>

        </>
    )
}