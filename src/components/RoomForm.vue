<template>
    <div class="form-container">
      <h2>{{ isEdit ? 'Edit Room' : 'Create Room' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="room.name" required />
        </div>
        <div class="form-group">
          <label for="surface">Surface (m²):</label>
          <input type="number" v-model="room.surface" required />
        </div>
        <div class="form-group">
          <label for="windows">Number of Windows:</label>
          <input type="number" v-model="room.windows" required />
        </div>
        <div class="form-group">
          <label for="sensor">Sensor:</label>
          <input type="text" v-model="room.sensor" required />
        </div>
        <button type="submit" class="submit-button">{{ isEdit ? 'Update' : 'Create' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        room: {
          name: '',
          surface: 0,
          windows: 0,
          sensor: ''
        },
        isEdit: false
      };
    },
    created() {
      const roomId = this.$route.params.id;
      if (roomId) {
        const room = this.$parent.rooms.find(room => room.id === parseInt(roomId));
        if (room) {
          this.room = { ...room };
          this.isEdit = true;
        }
      }
    },
    methods: {
      submitForm() {
        if (this.isEdit) {
          this.$emit('update-room', this.room);
        } else {
          this.$emit('add-room', this.room);
        }
        this.$router.push('/rooms');
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .submit-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>