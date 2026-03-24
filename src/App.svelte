<script>
  import { onMount, tick } from 'svelte';

  let text = "Christopher Mathew";
  let displayedText = "";
  let showEnding = false;

  let isMobile = false;
  let isPortrait = false;
  let showFull = true;
  let mobileNotice = "";

  async function typeEffect() {
    for (let i = 0; i < text.length; i++) {
      displayedText += text[i];
      await tick();
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    showEnding = true;
  }

  function computeFlags() {
    const ua = (navigator.userAgent || navigator.vendor || "").toLowerCase();
    isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua);
    isPortrait = window.matchMedia && window.matchMedia("(orientation: portrait)").matches;

    showFull = !(isMobile && isPortrait);
    mobileNotice = showFull
      ? ""
      : "For the best experience, please use a desktop or rotate your device to landscape.";
  }

  onMount(() => {
    document.title = "Chris's Portfolio";
    computeFlags();

    window.addEventListener("resize", computeFlags);
    window.addEventListener("orientationchange", computeFlags);

    return () => {
      window.removeEventListener("resize", computeFlags);
      window.removeEventListener("orientationchange", computeFlags);
    };
  });

  $: if (showFull && displayedText.length === 0) {
    typeEffect();
  }

  onMount(() => document.querySelector('video')?.play().catch(() => {}));
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: #040e1b;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: Arial, sans-serif;
    background-color: #040e1b;
  }

  .page {
    width: 100%;
    overflow-x: hidden;
  }

  .hero {
    position: relative;
    min-height: 100vh;
    width: 100%;
  }

  .background-container {
    background-image: url('untitled.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .background-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    z-index: 1;
    position: relative;
    width: 50vw;
    left: 15%;
  }

  .intro {
    font-size: 1.5vw;
    margin-bottom: 1vh;
  }

  .name {
    font-size: 2.5vw;
    margin-bottom: 1vh;
  }

  .typing {
    border-right: 2px solid white;
    padding-right: 2px;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }

  .ending {
    width: 20vw;
    font-size: 1vw;
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
    z-index: 10;
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

  .about,
  .experience,
  .projects,
  .contact {
    background-color: #040e1b;
    color: white;
    width: 100%;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }

  .about,
  .experience,
  .contact {
    min-height: 100vh;
  }

  .projects {
    min-height: 125vh;
  }

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
    box-sizing: border-box;
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

  .about {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    padding: 80px 40px;
    text-align: left;
    align-items: center;
    overflow-x: hidden;
  }

  .about-text {
    max-width: 60%;
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

  .about-boxes {
    display: flex;
    gap: 5vw;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .about-boxes .box {
    width: 25vw;
    min-width: 300px;
    background-color: #1a1a2e;
    min-height: 40vh;
    height: auto;
    color: #bcbcbc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    aspect-ratio: 1;
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

  .education-entry {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px 0;
    width: 100%;
  }

  .education-logo {
    width: 50px;
    height: auto;
    flex-shrink: 0;
  }

  .education-details {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .skills-section h3 {
    font-size: 1.5vw;
    color: #ffcc00;
    text-align: center;
    margin-bottom: 6vh;
  }

  .skills-subsection {
    width: 100%;
    text-align: left;
  }

  .skills-subsection h4 {
    font-size: 1.2vw;
    color: #ffffff;
    margin-bottom: 1vh;
  }

  .skills-subsection p {
    font-size: 1vw;
    color: #c5c5c5;
    margin: 0;
    line-height: 1.5;
  }

  .experience {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    text-align: center;
    overflow: visible;
  }

  .experience-title {
    margin-bottom: 20px;
  }

  .experience-title h2 {
    font-size: 2vw;
    color: #ffcc00;
    margin: 0;
  }

  .experience-boxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 80vw;
  }

  .experience-box {
    background-color: #1a1a2e;
    color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 700px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
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

  .experience-box ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: left;
    width: 90%;
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
    padding: 80px 20px;
  }

  .project-container {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
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

  .project-title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5vw;
    font-weight: bold;
    color: #ffcc00;
    z-index: 2;
    width: 90%;
    text-align: center;
  }

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

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 20px;
  }

  .contact-header {
    font-size: 2vw;
    margin-bottom: 5vh;
    color: #ffffff;
  }

  .contact-boxes {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact .box .logo {
    width: 5vw;
    height: auto;
  }

  .contact .box {
    width: 10vw;
    min-width: 120px;
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

  @media (max-width: 1024px) {
    .box {
      width: calc(33.33% - 20px);
    }

    .project-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .box {
      width: calc(50% - 20px);
    }

    .project-container {
      grid-template-columns: 1fr;
    }

    .content {
      width: 70vw;
      left: 10%;
      padding-left: 0;
    }

    .intro {
      font-size: 4vw;
    }

    .name {
      font-size: 7vw;
    }

    .ending {
      width: 60vw;
      font-size: 3vw;
    }

    .nav-bar a {
      font-size: 2.5vw;
    }

    .about-text {
      max-width: 90%;
    }

    .about-text h2,
    .experience-title h2,
    .contact-header {
      font-size: 5vw;
    }

    .about-text p,
    .education-details p,
    .skills-subsection p,
    .experience-box p,
    .project-description {
      font-size: 3vw;
    }

    .about-boxes .box h3,
    .experience-box h3,
    .project-title,
    .skills-section h3,
    .education-section h3 {
      font-size: 4vw;
    }

    .education-details h4,
    .skills-subsection h4,
    .box ul li,
    .experience-box ul li,
    .github-link {
      font-size: 2.8vw;
    }

    .contact .box .logo {
      width: 12vw;
    }
  }

  @media (max-width: 480px) {
    .box {
      width: 100%;
    }
  }

  .mobile-notice {
    position: sticky;
    top: 0;
    z-index: 9999;
    background: #ffcc00;
    color: #111;
    padding: 12px 16px;
    text-align: center;
    font-weight: 700;
    font-family: Arial, sans-serif;
  }

  .mobile-simple {
    background: #040e1b;
    color: #eee;
    min-height: 100vh;
    padding: 20px 16px 60px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  .mobile-simple h1 {
    font-size: 8vw;
    margin: 8px 0 12px;
  }

  .mobile-simple h2 {
    font-size: 5.5vw;
    margin: 24px 0 8px;
    color: #ffcc00;
  }

  .mobile-simple p,
  .mobile-simple li,
  .mobile-simple a {
    font-size: 4.2vw;
    word-break: break-word;
  }

  .mobile-simple a {
    color: #ffcc00;
    text-decoration: underline;
  }

  .mobile-simple ul {
    padding-left: 1em;
    margin: 0.5em 0 1em;
  }

  .mobile-divider {
    height: 1px;
    background: #2a2a2a;
    margin: 14px 0;
  }
</style>

{#if showFull}
  <div class="page">
    <div class="nav-bar">
      <a href="#content">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <section id="content" class="hero">
      <div class="background-container">
        <video autoplay muted loop playsinline webkit-playsinline preload="auto" class="background-video">
          <source src="background-video.mp4" type="video/mp4" />
        </video>

        <div class="content">
          <span class="intro">Hi I'm</span>
          <div class="name">
            <span>{displayedText}</span><span class="typing"></span>
          </div>
          <span class="ending" class:show={showEnding}>ML Research Engineer | Biomedical Engineer</span>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="about-text">
        <h2>About Me</h2>
        <p>
          I am a Machine Learning Research Engineer passionate about advancing technology and applying data science to real-world problems. I have experience in machine learning, data analysis, and various engineering projects, always aiming to make impactful contributions.
        </p>
      </div>

      <div class="about-boxes">
        <div class="box education-section">
          <h3>Education</h3>
          <div class="education-entry">
            <img src="imperial.png" alt="University Logo" class="education-logo" />
            <div class="education-details">
              <h4>MSc Biomedical Engineering</h4>
              <p>Imperial College London</p>
              <p class="education-year">2023 - 2024</p>
            </div>
          </div>
          <div class="education-entry">
            <img src="birmingham.png" alt="University Logo" class="education-logo" />
            <div class="education-details">
              <h4>BEng Mechanical Engineering</h4>
              <p>University of Birmingham</p>
              <p class="education-year">2020 - 2023</p>
            </div>
          </div>
        </div>

        <div class="box skills-section">
          <h3>Skills</h3>
          <div class="skills-subsection">
            <h4>Languages/Frameworks:</h4>
            <p>Python, MATLAB, Java, C, SQL, CUDA, Git, PyTorch, Pandas, SolidWorks, OpenGL</p>
          </div>
          <div class="skills-subsection">
            <h4>Areas:</h4>
            <p>AI, Machine Learning, Data Analytics, Data Science, Deep Learning, Databases, Agile, GitHub, Azure, API, Office, Object-oriented Programming</p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="experience">
      <div class="experience-title">
        <h2>Experience</h2>
      </div>

      <div class="experience-boxes">
        <div class="experience-box">
          <h3>Machine Learning Research Engineer</h3>
          <p>21D Clinical | September 2025 - Present</p>
          <ul>
            <li>• Developed and deployed a segmentation-based registration model to align intraoral scans (IOS) with CBCT images, leveraging point transformer segmentation with RANSAC and ICP; reduced manual alignment time by ~5 minutes per patient</li>
            <li>• Designed and prototyped a novel implant planning model (no existing published approaches), using HRNet with a custom loss function; reduced planning time by up to 1 hour per patient</li>
          </ul>
        </div>

        <div class="experience-box">
          <h3>YMB Board Member</h3>
          <p>Institution of Mechanical Engineers | July 2024 - Present</p>
          <ul>
            <li>• Served on the Young Members Board of the world's largest mechanical engineering institution of 115k members</li>
            <li>• Represented the Safety and Reliability Engineering Division on the board</li>
          </ul>
        </div>

        <div class="experience-box">
          <h3>Data Engineer Intern</h3>
          <p>ROSEN | July 2022 - Sept 2022</p>
          <ul>
            <li>• Worked in the world’s leading inspection engineering provider for the energy sector</li>
            <li>• Created a Power BI dashboard for C-suite clients using processed data and GIS</li>
            <li>• Built a data management portal for Data Scientists and Engineers</li>
            <li>• Constructed data and ETL pipelines to automate the flow and analysis of data, saving an engineer up to a month in data processing</li>
            <li>• Incorporated materialized views to boost processing speeds by 40 times</li>
            <li>• Programmed an API for Data Scientists to automate SQL tasks, increasing efficiency</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="experience-title">
        <h2>Projects</h2>
      </div>

      <div class="project-container">
        <div class="project-box">
          <div class="project-banner" style="background-image: url('Brain.png');"></div>
          <h3 class="project-title">Deep Learning for Brain Age Prediction</h3>
          <p class="project-description">This project investigates using Graph Neural Networks (GNNs) combined with MRI data to improve brain age prediction.</p>
        </div>

        <div class="project-box">
          <div class="project-banner" style="background-image: url('Poster.PNG');"></div>
          <h3 class="project-title">Toolkit for Electron Spin Resonance</h3>
          <p class="project-description">This project involves creating a model to simulate coherence time in quantum computing, using quantum-specific materials that support stable qubit superposition.</p>
        </div>

        <div class="project-box">
          <div class="project-banner" style="background-image: url('Train.png');"></div>
          <h3 class="project-title">Maglev-Based Railway Track Switch</h3>
          <p class="project-description">A mathematical model and simulation of a novel Maglev track-switch to enhance stability and efficiency.</p>
        </div>

        <div class="project-box">
          <div class="project-banner" style="background-image: url('Breast.png');"></div>
          <h3 class="project-title">AI Breast Cancer Screening System</h3>
          <p class="project-description">Developed an AI model using DenseNet, Streamlit, and SQL to classify breast cancer images into BI-RADS categories, achieving over 70% accuracy.</p>
          <a href="https://github.com/chris-mathew/Breast_Cancer_Masking" target="_blank" class="github-link">View on GitHub</a>
        </div>

        <div class="project-box">
          <div class="project-banner" style="background-image: url('Neural.png');"></div>
          <h3 class="project-title">ML algorithm for a Brain-machine Interface</h3>
          <p class="project-description">Developed a MATLAB algorithm predicting hand position from neural activity, achieving a top-5 RMSE score of 13 in competition.</p>
          <a href="https://github.com/chris-mathew/BMI_Project" target="_blank" class="github-link">View on GitHub</a>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact-header">Let's Connect!</div>
      <div class="contact-boxes">
        <a href="https://www.linkedin.com/in/chris-mathew3/" target="_blank" class="box-link">
          <div class="box">
            <img src="linkedin.png" alt="LinkedIn Logo" class="logo" />
            <ul><li>LinkedIn</li></ul>
          </div>
        </a>

        <a href="mailto:chris.mathew23@imperial.ac.uk" target="_blank" class="box-link">
          <div class="box">
            <img src="email2.png" alt="Email Logo" class="logo" />
            <ul><li>Email</li></ul>
          </div>
        </a>

        <a href="https://github.com/chris-mathew" target="_blank" class="box-link">
          <div class="box">
            <img src="github.png" alt="GitHub Logo" class="logo" />
            <ul><li>Github</li></ul>
          </div>
        </a>
      </div>
    </section>
  </div>
{:else}
  <div class="mobile-notice">{mobileNotice}</div>

  <main class="mobile-simple">
    <h1>{text}</h1>
    <p>Biomedical Engineer | Data Engineer</p>

    <div class="mobile-divider"></div>

    <h2>About</h2>
    <p>
      I am a Biomedical Engineer and Data Engineer passionate about advancing technology and applying data science to real-world problems.
      I have experience in machine learning, data analysis, and various engineering projects, always aiming to make impactful contributions.
    </p>

    <h2>Education</h2>
    <ul>
      <li>MSc Biomedical Engineering — Imperial College London (2023–2024)</li>
      <li>BEng Mechanical Engineering — University of Birmingham (2020–2023)</li>
    </ul>

    <h2>Skills</h2>
    <p><strong>Languages/Frameworks:</strong> Python, MATLAB, Java, C, SQL, Verilog, CUDA, Git, PyTorch, Pandas, SolidWorks, OpenGL</p>
    <p><strong>Areas:</strong> AI, Machine Learning, Data Analytics, Data Science, Deep Learning, Databases, Agile, GitHub, Azure, API, Office, OOP</p>

    <h2>Experience</h2>
    <ul>
      <li><strong>Data Engineer Intern</strong> — ROSEN (Jul 2022 – Sep 2022)</li>
      <li><strong>YMB Board Member</strong> — IMechE (Jul 2024 – Present)</li>
    </ul>

    <h2>Projects</h2>
    <ul>
      <li>Deep Learning for Brain Age Prediction</li>
      <li>Toolkit for Electron Spin Resonance</li>
      <li>Maglev-Based Railway Track Switch</li>
      <li>AI Breast Cancer Screening System — <a href="https://github.com/chris-mathew/Breast_Cancer_Masking" target="_blank">GitHub</a></li>
      <li>ML Algorithm for a Brain-Machine Interface — <a href="https://github.com/chris-mathew/BMI_Project" target="_blank">GitHub</a></li>
    </ul>

    <h2>Contact</h2>
    <ul>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/chris-mathew3/" target="_blank">/in/chris-mathew3/</a></li>
      <li>Email: <a href="mailto:chris.mathew23@imperial.ac.uk">chris.mathew23@imperial.ac.uk</a></li>
      <li>GitHub: <a href="https://github.com/chris-mathew" target="_blank">github.com/chris-mathew</a></li>
    </ul>
  </main>
{/if}