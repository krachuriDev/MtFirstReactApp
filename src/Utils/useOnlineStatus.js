import { useEffect, useState } from "react";

//the functionality of this hook is to return a boolean value which indicates the user online status.
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    function handleOnline() {
      setOnlineStatus(true);
    }

    function handleOffline() {
      setOnlineStatus(false);
    }

    return () => {
      //cleanup code comes here.
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
