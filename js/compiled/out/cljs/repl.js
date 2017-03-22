// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53355){
var map__53380 = p__53355;
var map__53380__$1 = ((((!((map__53380 == null)))?((((map__53380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53380):map__53380);
var m = map__53380__$1;
var n = cljs.core.get.call(null,map__53380__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53382_53404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53383_53405 = null;
var count__53384_53406 = (0);
var i__53385_53407 = (0);
while(true){
if((i__53385_53407 < count__53384_53406)){
var f_53408 = cljs.core._nth.call(null,chunk__53383_53405,i__53385_53407);
cljs.core.println.call(null,"  ",f_53408);

var G__53409 = seq__53382_53404;
var G__53410 = chunk__53383_53405;
var G__53411 = count__53384_53406;
var G__53412 = (i__53385_53407 + (1));
seq__53382_53404 = G__53409;
chunk__53383_53405 = G__53410;
count__53384_53406 = G__53411;
i__53385_53407 = G__53412;
continue;
} else {
var temp__4657__auto___53413 = cljs.core.seq.call(null,seq__53382_53404);
if(temp__4657__auto___53413){
var seq__53382_53414__$1 = temp__4657__auto___53413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53382_53414__$1)){
var c__44908__auto___53415 = cljs.core.chunk_first.call(null,seq__53382_53414__$1);
var G__53416 = cljs.core.chunk_rest.call(null,seq__53382_53414__$1);
var G__53417 = c__44908__auto___53415;
var G__53418 = cljs.core.count.call(null,c__44908__auto___53415);
var G__53419 = (0);
seq__53382_53404 = G__53416;
chunk__53383_53405 = G__53417;
count__53384_53406 = G__53418;
i__53385_53407 = G__53419;
continue;
} else {
var f_53420 = cljs.core.first.call(null,seq__53382_53414__$1);
cljs.core.println.call(null,"  ",f_53420);

var G__53421 = cljs.core.next.call(null,seq__53382_53414__$1);
var G__53422 = null;
var G__53423 = (0);
var G__53424 = (0);
seq__53382_53404 = G__53421;
chunk__53383_53405 = G__53422;
count__53384_53406 = G__53423;
i__53385_53407 = G__53424;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53425 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44097__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53425);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53425)))?cljs.core.second.call(null,arglists_53425):arglists_53425));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53386_53426 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53387_53427 = null;
var count__53388_53428 = (0);
var i__53389_53429 = (0);
while(true){
if((i__53389_53429 < count__53388_53428)){
var vec__53390_53430 = cljs.core._nth.call(null,chunk__53387_53427,i__53389_53429);
var name_53431 = cljs.core.nth.call(null,vec__53390_53430,(0),null);
var map__53393_53432 = cljs.core.nth.call(null,vec__53390_53430,(1),null);
var map__53393_53433__$1 = ((((!((map__53393_53432 == null)))?((((map__53393_53432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53393_53432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53393_53432):map__53393_53432);
var doc_53434 = cljs.core.get.call(null,map__53393_53433__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53435 = cljs.core.get.call(null,map__53393_53433__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53431);

cljs.core.println.call(null," ",arglists_53435);

if(cljs.core.truth_(doc_53434)){
cljs.core.println.call(null," ",doc_53434);
} else {
}

var G__53436 = seq__53386_53426;
var G__53437 = chunk__53387_53427;
var G__53438 = count__53388_53428;
var G__53439 = (i__53389_53429 + (1));
seq__53386_53426 = G__53436;
chunk__53387_53427 = G__53437;
count__53388_53428 = G__53438;
i__53389_53429 = G__53439;
continue;
} else {
var temp__4657__auto___53440 = cljs.core.seq.call(null,seq__53386_53426);
if(temp__4657__auto___53440){
var seq__53386_53441__$1 = temp__4657__auto___53440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53386_53441__$1)){
var c__44908__auto___53442 = cljs.core.chunk_first.call(null,seq__53386_53441__$1);
var G__53443 = cljs.core.chunk_rest.call(null,seq__53386_53441__$1);
var G__53444 = c__44908__auto___53442;
var G__53445 = cljs.core.count.call(null,c__44908__auto___53442);
var G__53446 = (0);
seq__53386_53426 = G__53443;
chunk__53387_53427 = G__53444;
count__53388_53428 = G__53445;
i__53389_53429 = G__53446;
continue;
} else {
var vec__53395_53447 = cljs.core.first.call(null,seq__53386_53441__$1);
var name_53448 = cljs.core.nth.call(null,vec__53395_53447,(0),null);
var map__53398_53449 = cljs.core.nth.call(null,vec__53395_53447,(1),null);
var map__53398_53450__$1 = ((((!((map__53398_53449 == null)))?((((map__53398_53449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53398_53449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53398_53449):map__53398_53449);
var doc_53451 = cljs.core.get.call(null,map__53398_53450__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53452 = cljs.core.get.call(null,map__53398_53450__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53448);

cljs.core.println.call(null," ",arglists_53452);

if(cljs.core.truth_(doc_53451)){
cljs.core.println.call(null," ",doc_53451);
} else {
}

var G__53453 = cljs.core.next.call(null,seq__53386_53441__$1);
var G__53454 = null;
var G__53455 = (0);
var G__53456 = (0);
seq__53386_53426 = G__53453;
chunk__53387_53427 = G__53454;
count__53388_53428 = G__53455;
i__53389_53429 = G__53456;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__53400 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53401 = null;
var count__53402 = (0);
var i__53403 = (0);
while(true){
if((i__53403 < count__53402)){
var role = cljs.core._nth.call(null,chunk__53401,i__53403);
var temp__4657__auto___53457__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53457__$1)){
var spec_53458 = temp__4657__auto___53457__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53458));
} else {
}

var G__53459 = seq__53400;
var G__53460 = chunk__53401;
var G__53461 = count__53402;
var G__53462 = (i__53403 + (1));
seq__53400 = G__53459;
chunk__53401 = G__53460;
count__53402 = G__53461;
i__53403 = G__53462;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53400);
if(temp__4657__auto____$1){
var seq__53400__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53400__$1)){
var c__44908__auto__ = cljs.core.chunk_first.call(null,seq__53400__$1);
var G__53463 = cljs.core.chunk_rest.call(null,seq__53400__$1);
var G__53464 = c__44908__auto__;
var G__53465 = cljs.core.count.call(null,c__44908__auto__);
var G__53466 = (0);
seq__53400 = G__53463;
chunk__53401 = G__53464;
count__53402 = G__53465;
i__53403 = G__53466;
continue;
} else {
var role = cljs.core.first.call(null,seq__53400__$1);
var temp__4657__auto___53467__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53467__$2)){
var spec_53468 = temp__4657__auto___53467__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53468));
} else {
}

var G__53469 = cljs.core.next.call(null,seq__53400__$1);
var G__53470 = null;
var G__53471 = (0);
var G__53472 = (0);
seq__53400 = G__53469;
chunk__53401 = G__53470;
count__53402 = G__53471;
i__53403 = G__53472;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489402289383