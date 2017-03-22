// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52324 = arguments.length;
var i__45173__auto___52325 = (0);
while(true){
if((i__45173__auto___52325 < len__45172__auto___52324)){
args__45179__auto__.push((arguments[i__45173__auto___52325]));

var G__52326 = (i__45173__auto___52325 + (1));
i__45173__auto___52325 = G__52326;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52323){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52323));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52328 = arguments.length;
var i__45173__auto___52329 = (0);
while(true){
if((i__45173__auto___52329 < len__45172__auto___52328)){
args__45179__auto__.push((arguments[i__45173__auto___52329]));

var G__52330 = (i__45173__auto___52329 + (1));
i__45173__auto___52329 = G__52330;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52327){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52327));
});

var g_QMARK__52331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_52332 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52331){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52331))
,null));
var mkg_52333 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52331,g_52332){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__52331,g_52332))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52331,g_52332,mkg_52333){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52331).call(null,x);
});})(g_QMARK__52331,g_52332,mkg_52333))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52331,g_52332,mkg_52333){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52333).call(null,gfn);
});})(g_QMARK__52331,g_52332,mkg_52333))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52331,g_52332,mkg_52333){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52332).call(null,generator);
});})(g_QMARK__52331,g_52332,mkg_52333))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45248__auto___52352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__45248__auto___52352){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52353 = arguments.length;
var i__45173__auto___52354 = (0);
while(true){
if((i__45173__auto___52354 < len__45172__auto___52353)){
args__45179__auto__.push((arguments[i__45173__auto___52354]));

var G__52355 = (i__45173__auto___52354 + (1));
i__45173__auto___52354 = G__52355;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52352))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52352),args);
});})(g__45248__auto___52352))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__45248__auto___52352){
return (function (seq52334){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52334));
});})(g__45248__auto___52352))
;


var g__45248__auto___52356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__45248__auto___52356){
return (function cljs$spec$impl$gen$list(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52357 = arguments.length;
var i__45173__auto___52358 = (0);
while(true){
if((i__45173__auto___52358 < len__45172__auto___52357)){
args__45179__auto__.push((arguments[i__45173__auto___52358]));

var G__52359 = (i__45173__auto___52358 + (1));
i__45173__auto___52358 = G__52359;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52356))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52356),args);
});})(g__45248__auto___52356))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__45248__auto___52356){
return (function (seq52335){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52335));
});})(g__45248__auto___52356))
;


var g__45248__auto___52360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__45248__auto___52360){
return (function cljs$spec$impl$gen$map(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52361 = arguments.length;
var i__45173__auto___52362 = (0);
while(true){
if((i__45173__auto___52362 < len__45172__auto___52361)){
args__45179__auto__.push((arguments[i__45173__auto___52362]));

var G__52363 = (i__45173__auto___52362 + (1));
i__45173__auto___52362 = G__52363;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52360))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52360),args);
});})(g__45248__auto___52360))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__45248__auto___52360){
return (function (seq52336){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52336));
});})(g__45248__auto___52360))
;


var g__45248__auto___52364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__45248__auto___52364){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52365 = arguments.length;
var i__45173__auto___52366 = (0);
while(true){
if((i__45173__auto___52366 < len__45172__auto___52365)){
args__45179__auto__.push((arguments[i__45173__auto___52366]));

var G__52367 = (i__45173__auto___52366 + (1));
i__45173__auto___52366 = G__52367;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52364))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52364),args);
});})(g__45248__auto___52364))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__45248__auto___52364){
return (function (seq52337){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52337));
});})(g__45248__auto___52364))
;


var g__45248__auto___52368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__45248__auto___52368){
return (function cljs$spec$impl$gen$set(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52369 = arguments.length;
var i__45173__auto___52370 = (0);
while(true){
if((i__45173__auto___52370 < len__45172__auto___52369)){
args__45179__auto__.push((arguments[i__45173__auto___52370]));

var G__52371 = (i__45173__auto___52370 + (1));
i__45173__auto___52370 = G__52371;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52368))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52368),args);
});})(g__45248__auto___52368))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__45248__auto___52368){
return (function (seq52338){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52338));
});})(g__45248__auto___52368))
;


