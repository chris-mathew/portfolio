<script>
  import { onMount, tick } from 'svelte';

  const text = 'Christopher Mathew';
  let displayedText = '';
  let showEnding = false;
  let hasTyped = false;
  let isMobile = false;

  function updateViewportFlags() {
    isMobile = window.matchMedia('(max-width: 768px)').matches;
  }

  async function typeEffect() {
    if (hasTyped) return;
    hasTyped = true;

    for (let i = 0; i < text.length; i++) {
      displayedText += text[i];
      await tick();
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    showEnding = true;
  }

  onMount(() => {
    document.title = "Chris's Portfolio";

    updateViewportFlags();
    typeEffect();

    const video = document.querySelector('.background-video');
    video?.play().catch(() => {});

    window.addEventListener('resize', updateViewportFlags);

    return () => {
      window.removeEventListener('resize', updateViewportFlags);
    };
  });
</script>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background: #040e1b;
    color: white;
    font-family: Arial, sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .page {
    background: #040e1b;
  }

  .nav-bar {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    display: flex;
    gap: 10px;
    padding: 10px 18px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    max-width: calc(100vw - 24px);
    overflow-x: auto;
    white-space: nowrap;
  }

  .nav-bar a {
    text-decoration: none;
    color: #c5c5c5;
    font-weight: 700;
    font-size: 0.95rem;
    padding: 8px 14px;
    border-radius: 999px;
    transition: 0.25s ease;
    flex: 0 0 auto;
  }

  .nav-bar a:hover {
    color: white;
    background: #333;
  }

  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 8vw 80px;
    overflow: hidden;
  }

  .background-container {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    background: url('untitled.png') center / cover no-repeat;
  }

  .background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(4, 14, 27, 0.78) 0%,
      rgba(4, 14, 27, 0.45) 45%,
      rgba(4, 14, 27, 0.2) 100%
    );
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
  }

  .intro {
    display: block;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: #d7d7d7;
    margin-bottom: 10px;
  }

  .name {
    font-size: clamp(2.2rem, 6vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 18px;
    word-break: break-word;
  }

  .typing {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: white;
    margin-left: 4px;
    vertical-align: -0.1em;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .ending {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #bcbcbc;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .ending.show {
    opacity: 1;
    transform: translateY(0);
  }

  .section {
    min-height: 100vh;
    padding: 110px 8vw 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: #ffcc00;
    text-align: center;
    margin: 0 0 28px;
  }

  .about {
    gap: 36px;
  }

  .about-text {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .about-text p {
    font-size: clamp(1rem, 1.4vw, 1.1rem);
    line-height: 1.7;
    color: #c5c5c5;
    margin: 0;
  }

  .about-boxes,
  .contact-boxes {
    display: grid;
    gap: 24px;
  }

  .about-boxes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }

  .box,
  .experience-box,
  .project-box {
    background: #1a1a2e;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .box:hover,
  .experience-box:hover,
  .project-box:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.28);
  }

  .box {
    padding: 24px;
    color: #bcbcbc;
  }

  .box h3,
  .experience-box h3,
  .project-title {
    margin-top: 0;
  }

  .box h3 {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    color: #ffcc00;
    text-align: center;
    margin-bottom: 24px;
  }

  .education-entry {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
    text-align: center;
    margin-bottom: 18px;
    flex-wrap: wrap;
  }

  .education-entry:last-child {
    margin-bottom: 0;
  }

  .education-logo {
    width: 50px;
    height: auto;
    flex-shrink: 0;
  }

  .education-details h4 {
    margin: 0 0 4px;
    font-size: 1.05rem;
    color: #fff;
  }

  .education-details p {
    margin: 2px 0;
    color: #c5c5c5;
  }

  .education-year {
    font-style: italic;
    color: #a5a5a5;
  }

  .skills-subsection + .skills-subsection {
    margin-top: 20px;
  }

  .skills-subsection h4 {
    font-size: 1rem;
    color: #fff;
    margin: 0 0 8px;
  }

  .skills-subsection p {
    margin: 0;
    color: #c5c5c5;
    line-height: 1.6;
  }

  .experience-boxes {
    display: grid;
    gap: 24px;
    width: min(900px, 100%);
    margin: 0 auto;
  }

  .experience-box {
    padding: 24px;
    text-align: left;
  }

  .experience-box h3 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    color: #fff;
    margin-bottom: 8px;
  }

  .experience-box p {
    margin: 0 0 14px;
    color: #ddd;
    font-weight: 600;
  }

  .experience-box ul {
    margin: 0;
    padding-left: 1.2rem;
    color: #c5c5c5;
    line-height: 1.6;
  }

  .project-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .project-box {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .project-banner {
    height: 220px;
    background-size: cover;
    background-position: center;
    filter: blur(2px);
    transition: filter 0.3s ease;
  }

  .project-box:hover .project-banner {
    filter: blur(0);
  }

  .project-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
  }

  .project-title {
    font-size: clamp(1.1rem, 1.8vw, 1.35rem);
    color: #ffcc00;
    margin: 0;
  }

  .project-description {
    font-size: 1rem;
    color: #c5c5c5;
    margin: 0;
    line-height: 1.6;
    flex: 1;
  }

  .github-link {
    align-self: flex-start;
    color: #ffcc00;
    background: #333;
    padding: 10px 14px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    transition: 0.25s ease;
  }

  .github-link:hover {
    background: #ffcc00;
    color: #333;
  }

  .contact {
    text-align: center;
  }

  .contact-header {
    font-size: clamp(1.4rem, 3vw, 2rem);
    margin-bottom: 28px;
    color: #fff;
  }

  .contact-boxes {
    grid-template-columns: repeat(3, minmax(0, 220px));
    justify-content: center;
  }

  .box-link {
    color: inherit;
    text-decoration: none;
  }

  .contact-card {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    min-height: 180px;
    justify-content: center;
  }

  .logo {
    width: 56px;
    height: auto;
  }

  .contact-card span {
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
  }

  .mobile-note {
    display: none;
  }

  @media (max-width: 1024px) {
    .project-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .hero,
    .section {
      padding-left: 20px;
      padding-right: 20px;
    }

    .overlay {
      background: linear-gradient(
        180deg,
        rgba(4, 14, 27, 0.65) 0%,
        rgba(4, 14, 27, 0.45) 100%
      );
    }

    .about-boxes,
    .project-container,
    .contact-boxes {
      grid-template-columns: 1fr;
    }

    .nav-bar {
      top: 10px;
      padding: 8px 12px;
      gap: 6px;
    }

    .nav-bar a {
      font-size: 0.9rem;
      padding: 8px 12px;
    }

    .project-banner {
      height: 200px;
    }

    .mobile-note {
      display: block;
      margin-top: 16px;
      color: #c5c5c5;
      font-size: 0.95rem;
    }
  }
