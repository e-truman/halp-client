import React, { useState, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCommunityResourceById } from "./CommunityResourceManager";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CommunityResourceDetail = (props) => {
    console.log(props)
    const history = useHistory()
    const [communityResource, setCommunityResources] = useState([])
    const { contactId } = useParams()
    // const [showComments, setShowComments ] = useState(false)

    const fetchCommunityResources = () => {
        getCommunityResourceById(contactId)
            .then(data => setCommunityResources(data))
    }

    useEffect(() => {
        fetchCommunityResources()

    }, [])






    return (
        <>

            <div className="contactTypes">

                            <div className="space-between">
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                                <h2>{communityResource.contact}</h2>
                                                <p>{communityResource.notes}</p>
                                                <p>{communityResource.phone_number}</p>
                                                <p>{communityResource.street_address}</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                            <Button size="small"><Link className="link" to={`reviews/${communityResource.id}`}>See Reviews</Link></Button>
                                            <Button size="small"><Link className="link" to={`/write_review/${communityResource.id}`}>Wite a Review</Link></Button>
                                        </CardActions>
                                </Card>




                            </div>
                      
                    
                   

                

            </div>

        </>
    )
}