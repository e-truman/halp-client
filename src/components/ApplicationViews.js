import React from "react"
import { Route } from "react-router-dom"
import { ContactTypeList } from "./communityResources/ContactType"
import { CommunityResourceList } from "./communityResources/CommunityResourceList"
import { CommunityResourceDetail } from "./communityResources/CommunityResourceDetail"
import { ReviewList } from "./reviews/ReviewList"
import { MyReviewList } from "./reviews/MyReviews" 
import { CreateReviewForm } from "./reviews/CreateReviewForm"
import { EditReviewForm } from "./reviews/EditReviewForm"
import { ReviewForm } from "./reviews/ReviewForm"

export const ApplicationViews = () => {
    return (
        <>
                <Route exact path='/'>
                        <ContactTypeList />
                </Route>
                <Route exact path='/community_resources/:contactType'>
                        <CommunityResourceList />
                </Route>
                <Route exact path='/community_resource/:contactId(\d+)'>
                        <CommunityResourceDetail />
                </Route>
                <Route exact path='/community_resources/reviews/:contactId(\d+)'>
                        <ReviewList />
                </Route>
                <Route exact path='/my_reviews'>
                        <ReviewList />
                </Route>
                <Route exact path='/write_review/:contactId(\d+)'>
                        <ReviewForm />
                </Route>
                <Route exact path='/edit_review/:reviewId(\d+)'>
                        <ReviewForm />
                </Route>


        </>
    )

}