</style>

<div class="page">
  <nav class="nav-bar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="home" class="hero">
    <div class="background-container">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="background-video"
      >
        <source src="background-video.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="overlay"></div>

    <div class="hero-content">
      <span class="intro">Hi, I'm</span>

      <div class="name">
        <span>{displayedText}</span>{#if !showEnding}<span class="typing"></span>{/if}
      </div>

      <div class:show={showEnding} class="ending">
        Biomedical Engineer | Data Engineer
      </div>

      {#if isMobile}
        <p class="mobile-note">
          Optimized for mobile and desktop.
        </p>
      {/if}
    </div>
  </section>

  <section id="about" class="section about">
    <div class="about-text">
      <h2 class="section-title">About Me</h2>
      <p>
        I am a Biomedical Engineer and Data Engineer passionate about advancing
        technology and applying data science to real-world problems. I have
        experience in machine learning, data analysis, and engineering
        projects, always aiming to make impactful contributions.
      </p>
    </div>

    <div class="about-boxes">
      <div class="box education-section">
        <h3>Education</h3>

        <div class="education-entry">
          <img src="imperial.png" alt="Imperial College London logo" class="education-logo" />
          <div class="education-details">
            <h4>MSc Biomedical Engineering</h4>
            <p>Imperial College London</p>
            <p class="education-year">2023 - 2024</p>
          </div>
        </div>

        <div class="education-entry">
          <img src="birmingham.png" alt="University of Birmingham logo" class="education-logo" />
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
          <h4>Languages / Frameworks</h4>
          <p>
            Python, MATLAB, Java, C, SQL, Verilog, CUDA, Git, PyTorch,
            Pandas, SolidWorks, OpenGL
          </p>
        </div>

        <div class="skills-subsection">
          <h4>Areas</h4>
          <p>
            AI, Machine Learning, Data Analytics, Data Science, Deep Learning,
            Databases, Agile, GitHub, Azure, API, Office, Object-Oriented Programming
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" class="section">
    <h2 class="section-title">Experience</h2>

    <div class="experience-boxes">
      <div class="experience-box">
        <h3>Data Engineer Intern</h3>
        <p>ROSEN | July 2022 - Sept 2022</p>
        <ul>
          <li>Worked at a leading inspection engineering provider for the energy sector.</li>
          <li>Created a Power BI dashboard for C-suite clients using processed data and GIS.</li>
          <li>Built a data management portal for data scientists and engineers.</li>
          <li>Constructed ETL pipelines that automated data flow and analysis.</li>
          <li>Used materialized views to improve processing speeds dramatically.</li>
          <li>Developed an API to automate SQL tasks for data scientists.</li>
        </ul>
      </div>

      <div class="experience-box">
        <h3>YMB Board Member</h3>
        <p>Institution of Mechanical Engineers | July 2024 - Present</p>
        <ul>
          <li>Served on the Young Members Board of one of the world's largest mechanical engineering institutions.</li>
          <li>Represented the Safety and Reliability Engineering Division on the board.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="projects" class="section">
    <h2 class="section-title">Projects</h2>

    <div class="project-container">
      <div class="project-box">
        <div class="project-banner" style="background-image: url('Brain.png');"></div>
        <div class="project-content">
          <h3 class="project-title">Deep Learning for Brain Age Prediction</h3>
          <p class="project-description">
            Investigates Graph Neural Networks combined with MRI data to improve brain age prediction.
          </p>
        </div>
      </div>

      <div class="project-box">
        <div class="project-banner" style="background-image: url('Poster.PNG');"></div>
        <div class="project-content">
          <h3 class="project-title">Toolkit for Electron Spin Resonance</h3>
          <p class="project-description">
            A model to simulate coherence time in quantum computing using materials that support stable qubit superposition.
          </p>
        </div>
      </div>

      <div class="project-box">
        <div class="project-banner" style="background-image: url('Train.png');"></div>
        <div class="project-content">
          <h3 class="project-title">Maglev-Based Railway Track Switch</h3>
          <p class="project-description">
            A mathematical model and simulation of a novel maglev track switch to improve stability and efficiency.
          </p>
        </div>
      </div>

      <div class="project-box">
        <div class="project-banner" style="background-image: url('Breast.png');"></div>
        <div class="project-content">
          <h3 class="project-title">AI Breast Cancer Screening System</h3>
          <p class="project-description">
            Developed an AI model using DenseNet, Streamlit, and SQL to classify breast cancer images into BI-RADS categories.
          </p>
          <a
            href="https://github.com/chris-mathew/Breast_Cancer_Masking"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div class="project-box">
        <div class="project-banner" style="background-image: url('Neural.png');"></div>
        <div class="project-content">
          <h3 class="project-title">ML Algorithm for a Brain-Machine Interface</h3>
          <p class="project-description">
            Developed a MATLAB algorithm predicting hand position from neural activity with a top-5 RMSE competition result.
          </p>
          <a
            href="https://github.com/chris-mathew/BMI_Project"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section contact">
    <div class="contact-header">Let's Connect!</div>

    <div class="contact-boxes">
      <a
        href="https://www.linkedin.com/in/chris-mathew3/"
        target="_blank"
        rel="noopener noreferrer"
        class="box-link"
      >
        <div class="box contact-card">
          <img src="linkedin.png" alt="LinkedIn logo" class="logo" />
          <span>LinkedIn</span>
        </div>
      </a>

      <a
        href="mailto:chris.mathew23@imperial.ac.uk"
        class="box-link"
      >
        <div class="box contact-card">
          <img src="email2.png" alt="Email icon" class="logo" />
          <span>Email</span>
        </div>
      </a>

      <a
        href="https://github.com/chris-mathew"
        target="_blank"
        rel="noopener noreferrer"
        class="box-link"
      >
        <div class="box contact-card">
          <img src="github.png" alt="GitHub logo" class="logo" />
          <span>GitHub</span>
        </div>
      </a>
    </div>
  </section>
</div>