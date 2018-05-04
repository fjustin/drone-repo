<template>
  <item-list-one v-bind:links="links"></item-list-one>
</template>

<script>
import Ch01 from '../components/ch01.vue'

export default {
  components: {
    'item-list-one': Ch01
  },
  name: 'HelloWorld',
  props: ['links'],
  data () {
    return {
      lists: [
        {id: 1, item: 'DJIのアプリをダウンロードする'},
        {id: 2, item: 'スマートフォンからDJIアプリを起動し、DJIアカウントを作成する'},
        {id: 3, item: 'ドローンの一覧からPHAMTOM3を選択する'},
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
h1, h2 {
  font-weight: normal;
}

/* 目次のスタイル */
ul, ol {
    color: #1e366a;
    border: dotted #1e366a 1px;/*ドット 色 太さ*/
    padding: 0.5em 0.5em 0.5em 2em;
}

ul li, ol li {
    line-height: 1.5;
    padding: 0.5em 0;
}

a {
  color: #42b983;
}
</style>
