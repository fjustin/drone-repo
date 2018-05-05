<template>
  <div id="item-list-three">
    <h2>3. ドローンの一覧からPHAMTOM3を選択する</h2>
      <img :src="dji">
      <p>アカウント作成後にドローンを選択する画面が現れるので、<span>PHAMTOM3 Advanced</span>を選択します。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dji: require('../assets/dji.png')
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

img{
  width: auto;
  height:500px;
}

span{
  color: red;
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
    height:300px;
  }
}
</style>
