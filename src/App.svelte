<script>
  import { onMount, tick } from 'svelte';

  let text = "Christopher Mathew"; // Text to type out
  let displayedText = ""; // Text that will be progressively displayed
  let showEnding = false; // Controls the visibility of .ending

  // Typing effect function
  async function typeEffect() {
    for (let i = 0; i < text.length; i++) {
      displayedText += text[i];
      await tick(); // Wait for DOM to update
      await new Promise(resolve => setTimeout(resolve, 150)); // Adjust typing speed here
    }
    showEnding = true; // Show .ending after typing effect completes
  }

  onMount(() => {
    typeEffect();
  });

  onMount(() => {
    document.title = "Chris's Portfolio";
  });
</script>



<style>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    scroll-behavior: smooth;
  }

  .background-container {
    background-image: url('untitled.png'); /* Fallback image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
  }

  .background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    font-family: Arial, sans-serif;
    z-index: 1;
    position: absolute;
    width: 50vw;
    left: 15%;
    top: 0;
  }

  .intro {
    position: absolute;
    top: 45%;
    left: 19vw;
    width: 10vw;
    transform: translate(-50%, -50%);
    font-size: 1.5vw;
  }

  .name {
    position: absolute;
    top: 51vh;
    left: 19vw;
    font-size: 2.5vw;
    transform: translate(-50%, -50%);
  }

  .typing {
    border-right: 2px solid white;
    padding-right: 2px;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  .ending {
    position: absolute;
    top: 57%;
    left: 19vw;
    width: 20vw;
    transform: translate(-50%, -50%);
    font-size: 1.0vw;
    color: #bcbcbc;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .show {
    opacity: 1;
  }

  .nav-bar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    padding: 10px 30px;
    border-radius: 50px;
    display: flex;
    gap: 20px;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-bar a {
    text-decoration: none;
    color: #c5c5c5;
    font-weight: bold;
    padding: 5px 15px;
    font-size: 1vw;
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  .nav-bar a:hover {
    color: white;
    background-color: #333;
    border-radius: 20px;
  }

  .about, .experience, .projects, .contact {
    background-color: #040e1b;
    color: white;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    z-index: 1;
    position: absolute;
    left: 0;
  }

  .projects {
    background-color: #040e1b;
    color: white;
    height: 125vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    z-index: 1;
    position: absolute;
    left: 0;
  }

  .about { top: 100%; }
  .experience { top: 200%; }
  .projects { top: 300%; }
  .contact { top: 425%; }

  /* Box container and individual box styles for second section */
  .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    max-width: 1200px;
  }

  .box {
    background-color: #1a1a2e;
    color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: calc(25% - 20px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    height: 20vh;

  }

  .box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .box h3 {
    margin-top: 0;
    font-size: 1.5vw;
    color: #ffffff;
  }

  .box ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .box ul li {
    font-size: 1vw;
    margin-bottom: 5px;
  }

  .box a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5vw;
  }

  .box a:hover {
    text-decoration: underline;
  }

  .contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-header {
  font-size: 2vw;
  margin-bottom: 5vh;
  color: #ffffff;
}

/* Container for the social boxes */
.contact-boxes {
  display: flex;
  gap: 20px;
}

.contact .box .logo {
  width: 5vw; /* Adjust width as needed */
  height: auto;
}

/* Box styles for each social link */
.contact .box {
  width: 10vw;
  height: auto;
}

.box-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.box-link .box {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.box-link .box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}



/* About Section Layout */


.about {
  display: flex;
  flex-direction: column;
  gap: 5vh; /* Gap between text and boxes */
  padding: 40px;
  text-align: left;
  align-items: center;
  width: 100%; /* Ensures it doesn’t exceed the viewport width */
  box-sizing: border-box; /* Includes padding in the width */
  overflow-x: hidden; /* Hides any overflow in the horizontal direction */
}
.about-text {
  max-width: 60%; /* Controls the width of the text container */
  text-align: center;
}

.about-text h2 {
  font-size: 2vw;
  color: #ffcc00;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 1vw;
  line-height: 1.6;
  color: #c5c5c5;
}

