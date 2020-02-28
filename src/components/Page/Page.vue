<template>
  <div class="main">
    <div class="content">
      
       <h3>User List</h3>
       <input type="text" v-model="search" placeholder="name or email"> 
      <div class="userInfos">
       <!-- through the merge/usersInfos array -->
       <ul v-for="user in usersInfos" :key="user.id">
         <li>{{user.name}}</li>
         <li>{{user.username}}</li>
         <li>{{user.email}}</li>
         <li>{{user.phone}}</li>
         <li>{{user.website}}</li>

         <button @click="getTheAlbum">View Albums</button>
         <ul v-show="loadAlbum">
            <li>{{albums.title}}</li>
         </ul>        
        </ul>
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
      loadAlbum: true,
      albums: [],
      search: ''
    }
  }, 
  mounted(){
    // request users List
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(usersRes => {
        console.log(usersRes.data)
        this.usersInfos = usersRes.data
      })
    axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
      .then(albumsRes => {
        console.log(albumsRes.data)
        this.albums = albumsRes.data
      })
    
  },
  methods: {
    getTheAlbum(){
      return this.albums.map((album) => {
        return album.title;
      })
    }
  }
//  computed: {
//    filterUser(){
//      return this.usersInfos.filter((user) => {
//        return user.name.match(this.search)
//        });
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
