import React from "react"
import { Route } from "react-router-dom"
import { ContactTypeList } from "./communityResources/ContactType"
import { CommunityResourceList } from "./communityResources/CommunityResourceList"
import { CommunityResourceDetail } from "./communityResources/CommunityResourceDetail"
import { ReviewList } from "./reviews/ReviewList"
import { MyReviewList } from "./reviews/MyReviews" 
import { CreateReviewForm } from "./reviews/CreateReviewForm"
import { EditReviewForm } from "./reviews/EditReviewForm"

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
                <Route exact path='/reviews/:contactId'>
                        <ReviewList />
                </Route>
                <Route exact path='/my_reviews/:reviewerId'>
                        <MyReviewList />
                </Route>
                <Route exact path='/write_review/:contactId'>
                        <CreateReviewForm />
                </Route>
                <Route exact path='/edit_review/:editReviewId'>
                        <EditReviewForm />
                </Route>


        </>
    )

}


