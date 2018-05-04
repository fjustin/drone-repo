<template>
  <div id="app">
    <item-list-one v-bind:links="links"></item-list-one>
    <item-list-two></item-list-two>
    <item-list-three></item-list-three>
    <item-list-four></item-list-four>
  </div>
</template>

<script>
import Ch01 from '../components/ch01.vue'
import Ch02 from '../components/ch02.vue'
import Ch03 from '../components/ch03.vue'
import Ch04 from '../components/ch04.vue'

export default {
  components: {
    'item-list-one': Ch01,
    'item-list-two': Ch02,
    'item-list-three': Ch03,
    'item-list-four': Ch04

  },
  name: 'HelloWorld',
  props: ['links'],
  data () {
    return {
      lists: [
        {id: 4, item: 'ドローンのバッテリーとコントローラーの電源を入れる'},
        {id: 5, item: 'アプリの画面でキャリブレーションを選択し、ドローンを360°回転させる'},
        {id: 6, item: 'アプリ画面が緑色に切り替わったら、準備完了'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
