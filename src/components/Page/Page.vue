<template>
  <div class="main">
    <Layout>
      <template #header>
        <h3>Kata JS</h3>
      </template>
      
      <!-- content -->
      <template>
        <Content></Content>
      </template>
      
      <template #footer>
        <h4>Thibault Decousus</h4>
      </template>
    </Layout>
  </div>

</template>

<script>
import Layout from '../Layout/Layout'
import Content from '../Content/Content'

export default {
  name: 'Page',
  components: {
    Layout,
    Content
  }
}
</script>

<style scoped>

</style>
