<template>
  <div class="main">
    <table>
      <!-- 1 row of 5 columns -->
      <tr>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <th>website</th>
      </tr>
      <!--  -->
      <tr>
        <th>{{user.name}}</th>
        <th>{{user.username}}</th>
        <th>{{user.email}}</th>
        <th>{{user.phone}}</th>
        <th>{{user.website}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>

</style>
