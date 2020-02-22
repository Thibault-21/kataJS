<template>
  <div class="main">
    <div class="content">
      
       <h3>User List</h3>
       <input type="text" v-model="search" placeholder="name or email"> 
      <div class="userInfos">
       <!-- through the merge/usersInfos array -->
        <ul v-for="user in usersInfos" :key="user.id">
          <!-- through the users/u array -->
          <ul v-for="u in user.usersInfos" :key="u.id"> 
            <li class="puce">{{user.name}}</li>
            <li>{{u.username}}</li>
            <li>{{u.email}}</li>
            <li>{{u.phone}}</li>
            <li>{{u.website}}</li>
            <li>{{u.website}}</li>
          </ul>
          <!-- through the album array / a -->
          <ul v-for="a in user.usersInfos" :key="a.id">
            <li>{{a.title}}</li>
          </ul>
          <!-- through the photo array / p -->
          <ul v-for="p in user.usersInfos" :key="p.id">
            <li>{{p.thumbnailUrl}}</li>
            <li>{{p.title}}</li>
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
      search: ''
    }
  }, 
  mounted(){
    var merge = [];
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
          merge.push(users);
          // console.log(merge);
          
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
        merge.push(albums);
        // console.log(merge);
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
        merge.push(photos);
        this.usersInfos = merge;
        console.log(merge);         
    })
    .catch(error => console.log(error, 'photos_error'))
  },
 computed: {
   filterUser(){
     return this.usersInfos.filter((user) => {
       return user.name.match(this.search)
       });
   }
 }
}
    /*
    let first = 'https://jsonplaceholder.typicode.com/users';
    let second = 'https://jsonplaceholder.typicode.com/users/1/albums';
    let third = 'https://jsonplaceholder.typicode.com/users/1/photos';

    
    const firstRequest = axios.get(first);
    const secondRequest = axios.get(second);
    const thirdRequest = axios.get(third);


    axios.all([firstRequest, secondRequest, thirdRequest])
         .then(axios.spread((...responses) => {

            const firstRequest  = responses[0];
            // const users = firstRequest
            //   .map(x => ({
            //     name: x.name, 
            //     username: x.username, 
            //     email: x.email, 
            //     phone: x.phone, 
            //     website: x.website
            //     }))
            
           console.log(firstRequest);
              
            const secondRequest = responses[1]
            // const albums = secondRequest
            //   .map(x => ({ 
            //     title: x.title 
            //     }))

           console.log(secondRequest);

            const thirdRequest = responses[2]
            // const photos = thirdRequest
            //   .map(x => ({
            //     thumbnailUrl: x.thumbnailUrl, 
            //     title: x.title
            //   }))

          console.log(thirdRequest);
          // const merge = [...users, ...albums, ...photos];
           this.usersInfos = firstRequest
        
        }))
        
        .catch(error => {
           console.log(error, 'global_axios_error')
         });
  },
*/
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
