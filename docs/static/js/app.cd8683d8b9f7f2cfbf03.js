webpackJsonp([0],{"06HZ":function(t,e,i){t.exports=i.p+"static/img/DJIGO.a989fe6.png"},"0DVB":function(t,e){},"2At1":function(t,e){},"2iV1":function(t,e,i){t.exports=i.p+"static/img/dji.abfdf54.png"},JhwN:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},r,!1,function(t){i("qGWJ")},null,null).exports,a=i("/ocq"),o={data:function(){return{links:[{src:"https://play.google.com/store/apps/details?id=dji.pilot&hl=ja",text:"Androidはこちら"},{src:"https://itunes.apple.com/jp/app/dji-go/id943780750?mt=8",text:"iPhoneはこちら"}],image:i("pNvJ")}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"item-list-one"}},[i("h2",[t._v("1. DJIアプリをダウンロードする")]),t._v(" "),i("img",{attrs:{src:t.image,alt:"drone app image"}}),t._v(" "),i("p",[t._v("下記リンクよりDJIのアプリをダウンロードする")]),t._v(" "),t._l(t.links,function(e){return i("p",{key:e},[i("a",{attrs:{href:e.src}},[t._v(t._s(e.text))])])})],2)},staticRenderFns:[]};var l={data:function(){return{droneimage:i("QAx1")}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"item-list-two"}},[e("h2",[this._v("2. スマートフォンからDJIアプリを起動し、DJIアカウントを作成する")]),this._v(" "),e("img",{attrs:{src:this.droneimage}}),this._v(" "),e("p",[this._v("DJI製品のアプリを使用する為にDJIのカウントを作成します。")]),this._v(" "),e("p",[this._v("メールアドレス、パスワードを設定しましょう。")])])},staticRenderFns:[]};var u={data:function(){return{dji:i("2iV1")}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"item-list-three"}},[e("h2",[this._v("3. ドローンの一覧からPHAMTOM3を選択する")]),this._v(" "),e("img",{attrs:{src:this.dji}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("アカウント作成後にドローンを選択する画面が現れるので、"),e("span",[this._v("PHAMTOM3 Advanced")]),this._v("を選択します。")])}]};var d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"item-list-four"}},[i("h2",[t._v("4. ドローンのバッテリーとコントローラーの電源を入れる")]),t._v(" "),i("div",{staticClass:"video",domProps:{innerHTML:t._s(t.youtube)}}),t._v(" "),i("p",[t._v("ドローン本体の操作を行います。")]),t._v(" "),i("p",[t._v("バッテリーとコントローラーのそれぞれの電源を入れます。どちらも長押しの後にもう一度押すことで電源が入ります。")]),t._v(" "),i("p",[t._v("分からない方は上記の動画を参考にしてください。")])])},staticRenderFns:[]};var _={data:function(){return{caribrate:i("06HZ"),caribratemovie:'<iframe width="516" height="315" src="https://www.youtube.com/embed/DHCDJKChXTE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"item-list-five"}},[i("h2",[t._v("5. キャリブレーションを行う")]),t._v(" "),i("img",{attrs:{src:t.caribrate}}),t._v(" "),i("p",[t._v("ドローンのコンパスを初期化するキャリブレーションという作業を行います。")]),t._v(" "),i("p",[t._v("アプリの画面から上記の赤枠内のCaribrateを選択します。")]),t._v(" "),i("div",{staticClass:"caribratemovie",domProps:{innerHTML:t._s(t.caribratemovie)}}),t._v(" "),i("p",[t._v("ドローンを縦にして360°回転させます。")]),t._v(" "),i("p",[t._v("その後に機体を横に倒し、再び360°回転させます。アプリ上でキャリブレーションの画像が消えたら完了です。")])])},staticRenderFns:[]};var f={data:function(){return{testimage:i("gSRg")}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"inside"}},[i("h2",[t._v("Phantom 3を屋内飛行する上での注意点（ATTIモード）")]),t._v(" "),i("img",{attrs:{src:t.testimage}}),t._v(" "),i("p",[t._v("ATTIモードはGPSとビジョンポジショニングを使わないで、他のセンサーによって機体の姿勢制御を行うモードです。")]),t._v(" "),i("p",[t._v("DJI GOのアプリの下記の手順でATTIモードにすることができます。")]),t._v(" "),t._m(0),t._v(" "),i("p",[t._v("ATTIモードを利用する際には、十分にテスト飛行を行う必要があります。")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("DJI GO app > MCパラメータ設定 > アドバンス設定 > ビジョンポジショニング使用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"credit",staticStyle:{color:"white","font-size":"10px","font-weight":"bold",position:"absolute",bottom:"0",right:"0","margin-right":"10px"}},[this._v("\n      © 2018 Daiki Futami (Retty.inc).\n    ")])])}]};var g={components:{"item-list-one":i("VU/8")(o,c,!1,function(t){i("YBHN")},"data-v-ce3c473c",null).exports,"item-list-two":i("VU/8")(l,v,!1,function(t){i("Od2g")},"data-v-1075990a",null).exports,"item-list-three":i("VU/8")(u,p,!1,function(t){i("2At1")},"data-v-05bfaad6",null).exports,"item-list-four":i("VU/8")({data:function(){return{youtube:'<iframe width="516" height="315" src="https://www.youtube.com/embed/FQZkUnM5nw4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}},d,!1,function(t){i("bFCa")},null,null).exports,"item-list-five":i("VU/8")(_,m,!1,function(t){i("0DVB")},null,null).exports,inside:i("VU/8")(f,h,!1,function(t){i("Uaax")},"data-v-4416b83c",null).exports},name:"HelloWorld",props:["links"],data:function(){return{}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("item-list-one",{attrs:{links:this.links}}),this._v(" "),e("item-list-two"),this._v(" "),e("item-list-three"),this._v(" "),e("item-list-four"),this._v(" "),e("item-list-five"),this._v(" "),e("inside")],1)},staticRenderFns:[]};var w=i("VU/8")(g,b,!1,function(t){i("JhwN")},"data-v-98bf4950",null).exports;n.a.use(a.a);var x=new a.a({routes:[{path:"/",name:"HelloWorld",component:w}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},Od2g:function(t,e){},QAx1:function(t,e,i){t.exports=i.p+"static/img/droneimage.c0d4a72.png"},Uaax:function(t,e){},YBHN:function(t,e){},bFCa:function(t,e){},gSRg:function(t,e,i){t.exports=i.p+"static/img/phantom.f781be7.png"},pNvJ:function(t,e,i){t.exports=i.p+"static/img/dji-go.2c98247.jpg"},qGWJ:function(t,e){}},["NHnr"]);