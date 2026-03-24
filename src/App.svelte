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
    isPortrait = window.matchMedia("(orientation: portrait)").matches;

    showFull = !(isMobile && isPortrait);
    mobileNotice = showFull
      ? ""
      : "For the best experience, rotate your device or use desktop.";
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
  :global(html, body) {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: #040e1b;
    font-family: Arial, sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .page {
    width: 100%;
  }

  /* ===== HERO ===== */
  .hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  }

  .background-container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-image: url('untitled.png');
    background-size: cover;
    background-position: center;
  }

  .background-video {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15vw;
    color: white;
    z-index: 2;
  }

  .intro { font-size: 1.5vw; }
  .name { font-size: 2.5vw; }

  .typing {
    border-right: 2px solid white;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }

  .ending {
    font-size: 1vw;
    color: #bcbcbc;
    opacity: 0;
    transition: opacity 1s;
  }

  .show { opacity: 1; }

  /* ===== NAV ===== */
  .nav-bar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.3);
    padding: 10px 30px;
    border-radius: 50px;
    display: flex;
    gap: 20px;
    z-index: 10;
  }

  .nav-bar a {
    color: #c5c5c5;
    text-decoration: none;
    font-size: 1vw;
  }

  .nav-bar a:hover {
    color: white;
  }

  /* ===== SECTIONS ===== */
  section {
    width: 100%;
    min-height: 100vh;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: #ffcc00;
    margin-bottom: 20px;
  }

  /* ===== EXPERIENCE ===== */
  .experience-box {
    background: #1a1a2e;
    padding: 20px;
    border-radius: 10px;
    max-width: 700px;
    width: 100%;
    margin-bottom: 20px;
  }

  .experience-box ul {
    padding-left: 20px;
  }

  /* ===== PROJECTS ===== */
  .project-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 90%;
  }

  .project-box {
    background: #1a1a2e;
    padding: 20px;
    border-radius: 10px;
  }

  /* ===== CONTACT ===== */
  .contact-boxes {
    display: flex;
    gap: 20px;
  }

  .box {
    background: #1a1a2e;
    padding: 20px;
    border-radius: 10px;
  }

  /* ===== MOBILE SIMPLE ===== */
  .mobile-notice {
    background: #ffcc00;
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }

  .mobile-simple {
    padding: 20px;
    color: white;
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

  <!-- HERO -->
  <section id="content" class="hero">
    <div class="background-container">
      <video autoplay muted loop playsinline class="background-video">
        <source src="background-video.mp4" type="video/mp4" />
      </video>

      <div class="content">
        <span class="intro">Hi I'm</span>
        <div class="name">
          <span>{displayedText}</span><span class="typing"></span>
        </div>
        <span class="ending" class:show={showEnding}>
          ML Research Engineer | Biomedical Engineer
        </span>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <h2>About</h2>
    <p style="max-width:600px; text-align:center;">
      Machine Learning Research Engineer passionate about AI and real-world impact.
    </p>
  </section>

  <!-- EXPERIENCE -->
  <section id="experience">
    <h2>Experience</h2>

    <div class="experience-box">
      <h3>ML Research Engineer</h3>
      <p>21D Clinical</p>
    </div>

    <div class="experience-box">
      <h3>Data Engineer Intern</h3>
      <p>ROSEN</p>
    </div>

  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <h2>Projects</h2>

    <div class="project-container">
      <div class="project-box">Brain Age Prediction</div>
      <div class="project-box">Quantum ESR Toolkit</div>
      <div class="project-box">Maglev System</div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <h2>Contact</h2>

    <div class="contact-boxes">
      <div class="box">LinkedIn</div>
      <div class="box">Email</div>
      <div class="box">GitHub</div>
    </div>
  </section>

</div>

{:else}
<div class="mobile-notice">{mobileNotice}</div>

<div class="mobile-simple">
  <h1>{text}</h1>
  <p>Biomedical Engineer</p>
</div>
{/if}