import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [data,setData]= useState('');
  // const [filter, setFilter] = useState([])

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);
  //  useEffect(()=>{
  //   const result=users.filter((x)=>{
  //     return x.toLowerCase().match(search.toLowerCase())
  //   });
  //   setFilter(...filter, result);
  //  },[search])
  const handleReset = () => {};
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://randomuser.me/api/?results=100?=${search}`)
      .then((res) => { 
        setData(res.data);
        setSearch('');
  })
  .catch((err)=> console.log(err))

  };

  return (
    <>
      <h3></h3>
      <MDBContainer>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search Name ...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MDBBtnGroup>
            <MDBBtn type="submit" color="dark">
              Search
            </MDBBtn>
            <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
              Reset
            </MDBBtn>
          </MDBBtnGroup>
        </form>

        <div className={{ marginTop: "100px" }}>
          <h2></h2>
          <MDBRow>
            <MDBCol size="12px">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">State</th>
                    <th scope="col">city</th>
                    <th scope="col">picture</th>
                  </tr>
                </MDBTableHead>
                {users.length === 0 ? (
                  <MDBTableBody className="align-center md-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0"></td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  users.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          {item.name.first} {item.name.last}
                        </td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.location.state}</td>
                        <td>{item.location.city}</td>
                        <td>
                          <img src={item.picture.medium} alt="" />
                        </td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>

      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}
export default Users;
