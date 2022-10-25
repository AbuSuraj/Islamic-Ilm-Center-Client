import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {id, name, image, details, fee, duration, instructor} = courseDetails;
    console.log(courseDetails)
    return (
        <div>
           <h2>coursedetails</h2> 
        </div>
    );
};

export default CourseDetails;