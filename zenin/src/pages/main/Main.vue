<template>
  <v-app>
    <v-main>
      <div id="title-bar" class="d-flex justify-center align-center">
        <span class="text-overline">
          ZenIn
        </span>
      </div>
      <div id="main">
        <div class="vertical-menu pt-2">
          <v-btn icon small>
            <v-icon size="20" @click="view=0">
              mdi-inbox
            </v-icon>
          </v-btn>
          <v-btn icon small @click="view=1">
            <v-icon size="20">
              mdi-checkbox-marked-circle-plus-outline
            </v-icon>
          </v-btn>
          <v-divider color="#333" class="my-2"></v-divider>
          <v-btn icon small @click="view=2">
            <v-icon size="20">
              mdi-flag-outline
            </v-icon>
          </v-btn>
          <v-btn icon small @click="view=3">
            <v-icon size="20">
              mdi-update
            </v-icon>
          </v-btn>
          <v-btn icon small @click="view=4">
            <v-icon size="20">
              mdi-alarm
            </v-icon>
          </v-btn>
          <v-divider color="#333" class="my-2"></v-divider>
          <v-btn icon small @click="view=5">
            <v-icon size="20">
              mdi-table
            </v-icon>
          </v-btn>
          <v-divider color="#333" class="my-2"></v-divider>
          <v-btn icon small>
            <v-icon size="20">
              mdi-chart-line
            </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon small class="mb-1">
            <v-icon>
              mdi-cog-outline
            </v-icon>
          </v-btn>
        </div>
        <Inbox v-if="view==0"/>
        <Logs v-if="view==1"/>
        <Objectives v-if="view==3"/>
        <Campaigns v-if="view==2"/>
        <Schedules v-if="view==4"/>
      </div>
    </v-main>
  </v-app>
</template>
<script>

import Inbox from '@/components/Inbox.vue'
import Logs from '@/components/Logs.vue'
import Objectives from '@/components/Objectives.vue'
import Campaigns from '@/components/Campaigns.vue'
import Schedules from '@/components/Schedules.vue'

export default {
  name: 'App',

  components: {
    Inbox,
    Logs,
    Objectives,
    Campaigns,
    Schedules,
  },

  data: () => ({
    view: 'campaigns',
  }),
};
</script>
<style scoped>
body, html {
  overflow: 1px solid hidden;
}
#title-bar {
  height: 30px;
  background: #090909;
  user-select: none;
  -webkit-app-region: drag;
}
.vertical-menu {
  padding: 5px;
  display: flex;
  flex-direction: column;
  background: #101010;
  width: 40px;
}
#main {
  height: calc(100vh - 30px);
  display: flex;
  width: 100h;
}
</style>
