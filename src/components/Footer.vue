<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-text">
        <img src="@/assets/logo_sm.png" />
        <p>
          The BusinessRate ranking is based on customer satisfaction, online
          presence, and social engagement. Find businesses online or list your
          business today.
        </p>
      </div>
      <div class="footer-menu">
        <div class="company">
          <h1>Company</h1>
          <a href="#">About</a>
          <a href="#">Legal</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Report Spam</a>
          <a href="#">Branding Guidelines</a>
        </div>
        <div class="get-listed">
          <h1>Get Listed</h1>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <a href="#">Add Business Free</a>
          <a href="#">Suggest a Business</a>
          <a href="#">Compare Plans</a>
        </div>
      </div>
    </div>
    <span class="copyright">©2020 BusinessRate. All Rights Reserved</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.footer {
  padding: 20vw 5vw 10vw;
  color: white;
  background-color: black;
}

.footer-container {
  display: flex;
  flex-direction: column;
}

.footer-text {
  margin-bottom: 50px;
}

.footer-text img {
  width: 85%;
  margin-bottom: 40px;
}

.company,
.get-listed {
  margin-bottom: 30px;
}

.footer-menu {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer-menu h1 {
  color: #f6d185;
  margin-bottom: 40px;
}

.footer-text p {
  font-size: 5vw;
  line-height: 1.5;
}

.footer-menu h1 {
  font-size: 6vw;
}

.footer-menu a {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 5vw;
  transition: color 650ms;
  margin-bottom: 15px;
}

.footer-menu a:hover {
  color: #f6d185;
}

span.copyright {
  font-size: 16px;
}

@media screen and (min-width: 640px) {
  .footer-menu h1 {
    font-size: 2.5vw;
  }
  .footer-text p {
    font-size: 2.3vw;
  }

  .footer-menu a {
    font-size: 2.5vw;
  }
}

@media screen and (min-width: 768px) {
  .footer {
    padding: 5vw 6vw 2vw;
  }
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-menu {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-text,
  .company,
  .get-listed {
    margin-bottom: 0px;
  }

  .footer-text {
    width: 44%;
  }

  .footer-menu {
    width: 50%;
  }

  .footer-menu > div {
    width: 45%;
  }

  .footer-text p,
  .footer-menu a {
    font-size: 2vw;
  }

  span.copyright {
    position: relative;
    top: -80px;
    font-size: 1.5vw;
  }
}

@media screen and (min-width: 1024px) {
  span.copyright {
    font-size: 16px;
    position: relative;
    top: -70px;
  }
}

@media screen and (min-width: 1200px) {
  .footer-text p,
  .footer-menu a {
    font-size: 1.6vw;
  }
  span.copyright {
    font-size: 18px;
    top: -80px;
  }

  .footer-menu h1 {
    font-size: 2vw;
  }

  .footer-text {
    width: 34%;
  }
}
</style>
