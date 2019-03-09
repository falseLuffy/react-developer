import React, {Component} from 'react'
import {Button} from 'antd'

class data extends Component {
   constructor(props){
      super(props);
      this.state = {};
   }
   handleClick = ()=>{
      this.props.history.push('/data')
   } ;

   render() {
         return (
           <div><Button type={'primary'} onClick={this.handleClick}>点击一下</Button> hello data</div>
         )
   }
}

export default data
