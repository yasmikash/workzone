import { Component } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";

import history from "../history";
import Home from "./Home";
import UserBadge from "./UserBadge";
import AdminSignUp from "./auth/AdminSignUp";
import AdminSignIn from "./auth/AdminSignIn";
import UserSignUp from "./auth/UserSignUp";
import UserSignIn from "./auth/UserSignIn";
import UserProfile from "./user/UserProfile";
import AdminProfile from "./user/AdminProfile";
import EditUser from "./user/EditUser";
import EditAdmin from "./user/EditAdmin";

import AddProject from "./project/AddProject";
import ProjectList from "./project/ProjectList";
import EditProject from "./project/EditProject";
import Project from "./project/Project";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <nav className="navbar navbar-light bg-light mb-5">
            <Link to="/" className="navbar-brand">
              WorkZone
            </Link>
            <div className="form-inline">
              <UserBadge />
            </div>
          </nav>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/admin/sign-up" component={AdminSignUp} />
            <Route path="/admin/sign-in" component={AdminSignIn} />
            <Route path="/user/sign-up" component={UserSignUp} />
            <Route path="/user/sign-in" component={UserSignIn} />
            <Route path="/user/edit/:username" component={EditUser} />
            <Route path="/admin/edit/:username" component={EditAdmin} />
            <Route path="/user/:username" component={UserProfile} />
            <Route path="/admin/:username" component={AdminProfile} />
            <Route path="/projects/add" component={AddProject} />
            <Route path="/projects/:name" component={Project} exact />
            <Route path="/projects" component={ProjectList} exact />
            <Route path="/projects/edit/:name" component={EditProject} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