/* Horizontally aligned boxes */
.about {
  display: flex;
  flex-direction: column;
  gap: 5vh; /* Gap between text and boxes */
  padding: 40px;
  text-align: left;
  align-items: center;
}

.about-boxes {
  display: flex;
  gap: 5vw; /* Space between the boxes */
  justify-content: center;
  width: 100%;
}

.about-boxes .box {
  width: 25vw; /* Fixed width for consistent sizing */
  background-color: #1a1a2e;
  height: 40vh;
  color: #bcbcbc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  aspect-ratio: 1; /* Maintains square aspect ratio */
}

.about-boxes .box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.about-boxes .box h3 {
  margin-top: 0;
  font-size: 1.5vw;
  color: #ffcc00;
}

.about-boxes .box ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.about-boxes .box ul li {
  font-size: 1vw;
  margin-bottom: 5px;
}


/* Education Section Layout */
.education-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.education-section h3 {
  font-size: 1.8vw;
  color: #ffcc00;
  margin-bottom: 2vh;
  text-align: center;
}

/* Center Education Entries */
.education-entry {
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
  gap: 20px;
  padding: 10px 0;
  width: 100%; /* Ensure it takes the full width of the box */
}

/* Logo and Text Centering */
.education-logo {
  width: 50px; /* Adjust logo size as needed */
  height: auto;
  flex-shrink: 0;
}

.education-details {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align text inside each entry */
}

.education-details h4 {
  font-size: 1.3vw;
  color: #ffffff;
  margin: 0;
  text-align: center;
}

.education-details p {
  font-size: 1vw;
  color: #c5c5c5;
  margin: 3px 0;
  text-align: center;
}

.education-year {
  font-style: italic;
  color: #a5a5a5;
  text-align: center;
}



/* Center and style the Skills heading */
.skills-section h3 {
  font-size: 1.5vw;
  color: #ffcc00;
  text-align: center;
  margin-bottom: 6vh; /* Reduce vertical padding */
}

/* Style for subsections within the Skills box */
.skills-subsection {
  width: 100%; /* Full width for consistency */
  text-align: left; /* Align subsections to the left */
}

.skills-subsection h4 {
  font-size: 1.2vw;
  color: #ffffff;
  margin-bottom: 1vh; /* Reduce padding between heading and content */
}

.skills-subsection p {
  font-size: 1vw;
  color: #c5c5c5;
  margin: 0;
  line-height: 1.5;
}


/* Centered Experience Section */
.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0; /* Vertical padding */
  text-align: center;
  overflow-x: hidden; /* Prevent horizontal overflow */
  width: 100%;
  box-sizing: border-box;
}

/* Experience Title Styling */
.experience-title {
  margin-bottom: 20px;
}

.experience-title h2 {
  font-size: 2vw;
  color: #ffcc00;
  margin: 0;
}

/* Centered Experience Boxes */
.experience-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 80vw; /* Restrict max width to prevent overflow */
}

.experience-box {
  background-color: #1a1a2e;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 100%; /* Responsive width */
  max-width: 700px; /* Control max width for larger screens */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-box h3 {
  font-size: 1.5vw;
  color: #ffffff;
  margin-bottom: 8px;
}

.experience-box p {
  font-size: 1vw;
  margin: 5px 0;
}

/* Experience List Styling */
.experience-box ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left; /* Left-aligns the list items */
  width: 90%; /* Ensures alignment within the box */
}

.experience-box ul li {
  font-size: 0.9vw;
  margin-bottom: 5px;
  color: #c5c5c5;
}

.experience-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}




.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0; /* Adjusts top and bottom padding */
  width: 100%;
  box-sizing: border-box;
}

/* Project Container and Box Styling */
.project-container {
  display: grid;
  gap: 30px; /* Space between project boxes */
  grid-template-columns: repeat(3, 1fr); /* Ensures only 3 boxes per row */
  width: 90%;
  max-width: 1200px;
}

