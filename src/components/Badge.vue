<template>
  <div class="badge-container">
    <div class="badge">
      <div class="badge-text">
        <h1>Look for Businesses With This Sign of Quality</h1>
      </div>
      <div class="badge-img">
        <img src="@/assets/busrate-badge.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Badge",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.badge-container {
  padding: 20vw 5vw;
  background-color: black;
}

.badge {
  display: flex;
  flex-direction: column;
  border-left: 15px solid #f6d185;
  border-right: 15px solid #fbf5db;
  padding: 10vw;
  border-radius: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  -webkit-background-size: 100% 15px;
  -moz-background-size: 100% 15px;
  background-size: 100% 15px;
  background-image: -webkit-linear-gradient(left, #f6d185 0%, #fbf5db 100%),
    -webkit-linear-gradient(left, #f6d185 0%, #fbf5db 100%);
  background-image: -moz-linear-gradient(left, #f6d185 0%, #fbf5db 100%),
    -moz-linear-gradient(left, #f6d185 0%, #fbf5db 100%);
  background-image: -o-linear-gradient(left, #f6d185 0%, #fbf5db 100%),
    -o-linear-gradient(left, #f6d185 0%, #fbf5db 100%);
  background-image: linear-gradient(to right, #f6d185 0%, #fbf5db 100%),
    linear-gradient(to right, #f6d185 0%, #fbf5db 100%);
}

.badge-text {
  align-self: center;
}

.badge-text h1 {
  color: #f6d185;
  font-size: 7vw;
  margin-bottom: 10vw;
}

.badge-img img {
  width: 100%;
}

@media screen and (min-width: 640px) {
  .badge-container {
    padding: 5vw;
  }

  .badge {
    padding:3vw 5vw;
    flex-direction: row;
    justify-content: space-between;
  }

  .badge-text {
    width: 45vw;
  }

  .badge-img {
    width: 40vw;
  }

  .badge-img img {
    width: 40vw;
  }

  .badge-text h1 {
    font-size: 4vw;
    margin-bottom:auto;
  }
}

@media screen and (min-width: 1200px) {

   .badge-text h1 {
    font-size: 3.5vw;
   }
}
</style>
