<template lang="pug">
  nav
    ul
      li
        router-link(to="/")
          |all
      li
        router-link(to="/complete")
          |complete
</template>

<script>
export default {
  name: 'todoNavigation'
}
</script>
