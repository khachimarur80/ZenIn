<template>
  <div id="inbox" class="pa-3">
    <v-card style="background: #121212" outlined height="100%" width="50%">
    </v-card>
    <div id="details">
      <v-card style="background: #121212;" outlined height="200px" width="200px" class="d-flex justify-center align-center">
        <v-icon size="60">
          mdi-timer-sand
        </v-icon>
        <span class="text-h5">
          1440 min
        </span>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ObjectivesVue',

  methods: {
  },

  data: () => ({
    selectedCampaign: null,
  }),
};
</script>
<style scoped>
body, html {
  overflow: 1px solid hidden;
}
#inbox {
  width: calc(100% - 40px);
  height: 100%;
  display: flex;
  border: 1px solid red;
}
#details {
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  padding: 20px;
  flex-direction: column;
}
</style>
