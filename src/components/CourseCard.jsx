import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseCard;
