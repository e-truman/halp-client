import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCommunityResourceByContactType } from "./CommunityResourceManager";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CommunityResourceList = (props) => {
    console.log(props)
    const history = useHistory()
    const [communityResources, setCommunityResources] = useState([])
    const { contactType } = useParams()
    // const [showComments, setShowComments ] = useState(false)

    const fetchCommunityResources = () => {
        getCommunityResourceByContactType(contactType)
            .then(data => setCommunityResources(data))
    }

    useEffect(() => {
        fetchCommunityResources()

    }, [])






    return (
        <>

            <h2 className="title">Community Resource By Category</h2>
            <div className="contactTypes">

                {
                    communityResources.map((communityResource) => {
                        return <>
                            <div className="space-between">
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            
                                                <h3>{communityResource.contact}</h3 >
                                                <p>{communityResource.phone_number}</p>
                                                <p>{communityResource.street_address}</p>
                                    
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
        <Button size="small"><Link to={`reviews/${communityResource.id}`}>See Reviews</Link></Button>
        <Button size="small"><Link to={`/write_review/${communityResource.id}`}>Wite a Review</Link></Button>
      </CardActions>
                                </Card>

                            </div>
                        </>
                    }
                    )

                }

            </div>

        </>
    )
}