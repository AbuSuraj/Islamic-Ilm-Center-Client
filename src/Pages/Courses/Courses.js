import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesHeading from './CoursesHeading/CoursesHeading';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-12 gap-2 ' >
            <div className='col-span-2   m-4'>
                <h2 className='text-2xl font-bold'>Our Courses</h2>
                <div className=''>
                    {
                        courses.map(course =><CoursesHeading
                        key={course.id}
                        course = {course}
                        ></CoursesHeading>)
                    }
                </div>
            </div>
            <div className='col-span-10   m-2 '>
                
            </div>
        </div>
    );
};

export default Courses;