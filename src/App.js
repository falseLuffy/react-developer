import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      return (
        <div className="App">
           <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                 Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Learn React
              </a>
              <p>{JSON.stringify(this.props.cart)}</p>
              <Button onClick = {this.props.plus}>点一下</Button>
              {JSON.stringify(this.props.demo)}

              <Button onClick = {this.props.plus2}>点一下2</Button>
              <Button type="primary">你好 antd</Button>
           </header>
        </div>
      );
   }

   componentDidMount() {
   }

   componentWillUnmount() {

   }
}
const mapStateToProps = (state) => {
   return {
      cart: state.cart,
      demo:state.a
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      plus: () => {
         dispatch({
            type: '请求增援'
         });
      } ,
      plus2: () => {
         dispatch({
            type: '修改',
            data:{a:100,b:200}
         });
      }
   };
}

App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
