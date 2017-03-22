// Compiled by ClojureScript 1.9.229 {}
goog.provide('tetris.game');
goog.require('cljs.core');
goog.require('reagent.core');
tetris.game.colors = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#230007","#D6062F","#590011","#564343","#52D1DC","#475A5B","#8E2C2C","#D33030","#454BEF","#111249","#6EABAD","#4D5D5E","#70163A"], null);
/**
 * Vektor med matriser som representerer hver enkelt tetrimino. Henholdvis I, O, Z, L, T
 */
tetris.game.pieces = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null)], null);
tetris.game.flip = (function tetris$game$flip(matrix){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,matrix));
});
tetris.game.transpose = (function tetris$game$transpose(matrix){

return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,matrix);
});
tetris.game.make_empty_board = (function tetris$game$make_empty_board(x,y){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,x,cljs.core.vec.call(null,cljs.core.repeat.call(null,y,(-1)))));
});
/**
 * inital state
 */
tetris.game.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"piece","piece",1396691784),cljs.core.rand_nth.call(null,tetris.game.pieces),new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"block-pile","block-pile",-596087238),tetris.game.make_empty_board.call(null,(10),(20)),new cljs.core.Keyword(null,"pause?","pause?",-1582463491),false,new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,tetris.game.colors),new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null));
tetris.game.valid_world_QMARK_ = (function tetris$game$valid_world_QMARK_(p__46969){
var map__46978 = p__46969;
var map__46978__$1 = ((((!((map__46978 == null)))?((((map__46978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46978):map__46978);
var x = cljs.core.get.call(null,map__46978__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__46978__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var piece = cljs.core.get.call(null,map__46978__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var block_pile = cljs.core.get.call(null,map__46978__$1,new cljs.core.Keyword(null,"block-pile","block-pile",-596087238));
var done = cljs.core.get.call(null,map__46978__$1,new cljs.core.Keyword(null,"done","done",-889844188));

return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null),(function (){var iter__44876__auto__ = ((function (map__46978,map__46978__$1,x,y,piece,block_pile,done){
return (function tetris$game$valid_world_QMARK__$_iter__46980(s__46981){
return (new cljs.core.LazySeq(null,((function (map__46978,map__46978__$1,x,y,piece,block_pile,done){
return (function (){
var s__46981__$1 = s__46981;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46981__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__44872__auto__ = ((function (s__46981__$1,i,xs__5205__auto__,temp__4657__auto__,map__46978,map__46978__$1,x,y,piece,block_pile,done){
return (function tetris$game$valid_world_QMARK__$_iter__46980_$_iter__46982(s__46983){
return (new cljs.core.LazySeq(null,((function (s__46981__$1,i,xs__5205__auto__,temp__4657__auto__,map__46978,map__46978__$1,x,y,piece,block_pile,done){
return (function (){
var s__46983__$1 = s__46983;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__46983__$1);
if(temp__4657__auto____$1){
var s__46983__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46983__$2)){
var c__44874__auto__ = cljs.core.chunk_first.call(null,s__46983__$2);
var size__44875__auto__ = cljs.core.count.call(null,c__44874__auto__);
var b__46985 = cljs.core.chunk_buffer.call(null,size__44875__auto__);
if((function (){var i__46984 = (0);
while(true){
if((i__46984 < size__44875__auto__)){
var j = cljs.core._nth.call(null,c__44874__auto__,i__46984);
if((cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) > (0))){
var matrix_x = (x + i);
var matrix_y = (y + j);
cljs.core.chunk_append.call(null,b__46985,cljs.core.get_in.call(null,block_pile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matrix_x,matrix_y], null)));

var G__46986 = (i__46984 + (1));
i__46984 = G__46986;
continue;
} else {
var G__46987 = (i__46984 + (1));
i__46984 = G__46987;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46985),tetris$game$valid_world_QMARK__$_iter__46980_$_iter__46982.call(null,cljs.core.chunk_rest.call(null,s__46983__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46985),null);
}
} else {
var j = cljs.core.first.call(null,s__46983__$2);
if((cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) > (0))){
var matrix_x = (x + i);
var matrix_y = (y + j);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,block_pile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matrix_x,matrix_y], null)),tetris$game$valid_world_QMARK__$_iter__46980_$_iter__46982.call(null,cljs.core.rest.call(null,s__46983__$2)));
} else {
var G__46988 = cljs.core.rest.call(null,s__46983__$2);
s__46983__$1 = G__46988;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__46981__$1,i,xs__5205__auto__,temp__4657__auto__,map__46978,map__46978__$1,x,y,piece,block_pile,done))
,null,null));
});})(s__46981__$1,i,xs__5205__auto__,temp__4657__auto__,map__46978,map__46978__$1,x,y,piece,block_pile,done))
;
var fs__44873__auto__ = cljs.core.seq.call(null,iterys__44872__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,piece)))));
if(fs__44873__auto__){
return cljs.core.concat.call(null,fs__44873__auto__,tetris$game$valid_world_QMARK__$_iter__46980.call(null,cljs.core.rest.call(null,s__46981__$1)));
} else {
var G__46989 = cljs.core.rest.call(null,s__46981__$1);
s__46981__$1 = G__46989;
continue;
}
} else {
return null;
}
break;
}
});})(map__46978,map__46978__$1,x,y,piece,block_pile,done))
,null,null));
});})(map__46978,map__46978__$1,x,y,piece,block_pile,done))
;
return iter__44876__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,piece)));
})());
});
tetris.game.collect_piece = (function tetris$game$collect_piece(block_pile,p__46990){
var vec__46994 = p__46990;
var x = cljs.core.nth.call(null,vec__46994,(0),null);
var y = cljs.core.nth.call(null,vec__46994,(1),null);
var color = cljs.core.nth.call(null,vec__46994,(2),null);
return cljs.core.assoc_in.call(null,block_pile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),(-2));
});
tetris.game.attach_piece = (function tetris$game$attach_piece(p__46997){
var map__47006 = p__46997;
var map__47006__$1 = ((((!((map__47006 == null)))?((((map__47006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47006):map__47006);
var world = map__47006__$1;
var piece = cljs.core.get.call(null,map__47006__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var color = cljs.core.get.call(null,map__47006__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__47006__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__47006__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var block_pile = cljs.core.get.call(null,map__47006__$1,new cljs.core.Keyword(null,"block-pile","block-pile",-596087238));
var piece_width = cljs.core.count.call(null,piece);
var piece_height = cljs.core.count.call(null,cljs.core.first.call(null,piece));
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"block-pile","block-pile",-596087238),cljs.core.reduce.call(null,tetris.game.collect_piece,block_pile,(function (){var iter__44876__auto__ = ((function (piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile){
return (function tetris$game$attach_piece_$_iter__47008(s__47009){
return (new cljs.core.LazySeq(null,((function (piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile){
return (function (){
var s__47009__$1 = s__47009;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47009__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__44872__auto__ = ((function (s__47009__$1,i,xs__5205__auto__,temp__4657__auto__,piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile){
return (function tetris$game$attach_piece_$_iter__47008_$_iter__47010(s__47011){
return (new cljs.core.LazySeq(null,((function (s__47009__$1,i,xs__5205__auto__,temp__4657__auto__,piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile){
return (function (){
var s__47011__$1 = s__47011;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__47011__$1);
if(temp__4657__auto____$1){
var s__47011__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47011__$2)){
var c__44874__auto__ = cljs.core.chunk_first.call(null,s__47011__$2);
var size__44875__auto__ = cljs.core.count.call(null,c__44874__auto__);
var b__47013 = cljs.core.chunk_buffer.call(null,size__44875__auto__);
if((function (){var i__47012 = (0);
while(true){
if((i__47012 < size__44875__auto__)){
var j = cljs.core._nth.call(null,c__44874__auto__,i__47012);
if((cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) > (0))){
cljs.core.chunk_append.call(null,b__47013,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + i),(y + j),color], null));

var G__47014 = (i__47012 + (1));
i__47012 = G__47014;
continue;
} else {
var G__47015 = (i__47012 + (1));
i__47012 = G__47015;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47013),tetris$game$attach_piece_$_iter__47008_$_iter__47010.call(null,cljs.core.chunk_rest.call(null,s__47011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47013),null);
}
} else {
var j = cljs.core.first.call(null,s__47011__$2);
if((cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)) > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + i),(y + j),color], null),tetris$game$attach_piece_$_iter__47008_$_iter__47010.call(null,cljs.core.rest.call(null,s__47011__$2)));
} else {
var G__47016 = cljs.core.rest.call(null,s__47011__$2);
s__47011__$1 = G__47016;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__47009__$1,i,xs__5205__auto__,temp__4657__auto__,piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile))
,null,null));
});})(s__47009__$1,i,xs__5205__auto__,temp__4657__auto__,piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile))
;
var fs__44873__auto__ = cljs.core.seq.call(null,iterys__44872__auto__.call(null,cljs.core.range.call(null,piece_height)));
if(fs__44873__auto__){
return cljs.core.concat.call(null,fs__44873__auto__,tetris$game$attach_piece_$_iter__47008.call(null,cljs.core.rest.call(null,s__47009__$1)));
} else {
var G__47017 = cljs.core.rest.call(null,s__47009__$1);
s__47009__$1 = G__47017;
continue;
}
} else {
return null;
}
break;
}
});})(piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile))
,null,null));
});})(piece_width,piece_height,map__47006,map__47006__$1,world,piece,color,x,y,block_pile))
;
return iter__44876__auto__.call(null,cljs.core.range.call(null,piece_width));
})()));
});
tetris.game.new_piece = (function tetris$game$new_piece(p__47018){
var map__47021 = p__47018;
var map__47021__$1 = ((((!((map__47021 == null)))?((((map__47021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47021):map__47021);
var world = map__47021__$1;
var piece = cljs.core.get.call(null,map__47021__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var x = cljs.core.get.call(null,map__47021__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__47021__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var piece__$1 = cljs.core.rand_nth.call(null,tetris.game.pieces);
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"piece","piece",1396691784),piece__$1,new cljs.core.Keyword(null,"x","x",2099068185),((5) - cljs.core.quot.call(null,cljs.core.count.call(null,piece__$1),(2))),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,tetris.game.colors));
});
tetris.game.collect_rows = (function tetris$game$collect_rows(world){
var remaining_rows = cljs.core.remove.call(null,(function (p1__47023_SHARP_){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-2),null], null), null),p1__47023_SHARP_);
}),tetris.game.transpose.call(null,world.call(null,new cljs.core.Keyword(null,"block-pile","block-pile",-596087238))));
var cc = ((20) - cljs.core.count.call(null,remaining_rows));
var new_rows = cljs.core.repeat.call(null,cc,cljs.core.vec.call(null,cljs.core.repeat.call(null,(10),(-1))));
return cljs.core.assoc.call(null,cljs.core.update.call(null,world,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,cc),new cljs.core.Keyword(null,"block-pile","block-pile",-596087238),tetris.game.transpose.call(null,cljs.core.concat.call(null,new_rows,remaining_rows)));
});
tetris.game.finished_QMARK_ = (function tetris$game$finished_QMARK_(world){
if(cljs.core.truth_(tetris.game.valid_world_QMARK_.call(null,world))){
return world;
} else {
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"done?","done?",-1847001718),true);
}
});
tetris.game.landed = (function tetris$game$landed(world){
return tetris.game.finished_QMARK_.call(null,tetris.game.new_piece.call(null,tetris.game.collect_rows.call(null,tetris.game.attach_piece.call(null,world))));
});
tetris.game.gravity = (function tetris$game$gravity(world){
var new_world = cljs.core.update_in.call(null,world,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.inc);
if(cljs.core.truth_(tetris.game.valid_world_QMARK_.call(null,new_world))){
return new_world;
} else {
return tetris.game.landed.call(null,world);
}
});
tetris.game.tick = (function tetris$game$tick(){
if(cljs.core.truth_((function (){var or__44096__auto__ = new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tetris.game.app_state));
if(cljs.core.truth_(or__44096__auto__)){
return or__44096__auto__;
} else {
return new cljs.core.Keyword(null,"pause?","pause?",-1582463491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tetris.game.app_state));
}
})())){
return null;
} else {
return cljs.core.swap_BANG_.call(null,tetris.game.app_state,tetris.game.gravity);
}
});
tetris.game.step = (function tetris$game$step(world,f){
var new_world = f.call(null,world);
if(cljs.core.truth_(tetris.game.valid_world_QMARK_.call(null,new_world))){
return cljs.core.reset_BANG_.call(null,tetris.game.app_state,new_world);
} else {
return world;
}
});
tetris.game.action = new cljs.core.PersistentArrayMap(null, 3, [(39),(function (){
return tetris.game.step.call(null,cljs.core.deref.call(null,tetris.game.app_state),(function (p1__47024_SHARP_){
return cljs.core.update_in.call(null,p1__47024_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.inc);
}));
}),(37),(function (){
return tetris.game.step.call(null,cljs.core.deref.call(null,tetris.game.app_state),(function (p1__47025_SHARP_){
return cljs.core.update_in.call(null,p1__47025_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.dec);
}));
}),(38),(function (){
return cljs.core.swap_BANG_.call(null,tetris.game.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece","piece",1396691784)], null),cljs.core.comp.call(null,tetris.game.transpose,tetris.game.flip));
})], null);
tetris.game.handle_event = (function tetris$game$handle_event(e){
var temp__4657__auto__ = tetris.game.action.call(null,e.keyCode);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
e.preventDefault();

return f.call(null);
} else {
return null;
}
});

//# sourceMappingURL=game.js.map?rel=1490222751034