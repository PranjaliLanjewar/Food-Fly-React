import React,{useEffect, useState} from "react";
import Course from "./Course";
const AllFood=()=>{

    useEffect(()=>{
        document.title="All Food || Learn with Pranjali";
    },[]);

    const [courses, setcourse]=useState([
        {item:101, title:"java Course", description:"This is java course"},
        {item:102, title:"React Course", description:"This is React course"},
        {item:103, title:"NodeJs Course", description:"This is NodeJs course"}

    ])

    return (
        <div>
            <h1>All Food</h1>
            <p>List Of foods as follows</p>
            {courses.length>0
            ? courses.map((item) => <Course course={item} />)
            :"No Food"};
        </div>
    );
};
export default AllFood;