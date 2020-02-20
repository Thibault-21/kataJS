<template>
  <div class="main">
    <header>
      <slot name="header" class="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer" class="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'

}
</script>

<style scoped>
header, footer {
  background-color: rgb(165, 29, 29);
  height: 100%;
  border: 1px solid rgb(165, 29, 29);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
main {
  background-color: white;
  height: 100%;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgb(165, 29, 29);
  border-radius: 5px;

  display: grid;
}
</style>
