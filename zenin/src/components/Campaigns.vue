<template>
  <div id="campaigns" class="pa-3">
    <v-card id="campaigns-list" height="100%" width="100%" outlined style="background: #121212;" class="pa-2 overflow-auto">
      <div class="d-flex align-center pb-4">
        <v-text-field solo flat dense hide-details placeholder="New Campaign ...">
        </v-text-field>
      </div>
      <v-card flat>
        <div class="d-flex pa-2 align-center">
          <div class="text-h5">
            MySetup
          </div>
          <v-spacer></v-spacer>
          <div class="text-body-2">
            1/12/2023
          </div>
        </div>
        <div class="pa-3 text-body-1">
          Tener una demo de MySetup funcional
        </div>
        <div class="d-flex pa-2 flex-end">
          <v-spacer></v-spacer>
          <v-btn text flat color="green" @click="selectedCampaign=!selectedCampaign">
            Ver
          </v-btn>
        </div>
      </v-card>
    </v-card>
    <v-card id="campaign-details" v-if="selectedCampaign" height="100%" width="100%" outlined style="background: #121212;" class="pa-2">
      <div class="text-center text-h5 mb-3">Programar</div>
      <v-divider></v-divider><br>
      <div class="text-h6">
        Descripción
      </div>
      <div class="overflow-auto">
        <v-textarea outlined auto-grow no-resize class="my-2">
        </v-textarea>
      </div>
      <div class="d-flex my-1">
        <v-spacer></v-spacer>
        <v-btn outlined color="green">
          Completar
        </v-btn>
      </div>
    </v-card>
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
#campaigns {
  width: calc(100% - 40px);
  height: 100%;
  overflow: scroll;
  display: flex;
  gap: 10px;
}

</style>
