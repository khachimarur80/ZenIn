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
            <v-icon>
              mdi-inbox
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon>
              mdi-checkbox-marked-circle-plus-outline
            </v-icon>
          </v-btn>
          <v-divider color="#eee" class="my-2"></v-divider>
          <v-btn icon small>
            <v-icon>
              mdi-flag-outline
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon>
              mdi-update
            </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon>
              mdi-alarm
            </v-icon>
          </v-btn>
          <v-divider color="#eee" class="my-2"></v-divider>
          <v-btn icon small>
            <v-icon>
              mdi-table
            </v-icon>
          </v-btn>
          <v-divider color="#eee" class="my-2"></v-divider>
          <v-btn icon small>
            <v-icon>
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
        <Schedule/>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import Schedule from '@/components/Schedule.vue'

export default {
  name: 'App',

  components: {
    Schedule
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
body, html {
  overflow: 1px solid hidden;
}
#title-bar {
  height: 30px;
  border-bottom: 1px solid var(--v-secondary-base);
  user-select: none;
  -webkit-app-region: drag;
}
.vertical-menu {
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
}
#main {
  height: calc(100vh - 30px);
  display: flex;
}
</style>
