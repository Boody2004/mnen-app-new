<template>
  <div>
    <div class="sidebar close">
      <div class="logo-details">
        <i class="menu fas fa-bars"></i>
        <!-- <i class="menu fi fi-rr-align-justify"></i> -->
        <a href="/">
          <span class="logo_name">Mnen app</span>
        </a>
      </div>

      <ul class="nav-links">
        <li>
          <div class="iocn-link">
            <a href="/">
              <i class="fas fa-home"></i>
              <span class="link_name">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div class="iocn-link">
            <a href="/map">
              <i class="fas fa-map-marker-alt"></i>
              <span class="link_name">Map</span>
            </a>
          </div>
        </li>
        <li>
          <div class="iocn-link">
            <a href="/aboutUs">
              <i class="fas fa-address-book"></i>
              <span class="link_name">About</span>
            </a>
          </div>
        </li>
        <li>
          <div class="iocn-link">
            <a href="/contactUs">
              <i class="fas fa-id-card"></i>
              <span class="link_name">Contact</span>
            </a>
          </div>
        </li>
      </ul>

      <ul class="nav-links">
        <li>
          <a href="/admin">
            <div class="profile-details">
              <img
                src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1641757746/BE_ggavgp.png"
                alt="logo"
              />
              <div class="profile_name">Admin</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".menu");

    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.content {
  position: relative;
  height: auto;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}
.sidebar.close ~ .content {
  left: 78px;
  width: calc(100% - 78px);
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #344955;
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
}
.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 30px;
  color: #cfd8dc;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #f9aa33;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links {
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  background-color: #4a6572;
}
.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar .nav-links li .iocn-link a {
  color: #cfd8dc;
}
.sidebar .nav-links li .iocn-link a:hover {
  color: #f9aa33;
}
.sidebar.close .nav-links li .iocn-link {
  display: block;
}
.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
}
.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 12px 0;
}
.sidebar.close .profile-details {
  background: none;
  width: 78px;
}
.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  margin: 0 14px 0 12px;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img {
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #cfd8dc;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar .profile-details .profile_name:hover {
  color: #232f34;
  transition: all 0.3s ease;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name {
  display: none;
}
</style>
