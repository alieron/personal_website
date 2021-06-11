<template>
  <div class="header">
    <nav class="social">
      <a class="icon1" href="https://www.linkedin.com/in/sebastien-leib/" target="_blank">
        <svg class="social-btn" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
          />
        </svg>
      </a>
      <a class="icon2" href="https://github.com/alieron" target="_blank"
        ><svg class="social-btn" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
          />
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        viewport: Object,
    },
};
</script>

<style>
.header {
  z-index: 99;
  position: fixed;
  font-size: 32px;
  margin: 0.5em 0;
  padding: 0.5em 0;

  width: 4.75em;
  /* padding: 0.25em; */
  left: calc(100vw - 5.25em);
  background-color: var(--clr-bg-dark);
  border-radius: 0.75em;
}

.social {
  display: block;
  height: 1em;
}

.social .icon1 {
  padding: 0 0.5em 0 0.875em;
}

.social .icon2 {
  padding: 0 0.875em 0 0.5em;
}

.social .social-btn{
  position: relative;
  height: 1em;
  transition: fill 0.4s ease-out;
  fill: var(--clr-words-light);
}

.social .social-btn:hover {
  fill: var(--clr-accent);
}
</style>