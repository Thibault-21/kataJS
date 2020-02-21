<template>
  <div class="main">
    <div class="content">
      <input type="text" v-model="search" placeholder="name or email"> 
      <div class="userInfos">
        <h3>User List</h3>
        <ul v-for="user in usersInfos" :key="user.id"> 
          <li class="puce">{{user.name}}</li>
          <li>{{user.username}}</li>
          <li>{{user.email}}</li>
          <li>{{user.phone}}</li>
          <li>{{user.website}}</li>
          <ul v-for="album in usersInfos" :key="album.id">
              <li>{{album.title}}</li>
          </ul>
          <!-- <li><button @click="showPhotos"> Photos</button></li> -->
  <!-- <ul v-for="album in albumsList" :key="album.id">  -->
              <!-- <li><button @click="showAlbums">Albums</button></li> -->
  <!-- </ul> -->     
          </ul>
        <!-- <ul v-for="album in usersInfos" :key="album.id">
          <li>{{album.title}}</li>
        </ul> -->
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
      search: ''
    }
  }, 
  mounted(){
    var users = [];
    // request users List
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const data = response.data
          users = data
           .map(x => 
        ({
          name: x.name, 
          username: x.username, 
          email: x.email, 
          phone: x.phone, 
          website: x.website
        }))
          // this.usersInfos = users;
          console.log(users);
      })
      .catch(error => console.log(error, 'user_error')),
      // request albums
  axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
    .then(response => {
      const secondData = response.data
      const albums = secondData
      .map(x => 
        ({ 
          title: x.title 
        }))

        users.push(albums);

      })
    .catch(error => console.log(error, 'albums_error')),

  axios.get('https://jsonplaceholder.typicode.com/users/1/photos')
    .then(response => {
      const thirdData = response.data
      const photos = thirdData
      .map(x => 
        ({
          thumbnailUrl: x.thumbnailUrl, 
          title: x.title
        }))
       
        users.push(photos);
        this.usersInfos = users;
        console.log(users);
         
    })
    .catch(error => console.log(error, 'photos_error'))
  },
  //  to use for the filter once I get the list 
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
li {
  list-style-type: none;
}
.puce {
  list-style-type: disc;

}
.userInfos {
  display: grid; 
  grid-template-columns: 33% 33% 33%;
}
</style>
