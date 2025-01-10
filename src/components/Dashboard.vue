<template>
  <div class="dashboard-container">
    <h2>Dashboard</h2>
    <p>View sensor data in real-time.</p>
    <div v-for="room in rooms" :key="room.id" class="room-card">
      <h3>Room {{ room.id }}: {{ room.name }}</h3>
      <p><strong>Surface:</strong> {{ room.surface }} m²</p>
      <p><strong>Windows:</strong> {{ room.windows }}</p>
      <p><strong>Sensor:</strong> {{ room.sensor }}</p>
      <ul class="sensor-list">
        <li v-for="sensor in room.sensors" :key="sensor.id" class="sensor-item">
          <p><strong>Room:</strong> {{ sensor.room }}</p>
          <p><strong>Temperature:</strong> {{ sensor.temperature }} °C</p>
          <p><strong>Humidity:</strong> {{ sensor.humidity }} %</p>
          <p><strong>Pressure:</strong> {{ sensor.pressure }} hPa</p>
          <p><strong>Luminosity:</strong> {{ sensor.luminosity }} lx</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rooms: []
    };
  },
  created() {
    this.fetchRoomData();
  },
  methods: {
    fetchRoomData() {
      axios.get('http://localhost:8000/api/rooms')
        .then(response => {
          this.rooms = response.data;
          this.rooms.forEach(room => {
            axios.get(`http://localhost:8000/sensor/data?room=${room.id}`, {
              auth: {
                username: 'admin',
                password: 'password'
              }
            })
              .then(sensorResponse => {
                room.sensors = sensorResponse.data.filter(sensor => sensor.room === room.id);
              })
              .catch(error => {
                console.error('Error fetching sensor data:', error);
              });
          });
        })
        .catch(error => {
          console.error('Error fetching room data:', error);
        });
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

p {
  text-align: center;
  color: #666;
}

.room-card {
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.room-card h3 {
  margin-top: 0;
  color: #4CAF50;
}

.sensor-list {
  list-style-type: none;
  padding: 0;
}

.sensor-item {
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sensor-item p {
  margin: 5px 0;
  color: #333;
}

.sensor-item p strong {
  color: #4CAF50;
}
</style>
  