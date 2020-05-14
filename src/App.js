import React, { Component } from 'react'
import "./App.css";
import {connect} from 'react-redux';
import { postMiddleware } from './store/middleware/postMiddleware';



 class App extends Component {
  componentDidMount() {
    console.log("PROPS OBJECT", this.props)
    // this.props.dispatch(AuthMiddleware.userLoginMiddleware())
    this.props.userLogin()
  }
  render() {
    return (
      <div>
       <h1>Redux Practise</h1> 
      </div>
    )
  }
}

 const mapStateToProps=(state)=>({
...state
})

const mapDispatchToProps = (dispatch) => ({
  userLogin:() =>{
    dispatch(postMiddleware())
  }
})



export default connect(mapStateToProps,mapDispatchToProps) (App);







// import React from 'react';
// import './App.css';
// import {connect} from 'react-redux';
// import { postMiddleware } from './store/middleware/postMiddleware';

// function App(props) {
//   console.log(props)
//   return (
//     <div className="App">
//       <h1>Redux Practise</h1>
//     </div>
//   );
// }


//  const mapStateToProps=(state)=>({
// ...state
// })

// const mapDispatchToProps = (dispatch) => ({
//   userLogin:() =>{
//     dispatch(postMiddleware())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps) (App);
