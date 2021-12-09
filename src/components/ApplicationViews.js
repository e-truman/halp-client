import React from "react"
import { Route } from "react-router-dom"
import { ContactTypeList } from "./communityResources/ContactType"
import { CommunityResourceList } from "./communityResources/CommunityResourceList"
import { CommunityResourceDetail } from "./communityResources/CommunityResourceDetail"
import { ReviewList } from "./reviews/ReviewList"

export const ApplicationViews = () => {
    return (
        <>
                <Route exact path='/community_resources'>
                        <ContactTypeList />
                </Route>
                <Route exact path='/community_resources/:contactType'>
                        <CommunityResourceList />
                </Route>
                <Route exact path='/community_resource/:contactId'>
                        <CommunityResourceDetail />
                </Route>
                <Route exact path='/reviews'>
                        <ReviewList />
                </Route>


        </>
    )

}


