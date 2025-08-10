import React from 'react';

// Dummy user access (replace with real auth logic)
const userHasAccess = false; // Change to true to simulate access

const videos = [
  {
    id: 1,
    title: 'Sample Video: SBL Strategy',
    url: 'https://www.youtube.com/embed/2lAe1cqCOXo', // public sample video
    isSample: true,
  },
  {
    id: 2,
    title: 'Advanced SBL Techniques',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isSample: false,
  },
  {
    id: 3,
    title: 'Mock Exam Walkthrough',
    url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    isSample: false,
  },
];

function CourseVideos() {
  return (
    <div style={{
      maxWidth: 900,
      margin: '40px auto',
      padding: '24px',
      background: 'rgba(255,255,255,0.8)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,95,115,0.10)',
      backdropFilter: 'blur(2px)',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '32px',
        color: '#005f73',
        letterSpacing: '1px',
      }}>
        Course Videos
      </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center'
      }}>
        {videos.map((video, idx) => (
          <div key={video.id} style={{
            width: '100%',
            maxWidth: 700,
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,95,115,0.08)',
            padding: '18px',
            marginBottom: '8px',
            animation: `popIn 0.7s ${0.2 + idx * 0.1}s both`
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              color: video.isSample ? '#0a9396' : '#005f73',
              marginBottom: '12px'
            }}>
              {video.title} {video.isSample && <span style={{color:'#ffd166', fontWeight:'bold'}}> (Free Sample)</span>}
            </h3>
            {(video.isSample || userHasAccess) ? (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px'
                  }}
                />
              </div>
            ) : (
              <div style={{
                color: '#888',
                fontSize: '1rem',
                padding: '32px 0'
              }}>
                <span role="img" aria-label="lock" style={{fontSize:'2rem'}}>🔒</span>
                <br />
                This video is available only for enrolled users.
              </div>
            )}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.8);}
            80% { opacity: 1; transform: scale(1.05);}
            100% { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
}

export default CourseVideos;