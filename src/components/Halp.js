import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./nav/Navbar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Halp.css"

export const Halp = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("halp_user_id")) {
                return <>
                    <Navbar />
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("halp_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("halp_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register />
            }
        }} />
    </>
)
