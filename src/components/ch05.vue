<template>
  <div id="item-list-five">
    <h2>5. キャリブレーションを行う</h2>
      <img :src="caribrate">
      <p>ドローンのコンパスを初期化するキャリブレーションという作業を行います。</p>
      <p>アプリの画面から上記の赤枠内のCaribrateを選択します。</p>
      <div class="caribratemovie" v-html="caribratemovie">
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
  height:250px;
}

/* ウィンドウ幅が0〜479pxの場合に適用するCSS */
@media screen and ( max-width:479px )
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
    height:100px;
  }

  .caribratemovie {
    position: relative;
    padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
    height: 0;
    overflow: hidden;
  }

  .caribratemovie iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
