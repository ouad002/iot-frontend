<template>
  <div>
    <h2>Dashboard</h2>
    <p>View sensor data in real-time.</p>
    <div v-for="room in rooms" :key="room.id">
      <h3>{{ room.name }}</h3>
      <p>Surface: {{ room.surface }} m²</p>
      <p>Windows: {{ room.windows }}</p>
      <p>Sensor: {{ room.sensor }}</p>
      <ul>
        <li v-for="sensor in room.sensors" :key="sensor.id">
          Room: {{ sensor.room }}, Temperature: {{ sensor.temperature }} °C, Humidity: {{ sensor.humidity }} %, Pressure: {{ sensor.pressure }} hPa, Luminosity: {{ sensor.luminosity }} lx
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
                room.sensors = sensorResponse.data;
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
  