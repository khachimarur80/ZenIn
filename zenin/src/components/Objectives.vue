<template>
  <div id="objectives" class="pa-3">
    Objectives
  </div>
</template>
<script>
export default {
  name: 'ObjectivesVue',

  methods: {
    scrollHorizontal(event) {
      document.getElementById("tasks").scrollLeft += event.deltaY * 3;
    }
  },

  data: () => ({
    currentTask: null,
    logs: [],
    availableActivities: [1, 2, 3], 
  }),
};
</script>
<style scoped>
body, html {
  overflow: 1px solid hidden;
}
#objectives {
  width: calc(100% - 40px);
}
</style>
