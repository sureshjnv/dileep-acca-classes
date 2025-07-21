import React from 'react';
import CourseCard from '../components/CourseCard';

const dummyCourses = [
  { title: 'Math Basics', description: 'For class 6-8', image: 'https://via.placeholder.com/250x150' },
  { title: 'Science Essentials', description: 'For class 9-10', image: 'https://via.placeholder.com/250x150' },
  { title: 'English Grammar', description: 'Foundation course', image: 'https://via.placeholder.com/250x150' },
];

function Courses() {
  return (
    <div className="courses">
      <h2 style={{ textAlign: 'center' }}>Our Courses</h2>
      <div className="course-grid">
        {dummyCourses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
