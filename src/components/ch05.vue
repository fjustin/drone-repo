<template>
  <div id="item-list-five">
    <h2>5. キャリブレーションを行う</h2>
      <img :src="caribrate">
      <p>ドローンのコンパスを初期化するキャリブレーションという作業を行います。</p>
      <p>アプリの画面から上記の赤枠内のCaribrateを選択します。</p>
      <div class="caribratemovie" v-html="caribratemovie">
        {{ caribratemovie }}
      </div>
      <p>ドローンを縦にして360°回転させます。</p>
      <p>その後に機体を横に倒し、再び360°回転させます。アプリ上でキャリブレーションの画像が消えたら完了です。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      caribrate: require('../assets/DJIGO.png'),
      caribratemovie: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DHCDJKChXTE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
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
a {
  color: #42b983;
}

img{
  width: auto;
  height:250px;
}
</style>
