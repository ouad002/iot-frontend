<template>
  <div class="main-menu">
    <h1>Welcome to the IoT Environmental Monitoring App</h1>

    <!-- Menu with descriptions and icons -->
    <nav class="menu">
      <router-link to="/login" class="menu-item">
        <span class="icon">🔑</span>
        <div class="menu-text">
          <h3>Login</h3>
          <p>Access your account and manage your settings</p>
        </div>
      </router-link>

      <router-link to="/rooms" class="menu-item">
        <span class="icon">🏠</span>
        <div class="menu-text">
          <h3>Rooms</h3>
          <p>View and manage the rooms in the system</p>
        </div>
      </router-link>

      <router-link to="/dashboard" class="menu-item">
        <span class="icon">📊</span>
        <div class="menu-text">
          <h3>Dashboard</h3>
          <p>View real-time environmental data and analytics</p>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style scoped>
.main-menu {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.menu {
  display: flex;
  justify-content: space-around;
  background: #f4f4f4;
  padding: 20px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.menu-item {
  text-align: center;
  text-decoration: none;
  color: #333;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  background-color: #e9f7ff;
}

.menu-text h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
}

.menu-text p {
  font-size: 1rem;
  color: #555;
}

.icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>

  