.project-box {
  position: relative;
  background-color: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Blurred background banner */
.project-banner {
  width: 100%;
  height: 25vh;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
  filter: blur(3px);
  transition: filter 0.3s ease;
}

.project-box:hover .project-banner {
  filter: blur(0);
}

/* Overlay title */
.project-title {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5vw;
  font-weight: bold;
  color: #ffcc00;
  z-index: 2;
}

/* Rest of the project content */
.project-description {
  font-size: 1vw;
  color: #c5c5c5;
  margin: 15px 0;
  text-align: center;
}

.github-link {
  color: #ffcc00;
  background-color: #333;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9vw;
  transition: background-color 0.3s;
}

.github-link:hover {
  background-color: #ffcc00;
  color: #333;
}






  @media (max-width: 1024px) {
    .box {
      width: calc(33.33% - 20px);
    }
  }

  @media (max-width: 768px) {
    .box {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 480px) {
    .box {
      width: 100%;
    }
  }
  
  
</style>

<!-- Capsule Navigation Bar -->
<div class="nav-bar">
  <a href="#content">Home</a>
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>

<!-- First section with full-screen background and typing effect -->
<div class="background-container">
  <video autoplay muted loop playsinline class="background-video">
    <source src="background-video.mp4" type="video/mp4" />
  </video>
</div>

<div id="content" class="content">
  <span class="intro">Hi I'm</span>
  <div class="name">
    <span>{displayedText}</span><span class="typing"></span>
  </div>
  <span class="ending" class:show={showEnding}>Biomedical Engineer | Data Engineer</span>
</div>

<!-- Second section with boxes for skills, projects, interests, and contact -->
<div id="about" class="about">
  <div class="about-text">
    <h2>About Me</h2>
    <p>
      I am a Biomedical Engineer and Data Engineer passionate about advancing technology and applying data science to real-world problems. I have experience in machine learning, data analysis, and various engineering projects, always aiming to make impactful contributions.
    </p>
  </div>

  <!-- Education Section with Title and Entries -->
  <div class="about-boxes">
    <div class="box education-section">
      <h3>Education</h3>
      <!-- First University Entry -->
      <div class="education-entry">
        <img src="imperial.png" alt="University Logo" class="education-logo" />
        <div class="education-details">
          <h4>MSc Biomedical Engineering</h4>
          <p>Imperial College London</p>
          <p class="education-year">2023 - 2024</p>
        </div>
      </div>
      <!-- Second University Entry -->
      <div class="education-entry">
        <img src="birmingham.png" alt="University Logo" class="education-logo" />
        <div class="education-details">
          <h4>BEng Mechanical Engineering</h4>
          <p>University of Birmingham</p>
          <p class="education-year">2020 - 2023</p>
        </div>
      </div>
    </div>

    <!-- Skills Section with Subsections -->
<div class="box skills-section">
  <h3>Skills</h3>
  <div class="skills-subsection">
    <h4>Languages/Frameworks:</h4>
    <p>Python, MATLAB, Java, C, SQL, Verilog, CUDA, Git, PyTorch, Pandas, SolidWorks, OpenGL</p>
  </div>
  <div class="skills-subsection">
    <h4>Areas:</h4>
    <p>AI, Machine Learning, Data Analytics, Data Science, Deep Learning, Databases, Agile, GitHub, Azure, API, Office, Object-oriented Programming</p>
  </div>
</div>

  </div>
</div>


<!-- Third section as placeholder -->

<div id="experience" class="experience">
  <!-- Experience Title -->
  <div class="experience-title">
    <h2>Experience</h2>
  </div>

  <!-- Centered Experience Boxes -->
  <div class="experience-boxes">
    <div class="experience-box">
      <h3>Data Engineer Intern</h3>
      <p>ROSEN | July 2022 - Sept 2022</p>
      <ul>
        <li>• Worked in the world’s leading inspection engineering provider for the energy sector</li>
        <li>•	Created a Power BI dashboard for C-suite clients using processed data and GIS</li>
        <li>•	Built a data management portal for Data Scientists and Engineers</li>
        <li>•	Constructed data and ETL pipelines to automate the flow and analysis of data, saving an engineer up to a month in data processing</li>
        <li>•	Incorporated materialized views to boost processing speeds by 40 times</li>
        <li>•	Programmed an API for Data Scientists to automate SQL tasks, increasing efficiency</li>
      </ul>
    </div>
    <div class="experience-box">
      <h3>YMB Board Member</h3>
      <p>Institution of Mechanical Engineers | July 2024 - Present</p>
      <ul>
        <li>•	Served on the Young Members Board of the world's largest mechanical engineering institution of 115k members</li>
        <li>•	Represented the Safety and Reliability Engineering Division on the board</li>
      </ul>
    </div>
  </div>
</div>





<div id="projects" class="projects">
  <div class="experience-title">
    <h2>Projects</h2>
  </div>
  
  <div class="project-container">
    <div class="project-box">
      <div class="project-banner" style="background-image: url('Brain.png');"></div>
      <h3 class="project-title">Deep Learning for Brain Age Prediction</h3> <!-- Title outside the banner for overlay effect -->
      <p class="project-description">This project investigates using Graph Neural Networks (GNNs) combined with MRI data to improve brain age prediction.</p>
      <a href="https://msc-project.chris-mathew.com/" target="_blank" class="github-link">Demo</a>
    </div>

    <div class="project-box">
      <div class="project-banner" style="background-image: url('Poster.PNG');"></div>
      <h3 class="project-title">Toolkit for Electron Spin Resonance</h3> <!-- Title outside the banner for overlay effect -->
      <p class="project-description">This project involves creating a model to simulate coherence time in quantum computing, using quantum-specific materials that support stable qubit superposition.</p>
    </div>

    <div class="project-box">
      <div class="project-banner" style="background-image: url('Train.png');"></div>
      <h3 class="project-title">Maglev-Based Railway Track Switch</h3> <!-- Another title outside the banner -->
      <p class="project-description">A mathematical model and simulation of a novel Maglev track-switch to enhance stability and efficiency.</p>
      
    </div>

    <div class="project-box">
      <div class="project-banner" style="background-image: url('Breast.png');"></div>
      <h3 class="project-title">AI Breast Cancer Screening System</h3> <!-- Title outside the banner for overlay effect -->
      <p class="project-description">Developed an AI model using DenseNet, Streamlit, and SQL to classify breast cancer images into BI-RADS categories, achieving over 70% accuracy.</p>
      <a href="https://github.com/chris-mathew/Breast_Cancer_Masking" target="_blank" class="github-link">View on GitHub</a>
    </div>

    <div class="project-box">
      <div class="project-banner" style="background-image: url('Neural.png');"></div>
      <h3 class="project-title">ML algorithm for a Brain-machine Interface</h3> <!-- Title outside the banner for overlay effect -->
      <p class="project-description">Developed a MATLAB algorithm predicting hand position from neural activity, achieving a top-5 RMSE score of 13 in competition.</p>
      <a href="https://github.com/chris-mathew/BMI_Project" target="_blank" class="github-link">View on GitHub</a>
    </div>
  
    <!-- Add more project-boxes with unique images -->
  </div>
</div>






<div id="contact" class="contact">
  <div class="contact-header">
    Let's Connect!
  </div>
  <div class="contact-boxes">
    <a href="https://www.linkedin.com/in/chris-mathew3/" target="_blank" class="box-link">
      <div class="box">
        <img src="linkedin.png" alt="LinkedIn Logo" class="logo" />
        <ul>
          <li>LinkedIn</li>
        </ul>
      </div>
    </a>
    <a href="mailto:chris.mathew23@imperial.ac.uk" target="_blank" class="box-link">
      <div class="box">
        <img src="email2.png" alt="GitHub Logo" class="logo" />
        <ul>
          <li>Email</li>
        </ul>
      </div>
    </a>
    <a href="https://github.com/chris-mathew" target="_blank" class="box-link">
      <div class="box">
        <img src="github.png" alt="Twitter Logo" class="logo" />
        <ul>
          <li>Github</li>
        </ul>
      </div>
    </a>
  </div>
</div>