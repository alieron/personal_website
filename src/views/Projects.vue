<template>
    <div class="projects" id="projects">
        <div class="title-cont">
          <svg class="title-shapes" v-if="viewport.is1024==false" width="65" height="56" viewBox="0 0 65 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Projects">
              <circle id="Circle" cx="52" cy="43" r="13" fill="url(#projects-circle-lngd)"/>
              <path id="Triangle" d="M25.1982 1.16073C25.75 0.623935 26.6759 0.885737 26.8649 1.63198L35.3186 35.0108C35.5076 35.757 34.8179 36.428 34.0772 36.2186L0.943427 26.8503C0.202667 26.6408 -0.0335828 25.708 0.518181 25.1712L25.1982 1.16073Z" fill="url(#projects-triangle-lngd)"/>
              <path id="New-Char" d="M32.7797 33.2922C32.3463 33.2911 31.9981 32.9405 32 32.5092C31.9998 32.0757 32.3539 31.7311 32.7831 31.7294L38.8004 31.7397C39.2339 31.7408 39.582 32.0914 39.5801 32.5227C39.5804 32.9562 39.2263 33.3008 38.7971 33.3025L32.7797 33.2922Z" fill="#F4F9FF"/>
              <path id="Terminal" fill-rule="evenodd" clip-rule="evenodd" d="M20 19C20 17.8954 20.8954 17 22 17H50C51.1046 17 52 17.8954 52 19V42C52 43.1046 51.1046 44 50 44H22C20.8954 44 20 43.1046 20 42V19ZM32.7797 33.2922C32.3463 33.2911 31.9981 32.9405 32 32.5092C31.9998 32.0757 32.3539 31.7311 32.7831 31.7294L38.8004 31.7397C39.2339 31.7408 39.582 32.0914 39.5801 32.5227C39.5804 32.9562 39.2263 33.3008 38.7971 33.3025L32.7797 33.2922ZM25.3498 22.3275L30.1098 27.2005L25.2348 31.9625C24.9278 32.2635 24.9198 32.7575 25.2228 33.0665C25.3758 33.2225 25.5788 33.3025 25.7818 33.3025C25.9788 33.3025 26.1768 33.2275 26.3288 33.0795L31.7608 27.7725C32.0688 27.4725 32.0768 26.9775 31.7728 26.6675L26.4668 21.2345C26.1648 20.9295 25.6708 20.9185 25.3618 21.2225C25.0528 21.5235 25.0468 22.0175 25.3498 22.3275Z" fill="#F4F9FF"/>
            </g>
            <defs>
              <linearGradient id="projects-circle-lngd" x1="46" y1="37.5" x2="65" y2="56" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F16483"/>
                <stop offset="1" stop-color="#EF8159"/>
              </linearGradient>
              <linearGradient id="projects-triangle-lngd" x1="13.5" y1="2.5" x2="30.5" y2="33" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8656EF"/>
                <stop offset="1" stop-color="#5FEFBB"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="title-text-cont">
            <h1>My projects,</h1>
            <h2>Being a self-taught programmer, I pursue my interests by engaging in small projects, ranging from using <strong>Vue.js</strong> to make this website, to <strong>Python-Tensorflow</strong> to learn more about AI.</h2>
            <h2>This section is a collection of noteworthy projects that I've completed, and the relevent skills I've learnt through them.</h2>
            <p>Scroll down to find out more</p>
          </div>
        </div>
      </div>
</template>

<script>  
export default {
  name: 'Projects',
  props: {
    viewport: Object,
    },
}
</script>

<style lang="scss">
.projects {
  min-width: 100vw;
  height: 100vh;
   
  color: var(--clr-words-light);
  font-size: clamp(32px, 15vw, 80px);

  .title-cont {
    position: relative;
    height: 100%;
    width: 100%;

    background: var(--lngd-bg-main);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .title-shapes {
    height: max-content;
    width: 6em;
    fill: var(--clr-words-light);
    margin-left: 1em;

    #New-Char {
      animation: blink 1s ease-in infinite;
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      99% {
        opacity: 1;
      }
    }
  }

  .title-text-cont {
    font-family: "Roboto Mono", monospace;
    width: 8em;
    margin-right: 1em;
    // text-align: right;
  
    h1 {
      font-weight: 500;
      font-size: 0.5em;
      line-height: 2;
    }

    h2 {
      font-weight: 400;
      font-size: 0.25em;
      margin: 0;
      line-height: 2.5;
      margin-top: 1em;

      strong {
        background: var(--lngd-words-red);
        background-clip: text;
        color: transparent;
      }
    }

    p {
      font-weight: 300;
      font-size: 0.2em;
    }
  }
}

@media only screen and (max-width: 768px) {
  .projects {

    .title-text-cont {
      width: calc(100vw - 1em);
      margin-left: 0.8em;
      margin-right: 0.2em;
    }

    .title-cont {
      width: 100vw;
      left: 0;
    }
  }
}
</style>