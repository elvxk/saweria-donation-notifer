import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const socketInstance = io("http://localhost:3000");
    setSocket(socketInstance);
    socketInstance.on("welcome", (data) => {
      console.log(data);
    });

    socketInstance.on("newDonation", (data) => {
      console.log(data);
      setDonations((prev) => [...prev, data]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center  min-h-screen">
        <h1 className="font-bold text-2xl">New Donation</h1>
        {donations &&
          donations.map((sawer, index) => {
            return (
              <ul key={index} className="flex flex-col border border-black p-4">
                <li>
                  {sawer.amount_raw} dari {sawer.donator_name}
                </li>
                <li>{sawer.message}</li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default App;
