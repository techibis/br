<template>
  <div class="video-container">
    <div class="video">
      <span class="video-text">
        Watch the BusinessRate Video
      </span>
      <button class="play" @click="play">
        <img class src="@/assets/TRL-Play-Button.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  methods: {
    play: () => {
      alert("video playing");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.video {
  text-align: center;
  background-color: white;
  padding: 8vw 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video-text {
  font-size: 6vw;
  color: black;
  margin-bottom: 15px;
  align-self: center;
}

.play {
  border: none;
  background-color: white;
  outline: none;
  cursor: pointer;
}

.play img {
  width: 50px;
}

@media screen and (min-width: 640px) {
  .video {
    flex-direction: row;
    padding: 2vw 5vw;
  }
  .video-text {
    font-size: 3.5vw;
    margin-bottom: 0px;
    margin-right: 20px;
  }
}

@media screen and (min-width: 120px) {
  .video-text {
    font-size: 2.5vw;
  }
}
</style>
