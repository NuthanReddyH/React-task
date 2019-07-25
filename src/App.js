import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/container/HomePage/HomePageHooks";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CompanyDetails from "./components/presentational/CompanyDetails/CompanyDetails";

//Class components
// class App extends Component {
//   render() {
//     return (
//         <Provider store={store}>
//           <BrowserRouter>
//             <Switch>
//               <Route exact path="/" component={HomePage} />
//               <Route exact path="/details" component={CompanyDetails} />
//             </ Switch>
//         </BrowserRouter>
//         </Provider>
//     )
//   }
// }

//Hooks
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={CompanyDetails} />
        </ Switch>
    </BrowserRouter>
    </Provider>
  )
}
 export default App;