<template>
  <div id="inside">
    <h2>Phantom 3を屋内飛行する上での注意点（ATTIモード）</h2>
      <img :src="testimage">
      <p>ATTIモードはGPSとビジョンポジショニングを使わないで、他のセンサーによって機体の姿勢制御を行うモードです。</p>
      <p>DJI GOのアプリの下記の手順でATTIモードにすることができます。</p>
      <p><span>DJI GO app > MCパラメータ設定 > アドバンス設定 > ビジョンポジショニング使用</span></p>
      <p>ATTIモードを利用する際には、十分にテスト飛行を行う必要があります。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testimage: require('../assets/phantom.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  position: relative;
  padding: .25em 0 .5em .75em;
  border-left: 6px solid #FA5882;
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

span{
  color: #666666;
  border-bottom: dashed 1px #666666;
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
    height:250px;
  }
}

span{
  color: #666666;
  border-bottom: dashed 1px #666666;
}
</style>
