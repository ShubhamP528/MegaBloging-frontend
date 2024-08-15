// App.js
import React from "react";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-90 w-90 bg-gray-100  flex-col my-5 p-6 flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;
