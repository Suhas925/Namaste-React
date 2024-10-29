import {useState, useEffect} from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check if online
  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    })

    addEventListener("online", () => {
      setOnlineStatus(true);
    })
  }, []);

  // return the boolean value
  return onlineStatus
}
export default useOnlineStatus;