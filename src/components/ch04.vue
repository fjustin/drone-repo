<template>
  <div id="item-list-four">
    <h2>4. ドローンのバッテリーとコントローラーの電源を入れる</h2>
      <div class="video" v-html="youtube">
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
      youtube: '<iframe width="516" height="315" src="https://www.youtube.com/embed/FQZkUnM5nw4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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

/* ウィンドウ幅が0〜479pxの場合に適用するCSS */
@media screen and ( max-width: 479px )
{
  h1, h2 {
    font-weight: normal;
    font-size: 20px;
  }

  ul, ol {
    color: #1e366a;
    border: dotted #1e366a 1px;
    padding: 0.5em 0.5em 0.5em 2em;
  }

  ul li, ol li {
      line-height: 1.5;
      padding: 0.5em 0;
  }

  a {
    color: #42b983;
  }

  img{
    width: auto;
    height:300px;
  }

  .video {
    padding-top: 56.25%;
    position: relative;
    width: 100%;
  }

  .video iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
