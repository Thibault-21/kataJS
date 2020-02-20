<template>
  <div class="main">
    <div class="content">
      <div class="">
        <h4>User List</h4>
        <input type="text" v-model="search" placeholder="search...">
        <!-- <div v-for="user in filterUser" class="filter"></div> -->
      </div>
      <div class="userInfos">
        <User v-for="user in users" :key="user.id" :user="user"></User>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import User from './User'
export default {
 name: 'Content',
 components: {
   User
 },
  data(){
    return {
      users: [],
      search:''
    }
  }, 
   created(){
  //  get the users'list 
    axios.get('/users')
      .then(res => {
        // console.log(res)      
    const data = res.data   
    const users = data.map(x => ({name: x.name, username: x.username, email: x.email, phone: x.phone, website: x.website}))    
      console.log(users)
      })
      .catch(error => console.log(error))
   }  
  //  to use for the filter once I get the list 
//  computed: {
//    filterUser(){
//      return this.users.filter((user)  => {
//        return {
//          user.name.match(this.search),
//          user.email.match(this.search);
//        }
//      });
//    }
//  }
}
</script>
 
<style scoped>
.main {
  display: grid; 
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100%;
}
.btn { 
  grid-column-start: 2;
  grid-column-end: 3;

  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: rgb(165, 29, 29);
  color: white;
  border: 1px solid rgb(165, 29, 29);
}
input:focus {
  outline: none;
}

</style>
