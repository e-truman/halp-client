import React from "react"
import { Route } from "react-router-dom"
import { ReviewList } from "../reviews/ReviewList"
import { Profile } from "./Profile"


export const ProfileViews = () => {
    return (
        <>
            <Route>
                <Profile />
                <ReviewList />
            </Route>


        </>
    )

}