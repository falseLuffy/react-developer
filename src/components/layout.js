import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Layout, Menu, Icon } from 'antd'

const {Header, Content, Sider} = Layout;

class Container extends Component{
   constructor(props){
      super(props)
      this.state = {}
   }
   componentDidMount(){
      this.adaptScreenHeight();
   }

   adaptScreenHeight(){
      let height = document.documentElement.clientHeight;
      document.getElementById('contentWrap').style.height = height - 54 + 'px'
   }
   render(){
      return (
        <Layout>
           <Header style={{ background: '#fff', padding: 0 }} >hello world</Header>
           <Layout style={{ marginLeft: 200 }}>
              <Sider style={{overflow: 'auto', height: 'calc(100vh - 54px)', position: 'fixed', left: 0}}>
                 <div className="logo"></div>
                 <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                       <Icon type="user"></Icon>
                       <span className="nav-text">
                          <Link to={'/data'}>data</Link>
                       </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                       <Icon type="video-camera" ></Icon>
                       <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                       <Icon type="upload" ></Icon>
                       <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                       <Icon type="bar-chart" ></Icon>
                       <span className="nav-text">nav 4</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                       <Icon type="cloud-o" ></Icon>
                       <span className="nav-text">nav 5</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                       <Icon type="appstore-o" ></Icon>
                       <span className="nav-text">nav 6</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                       <Icon type="team" ></Icon>
                       <span className="nav-text">nav 7</span>
                    </Menu.Item>
                    <Menu.Item key="8">
                       <Icon type="shop"></Icon>
                       <span className="nav-text">nav 8</span>
                    </Menu.Item>
                 </Menu>
              </Sider>
              <Content id="contentWrap" style={{overflow: 'auto'}}>
                 {this.props.children || null}
              </Content>
           </Layout>
        </Layout>
      )
   }

};

export default Container;