import React from "react"
import { Route } from "react-router-dom"
import { ContactTypeList } from "./communityResources/ContactType"

export const ApplicationViews = () => {
    return (
        <>
                <Route exact path='/'>
                        <ContactTypeList />
                </Route>
                <Route exact path='/community_resources/:contactType'>
                        <ContactTypeList />
                </Route>
                


        </>
    )

}


