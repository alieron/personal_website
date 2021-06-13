<template>
  <div class="about" id="about">
    <div class="title-cont">
      <div class="title-text-cont">
        <h1>About me,</h1>
        <h2>Learning programming as a hobby has piqued my interests in Technology and its development, notably in the fields of <strong>Cybersecurity</strong>, <strong>Machine Learning(AI)</strong>, <strong>Web Dev.</strong> and <strong>Cryptocurrency</strong>.</h2>
        <h2>This section is an overview of my accomplishments, the relevent skills I've picked up and experiences that I've had.</h2>
        <p>Scroll down to find out more</p>
      </div>
      <svg class="title-shapes" v-if="viewport.is1024==false" width="498" height="506" viewBox="0 0 498 506" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="About">
          <rect id="Rectangle" x="280.835" y="244.996" width="217" height="261" rx="28" fill="url(#about-rectangle-lngd)"/>
          <path id="Hexagon" d="M103.106 12.3792C111.114 2.92603 123.521 -1.59005 135.732 0.504671L280.314 25.3086C292.695 27.4327 302.989 36.0294 307.285 47.834L356.834 183.966C361.13 195.771 358.771 208.973 350.651 218.559L255.838 330.495C247.831 339.949 235.423 344.465 223.213 342.37L78.6307 317.566C66.2493 315.442 55.956 306.845 51.6594 295.041L2.11128 158.908C-2.18525 147.104 0.174122 133.902 8.29344 124.316L103.106 12.3792Z" fill="url(#about-hexagon-lngd)"/>
          <path id="Gear" fill-rule="evenodd" clip-rule="evenodd" d="M208.654 160.707L163.536 129.463C150.251 139.572 138.423 151.496 128.42 164.866L159.547 209.814C166.997 220.572 160.842 235.433 147.966 237.772L94.4995 247.485C93.4022 255.499 92.8353 263.681 92.8353 271.996C92.8353 280.665 93.4517 289.191 94.643 297.532L147.966 307.219C160.842 309.558 166.997 324.419 159.547 335.177L128.78 379.605C138.88 393.011 150.82 404.951 164.226 415.051L208.654 384.284C219.412 376.834 234.273 382.989 236.612 395.864L246.299 449.188C254.64 450.379 263.165 450.996 271.835 450.996C280.15 450.996 288.332 450.429 296.345 449.331L306.059 395.864C308.398 382.989 323.259 376.834 334.017 384.284L378.965 415.411C392.335 405.408 404.259 393.58 414.368 380.295L383.124 335.177C375.673 324.419 381.829 309.558 394.704 307.219L449.054 297.345C450.228 289.064 450.835 280.601 450.835 271.996C450.835 263.745 450.277 255.626 449.197 247.672L394.704 237.772C381.829 235.433 375.673 220.572 383.124 209.814L414.73 164.173C404.718 150.925 392.906 139.113 379.658 129.101L334.017 160.707C323.259 168.158 308.398 162.002 306.059 149.127L296.159 94.6343C288.205 93.5537 280.085 92.9955 271.835 92.9955C263.23 92.9955 254.767 93.6028 246.486 94.7767L236.612 149.127C234.273 162.002 219.412 168.158 208.654 160.707ZM271.835 330.996C304.42 330.996 330.835 304.58 330.835 271.996C330.835 239.411 304.42 212.996 271.835 212.996C239.251 212.996 212.835 239.411 212.835 271.996C212.835 304.58 239.251 330.996 271.835 330.996Z" fill="#F4F9FF"/>
        </g>
        <defs>
          <linearGradient id="about-rectangle-lngd" x1="301.835" y1="234.996" x2="497.835" y2="505.996" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8656EF"/>
            <stop offset="1" stop-color="#5FEFBB"/>
          </linearGradient>
          <linearGradient id="about-hexagon-lngd" x1="17.8353" y1="27.9956" x2="278.835" y2="285.996" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F16483"/>
            <stop offset="1" stop-color="#EF8159"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    viewport: Object,
    },
}
</script>

<style lang="scss">
.about {
  min-width: 100vw;
  height: 100vh;
   
  color: var(--clr-words-light);
  font-size: clamp(32px, 15vw, 80px);

  .title-cont {
    position: relative;
    height: 100%;
    width: 100%;

    background: var(--lngd-bg-about);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .title-shapes {
    width: 6em;
    fill: var(--clr-words-light);
    margin-right: 1em;
  }

  .title-text-cont {
    font-family: "Roboto Mono", monospace;
    width: 8em;
    margin-left: 1em;
  
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
  .about {

    .title-text-cont {
      width: calc(100% - 1.6em);
      margin-left: 0.8em;
      margin-right: 0.8em;
    }

    .title-cont {
      width: 100vw;
      left: 0;
    }
  }
}
</style>
