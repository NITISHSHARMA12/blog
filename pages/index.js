import React from "react";
import {Layout, Button} from 'antd';
import AppHeader from "../components/AppHeader";

const {Content} = Layout;
export default class index extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Layout>
                <div  className="suggestionButton">
                    <Button type="primary" shape="circle" icon="mail" size={"large"}/>
                </div>
                <AppHeader/>
                <div className="app-container">
                    <Content style={{minHeight: 'calc(100vh - 50px)'}}>
                    <div>Welcome to Next.js!</div>
                    </Content>
                </div>
                
                
                <style jsx global>{`
                    .suggestionButton{
                        position:fixed;
                        left:19px;
                        bottom:10px;
                        z-Index: 20;
                    }  
                `}
                </style>
            </Layout>
        );
    }
}
