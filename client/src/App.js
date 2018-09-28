import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactList from "./components/contacts/ContactList";
import ContactDetails from "./components/contact_details/ContactDetails";
import AddContact from "./components/addcontact/AddContact";
import EditContact from "./components/editcontact/EditContact";
import "./App.css";

const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={ContactList} />
      <Route path="/addcontact" component={AddContact} />
      <Route path="/contact/edit/:contactId" component={EditContact} />
      <Route path="/contact/:contactId" component={ContactDetails} />
    </Switch>
  </div>
);

export default App;
