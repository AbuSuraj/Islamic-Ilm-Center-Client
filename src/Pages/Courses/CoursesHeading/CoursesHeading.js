import React from "react";

const CoursesHeading = ({ course }) => {
  const { id, name } = course;
  console.log(course);
  return (
    <div>
      <button 
        style={{width:124}}
        type="button"
        className="text-xl border border-indigo-500 bg-blue-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        {name}
      </button>
    </div>
  );
};

export default CoursesHeading;