var g__45248__auto___52372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__45248__auto___52372){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52373 = arguments.length;
var i__45173__auto___52374 = (0);
while(true){
if((i__45173__auto___52374 < len__45172__auto___52373)){
args__45179__auto__.push((arguments[i__45173__auto___52374]));

var G__52375 = (i__45173__auto___52374 + (1));
i__45173__auto___52374 = G__52375;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52372))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52372){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52372),args);
});})(g__45248__auto___52372))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__45248__auto___52372){
return (function (seq52339){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52339));
});})(g__45248__auto___52372))
;


var g__45248__auto___52376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__45248__auto___52376){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52377 = arguments.length;
var i__45173__auto___52378 = (0);
while(true){
if((i__45173__auto___52378 < len__45172__auto___52377)){
args__45179__auto__.push((arguments[i__45173__auto___52378]));

var G__52379 = (i__45173__auto___52378 + (1));
i__45173__auto___52378 = G__52379;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52376))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52376){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52376),args);
});})(g__45248__auto___52376))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__45248__auto___52376){
return (function (seq52340){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52340));
});})(g__45248__auto___52376))
;


var g__45248__auto___52380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__45248__auto___52380){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52381 = arguments.length;
var i__45173__auto___52382 = (0);
while(true){
if((i__45173__auto___52382 < len__45172__auto___52381)){
args__45179__auto__.push((arguments[i__45173__auto___52382]));

var G__52383 = (i__45173__auto___52382 + (1));
i__45173__auto___52382 = G__52383;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52380))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52380){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52380),args);
});})(g__45248__auto___52380))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__45248__auto___52380){
return (function (seq52341){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52341));
});})(g__45248__auto___52380))
;


var g__45248__auto___52384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__45248__auto___52384){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52385 = arguments.length;
var i__45173__auto___52386 = (0);
while(true){
if((i__45173__auto___52386 < len__45172__auto___52385)){
args__45179__auto__.push((arguments[i__45173__auto___52386]));

var G__52387 = (i__45173__auto___52386 + (1));
i__45173__auto___52386 = G__52387;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52384))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52384),args);
});})(g__45248__auto___52384))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__45248__auto___52384){
return (function (seq52342){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52342));
});})(g__45248__auto___52384))
;


var g__45248__auto___52388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__45248__auto___52388){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52389 = arguments.length;
var i__45173__auto___52390 = (0);
while(true){
if((i__45173__auto___52390 < len__45172__auto___52389)){
args__45179__auto__.push((arguments[i__45173__auto___52390]));

var G__52391 = (i__45173__auto___52390 + (1));
i__45173__auto___52390 = G__52391;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52388))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52388),args);
});})(g__45248__auto___52388))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__45248__auto___52388){
return (function (seq52343){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52343));
});})(g__45248__auto___52388))
;


var g__45248__auto___52392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__45248__auto___52392){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52393 = arguments.length;
var i__45173__auto___52394 = (0);
while(true){
if((i__45173__auto___52394 < len__45172__auto___52393)){
args__45179__auto__.push((arguments[i__45173__auto___52394]));

var G__52395 = (i__45173__auto___52394 + (1));
i__45173__auto___52394 = G__52395;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52392))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52392),args);
});})(g__45248__auto___52392))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__45248__auto___52392){
return (function (seq52344){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52344));
});})(g__45248__auto___52392))
;


var g__45248__auto___52396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__45248__auto___52396){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52397 = arguments.length;
var i__45173__auto___52398 = (0);
while(true){
if((i__45173__auto___52398 < len__45172__auto___52397)){
args__45179__auto__.push((arguments[i__45173__auto___52398]));

var G__52399 = (i__45173__auto___52398 + (1));
i__45173__auto___52398 = G__52399;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52396))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52396),args);
});})(g__45248__auto___52396))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__45248__auto___52396){
return (function (seq52345){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52345));
});})(g__45248__auto___52396))
;


