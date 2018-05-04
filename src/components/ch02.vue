<template>
  <div id="item-list-two">
    <h2>2. スマートフォンからDJIアプリを起動し、DJIアカウントを作成する</h2>
      <img :src="droneimage">
      <p>DJI製品のアプリを使用する為にDJIのカウントを作成します。</p>
      <p>メールアドレス、パスワードを設定しましょう。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      droneimage: require('../assets/droneimage.png')
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

img{
  width: auto;
  height:500px;
}
</style>
