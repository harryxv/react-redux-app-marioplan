//src/components/dashboard.js
//this dashboard contains project list and notification sub components

import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList"

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}