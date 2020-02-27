<template>
  <div>
    <ul>
      <li class="puce">{{users.name}}</li>
      <li>{{users.username}}</li>
      <li>{{users.email}}</li>
      <li>{{users.phone}}</li>
      <li>{{users.website}}</li>
   
    </ul>
  </div>
</template>

<script>
export default {
  name: 'usersList',
  props: {
    users: Object,
    }, 
  components: {
      
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
</style>
