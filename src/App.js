import React from "react";
import HomepageComponent from "./pages/homepage/homepage.component";
import {Link, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/shop/:id' component={Shop}/>
                <Route exact path='/' component={HomepageComponent}/>
            </Switch>
        </React.Fragment>
    );
}
const Shop = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Sample Page</h1>
            <Link to={'/'}>Go to Home</Link>
            <h2>{props.match.params.id}</h2>
        </div>
    )
}


export default App;
