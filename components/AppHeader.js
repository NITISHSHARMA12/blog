import React from 'react';
import {Layout, Menu, Dropdown, Icon} from "antd";
import Link from 'next/link';
import '../assets/css/antd.less'
import { HOME_MENU, ABOUT_US_MENU, CONTACT_MENU, EVENTS_MENU, VIDEOS_MENU, DISEASE_MENU, BLOG_MENU } from '../constant/dataKey';

const {Header} = Layout;
const SubMenu = Menu.SubMenu;


export default class AppHeader extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render() {
        return(
            <Header className="header" style={{
                background: '#fff',
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                boxShadow: '0 5px 12px rgba(0,0,0,0.25)'
            }}>
                <div className="logo" />
                <Menu
                    className="appHeader"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '62px', maxWidth: 'calc(100% - 70px)', float: 'right',marginLeft:'70px',display:'inline-block'}}
                >
                    <Menu.Item key="1">
                        <Link href="/index">{HOME_MENU}</Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link href="/abouts">{ABOUT_US_MENU}</Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Link href="#">{BLOG_MENU}</Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Link href="#">{DISEASE_MENU}</Link>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Link href="#">{VIDEOS_MENU}</Link>
                    </Menu.Item>

                    <Menu.Item key="6">
                        <Link href="#">{EVENTS_MENU}</Link>
                    </Menu.Item>

                    <Menu.Item key="7">
                        <Link href="#">{CONTACT_MENU}</Link>
                    </Menu.Item>

                    <SubMenu title={"LOGIN"}>
                        <Menu.Item key={"8"}>
                            <Link href={'https://patient.bkarogyam.com'} target={"_blank"}><Icon type="login" />Patient</Link>
                        </Menu.Item>

                        <Menu.Item key={"9"}>
                            <Link href={'https://advisor.bkarogyam.com'} target={'_blank'}><Icon type="login" />Advisor</Link> 
                        </Menu.Item>

                        <Menu.Item key={"10"}>
                            <Link href={'https://clinic.bkarogyam.com'} target={'_blank'}><Icon type="login" />Clinic</Link> 
                        </Menu.Item>

                    </SubMenu>

                </Menu>

            </Header>
        )
    }
}