var g__45248__auto___52400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__45248__auto___52400){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52401 = arguments.length;
var i__45173__auto___52402 = (0);
while(true){
if((i__45173__auto___52402 < len__45172__auto___52401)){
args__45179__auto__.push((arguments[i__45173__auto___52402]));

var G__52403 = (i__45173__auto___52402 + (1));
i__45173__auto___52402 = G__52403;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52400))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52400),args);
});})(g__45248__auto___52400))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__45248__auto___52400){
return (function (seq52346){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52346));
});})(g__45248__auto___52400))
;


var g__45248__auto___52404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__45248__auto___52404){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52405 = arguments.length;
var i__45173__auto___52406 = (0);
while(true){
if((i__45173__auto___52406 < len__45172__auto___52405)){
args__45179__auto__.push((arguments[i__45173__auto___52406]));

var G__52407 = (i__45173__auto___52406 + (1));
i__45173__auto___52406 = G__52407;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52404))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52404),args);
});})(g__45248__auto___52404))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__45248__auto___52404){
return (function (seq52347){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52347));
});})(g__45248__auto___52404))
;


var g__45248__auto___52408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__45248__auto___52408){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52409 = arguments.length;
var i__45173__auto___52410 = (0);
while(true){
if((i__45173__auto___52410 < len__45172__auto___52409)){
args__45179__auto__.push((arguments[i__45173__auto___52410]));

var G__52411 = (i__45173__auto___52410 + (1));
i__45173__auto___52410 = G__52411;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52408))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52408){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52408),args);
});})(g__45248__auto___52408))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__45248__auto___52408){
return (function (seq52348){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52348));
});})(g__45248__auto___52408))
;


var g__45248__auto___52412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__45248__auto___52412){
return (function cljs$spec$impl$gen$return(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52413 = arguments.length;
var i__45173__auto___52414 = (0);
while(true){
if((i__45173__auto___52414 < len__45172__auto___52413)){
args__45179__auto__.push((arguments[i__45173__auto___52414]));

var G__52415 = (i__45173__auto___52414 + (1));
i__45173__auto___52414 = G__52415;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52412))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52412){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52412),args);
});})(g__45248__auto___52412))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__45248__auto___52412){
return (function (seq52349){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52349));
});})(g__45248__auto___52412))
;


var g__45248__auto___52416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__45248__auto___52416){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52417 = arguments.length;
var i__45173__auto___52418 = (0);
while(true){
if((i__45173__auto___52418 < len__45172__auto___52417)){
args__45179__auto__.push((arguments[i__45173__auto___52418]));

var G__52419 = (i__45173__auto___52418 + (1));
i__45173__auto___52418 = G__52419;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52416))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52416){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52416),args);
});})(g__45248__auto___52416))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45248__auto___52416){
return (function (seq52350){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52350));
});})(g__45248__auto___52416))
;


var g__45248__auto___52420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__45248__auto___52420){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52421 = arguments.length;
var i__45173__auto___52422 = (0);
while(true){
if((i__45173__auto___52422 < len__45172__auto___52421)){
args__45179__auto__.push((arguments[i__45173__auto___52422]));

var G__52423 = (i__45173__auto___52422 + (1));
i__45173__auto___52422 = G__52423;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45248__auto___52420))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45248__auto___52420){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45248__auto___52420),args);
});})(g__45248__auto___52420))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__45248__auto___52420){
return (function (seq52351){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52351));
});})(g__45248__auto___52420))
;

var g__45261__auto___52445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__45261__auto___52445){
return (function cljs$spec$impl$gen$any(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52446 = arguments.length;
var i__45173__auto___52447 = (0);
while(true){
if((i__45173__auto___52447 < len__45172__auto___52446)){
args__45179__auto__.push((arguments[i__45173__auto___52447]));

var G__52448 = (i__45173__auto___52447 + (1));
i__45173__auto___52447 = G__52448;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52445))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52445){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52445);
});})(g__45261__auto___52445))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__45261__auto___52445){
return (function (seq52424){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52424));
});})(g__45261__auto___52445))
;


