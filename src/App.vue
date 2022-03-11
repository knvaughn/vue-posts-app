<template>
  <section class="section">
    <div class="container">
      <suspense>
        <template #default>
          <timeline-view />
        </template>
        <template #fallback>
          <loading-spinner />
        </template>
      </suspense>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimelineView from './components/TimelineView.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

export default defineComponent({
  name: 'App',
  components: {
    TimelineView,
    LoadingSpinner
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
