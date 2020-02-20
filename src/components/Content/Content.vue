<template>
  <div class="main">
    <div class="top">
    <!-- <button @click.prevent="submit" class="btn btn-a">Get the Users' List</button> -->
    </div>

    <div class="content">
      <h4>User List</h4>
      <ul> 
        <!-- userInfos -->
        <li>{{name}}</li>
        <li>{{username}}</li>
        <li>{{mail}}</li>
        <li>{{phone}}</li>
        <li>{{website}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
 name: 'Content',

  data(){
    return {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    }
  }, 
   mounted(){
   axios.get('/users')
    .then(res => {
      console.log(res)
      const data = res.data 
      const users = []
      for(let key in data) {
        const user = data[key]
        user.id = key
        users.push(user)
      }
      console.log(users)
      this.email = users[0].email 
   })
    .catch(error => console.log(error))
 }, 
  methods: {
    submit(){

    }
  }
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

</style>
