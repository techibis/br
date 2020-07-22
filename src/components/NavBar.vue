<template>
  <header>
    <div class="nav main-container">
      <nav>
        <div class="menu-icons" @click="show">
          <i class="icon ion-md-menu"></i>
          <i class="icon ion-md-close"></i>
        </div>
        <router-link to="/" class="logo">
          <img src="@/assets/logo_sm.png" />
        </router-link>
        <ul class="nav-list">
          <li>
            <router-link to="/"
              >Company
              <i class="icon ion-md-arrow-dropdown"></i>
            </router-link>
            <ul class="sub-menu">
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/legal">Legal</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
              <li>
                <router-link to="/report-spam">Report Spam</router-link>
              </li>
              <li>
                <router-link to="/branding-guidelines"
                  >Branding Guidelines</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/">
              Get Listed
              <i class="icon ion-md-arrow-dropdown"></i>
            </router-link>
            <ul class="sub-menu">
              <li>
                <router-link to="/benefits-of-joining"
                  >Benefits of Joining</router-link
                >
              </li>
              <li>
                <router-link to="/add-business-free"
                  >Add Business Free</router-link
                >
              </li>
              <li>
                <router-link to="/suggest-a-business"
                  >Suggest a Business</router-link
                >
              </li>
              <li>
                <router-link to="/compare-plans">Compare Plans</router-link>
              </li>
            </ul>
          </li>
          <li v-if="display">
            <router-link to="/login-signup">Login/Sign Up</router-link>
          </li>

          <li v-if="hide">
            <router-link to="">
              Account
              <i class="icon ion-md-arrow-dropdown"></i>
            </router-link>
            <ul class="sub-menu account">
              <li v-if="admin">
                <router-link to="/vue-admin"
                  >Profile</router-link
                >
              </li>
              <li v-if="business">
                <router-link to="/bdashboard">Profile</router-link>
              </li>
              <li v-if="reviewer">
                <router-link to="/rdashboard"
                  >Profile</router-link
                >
              </li>
              <li @click="logout">
                <router-link to="">Logout</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <img src="@/assets/gold-striped-background-1.jpg" class="img-border" />
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      display: true,
      hide: false,
      admin:false,
      business:false,
      reviewer:false,
    };
  },

  created() {
    if (this.$session.exists()) {
      this.display = false;
      this.hide = true;
    }
    if(this.$session.get("type") === "A"){
      this.admin=true;
    }
    if(this.$session.get("type") === "B"){
      this.business=true;
    }
    if(this.$session.get("type") === "R"){
      this.reviewer=true;
    }

  },

  methods: {
    show() {
      const selectElement = (element) => document.querySelector(element);
      selectElement("nav").classList.toggle("active");
    },
    logout() {
      this.$session.destroy();
      this.$router.go("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
li a {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
}

header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  font-family: "Playfair Display", serif;
  z-index: 100;
}

.menu-icons {
  color: #f6d185;
  font-size: 4rem;
  position: absolute;
  right: 2rem;
  top: 35%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1500;
  display: block;
}

.nav {
  font-family: "Playfair Display", serif;
  background-color: black;
  padding-left: 4vw;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 12vh;
}

.logo {
  width: 50vw;
}

.logo img {
  width: 100%;
}

.nav-list {
  width: 40vw;
  background-color: #000000e9;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2vw;
  height: 100vh;
  display: none;
  align-items: initial;
  overflow-y: scroll;
}

.ion-md-arrow-dropdown:before {
  color: #f6d185;
  font-size: 30px;
}

.ion-md-arrow-dropdown {
  position: absolute;
  margin-top: 5px;
  margin-left: 10px;
}

.nav-list > li {
  line-height: 6rem;
  position: relative;
}

.nav-list a {
  display: block;
  color: #eee;
  padding: 0 3.5vw;
  font-size: 6vw;
  transition: color 650ms;
}

.nav-list a:hover {
  color: #f6d185;
}

.sub-menu {
  position: initial;
  border: 3px solid transparent;
  border-left-color: #f6d185;
  margin-left: 1rem;
  width: 90vw;
  z-index: 100;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 650ms ease;
}

.sub-menu li {
  line-height: 4rem;
}

.nav-list li:hover > .sub-menu {
  opacity: 1;
  visibility: visible;
  max-height: initial;
}

.ion-md-close {
  display: none;
}

nav.active .ion-md-close {
  display: block;
}

nav.active .ion-md-menu {
  display: none;
}

nav.active .nav-list {
  display: flex;
  width: 100%;
  text-align: left;
}


@media screen and (min-width: 768px) {
  nav {
    height: 5vh;
  }

  .nav {
    padding: 5rem;
  }

  .nav-list {
    display: flex;
    background-color: transparent;
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
    width: 100%;
    align-items: center;
    overflow-y: visible;
    position: relative;
    padding: 0;
  }

  .nav-list a {
    font-size: 2.4vw;
    padding: 0 3vw;
  }

  .menu-icons {
    display: none;
  }

  .sub-menu {
    width: 25vw;
    padding: 20px 10px;
    display: block;
    position: absolute;
    border: 3px solid transparent;
    border-top: 3px solid #f6d185;
    background-color: #191919d1;
  }
  .sub-menu.account {
    width: 13vw;
  }

  ul.sub-menu li a {
    padding: 0 1vw;
    font-size: 2vw;
  }

  .sub-menu::before {
    content: "";
    position: absolute;
    top: -2.5rem;
    left: 3rem;
    border: 1.2rem solid transparent;
    border-bottom-color: #f6d185;
  }

  .nav-list li:hover > .sub-menu {
    top: 6rem;
    left: 1rem;
    opacity: 1;
    visibility: visible;
  }
}

@media screen and (min-width: 1024px) {
  .logo img {
    width: 100%;
  }
}

@media screen and (min-width: 1200px) {
  .nav-list a {
    font-size: 1.5vw;
  }

  .logo img {
    width: 80%;
  }

  nav {
    height: 8vh;
  }
  .sub-menu {
    width: 17vw;
  }

  .sub-menu.account{

    width:10vw;
  }

  ul.sub-menu li a {
    font-size: 1.3vw;
  }
}

@media screen and (min-width: 1600px) {
  .nav-list a {
    font-size: 1.3vw;
  }

  .nav-list a {
    padding: 0 3vw;
    line-height: 2;
  }
}

@media screen and (min-width: 1900px) {
  .nav-list li:hover > .sub-menu {
    top: 7rem;
    left: 3rem;
  }
}

@media screen and (min-width: 2400px) {
  .nav-list li:hover > .sub-menu {
    top: 8rem;
    left: 4rem;
  }
}

@media screen and (min-width: 2900px) {
  .nav-list li:hover > .sub-menu {
    top: 9rem;
    left: 6rem;
  }
}
@media screen and (min-width: 4500px) {
  .nav-list li:hover > .sub-menu {
    top: 14rem;
    left: 8rem;
  }
}
</style>
