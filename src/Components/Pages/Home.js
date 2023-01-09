import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './Home.css'   



function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        
        localStorage.setItem("users", JSON.stringify(data.results));
        
        setUsers(data.results);
        
        toast.success("Data fetched successfully!");
      });
  };

  const deleteUsers = () => {
    
    localStorage.clear();
    
    setUsers([]);
    
    toast.warning("All users deleted successfully!");
  };

  return (
    <div>
      <div className="logo"> <img  src="./logo512.png " style={{width:'15vw'}} alt="" /> </div>
      <button  className="btn btn-primary mx-3 my-2" onClick={fetchUsers}>Fetch Users</button>
      <Link to="/Users">
        <button className="btn btn-primary mx-3 my-2">User Details</button>
      </Link>
      <button className="btn btn-primary mx-3 my-2" onClick={deleteUsers}>Delete Users</button>
      <ToastContainer />
    </div>
  );
}
export default Home;