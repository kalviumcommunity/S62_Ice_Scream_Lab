import React, { useEffect, useState } from "react";
import UserCard from "../components/Card.jsx";
import axios from 'axios';


const CardPage = () => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const getUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/get-users');
        console.log(response.data.data); 
        setUsers(response.data.data);
      } catch (er) {
        console.log("Failed to fetch the users", er);
      }
    };

    getUserData();
  },[])

  return (
    <div className="min-h-screen grid bg-gray-100 p-6  grid-cols-4 gap-4">
      {
        users.map((user, index) => {
          return <UserCard key={index} user={user} />
          })
      }
    </div>
  );
};

export default CardPage;
