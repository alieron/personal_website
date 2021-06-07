<template>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.main,
.about,
.projects {
  min-width: 100vw;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: "Roboto Mono", monospace;
  font-size: 80px;
}

.main h1,
.about h1,
.projects h1 {
  border: 1px solid red;
}

.main a .nav-button,
.about a .nav-button,
.projects a .nav-button {
  position: absolute;
  fill: blue;
  height: 1em;
  margin: 0 0em;
}

.main a .nav-button #next,
.about a .nav-button #next,
.projects a .nav-button #next {
  float: right;
}

.main .logo {
  height: 2em;
}

.about {
  background-color: black;
  color: white;
}
</style>
