import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import API from "./utils/API";
import Search from "./components/Search";


function App() {
  // Employee array from API
  const [employeeArray, setEmployeeArray] = useState([])
  useEffect(() => {
    API.getUsers()
      .then(res => { setEmployeeArray(res.data.results) })
  }, [])
  const [search, setSearch] = useState("");
  return (
    <div>
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search handleInputChange={setSearch} searchValue={search} />
        {employeeArray.filter((val) => {
          if (search == "") {
            return val
          } else if (val.name.first.toLowerCase().includes(search.toLowerCase())) {
            return val
          }
        }).map((employee) => {
          return (
            <EmployeeCard
              firstName={employee.name.first}
              lastName={employee.name.last}
              image={employee.picture.medium}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.age}
            />
          );
        })}
        {employeeArray.map((employee) => {
          return <EmployeeCard
            firstName={employee.name.first}
            lastName={employee.name.last}
            image={employee.picture.medium}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob.age}
          />
        })}
      </Wrapper>
    </div>
  )
}

export default App;

