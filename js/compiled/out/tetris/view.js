// Compiled by ClojureScript 1.9.229 {}
goog.provide('tetris.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tetris.game');
tetris.view.block = (function tetris$view$block(x,y,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[y,0.1,"black","0.8",color,(1),"0.01",x,(1)])], null);
});
tetris.view.tetris = (function tetris$view$tetris(p__47028){
var map__47043 = p__47028;
var map__47043__$1 = ((((!((map__47043 == null)))?((((map__47043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47043):map__47043);
var world = map__47043__$1;
var piece = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var x = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var block_pile = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"block-pile","block-pile",-596087238));
var color = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pause_QMARK_ = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"pause?","pause?",-1582463491));
var done_QMARK_ = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var score = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 10 20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function (){
return cljs.core.swap_BANG_.call(null,tetris.game.app_state,cljs.core.update,new cljs.core.Keyword(null,"pause?","pause?",-1582463491),cljs.core.not);
});})(map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(200, 220, 220)"], null)], null),(function (){var iter__44876__auto__ = ((function (map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function tetris$view$tetris_$_iter__47045(s__47046){
return (new cljs.core.LazySeq(null,((function (map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function (){
var s__47046__$1 = s__47046;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47046__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__44872__auto__ = ((function (s__47046__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function tetris$view$tetris_$_iter__47045_$_iter__47047(s__47048){
return (new cljs.core.LazySeq(null,((function (s__47046__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function (){
var s__47048__$1 = s__47048;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__47048__$1);
if(temp__4657__auto____$1){
var s__47048__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47048__$2)){
var c__44874__auto__ = cljs.core.chunk_first.call(null,s__47048__$2);
var size__44875__auto__ = cljs.core.count.call(null,c__44874__auto__);
var b__47050 = cljs.core.chunk_buffer.call(null,size__44875__auto__);
if((function (){var i__47049 = (0);
while(true){
if((i__47049 < size__44875__auto__)){
var b = cljs.core._nth.call(null,c__44874__auto__,i__47049);
if((cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)) > (0))){
cljs.core.chunk_append.call(null,b__47050,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.view.block,(a + x),(y + b),color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.call(null)], null)));

var G__47057 = (i__47049 + (1));
i__47049 = G__47057;
continue;
} else {
var G__47058 = (i__47049 + (1));
i__47049 = G__47058;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47050),tetris$view$tetris_$_iter__47045_$_iter__47047.call(null,cljs.core.chunk_rest.call(null,s__47048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47050),null);
}
} else {
var b = cljs.core.first.call(null,s__47048__$2);
if((cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)) > (0))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.view.block,(a + x),(y + b),color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.call(null)], null)),tetris$view$tetris_$_iter__47045_$_iter__47047.call(null,cljs.core.rest.call(null,s__47048__$2)));
} else {
var G__47059 = cljs.core.rest.call(null,s__47048__$2);
s__47048__$1 = G__47059;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__47046__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
,null,null));
});})(s__47046__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
;
var fs__44873__auto__ = cljs.core.seq.call(null,iterys__44872__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,piece)))));
if(fs__44873__auto__){
return cljs.core.concat.call(null,fs__44873__auto__,tetris$view$tetris_$_iter__47045.call(null,cljs.core.rest.call(null,s__47046__$1)));
} else {
var G__47060 = cljs.core.rest.call(null,s__47046__$1);
s__47046__$1 = G__47060;
continue;
}
} else {
return null;
}
break;
}
});})(map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
,null,null));
});})(map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
;
return iter__44876__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,piece)));
})(),(function (){var iter__44876__auto__ = ((function (map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function tetris$view$tetris_$_iter__47051(s__47052){
return (new cljs.core.LazySeq(null,((function (map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function (){
var s__47052__$1 = s__47052;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47052__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__44872__auto__ = ((function (s__47052__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function tetris$view$tetris_$_iter__47051_$_iter__47053(s__47054){
return (new cljs.core.LazySeq(null,((function (s__47052__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score){
return (function (){
var s__47054__$1 = s__47054;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__47054__$1);
if(temp__4657__auto____$1){
var s__47054__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47054__$2)){
var c__44874__auto__ = cljs.core.chunk_first.call(null,s__47054__$2);
var size__44875__auto__ = cljs.core.count.call(null,c__44874__auto__);
var b__47056 = cljs.core.chunk_buffer.call(null,size__44875__auto__);
if((function (){var i__47055 = (0);
while(true){
if((i__47055 < size__44875__auto__)){
var b = cljs.core._nth.call(null,c__44874__auto__,i__47055);
var block_type = cljs.core.get_in.call(null,block_pile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
if(cljs.core._EQ_.call(null,(-2),block_type)){
cljs.core.chunk_append.call(null,b__47056,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.view.block,a,b,"grey"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.call(null)], null)));

var G__47061 = (i__47055 + (1));
i__47055 = G__47061;
continue;
} else {
var G__47062 = (i__47055 + (1));
i__47055 = G__47062;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47056),tetris$view$tetris_$_iter__47051_$_iter__47053.call(null,cljs.core.chunk_rest.call(null,s__47054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47056),null);
}
} else {
var b = cljs.core.first.call(null,s__47054__$2);
var block_type = cljs.core.get_in.call(null,block_pile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
if(cljs.core._EQ_.call(null,(-2),block_type)){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.view.block,a,b,"grey"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.call(null)], null)),tetris$view$tetris_$_iter__47051_$_iter__47053.call(null,cljs.core.rest.call(null,s__47054__$2)));
} else {
var G__47063 = cljs.core.rest.call(null,s__47054__$2);
s__47054__$1 = G__47063;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__47052__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
,null,null));
});})(s__47052__$1,a,xs__5205__auto__,temp__4657__auto__,map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
;
var fs__44873__auto__ = cljs.core.seq.call(null,iterys__44872__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,block_pile)))));
if(fs__44873__auto__){
return cljs.core.concat.call(null,fs__44873__auto__,tetris$view$tetris_$_iter__47051.call(null,cljs.core.rest.call(null,s__47052__$1)));
} else {
var G__47064 = cljs.core.rest.call(null,s__47052__$1);
s__47052__$1 = G__47064;
continue;
}
} else {
return null;
}
break;
}
});})(map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
,null,null));
});})(map__47043,map__47043__$1,world,piece,x,y,block_pile,color,pause_QMARK_,done_QMARK_,score))
;
return iter__44876__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,block_pile)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(7),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"helvetica"], null),[cljs.core.str("Score: "),cljs.core.str(score)].join('')], null),(cljs.core.truth_((function (){var or__44096__auto__ = pause_QMARK_;
if(cljs.core.truth_(or__44096__auto__)){
return or__44096__auto__;
} else {
return done_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"1",new cljs.core.Keyword(null,"y","y",-1757859776),"10",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),1.5], null),(cljs.core.truth_(done_QMARK_)?"Game Over":"PAUSE")], null):null)], null)], null);
});
tetris.view.root_view = (function tetris$view$root_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#header","h1#header",975789515),"TETRIS"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.view.tetris,cljs.core.deref.call(null,tetris.game.app_state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#ghlink","a#ghlink",-752831435),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.github.com/joakmmohn/tetris"], null),"Project available on Github"], null)], null)], null);
});

//# sourceMappingURL=view.js.map?rel=1490222751109