var g__45261__auto___52449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__45261__auto___52449){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52450 = arguments.length;
var i__45173__auto___52451 = (0);
while(true){
if((i__45173__auto___52451 < len__45172__auto___52450)){
args__45179__auto__.push((arguments[i__45173__auto___52451]));

var G__52452 = (i__45173__auto___52451 + (1));
i__45173__auto___52451 = G__52452;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52449))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52449){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52449);
});})(g__45261__auto___52449))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__45261__auto___52449){
return (function (seq52425){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52425));
});})(g__45261__auto___52449))
;


var g__45261__auto___52453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__45261__auto___52453){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52454 = arguments.length;
var i__45173__auto___52455 = (0);
while(true){
if((i__45173__auto___52455 < len__45172__auto___52454)){
args__45179__auto__.push((arguments[i__45173__auto___52455]));

var G__52456 = (i__45173__auto___52455 + (1));
i__45173__auto___52455 = G__52456;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52453))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52453){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52453);
});})(g__45261__auto___52453))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__45261__auto___52453){
return (function (seq52426){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52426));
});})(g__45261__auto___52453))
;


var g__45261__auto___52457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__45261__auto___52457){
return (function cljs$spec$impl$gen$char(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52458 = arguments.length;
var i__45173__auto___52459 = (0);
while(true){
if((i__45173__auto___52459 < len__45172__auto___52458)){
args__45179__auto__.push((arguments[i__45173__auto___52459]));

var G__52460 = (i__45173__auto___52459 + (1));
i__45173__auto___52459 = G__52460;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52457))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52457){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52457);
});})(g__45261__auto___52457))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__45261__auto___52457){
return (function (seq52427){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52427));
});})(g__45261__auto___52457))
;


var g__45261__auto___52461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__45261__auto___52461){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52462 = arguments.length;
var i__45173__auto___52463 = (0);
while(true){
if((i__45173__auto___52463 < len__45172__auto___52462)){
args__45179__auto__.push((arguments[i__45173__auto___52463]));

var G__52464 = (i__45173__auto___52463 + (1));
i__45173__auto___52463 = G__52464;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52461))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52461){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52461);
});})(g__45261__auto___52461))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__45261__auto___52461){
return (function (seq52428){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52428));
});})(g__45261__auto___52461))
;


var g__45261__auto___52465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__45261__auto___52465){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52466 = arguments.length;
var i__45173__auto___52467 = (0);
while(true){
if((i__45173__auto___52467 < len__45172__auto___52466)){
args__45179__auto__.push((arguments[i__45173__auto___52467]));

var G__52468 = (i__45173__auto___52467 + (1));
i__45173__auto___52467 = G__52468;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52465))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52465){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52465);
});})(g__45261__auto___52465))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__45261__auto___52465){
return (function (seq52429){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52429));
});})(g__45261__auto___52465))
;


var g__45261__auto___52469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__45261__auto___52469){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52470 = arguments.length;
var i__45173__auto___52471 = (0);
while(true){
if((i__45173__auto___52471 < len__45172__auto___52470)){
args__45179__auto__.push((arguments[i__45173__auto___52471]));

var G__52472 = (i__45173__auto___52471 + (1));
i__45173__auto___52471 = G__52472;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52469))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52469){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52469);
});})(g__45261__auto___52469))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__45261__auto___52469){
return (function (seq52430){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52430));
});})(g__45261__auto___52469))
;


var g__45261__auto___52473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__45261__auto___52473){
return (function cljs$spec$impl$gen$double(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52474 = arguments.length;
var i__45173__auto___52475 = (0);
while(true){
if((i__45173__auto___52475 < len__45172__auto___52474)){
args__45179__auto__.push((arguments[i__45173__auto___52475]));

var G__52476 = (i__45173__auto___52475 + (1));
i__45173__auto___52475 = G__52476;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52473))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52473){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52473);
});})(g__45261__auto___52473))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__45261__auto___52473){
return (function (seq52431){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52431));
});})(g__45261__auto___52473))
;


