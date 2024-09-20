import React, { useEffect } from 'react';


const ProfileComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const Profiles=[
    {name:"Mudathir Mudathir",src:"src/images/a.jpeg",details:"I am a passionate and innovative developer with a focus on building sleek, responsive, and user-friendly web applications. From creating dynamic single-page applications to tackling complex UI/UX designs, I pay attention to detail and creativity which sets apart. I love integrating cutting-edge technology with clean code, ensuring seamless functionality. Whether developing e-commerce platforms, environmental sustainability projects, or empowering others through design, I bring a unique vision and technical expertise to every project.",dept:"Full-Stack Developer"},
    {name:"Balogun Jamal",src:"src/images/id.jpeg",details:" Passionate about creating beautiful, functional spaces that reflect each client's unique style.  With expertise in sustainable design and smart home integration, I bring innovation and elegance to every project. From cozy apartments to luxurious estates, my goal is to transform your vision into a stunning reality.",dept:"Interior Design Specialist"},
    {name:"Awele Benjamin", src:"src/images/userr.webp", details:"A versatile full-stack developer with a passion for building scalable and efficient web applications. My experience spans both frontend and backend technologies, with a strong focus on cloud-based solutions and modern web frameworks. I enjoy solving complex problems through clean code and thoughtful architecture, ensuring optimized performance and security across all projects.", dept:"Web Developer"},
    {name:"Udumma Divine", src:"src/images/in.jpg", details:"A creative graphic designer with a knack for crafting visually striking designs that communicate compelling stories. With experience in branding, UI/UX design, and digital illustration, I bring a blend of creativity and precision to each project. My aim is to translate client ideas into impactful visuals that resonate with their target audience.", dept:"Graphic Designer & UI/UX Designer"},
    {name: "Elemi Favour", src:"src/images/table.jpeg", details: "An experienced project manager with a talent for coordinating complex web development projects from concept to completion. Skilled in Agile methodologies and team collaboration, I ensure that every project is delivered on time, within scope, and meets the highest quality standards. My focus is on aligning business goals with technical execution to create seamless digital experiences.", dept: "Project Manager"}
    

  ]

  return (
    <>
    {Profiles.map((Profile,index)=>(
    <div className="container my-5" key={index}>
      <div className="row align-items-center bg-light rounded-3 shadow p-3 p-md-5">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div className="image-container hidden">
            <div className="rounded-circle bg-warning d-inline-flex align-items-center justify-content-center" style={{width: '200px', height: '200px',backgroundImage: `url(${Profile.src})`}}> 
                {/* There is suppose to be images in the profile.src so the peoples image would show but because of privacy and other reasons we chose not to put our pictures or any other one */}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="text-container hidden">
            <h2 className="fw-bold text-primary mb-3">~{Profile.name}</h2>
            <h4 className="text-secondary mb-3">{Profile.dept}</h4>
            <p className="lead text-muted">{Profile.details}</p>
          </div>
        </div>
      </div>
    </div>
     ))}
    </>
  );
};

export default ProfileComponent;