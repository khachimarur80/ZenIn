<template>
  <div id="schedule" class="pa-3">
    <div id="tasks" @wheel="scrollHorizontal">
      <v-btn tile elevation="0" v-for="(activity, i) in availableActivities" :key="i"> 
        {{ activity }}
      </v-btn>
    </div>
    <div id="logs">
      <v-card width="50%" height="100%" min-width="340" flat outlined style="background: #121212;" class="pa-2 overflow-auto">
        <div class="d-flex align-center px-4 pb-4">
          <v-text-field solo dense hide-details flat placeholder="New log ...">
          </v-text-field>
        </div>
        <div class="activity">
          <v-row>
            <v-col cols="6" class="d-flex align-center justify-start">
              <span class="text-caption mr-2">
                13:30 - 14:03
              </span>
              <span class="text-body-1">
                Comer
              </span>
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-start">
              <v-chip dense small class="mx-1" outlined>
                Gym
              </v-chip>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-end">
              <span class="text-caption mx-1">
                4/5
              </span>
              <span class="text-caption mx-1">
                83%
              </span>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <v-card width="50%" height="100%" flat outlined color="orange darken-2" style="background: #121212 !important;" class="pa-2">
        <div class="text-center text-h5 mb-3">Programar</div>
        <v-divider></v-divider>
        <div class="activity-contents">
          <div class="d-flex my-1">
            <v-chip small outlined>
              Programación
            </v-chip>
          </div><br>

          <div class="text-h6">
            Descripción
          </div>
          <div class="overflow-auto">
            <v-textarea outlined auto-grow no-resize class="my-2">
            </v-textarea>
          </div>
        </div>
        <div class="d-flex my-1">
          <v-spacer></v-spacer>
          <v-btn outlined color="green">
            Completar
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LogsView',

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
#schedule {
  width: calc(100% - 40px);
}
#tasks {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  margin: 10px;
  scroll-behavior: smooth;
  height: 40px;
}
#logs {
  display: flex;
  height: calc(100% - 60px);
  gap: 10px;
  padding: 10px;
}
.activity {
  user-select: none;
}
.activity-contents {
  height: calc(100% - 85px);
  overflow: scroll;
}
</style>
