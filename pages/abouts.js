import React from "react";
import AppHeader from "../components/AppHeader";

export default class abouts extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <AppHeader/>
                <h1>Hello abouts</h1>
            </div>
        );
    }
}