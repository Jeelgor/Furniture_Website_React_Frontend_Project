import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginData = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        // Add other fields as needed
    });
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
        console.log("Logout clicked");
    };


    useEffect(() => {
        // Fetch registered user data
        axios
            .get("http://localhost:3011/admin/users")
            .then((response) => setRegisteredUsers(response.data))
            .catch((error) => console.error(error));
    }, []);


    const handleDeleteUser = (userId) => {
        axios
            .delete(`http://localhost:3011/admin/users/${userId}`)
            .then(() => {
                const updatedUsers = registeredUsers.filter(
                    (user) => user._id !== userId
                );
                setRegisteredUsers(updatedUsers);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="container mx-auto p-4">
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-[90vw]"
            >
                LogOut
            </button>
            {/* Display registered user data */}
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {registeredUsers.map((user) => (
                    <li key={user._id} className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-lg font-semibold mb-2">Name: {user.name}</p>
                        <p className="text-gray-600">Email: {user.email}</p>
                        {/* Add other fields as needed */}
                        <div className="mt-4 space-x-2">

                            <button
                                onClick={() => handleDeleteUser(user._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Delete User
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoginData;
