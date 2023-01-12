// import logo from './logo.svg';
// import './App.css';
// import Loader from './components/Loader.jsx';
// import Header from './components/Header.jsx';
// import Carousel from './components/Carousel.jsx';
// import TextPrincipal from './components/TextPrincipal.jsx';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import LogIn from './components/LogIn.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <TextPrincipal></TextPrincipal>
//       <header className="App-header">
//         <Loader></Loader>
//         <LogIn></LogIn>
//       </header>
//       <Carousel></Carousel>
//       <div className="spatiu"></div>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path = "/" element = {<Header/>}/>
//           {/* <Route exact path = "/dashboard" element = {<Dashboard/>}/> */}
//           <Route exact path = "/login" element = {<LogIn/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StartPage from "./components/StartPage";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Upload from "./components/Upload";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  //this component creates the app routing system 

  render() {
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<StartPage/>}/>
          <Route exact path = "/login" element = {<LogIn/>}/>
          <Route exact path = "/register" element = {<Register/>}/>
          <Route exact path = "/cart" element = {<Cart/>}/>
          <Route exact path = "/upload" element = {<Upload/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;