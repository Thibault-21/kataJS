<template>
  <div class="main">
    <div class="content">
      
       <h3>User List</h3>
       <input type="text" v-model="search" placeholder="name or email"> 
      <div class="userInfos">
       <!-- through the merge/usersInfos array -->
          <!-- through the users/u array -->
          <ul v-for="user in usersInfos" :key="user.id"> 
            <li class="puce">{{user.name}}</li>
            <li>{{user.username}}</li>
            <li>{{user.email}}</li>
            <li>{{user.phone}}</li>
            <li>{{user.website}}</li>
            <p v-show="albums">{{albums.title}}</p>
            <p v-show="photos">{{photos.title}} {{photos.thumbnailUrl}}</p>
            <button type="submit" @click="albums">view Album</button>
            <button @click="getPhotos">view Photos</button>

          </ul>
          <!-- through the album array / a -->
          <!-- <ul v-for="a in user.usersInfos" :key="a.id">
            <li>{{a.title}}</li>
          </ul> -->
          <!-- through the photo array / p -->
          <!-- <ul v-for="p in user.usersInfos" :key="p.id">
            <li>{{p.thumbnailUrl}}</li>
            <li>{{p.title}}</li>
          </ul>   -->

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Page',
  data(){
    return {
      usersInfos: [],
      albums: [],
      photos: [],
      search: ''
    }
  }, 
  mounted(){
    // request users List
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.usersInfos = response.data
      })
   
  },
  methods: {
    getAlbums(){
       axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
      .then(response => {
        this.albums = response.data
      })

    },
    getPhotos(){
       axios.get('https://jsonplaceholder.typicode.com/users/1/photos')
      .then(response => {
       this.photos = response.data
      })

    }
  },
 computed: {
   filterUser(){
     return this.usersInfos.filter((user) => {
       return user.name.match(this.search)
       });
   }
 }
}
</script>

<style scoped>
.content {
  display: grid; 
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 80%;

}
input {
  border-radius: 5px;
  width: 20%;
  border: 1px solid black;
  padding: 10px;
  height: 10%;
}
input::placeholder {
  color: navy;
}
input:focus {
  outline: none;

}
li {
  list-style-type: none;
}
.puce {
  list-style-type: disc;

}
.userInfos {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid; 
  grid-template-columns: 33% 33% 33%;
}
</style>
