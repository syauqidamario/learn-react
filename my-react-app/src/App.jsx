import React from "react";

import Button from "./components/elements/button";

function App() {
  return (
  <div className="flex justify-center bg-blue-600 min-h-screen items-center">
    <div className="flex gap-x-2">
      <Button variant="bg-red-700" text="Login">Login</Button>
      <Button variant="bg-blue-700" text="Register">Register</Button>
      <Button variant="bg-slate-700" text="Logout">Logout</Button>
      <Button variant="bg-black">Register</Button>
    </div>
  </div>
  );
}


export default App;