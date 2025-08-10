import React, { useState } from 'react';

const bestCourses = [
	{
		title: 'SBL Masterclass',
		price: '₹2999',
		image:
			'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
		description: 'Comprehensive SBL answer writing strategies with live feedback.',
		highlights: [
			'20+ Practice Questions',
			'10 Sample Answers',
			'2 Mock Exams',
			'Live Doubt Support',
			'Personal Feedback',
		],
	},
	{
		title: 'ACCA Exam Prep',
		price: '₹2499',
		image:
			'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
		description: 'Intensive preparation for ACCA exams with expert guidance.',
		highlights: [
			'15+ Exam Questions',
			'8 Sample Answers',
			'2 Mock Exams',
			'WhatsApp Support',
			'Exam Strategies',
		],
	},
	{
		title: 'Business Leader Bootcamp',
		price: '₹1999',
		image:
			'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
		description: 'Practical business leadership skills for future professionals.',
		highlights: [
			'12 Case Studies',
			'5 Sample Projects',
			'1 Mock Interview',
			'Career Guidance',
			'Support Group',
		],
	},
];

function Home() {
	const [hovered, setHovered] = useState(null);

	return (
		<div className="home">
			{/* Contact Options */}
			<div
				className="contact-options"
				style={{
					position: 'absolute',
					top: '20px',
					right: '20px',
					display: 'flex',
					gap: '16px',
					zIndex: 10,
				}}
			>
				{/* WhatsApp */}
				<a
					href="https://wa.me/918919810267"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: 'none' }}
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
						alt="WhatsApp"
						style={{
							width: '30px',
							height: '30px',
							filter: 'drop-shadow(0 2px 8px #25d366)',
							transition: 'transform 0.2s',
						}}
						onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
						onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
					/>
				</a>
				{/* YouTube */}
				<a
					href="https://youtube.com/@dileepacca"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: 'none' }}
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
						alt="YouTube"
						style={{
							width: '30px',
							height: '30px',
							filter: 'drop-shadow(0 2px 8px #ff0000)',
							transition: 'transform 0.2s',
							borderRadius: '4px',
							background: '#fff',
						}}
						onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
						onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
					/>
				</a>
				{/* LinkedIn */}
				<a
					href="https://www.linkedin.com/in/dileepnagiri/"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: 'none' }}
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
						alt="LinkedIn"
						style={{
							width: '30px',
							height: '30px',
							filter: 'drop-shadow(0 2px 8px #0077b5)',
							transition: 'transform 0.2s',
							borderRadius: '4px',
							background: '#fff',
						}}
						onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
						onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
					/>
				</a>
			</div>

			{/* Intro Section */}
			<section
				className="intro-section"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '60px 20px',
					background: 'linear-gradient(90deg, #005f73 60%, #fff 100%)',
					borderRadius: '16px',
					boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
					margin: '40px auto',
					maxWidth: '900px',
					animation: 'fadeIn 1.2s ease',
				}}
			>
				<div
					style={{
						flex: 1,
						color: '#fff',
						paddingRight: '40px',
						animation: 'slideRight 1s ease',
					}}
				>
					<h1
						style={{
							fontSize: '2.5rem',
							fontWeight: 'bold',
							marginBottom: '20px',
							letterSpacing: '1px',
							lineHeight: '1.2',
							textShadow: '0 2px 8px rgba(0,0,0,0.12)',
						}}
					>
						Learn SBL Answer Writing
						<br />
						with{' '}
						<span style={{ color: '#ffd166' }}>Dileep Chandra</span>
					</h1>
					<p
						style={{
							fontSize: '1.2rem',
							marginBottom: '10px',
							opacity: 0.9,
						}}
					>
						Master the art of Strategic Business Leader answer writing with
						expert guidance, practical tips, and live feedback.
					</p>
				</div>
				<div
					style={{
						flex: '0 0 260px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						animation: 'slideLeft 1s ease',
					}}
				>
					<img
						src="https://cdn.pixabay.com/photo/2024/09/12/21/20/ai-generated-9043367_1280.png"
						alt="Instructor Dileep Chandra"
						style={{
							width: '220px',
							height: '220px',
							objectFit: 'cover',
							borderRadius: '50%',
							boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
							border: '6px solid #ffd166',
							background: '#fff',
						}}
					/>
				</div>
			</section>

			{/* Courses Section */}
			<section
				className="best-courses"
				style={{
					margin: '48px auto',
					maxWidth: '1000px',
					textAlign: 'center',
					animation: 'fadeIn 1.5s ease',
				}}
			>
				<h2
					style={{
						fontSize: '2rem',
						fontWeight: 'bold',
						marginBottom: '32px',
						color: '#005f73',
						letterSpacing: '1px',
					}}
				>
					Our Best Courses
				</h2>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '32px',
						flexWrap: 'nowrap',
						overflowX: 'auto',
						paddingLeft: '32px',
						paddingRight: '32px',
					}}
				>
					{bestCourses.map((course, idx) => (
						<div
							key={course.title}
							className="course-card"
							style={{
								background: 'rgba(255,255,255,0.7)',
								borderRadius: '16px',
								boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
								maxWidth: '280px',
								padding: '24px',
								transition: 'transform 0.3s, box-shadow 0.3s',
								animation: `popIn 0.7s ${0.2 + idx * 0.2}s both`,
								cursor: 'pointer',
								minWidth: '260px',
								position: 'relative',
								overflow: 'hidden',
								backdropFilter: 'blur(2px)',
								marginLeft: idx === 0 ? '0' : undefined,
								marginRight:
									idx === bestCourses.length - 1 ? '0' : undefined,
							}}
							onMouseEnter={() => setHovered(idx)}
							onMouseLeave={() => setHovered(null)}
						>
							<img
								src={course.image}
								alt={course.title}
								style={{
									width: '100%',
									height: '160px',
									objectFit: 'cover',
									borderRadius: '12px',
									marginBottom: '18px',
									boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
									filter: hovered === idx ? 'blur(2px) brightness(0.8)' : 'none',
									transition: 'filter 0.3s',
								}}
							/>
							<h3
								style={{
									fontSize: '1.3rem',
									fontWeight: 'bold',
									marginBottom: '8px',
									color: '#005f73',
									opacity: hovered === idx ? 0.3 : 1,
									transition: 'opacity 0.3s',
								}}
							>
								{course.title}
							</h3>
							<p
								style={{
									fontSize: '1rem',
									marginBottom: '12px',
									color: '#333',
									opacity: hovered === idx ? 0.3 : 1,
									transition: 'opacity 0.3s',
								}}
							>
								{course.description}
							</p>
							<div
								style={{
									fontWeight: 'bold',
									color: '#ffd166',
									fontSize: '1.1rem',
									marginBottom: '6px',
									opacity: hovered === idx ? 0.3 : 1,
									transition: 'opacity 0.3s',
								}}
							>
								{course.price}
							</div>
							<button
								style={{
									padding: '8px 20px',
									background: '#005f73',
									color: '#fff',
									border: 'none',
									borderRadius: '8px',
									cursor: 'pointer',
									fontWeight: 'bold',
									transition: 'background 0.2s',
									opacity: hovered === idx ? 0.3 : 1,
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.background = '#0a9396')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.background = '#005f73')
								}
							>
								Enroll Now
							</button>
							{/* Highlights Overlay */}
							{hovered === idx && (
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										background: 'rgba(0,95,115,0.85)',
										color: '#fff',
										borderRadius: '16px',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										padding: '24px',
										animation: 'fadeInOverlay 0.4s',
										zIndex: 2,
										backdropFilter: 'blur(4px)',
									}}
								>
									<h4
										style={{
											fontSize: '1.2rem',
											marginBottom: '12px',
											color: '#ffd166',
											animation: 'slideDown 0.5s',
										}}
									>
										Course Highlights
									</h4>
									<ul
										style={{
											listStyle: 'none',
											padding: 0,
											margin: 0,
											animation: 'fadeInList 0.7s',
										}}
									>
										{course.highlights.map((item, i) => (
											<li
												key={i}
												style={{
													marginBottom: '8px',
													fontSize: '1rem',
													textAlign: 'left',
													animation: `fadeInItem 0.5s ${i * 0.1}s both`,
												}}
											>
												• {item}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					))}
				</div>
			</section>

			{/* Testimonials Section */}
			<section
				className="testimonials-section"
				style={{
					margin: '56px auto',
					maxWidth: '1100px',
					padding: '0 24px',
					textAlign: 'center',
				}}
			>
				<h2
					style={{
						fontSize: '2rem',
						fontWeight: 'bold',
						marginBottom: '32px',
						color: '#005f73',
						letterSpacing: '1px',
					}}
				>
					Student Testimonials
				</h2>
				<div
					className="testimonials-scroll"
					style={{
						overflow: 'hidden',
						position: 'relative',
						width: '100%',
						height: '260px',
						margin: '0 auto',
						borderRadius: '18px',
						boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
						background: 'rgba(255,255,255,0.6)',
						backdropFilter: 'blur(2px)',
					}}
				>
					<div
						id="testimonial-track"
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '40px',
							height: '100%',
							animation: 'scrollTestimonials 30s linear infinite',
							willChange: 'transform',
						}}
						onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
						onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
					>
						{/* Testimonial cards */}
						{[
							{
								name: 'Aarav Sharma',
								img: 'https://randomuser.me/api/portraits/men/32.jpg',
							},
							{
								name: 'Priya Verma',
								img: 'https://randomuser.me/api/portraits/women/44.jpg',
							},
							{
								name: 'Rohan Patel',
								img: 'https://randomuser.me/api/portraits/men/65.jpg',
							},
							{
								name: 'Sneha Rao',
								img: 'https://randomuser.me/api/portraits/women/68.jpg',
							},
							{
								name: 'Aditya Singh',
								img: 'https://randomuser.me/api/portraits/men/76.jpg',
							},
							{
								name: 'Meera Joshi',
								img: 'https://randomuser.me/api/portraits/women/21.jpg',
							},
							{
								name: 'Vikram Desai',
								img: 'https://randomuser.me/api/portraits/men/41.jpg',
							},
							{
								name: 'Anjali Nair',
								img: 'https://randomuser.me/api/portraits/women/55.jpg',
							},
						].map((student, idx) => (
							<div
								key={student.name + idx}
								className="testimonial-card"
								style={{
									width: '180px',
									minWidth: '180px',
									height: '220px',
									background: 'rgba(255,255,255,0.85)',
									borderRadius: '16px',
									boxShadow: '0 2px 12px rgba(0,95,115,0.08)',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									padding: '18px 12px',
									position: 'relative',
									transition: 'transform 0.3s',
									animation: `popIn 0.7s ${0.2 + idx * 0.1}s both`,
								}}
							>
								<img
									src={student.img}
									alt={student.name}
									style={{
										width: '100px',
										height: '100px',
										objectFit: 'cover',
										borderRadius: '50%',
										boxShadow: '0 2px 12px rgba(0,95,115,0.15)',
										marginBottom: '18px',
										border: '4px solid #ffd166',
										background: '#fff',
										transition: 'transform 0.3s',
									}}
								/>
								<div
									style={{
										fontWeight: 'bold',
										fontSize: '1.1rem',
										color: '#005f73',
										marginBottom: '8px',
										letterSpacing: '0.5px',
									}}
								>
									{student.name}
								</div>
								<div
									style={{
										fontSize: '0.95rem',
										color: '#333',
										opacity: 0.8,
										fontStyle: 'italic',
									}}
								>
									"Great learning experience!"
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Animation keyframes */}
			<style>
				{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.8);}
            80% { opacity: 1; transform: scale(1.05);}
            100% { opacity: 1; transform: scale(1);}
          }
          @keyframes fadeInOverlay {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInList {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          @keyframes fadeInItem {
            from { opacity: 0; transform: translateX(-10px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes scrollTestimonials {
            0% { transform: translateX(0);}
            100% { transform: translateX(-50%);}
          }
        `}
			</style>
		</div>
	);
}

export default Home;
