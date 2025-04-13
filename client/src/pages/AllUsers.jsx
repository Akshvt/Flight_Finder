import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/AllUsers.css';

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await axios.get('http://localhost:6001/fetch-users').then(
      (response) => {
        setUsers(response.data);
      }
    )
  }

  return (
    <div className="all-users-page">
      <h2>All Users</h2>
      <div className="all-users">
        {users.filter(user => user.usertype === 'customer').map((user) => {
          return (
            <div className="user" key={user._id}>
              <p><b>UserId:</b> {user._id}</p>
              <p><b>Username:</b> {user.username}</p>
              <p><b>Email:</b> {user.email}</p>
            </div>
          )
        })}
      </div>

      <h2>Flight Operators</h2>
      <div className="all-users">
        {users.filter(user => user.usertype === 'flight-operator').map((user) => {
          return (
            <div className="user" key={user._id}>
              <p><b>Id:</b> {user._id}</p>
              <p><b>Flight Name:</b> {user.username}</p>
              <p><b>Email:</b> {user.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllUsers;
