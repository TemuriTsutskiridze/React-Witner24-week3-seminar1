import { useState } from "react";
import data from "./data.json";
import Notification from "./components/notification/Notification";
import Starter from "./components/starter/Starter";

import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <Starter
        notifications={notifications}
        setNotifications={setNotifications}
      />
      <main className="main">
        {notifications.map((notification) => {
          return (
            <Notification
              notification={notification}
              key={notification.id}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
