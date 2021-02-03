import React from "react";

import "bulma/css/bulma.css";

import Navbar from "./navbar/Navbar";
import FormField from "./formfield/Formfield";
import CoolButton from "./coolbutton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton>Login</CoolButton>
    </div>
  );
};

export default App;
