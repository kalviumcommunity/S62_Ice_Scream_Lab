import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <img
        src={user.profilePicture}
        alt={user.username}
        className="w-24 h-24 rounded-full mx-auto border-4 border-purple-600"
      />
      <h2 className="text-2xl font-bold mt-4 text-center">{user.username}</h2>
      <p className="text-gray-400 text-center">{user.email}</p>
      <div className="mt-4">
        <p><span className="text-purple-500 font-semibold">User ID:</span> {user._id}</p>
        <p><span className="text-purple-500 font-semibold">Joined:</span> {new Date(user.dateJoined).toLocaleDateString()}</p>
      </div>
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;