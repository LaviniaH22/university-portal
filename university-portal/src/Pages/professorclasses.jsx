import { Link } from "react-router";
import { useState } from 'react'
import {useEffect} from 'react'
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function ProfessorClasses() {
    const [pssn, setPssn] = useState('');
    let waitIndicator = document.querySelector('p[name="waitidacator"]');
    let passedvalue;
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        //store the value of the input field in a variable
        setPssn(e.target.elements.pssn.value);
        //created formmated to pass to the backend
        passedvalue = "pc " + pssn;
        //update the wait indicator to show that the search is in progress
        waitIndicator.textContent = "Searching...";
        //pass the value to the backend
        handleCallnResponse(passedvalue);
    }
    const handleCallnResponse=(query)=>{
        let classTable = document.querySelector('.classesTable tbody');
        let numrows = 1;
        //sample data json
        let sampleData = [
            {
                courseTitle: "Example Course",
                room: "Room 101",
                days: "MW",
                times: "9:00 AM - 10:00 AM"
            }
        ];
        //inplace of php call an alert.
        alert(`Query sent to backend: ${query}`)
        //map the response to the table
        classTable.innerHTML = ""; // Clear existing rows
        // Populate the table with new data (example)
        for (let i = 0; i < numrows; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sampleData[i].courseTitle}</td>
                <td>${sampleData[i].room}</td>
                <td>${sampleData[i].days}</td>
                <td>${sampleData[i].times}</td>
            `;
            classTable.appendChild(row);
        }
        // Update the wait indicator
        waitIndicator.textContent = "";
    }
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Find Professors' Classes</h1>
        <form className="searchBar" onSubmit={handleSubmit}>
            <p> Professor's SSN</p>
            <input type="text" placeholder="XXX-XX-XXXX" name="pssn" pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: ###-##-####")}/>
            <button type="submit">Search Classes</button>
            <p name="waitidacator"></p>
        </form>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Course Title</th>
                    <th>Room</th>
                    <th>Days</th>
                    <th>Times</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows would be populated with class data */}
            </tbody>
        </table>
    </main>
);
}

export default ProfessorClasses;
