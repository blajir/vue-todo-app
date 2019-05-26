<template lang="pug">
  nav#nav
    ul.navlist
      li.navlist__item
        router-link(to="/")
          |all
      li.navlist__item
        router-link(to="/complete")
          |complete
</template>

<script>
export default {
  name: 'todoNavigation'
}
</script>

<style lang="scss" scoped>
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navlist {}
.navlist__item {
  list-style: none;
  text-align: left;
}
</style>
