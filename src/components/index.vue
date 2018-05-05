<template>
  <div id="app">
    <item-list-one v-bind:links="links"></item-list-one>
    <item-list-two></item-list-two>
    <item-list-three></item-list-three>
    <item-list-four></item-list-four>
    <item-list-five></item-list-five>
  </div>
</template>

<script>
import Ch01 from '../components/ch01.vue'
import Ch02 from '../components/ch02.vue'
import Ch03 from '../components/ch03.vue'
import Ch04 from '../components/ch04.vue'
import Ch05 from '../components/ch05.vue'

export default {
  components: {
    'item-list-one': Ch01,
    'item-list-two': Ch02,
    'item-list-three': Ch03,
    'item-list-four': Ch04,
    'item-list-five': Ch05

  },
  name: 'HelloWorld',
  props: ['links'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
