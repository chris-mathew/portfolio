<script>
  import { onMount, tick } from 'svelte';

  let text = "Christopher Mathew"; // Text to type out
  let displayedText = ""; // Text that will be progressively displayed
  let showEnding = false; // Controls the visibility of .endin

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

  /* Container for the video background with fallback image */
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

  /* Background video styling */
  .background-video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire area */
  }

  /* Center-left aligned content with typing effect */
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

  .second-section, .third-section {
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
  .second-section { top: 100%; }
  .third-section { top: 200%; }
</style>

<!-- Capsule Navigation Bar -->
<div class="nav-bar">
  <a href="#content">Home</a>
  <a href="#second-section">About</a>
  <a href="#third-section">Education</a>
  <a href="#second-section">Experience</a>
</div>

<!-- First section with full-screen background and typing effect -->
<div class="background-container">
  <video autoplay muted loop playsinline class="background-video">
    <source src="background-video.mp4" type="video/mp4" />
    <!-- Include additional formats for compatibility, if needed -->
  </video>
</div>

<div id="content" class="content">
  <span class="intro">Hi I'm</span>
  <div class="name">
    <span>{displayedText}</span><span class="typing"></span>
  </div>
  <span class="ending" class:show={showEnding}>Biomedical Engineer | Data Engineer</span>
</div>

<!-- Additional sections -->
<div id="second-section" class="second-section">
  Coming Soon
</div>

<div id="third-section" class="third-section">
  Soon
</div>
