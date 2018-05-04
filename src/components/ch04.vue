<template>
  <div id="item-list-four">
    <h2>4. ドローンのバッテリーとコントローラーの電源を入れる</h2>
      <div class="video" v-html="youtube">
        {{ youtube }}
      </div>
      <p>ドローン本体の操作を行います。</p>
      <p>バッテリーとコントローラーのそれぞれの電源を入れます。どちらも長押しの後にもう一度押すことで電源が入ります。</p>
      <p>分からない方は上記の動画を参考にしてください。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FQZkUnM5nw4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  position: relative;
  padding: .25em 0 .5em .75em;
  border-left: 6px solid #3498db;
  margin-top: 50px;
}
h2::after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: '';
  width: 100%;
  height: 0;
  border-bottom: 1px solid #ccc;
}

/* 目次のスタイル */
a {
  color: #42b983;
}

img{
  width: auto;
  height:500px;
}
</style>