var g__45261__auto___52477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__45261__auto___52477){
return (function cljs$spec$impl$gen$int(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52478 = arguments.length;
var i__45173__auto___52479 = (0);
while(true){
if((i__45173__auto___52479 < len__45172__auto___52478)){
args__45179__auto__.push((arguments[i__45173__auto___52479]));

var G__52480 = (i__45173__auto___52479 + (1));
i__45173__auto___52479 = G__52480;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52477))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52477){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52477);
});})(g__45261__auto___52477))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__45261__auto___52477){
return (function (seq52432){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52432));
});})(g__45261__auto___52477))
;


var g__45261__auto___52481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__45261__auto___52481){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52482 = arguments.length;
var i__45173__auto___52483 = (0);
while(true){
if((i__45173__auto___52483 < len__45172__auto___52482)){
args__45179__auto__.push((arguments[i__45173__auto___52483]));

var G__52484 = (i__45173__auto___52483 + (1));
i__45173__auto___52483 = G__52484;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52481))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52481){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52481);
});})(g__45261__auto___52481))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__45261__auto___52481){
return (function (seq52433){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52433));
});})(g__45261__auto___52481))
;


var g__45261__auto___52485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__45261__auto___52485){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52486 = arguments.length;
var i__45173__auto___52487 = (0);
while(true){
if((i__45173__auto___52487 < len__45172__auto___52486)){
args__45179__auto__.push((arguments[i__45173__auto___52487]));

var G__52488 = (i__45173__auto___52487 + (1));
i__45173__auto___52487 = G__52488;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52485))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52485){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52485);
});})(g__45261__auto___52485))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__45261__auto___52485){
return (function (seq52434){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52434));
});})(g__45261__auto___52485))
;


var g__45261__auto___52489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__45261__auto___52489){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52490 = arguments.length;
var i__45173__auto___52491 = (0);
while(true){
if((i__45173__auto___52491 < len__45172__auto___52490)){
args__45179__auto__.push((arguments[i__45173__auto___52491]));

var G__52492 = (i__45173__auto___52491 + (1));
i__45173__auto___52491 = G__52492;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52489))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52489){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52489);
});})(g__45261__auto___52489))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__45261__auto___52489){
return (function (seq52435){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52435));
});})(g__45261__auto___52489))
;


var g__45261__auto___52493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__45261__auto___52493){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52494 = arguments.length;
var i__45173__auto___52495 = (0);
while(true){
if((i__45173__auto___52495 < len__45172__auto___52494)){
args__45179__auto__.push((arguments[i__45173__auto___52495]));

var G__52496 = (i__45173__auto___52495 + (1));
i__45173__auto___52495 = G__52496;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52493))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52493){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52493);
});})(g__45261__auto___52493))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__45261__auto___52493){
return (function (seq52436){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52436));
});})(g__45261__auto___52493))
;


var g__45261__auto___52497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__45261__auto___52497){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52498 = arguments.length;
var i__45173__auto___52499 = (0);
while(true){
if((i__45173__auto___52499 < len__45172__auto___52498)){
args__45179__auto__.push((arguments[i__45173__auto___52499]));

var G__52500 = (i__45173__auto___52499 + (1));
i__45173__auto___52499 = G__52500;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52497))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52497){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52497);
});})(g__45261__auto___52497))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__45261__auto___52497){
return (function (seq52437){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52437));
});})(g__45261__auto___52497))
;


var g__45261__auto___52501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__45261__auto___52501){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52502 = arguments.length;
var i__45173__auto___52503 = (0);
while(true){
if((i__45173__auto___52503 < len__45172__auto___52502)){
args__45179__auto__.push((arguments[i__45173__auto___52503]));

var G__52504 = (i__45173__auto___52503 + (1));
i__45173__auto___52503 = G__52504;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52501))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52501){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52501);
});})(g__45261__auto___52501))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__45261__auto___52501){
return (function (seq52438){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52438));
});})(g__45261__auto___52501))
;


