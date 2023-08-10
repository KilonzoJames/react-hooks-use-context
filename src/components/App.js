import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserContext } from "./UserContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
       <UserContext.Provider value={user}>
      <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
      <Profile theme={theme} />
      </UserContext.Provider>
    </main>
  );
}

export default App;
