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

  .about, .skills, .experience, .projects, .contact {
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
  .about { top: 100%; }
  .skills { top: 200%; }
  .experience { top: 300%; }
  .projects { top: 400%; }
  .contact { top: 500%; }

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
  <a href="#skills">Experience</a>
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
  <div class="box-container">
    <div class="box">
      <h3>Education</h3>
      <ul>
        <li>Project A</li>
        <li>Project B</li>
        <li>Project C</li>
      </ul>
    </div>
    <div class="box">
      <h3>Interests</h3>
      <ul>
        <li>AI Research</li>
        <li>Biomedical Engineering</li>
        <li>Data Visualization</li>
      </ul>
    </div>
    
  </div>
</div>

<!-- Third section as placeholder -->
<div id="skills" class="skills">
  Skills
</div>

<div id="experience" class="experience">
  experience
</div>

<div id="projects" class="projects">
  projects
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



  