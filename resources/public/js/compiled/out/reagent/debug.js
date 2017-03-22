// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__58244__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__58244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58245__i = 0, G__58245__a = new Array(arguments.length -  0);
while (G__58245__i < G__58245__a.length) {G__58245__a[G__58245__i] = arguments[G__58245__i + 0]; ++G__58245__i;}
  args = new cljs.core.IndexedSeq(G__58245__a,0);
} 
return G__58244__delegate.call(this,args);};
G__58244.cljs$lang$maxFixedArity = 0;
G__58244.cljs$lang$applyTo = (function (arglist__58246){
var args = cljs.core.seq(arglist__58246);
return G__58244__delegate(args);
});
G__58244.cljs$core$IFn$_invoke$arity$variadic = G__58244__delegate;
return G__58244;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__58247__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__58247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58248__i = 0, G__58248__a = new Array(arguments.length -  0);
while (G__58248__i < G__58248__a.length) {G__58248__a[G__58248__i] = arguments[G__58248__i + 0]; ++G__58248__i;}
  args = new cljs.core.IndexedSeq(G__58248__a,0);
} 
return G__58247__delegate.call(this,args);};
G__58247.cljs$lang$maxFixedArity = 0;
G__58247.cljs$lang$applyTo = (function (arglist__58249){
var args = cljs.core.seq(arglist__58249);
return G__58247__delegate(args);
});
G__58247.cljs$core$IFn$_invoke$arity$variadic = G__58247__delegate;
return G__58247;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1489402385150