<template>
        <div id="nav">
            <div class="links">
                <div class="nav-link">
                    <router-link to="/" id="a">To do list</router-link>
                    <router-link to="/info" id="a">Info</router-link>
                </div>
                <a @click="onLogoutClicked" class = "logout">Logout</a>
            </div>
        </div>
</template>

<script>
import { doLogout } from "@/netClient/authService";
export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push("/login");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Oswald");
body {
    background: #dbf0eb;
}
.nav-link{
    float: left;
    padding-top:16px;
}
.logout{
    float:right;
}

#nav {
    position: fixed;
    background: rgb(78, 122, 139);
    padding-top: 16px;
    padding-bottom: 16px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    font-size: 16px;
}

#nav a {
    display: inline;
    padding: 16px;
    font-weight: bold;
    color: #58d2d6;
}

#nav a:hover {
    color: #04441f;
    border-radius: 6px;
    background-color: #c4fad2;
}

#nav a.router-link-exact-active {
    color: #2fd18b;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.75s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.child-view {
    position: absolute;
    transition: all 0.75s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>