var g__45261__auto___52505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__45261__auto___52505){
return (function cljs$spec$impl$gen$string(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52506 = arguments.length;
var i__45173__auto___52507 = (0);
while(true){
if((i__45173__auto___52507 < len__45172__auto___52506)){
args__45179__auto__.push((arguments[i__45173__auto___52507]));

var G__52508 = (i__45173__auto___52507 + (1));
i__45173__auto___52507 = G__52508;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52505))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52505){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52505);
});})(g__45261__auto___52505))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__45261__auto___52505){
return (function (seq52439){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52439));
});})(g__45261__auto___52505))
;


var g__45261__auto___52509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__45261__auto___52509){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52510 = arguments.length;
var i__45173__auto___52511 = (0);
while(true){
if((i__45173__auto___52511 < len__45172__auto___52510)){
args__45179__auto__.push((arguments[i__45173__auto___52511]));

var G__52512 = (i__45173__auto___52511 + (1));
i__45173__auto___52511 = G__52512;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52509))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52509){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52509);
});})(g__45261__auto___52509))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__45261__auto___52509){
return (function (seq52440){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52440));
});})(g__45261__auto___52509))
;


var g__45261__auto___52513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__45261__auto___52513){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52514 = arguments.length;
var i__45173__auto___52515 = (0);
while(true){
if((i__45173__auto___52515 < len__45172__auto___52514)){
args__45179__auto__.push((arguments[i__45173__auto___52515]));

var G__52516 = (i__45173__auto___52515 + (1));
i__45173__auto___52515 = G__52516;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52513))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52513){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52513);
});})(g__45261__auto___52513))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__45261__auto___52513){
return (function (seq52441){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52441));
});})(g__45261__auto___52513))
;


var g__45261__auto___52517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__45261__auto___52517){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52518 = arguments.length;
var i__45173__auto___52519 = (0);
while(true){
if((i__45173__auto___52519 < len__45172__auto___52518)){
args__45179__auto__.push((arguments[i__45173__auto___52519]));

var G__52520 = (i__45173__auto___52519 + (1));
i__45173__auto___52519 = G__52520;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52517))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52517){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52517);
});})(g__45261__auto___52517))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__45261__auto___52517){
return (function (seq52442){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52442));
});})(g__45261__auto___52517))
;


var g__45261__auto___52521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__45261__auto___52521){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52522 = arguments.length;
var i__45173__auto___52523 = (0);
while(true){
if((i__45173__auto___52523 < len__45172__auto___52522)){
args__45179__auto__.push((arguments[i__45173__auto___52523]));

var G__52524 = (i__45173__auto___52523 + (1));
i__45173__auto___52523 = G__52524;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52521))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52521){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52521);
});})(g__45261__auto___52521))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__45261__auto___52521){
return (function (seq52443){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52443));
});})(g__45261__auto___52521))
;


var g__45261__auto___52525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__45261__auto___52525){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52526 = arguments.length;
var i__45173__auto___52527 = (0);
while(true){
if((i__45173__auto___52527 < len__45172__auto___52526)){
args__45179__auto__.push((arguments[i__45173__auto___52527]));

var G__52528 = (i__45173__auto___52527 + (1));
i__45173__auto___52527 = G__52528;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});})(g__45261__auto___52525))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45261__auto___52525){
return (function (args){
return cljs.core.deref.call(null,g__45261__auto___52525);
});})(g__45261__auto___52525))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__45261__auto___52525){
return (function (seq52444){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52444));
});})(g__45261__auto___52525))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45179__auto__ = [];
var len__45172__auto___52531 = arguments.length;
var i__45173__auto___52532 = (0);
while(true){
if((i__45173__auto___52532 < len__45172__auto___52531)){
args__45179__auto__.push((arguments[i__45173__auto___52532]));

var G__52533 = (i__45173__auto___52532 + (1));
i__45173__auto___52532 = G__52533;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__52529_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__52529_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq52530){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52530));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__52534_SHARP_){
return (new Date(p1__52534_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1489402288309