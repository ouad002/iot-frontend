<template>
  <div class="rooms-container">
    <h2>Rooms</h2>
    <button class="create-button" @click="createRoom">Create Room</button>
    <ul class="room-list">
      <li v-for="room in rooms" :key="room.id" class="room-item">
        <p><strong>Name:</strong> {{ room.name }}</p>
        <p><strong>Surface:</strong> {{ room.surface }} m²</p>
        <p><strong>Number of Windows:</strong> {{ room.windows }}</p>
        <p><strong>Sensor:</strong> {{ room.sensor }}</p>
        <button class="edit-button" @click="editRoom(room.id)">Edit</button>
        <button class="delete-button" @click="deleteRoom(room.id)">Delete</button>
      </li>
    </ul>
    <router-view @add-room="addRoom" @update-room="updateRoom"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [],
      nextId: 0,
    };
  },
  methods: {
    createRoom() {
      this.$router.push('/rooms/create');
    },
    editRoom(id) {
      this.$router.push(`/rooms/edit/${id}`);
    },
    deleteRoom(id) {
      this.rooms = this.rooms.filter(room => room.id !== id);
    },
    addRoom(room) {
      room.id = this.nextId++;
      this.rooms.push(room);
    },
    updateRoom(updatedRoom) {
      const index = this.rooms.findIndex(room => room.id === updatedRoom.id);
      if (index !== -1) {
        this.rooms.splice(index, 1, updatedRoom);
      }
    }
  }
};
</script>

<style scoped>
.rooms-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.create-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.create-button:hover {
  background-color: #45a049;
}

.room-list {
  list-style-type: none;
  padding: 0;
}

.room-item {
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.edit-button, .delete-button {
  background-color: #008CBA;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
}

.delete-button {
  background-color: #f44336;
}

.edit-button:hover {
  background-color: #007bb5;
}

.delete-button:hover {
  background-color: #da190b;
}
</style>
  