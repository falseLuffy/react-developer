import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from './router/index'

import Container from './components/layout'

class App extends Component {
   constructor(props) {
      debugger
      super(props);
      this.state = {}
   }

   render() {
      return (
        <div className="App">
           <Container>
              <Router></Router>
           </Container>
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
};

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
};

App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
