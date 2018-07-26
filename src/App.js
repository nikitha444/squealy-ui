import React, { Component } from 'react';
import './App.css';
// import LoginPage from './Components/LoginPage/Loginpage'
import MainComponent from './Components/MainComponent/MainComponent';
import QuerySection from './Components/QuerySection/QuerySection';

class App extends Component {
  render() {    
    return(
      <div className="Squealy">
        <MainComponent/>
      </div>
    );
  }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
}

export default App;
