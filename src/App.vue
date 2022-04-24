<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Habit :name="Learn something new"></Habit>
  <Habit :name="Learn something new 2"></Habit>  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Habit from './components/Habit.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Habit
  }
}
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
