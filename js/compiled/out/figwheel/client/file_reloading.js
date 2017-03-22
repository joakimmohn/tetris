// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44097__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44097__auto__){
return or__44097__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44097__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51303_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51303_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51308 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51309 = null;
var count__51310 = (0);
var i__51311 = (0);
while(true){
if((i__51311 < count__51310)){
var n = cljs.core._nth.call(null,chunk__51309,i__51311);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51312 = seq__51308;
var G__51313 = chunk__51309;
var G__51314 = count__51310;
var G__51315 = (i__51311 + (1));
seq__51308 = G__51312;
chunk__51309 = G__51313;
count__51310 = G__51314;
i__51311 = G__51315;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51308);
if(temp__4657__auto__){
var seq__51308__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51308__$1)){
var c__44908__auto__ = cljs.core.chunk_first.call(null,seq__51308__$1);
var G__51316 = cljs.core.chunk_rest.call(null,seq__51308__$1);
var G__51317 = c__44908__auto__;
var G__51318 = cljs.core.count.call(null,c__44908__auto__);
var G__51319 = (0);
seq__51308 = G__51316;
chunk__51309 = G__51317;
count__51310 = G__51318;
i__51311 = G__51319;
continue;
} else {
var n = cljs.core.first.call(null,seq__51308__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51320 = cljs.core.next.call(null,seq__51308__$1);
var G__51321 = null;
var G__51322 = (0);
var G__51323 = (0);
seq__51308 = G__51320;
chunk__51309 = G__51321;
count__51310 = G__51322;
i__51311 = G__51323;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51374_51385 = cljs.core.seq.call(null,deps);
var chunk__51375_51386 = null;
var count__51376_51387 = (0);
var i__51377_51388 = (0);
while(true){
if((i__51377_51388 < count__51376_51387)){
var dep_51389 = cljs.core._nth.call(null,chunk__51375_51386,i__51377_51388);
topo_sort_helper_STAR_.call(null,dep_51389,(depth + (1)),state);

var G__51390 = seq__51374_51385;
var G__51391 = chunk__51375_51386;
var G__51392 = count__51376_51387;
var G__51393 = (i__51377_51388 + (1));
seq__51374_51385 = G__51390;
chunk__51375_51386 = G__51391;
count__51376_51387 = G__51392;
i__51377_51388 = G__51393;
continue;
} else {
var temp__4657__auto___51394 = cljs.core.seq.call(null,seq__51374_51385);
if(temp__4657__auto___51394){
var seq__51374_51395__$1 = temp__4657__auto___51394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51374_51395__$1)){
var c__44908__auto___51396 = cljs.core.chunk_first.call(null,seq__51374_51395__$1);
var G__51397 = cljs.core.chunk_rest.call(null,seq__51374_51395__$1);
var G__51398 = c__44908__auto___51396;
var G__51399 = cljs.core.count.call(null,c__44908__auto___51396);
var G__51400 = (0);
seq__51374_51385 = G__51397;
chunk__51375_51386 = G__51398;
count__51376_51387 = G__51399;
i__51377_51388 = G__51400;
continue;
} else {
var dep_51401 = cljs.core.first.call(null,seq__51374_51395__$1);
topo_sort_helper_STAR_.call(null,dep_51401,(depth + (1)),state);

var G__51402 = cljs.core.next.call(null,seq__51374_51395__$1);
var G__51403 = null;
var G__51404 = (0);
var G__51405 = (0);
seq__51374_51385 = G__51402;
chunk__51375_51386 = G__51403;
count__51376_51387 = G__51404;
i__51377_51388 = G__51405;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51378){
var vec__51382 = p__51378;
var seq__51383 = cljs.core.seq.call(null,vec__51382);
var first__51384 = cljs.core.first.call(null,seq__51383);
var seq__51383__$1 = cljs.core.next.call(null,seq__51383);
var x = first__51384;
var xs = seq__51383__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51382,seq__51383,first__51384,seq__51383__$1,x,xs,get_deps__$1){
return (function (p1__51324_SHARP_){
return clojure.set.difference.call(null,p1__51324_SHARP_,x);
});})(vec__51382,seq__51383,first__51384,seq__51383__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51418 = cljs.core.seq.call(null,provides);
var chunk__51419 = null;
var count__51420 = (0);
var i__51421 = (0);
while(true){
if((i__51421 < count__51420)){
var prov = cljs.core._nth.call(null,chunk__51419,i__51421);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51422_51430 = cljs.core.seq.call(null,requires);
var chunk__51423_51431 = null;
var count__51424_51432 = (0);
var i__51425_51433 = (0);
while(true){
if((i__51425_51433 < count__51424_51432)){
var req_51434 = cljs.core._nth.call(null,chunk__51423_51431,i__51425_51433);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51434,prov);

var G__51435 = seq__51422_51430;
var G__51436 = chunk__51423_51431;
var G__51437 = count__51424_51432;
var G__51438 = (i__51425_51433 + (1));
seq__51422_51430 = G__51435;
chunk__51423_51431 = G__51436;
count__51424_51432 = G__51437;
i__51425_51433 = G__51438;
continue;
} else {
var temp__4657__auto___51439 = cljs.core.seq.call(null,seq__51422_51430);
if(temp__4657__auto___51439){
var seq__51422_51440__$1 = temp__4657__auto___51439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51422_51440__$1)){
var c__44908__auto___51441 = cljs.core.chunk_first.call(null,seq__51422_51440__$1);
var G__51442 = cljs.core.chunk_rest.call(null,seq__51422_51440__$1);
var G__51443 = c__44908__auto___51441;
var G__51444 = cljs.core.count.call(null,c__44908__auto___51441);
var G__51445 = (0);
seq__51422_51430 = G__51442;
chunk__51423_51431 = G__51443;
count__51424_51432 = G__51444;
i__51425_51433 = G__51445;
continue;
} else {
var req_51446 = cljs.core.first.call(null,seq__51422_51440__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51446,prov);

var G__51447 = cljs.core.next.call(null,seq__51422_51440__$1);
var G__51448 = null;
var G__51449 = (0);
var G__51450 = (0);
seq__51422_51430 = G__51447;
chunk__51423_51431 = G__51448;
count__51424_51432 = G__51449;
i__51425_51433 = G__51450;
continue;
}
} else {
}
}
break;
}

var G__51451 = seq__51418;
var G__51452 = chunk__51419;
var G__51453 = count__51420;
var G__51454 = (i__51421 + (1));
seq__51418 = G__51451;
chunk__51419 = G__51452;
count__51420 = G__51453;
i__51421 = G__51454;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51418);
if(temp__4657__auto__){
var seq__51418__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51418__$1)){
var c__44908__auto__ = cljs.core.chunk_first.call(null,seq__51418__$1);
var G__51455 = cljs.core.chunk_rest.call(null,seq__51418__$1);
var G__51456 = c__44908__auto__;
var G__51457 = cljs.core.count.call(null,c__44908__auto__);
var G__51458 = (0);
seq__51418 = G__51455;
chunk__51419 = G__51456;
count__51420 = G__51457;
i__51421 = G__51458;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51418__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51426_51459 = cljs.core.seq.call(null,requires);
var chunk__51427_51460 = null;
var count__51428_51461 = (0);
var i__51429_51462 = (0);
while(true){
if((i__51429_51462 < count__51428_51461)){
var req_51463 = cljs.core._nth.call(null,chunk__51427_51460,i__51429_51462);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51463,prov);

var G__51464 = seq__51426_51459;
var G__51465 = chunk__51427_51460;
var G__51466 = count__51428_51461;
var G__51467 = (i__51429_51462 + (1));
seq__51426_51459 = G__51464;
chunk__51427_51460 = G__51465;
count__51428_51461 = G__51466;
i__51429_51462 = G__51467;
continue;
} else {
var temp__4657__auto___51468__$1 = cljs.core.seq.call(null,seq__51426_51459);
if(temp__4657__auto___51468__$1){
var seq__51426_51469__$1 = temp__4657__auto___51468__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51426_51469__$1)){
var c__44908__auto___51470 = cljs.core.chunk_first.call(null,seq__51426_51469__$1);
var G__51471 = cljs.core.chunk_rest.call(null,seq__51426_51469__$1);
var G__51472 = c__44908__auto___51470;
var G__51473 = cljs.core.count.call(null,c__44908__auto___51470);
var G__51474 = (0);
seq__51426_51459 = G__51471;
chunk__51427_51460 = G__51472;
count__51428_51461 = G__51473;
i__51429_51462 = G__51474;
continue;
} else {
var req_51475 = cljs.core.first.call(null,seq__51426_51469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51475,prov);

var G__51476 = cljs.core.next.call(null,seq__51426_51469__$1);
var G__51477 = null;
var G__51478 = (0);
var G__51479 = (0);
seq__51426_51459 = G__51476;
chunk__51427_51460 = G__51477;
count__51428_51461 = G__51478;
i__51429_51462 = G__51479;
continue;
}
} else {
}
}
break;
}

var G__51480 = cljs.core.next.call(null,seq__51418__$1);
var G__51481 = null;
var G__51482 = (0);
var G__51483 = (0);
seq__51418 = G__51480;
chunk__51419 = G__51481;
count__51420 = G__51482;
i__51421 = G__51483;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51488_51492 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51489_51493 = null;
var count__51490_51494 = (0);
var i__51491_51495 = (0);
while(true){
if((i__51491_51495 < count__51490_51494)){
var ns_51496 = cljs.core._nth.call(null,chunk__51489_51493,i__51491_51495);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51496);

var G__51497 = seq__51488_51492;
var G__51498 = chunk__51489_51493;
var G__51499 = count__51490_51494;
var G__51500 = (i__51491_51495 + (1));
seq__51488_51492 = G__51497;
chunk__51489_51493 = G__51498;
count__51490_51494 = G__51499;
i__51491_51495 = G__51500;
continue;
} else {
var temp__4657__auto___51501 = cljs.core.seq.call(null,seq__51488_51492);
if(temp__4657__auto___51501){
var seq__51488_51502__$1 = temp__4657__auto___51501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51488_51502__$1)){
var c__44908__auto___51503 = cljs.core.chunk_first.call(null,seq__51488_51502__$1);
var G__51504 = cljs.core.chunk_rest.call(null,seq__51488_51502__$1);
var G__51505 = c__44908__auto___51503;
var G__51506 = cljs.core.count.call(null,c__44908__auto___51503);
var G__51507 = (0);
seq__51488_51492 = G__51504;
chunk__51489_51493 = G__51505;
count__51490_51494 = G__51506;
i__51491_51495 = G__51507;
continue;
} else {
var ns_51508 = cljs.core.first.call(null,seq__51488_51502__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51508);

var G__51509 = cljs.core.next.call(null,seq__51488_51502__$1);
var G__51510 = null;
var G__51511 = (0);
var G__51512 = (0);
seq__51488_51492 = G__51509;
chunk__51489_51493 = G__51510;
count__51490_51494 = G__51511;
i__51491_51495 = G__51512;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44097__auto__ = goog.require__;
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51513__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51514__i = 0, G__51514__a = new Array(arguments.length -  0);
while (G__51514__i < G__51514__a.length) {G__51514__a[G__51514__i] = arguments[G__51514__i + 0]; ++G__51514__i;}
  args = new cljs.core.IndexedSeq(G__51514__a,0);
} 
return G__51513__delegate.call(this,args);};
G__51513.cljs$lang$maxFixedArity = 0;
G__51513.cljs$lang$applyTo = (function (arglist__51515){
var args = cljs.core.seq(arglist__51515);
return G__51513__delegate(args);
});
G__51513.cljs$core$IFn$_invoke$arity$variadic = G__51513__delegate;
return G__51513;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51516 = cljs.core._EQ_;
var expr__51517 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51516.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51517))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__51516,expr__51517){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__51516,expr__51517))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__51516,expr__51517){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51519){if((e51519 instanceof Error)){
var e = e51519;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51519;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__51516,expr__51517))
} else {
if(cljs.core.truth_(pred__51516.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51517))){
return ((function (pred__51516,expr__51517){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51516,expr__51517){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51516,expr__51517))
);

return deferred.addErrback(((function (deferred,pred__51516,expr__51517){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51516,expr__51517))
);
});
;})(pred__51516,expr__51517))
} else {
if(cljs.core.truth_(pred__51516.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__51517))){
return ((function (pred__51516,expr__51517){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e51520){if((e51520 instanceof Error)){
var e = e51520;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51520;

}
}})());
});
;})(pred__51516,expr__51517))
} else {
return ((function (pred__51516,expr__51517){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51516,expr__51517))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51521,callback){
var map__51524 = p__51521;
var map__51524__$1 = ((((!((map__51524 == null)))?((((map__51524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51524):map__51524);
var file_msg = map__51524__$1;
var request_url = cljs.core.get.call(null,map__51524__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51524,map__51524__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51524,map__51524__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__){
return (function (state_51548){
var state_val_51549 = (state_51548[(1)]);
if((state_val_51549 === (7))){
var inst_51544 = (state_51548[(2)]);
var state_51548__$1 = state_51548;
var statearr_51550_51570 = state_51548__$1;
(statearr_51550_51570[(2)] = inst_51544);

(statearr_51550_51570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (1))){
var state_51548__$1 = state_51548;
var statearr_51551_51571 = state_51548__$1;
(statearr_51551_51571[(2)] = null);

(statearr_51551_51571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (4))){
var inst_51528 = (state_51548[(7)]);
var inst_51528__$1 = (state_51548[(2)]);
var state_51548__$1 = (function (){var statearr_51552 = state_51548;
(statearr_51552[(7)] = inst_51528__$1);

return statearr_51552;
})();
if(cljs.core.truth_(inst_51528__$1)){
var statearr_51553_51572 = state_51548__$1;
(statearr_51553_51572[(1)] = (5));

} else {
var statearr_51554_51573 = state_51548__$1;
(statearr_51554_51573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (6))){
var state_51548__$1 = state_51548;
var statearr_51555_51574 = state_51548__$1;
(statearr_51555_51574[(2)] = null);

(statearr_51555_51574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (3))){
var inst_51546 = (state_51548[(2)]);
var state_51548__$1 = state_51548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51548__$1,inst_51546);
} else {
if((state_val_51549 === (2))){
var state_51548__$1 = state_51548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51548__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51549 === (11))){
var inst_51540 = (state_51548[(2)]);
var state_51548__$1 = (function (){var statearr_51556 = state_51548;
(statearr_51556[(8)] = inst_51540);

return statearr_51556;
})();
var statearr_51557_51575 = state_51548__$1;
(statearr_51557_51575[(2)] = null);

(statearr_51557_51575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (9))){
var inst_51532 = (state_51548[(9)]);
var inst_51534 = (state_51548[(10)]);
var inst_51536 = inst_51534.call(null,inst_51532);
var state_51548__$1 = state_51548;
var statearr_51558_51576 = state_51548__$1;
(statearr_51558_51576[(2)] = inst_51536);

(statearr_51558_51576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (5))){
var inst_51528 = (state_51548[(7)]);
var inst_51530 = figwheel.client.file_reloading.blocking_load.call(null,inst_51528);
var state_51548__$1 = state_51548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51548__$1,(8),inst_51530);
} else {
if((state_val_51549 === (10))){
var inst_51532 = (state_51548[(9)]);
var inst_51538 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51532);
var state_51548__$1 = state_51548;
var statearr_51559_51577 = state_51548__$1;
(statearr_51559_51577[(2)] = inst_51538);

(statearr_51559_51577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (8))){
var inst_51534 = (state_51548[(10)]);
var inst_51528 = (state_51548[(7)]);
var inst_51532 = (state_51548[(2)]);
var inst_51533 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51534__$1 = cljs.core.get.call(null,inst_51533,inst_51528);
var state_51548__$1 = (function (){var statearr_51560 = state_51548;
(statearr_51560[(9)] = inst_51532);

(statearr_51560[(10)] = inst_51534__$1);

return statearr_51560;
})();
if(cljs.core.truth_(inst_51534__$1)){
var statearr_51561_51578 = state_51548__$1;
(statearr_51561_51578[(1)] = (9));

} else {
var statearr_51562_51579 = state_51548__$1;
(statearr_51562_51579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48370__auto__))
;
return ((function (switch__48258__auto__,c__48370__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48259__auto__ = null;
var figwheel$client$file_reloading$state_machine__48259__auto____0 = (function (){
var statearr_51566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51566[(0)] = figwheel$client$file_reloading$state_machine__48259__auto__);

(statearr_51566[(1)] = (1));

return statearr_51566;
});
var figwheel$client$file_reloading$state_machine__48259__auto____1 = (function (state_51548){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_51548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e51567){if((e51567 instanceof Object)){
var ex__48262__auto__ = e51567;
var statearr_51568_51580 = state_51548;
(statearr_51568_51580[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51581 = state_51548;
state_51548 = G__51581;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48259__auto__ = function(state_51548){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48259__auto____1.call(this,state_51548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48259__auto____0;
figwheel$client$file_reloading$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48259__auto____1;
return figwheel$client$file_reloading$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__))
})();
var state__48372__auto__ = (function (){var statearr_51569 = f__48371__auto__.call(null);
(statearr_51569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_51569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__))
);

return c__48370__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51582,callback){
var map__51585 = p__51582;
var map__51585__$1 = ((((!((map__51585 == null)))?((((map__51585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51585):map__51585);
var file_msg = map__51585__$1;
var namespace = cljs.core.get.call(null,map__51585__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51585,map__51585__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51585,map__51585__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__51587){
var map__51590 = p__51587;
var map__51590__$1 = ((((!((map__51590 == null)))?((((map__51590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51590):map__51590);
var file_msg = map__51590__$1;
var namespace = cljs.core.get.call(null,map__51590__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51592){
var map__51595 = p__51592;
var map__51595__$1 = ((((!((map__51595 == null)))?((((map__51595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51595):map__51595);
var file_msg = map__51595__$1;
var namespace = cljs.core.get.call(null,map__51595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44085__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__44085__auto__){
var or__44097__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
var or__44097__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44097__auto____$1)){
return or__44097__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44085__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51597,callback){
var map__51600 = p__51597;
var map__51600__$1 = ((((!((map__51600 == null)))?((((map__51600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51600):map__51600);
var file_msg = map__51600__$1;
var request_url = cljs.core.get.call(null,map__51600__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__48370__auto___51704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___51704,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___51704,out){
return (function (state_51686){
var state_val_51687 = (state_51686[(1)]);
if((state_val_51687 === (1))){
var inst_51660 = cljs.core.seq.call(null,files);
var inst_51661 = cljs.core.first.call(null,inst_51660);
var inst_51662 = cljs.core.next.call(null,inst_51660);
var inst_51663 = files;
var state_51686__$1 = (function (){var statearr_51688 = state_51686;
(statearr_51688[(7)] = inst_51663);

(statearr_51688[(8)] = inst_51661);

(statearr_51688[(9)] = inst_51662);

return statearr_51688;
})();
var statearr_51689_51705 = state_51686__$1;
(statearr_51689_51705[(2)] = null);

(statearr_51689_51705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51687 === (2))){
var inst_51663 = (state_51686[(7)]);
var inst_51669 = (state_51686[(10)]);
var inst_51668 = cljs.core.seq.call(null,inst_51663);
var inst_51669__$1 = cljs.core.first.call(null,inst_51668);
var inst_51670 = cljs.core.next.call(null,inst_51668);
var inst_51671 = (inst_51669__$1 == null);
var inst_51672 = cljs.core.not.call(null,inst_51671);
var state_51686__$1 = (function (){var statearr_51690 = state_51686;
(statearr_51690[(11)] = inst_51670);

(statearr_51690[(10)] = inst_51669__$1);

return statearr_51690;
})();
if(inst_51672){
var statearr_51691_51706 = state_51686__$1;
(statearr_51691_51706[(1)] = (4));

} else {
var statearr_51692_51707 = state_51686__$1;
(statearr_51692_51707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51687 === (3))){
var inst_51684 = (state_51686[(2)]);
var state_51686__$1 = state_51686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51686__$1,inst_51684);
} else {
if((state_val_51687 === (4))){
var inst_51669 = (state_51686[(10)]);
var inst_51674 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51669);
var state_51686__$1 = state_51686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51686__$1,(7),inst_51674);
} else {
if((state_val_51687 === (5))){
var inst_51680 = cljs.core.async.close_BANG_.call(null,out);
var state_51686__$1 = state_51686;
var statearr_51693_51708 = state_51686__$1;
(statearr_51693_51708[(2)] = inst_51680);

(statearr_51693_51708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51687 === (6))){
var inst_51682 = (state_51686[(2)]);
var state_51686__$1 = state_51686;
var statearr_51694_51709 = state_51686__$1;
(statearr_51694_51709[(2)] = inst_51682);

(statearr_51694_51709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51687 === (7))){
var inst_51670 = (state_51686[(11)]);
var inst_51676 = (state_51686[(2)]);
var inst_51677 = cljs.core.async.put_BANG_.call(null,out,inst_51676);
var inst_51663 = inst_51670;
var state_51686__$1 = (function (){var statearr_51695 = state_51686;
(statearr_51695[(7)] = inst_51663);

(statearr_51695[(12)] = inst_51677);

return statearr_51695;
})();
var statearr_51696_51710 = state_51686__$1;
(statearr_51696_51710[(2)] = null);

(statearr_51696_51710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__48370__auto___51704,out))
;
return ((function (switch__48258__auto__,c__48370__auto___51704,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto____0 = (function (){
var statearr_51700 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51700[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto__);

(statearr_51700[(1)] = (1));

return statearr_51700;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto____1 = (function (state_51686){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_51686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e51701){if((e51701 instanceof Object)){
var ex__48262__auto__ = e51701;
var statearr_51702_51711 = state_51686;
(statearr_51702_51711[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51712 = state_51686;
state_51686 = G__51712;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto__ = function(state_51686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto____1.call(this,state_51686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___51704,out))
})();
var state__48372__auto__ = (function (){var statearr_51703 = f__48371__auto__.call(null);
(statearr_51703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___51704);

return statearr_51703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___51704,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51713,opts){
var map__51717 = p__51713;
var map__51717__$1 = ((((!((map__51717 == null)))?((((map__51717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51717):map__51717);
var eval_body__$1 = cljs.core.get.call(null,map__51717__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51717__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44085__auto__ = eval_body__$1;
if(cljs.core.truth_(and__44085__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__44085__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51719){var e = e51719;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51720_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51720_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51729){
var vec__51730 = p__51729;
var k = cljs.core.nth.call(null,vec__51730,(0),null);
var v = cljs.core.nth.call(null,vec__51730,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51733){
var vec__51734 = p__51733;
var k = cljs.core.nth.call(null,vec__51734,(0),null);
var v = cljs.core.nth.call(null,vec__51734,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51740,p__51741){
var map__51988 = p__51740;
var map__51988__$1 = ((((!((map__51988 == null)))?((((map__51988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51988):map__51988);
var opts = map__51988__$1;
var before_jsload = cljs.core.get.call(null,map__51988__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51988__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51988__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51989 = p__51741;
var map__51989__$1 = ((((!((map__51989 == null)))?((((map__51989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51989):map__51989);
var msg = map__51989__$1;
var files = cljs.core.get.call(null,map__51989__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51989__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51989__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52142){
var state_val_52143 = (state_52142[(1)]);
if((state_val_52143 === (7))){
var inst_52005 = (state_52142[(7)]);
var inst_52004 = (state_52142[(8)]);
var inst_52006 = (state_52142[(9)]);
var inst_52003 = (state_52142[(10)]);
var inst_52011 = cljs.core._nth.call(null,inst_52004,inst_52006);
var inst_52012 = figwheel.client.file_reloading.eval_body.call(null,inst_52011,opts);
var inst_52013 = (inst_52006 + (1));
var tmp52144 = inst_52005;
var tmp52145 = inst_52004;
var tmp52146 = inst_52003;
var inst_52003__$1 = tmp52146;
var inst_52004__$1 = tmp52145;
var inst_52005__$1 = tmp52144;
var inst_52006__$1 = inst_52013;
var state_52142__$1 = (function (){var statearr_52147 = state_52142;
(statearr_52147[(7)] = inst_52005__$1);

(statearr_52147[(8)] = inst_52004__$1);

(statearr_52147[(11)] = inst_52012);

(statearr_52147[(9)] = inst_52006__$1);

(statearr_52147[(10)] = inst_52003__$1);

return statearr_52147;
})();
var statearr_52148_52234 = state_52142__$1;
(statearr_52148_52234[(2)] = null);

(statearr_52148_52234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (20))){
var inst_52046 = (state_52142[(12)]);
var inst_52054 = figwheel.client.file_reloading.sort_files.call(null,inst_52046);
var state_52142__$1 = state_52142;
var statearr_52149_52235 = state_52142__$1;
(statearr_52149_52235[(2)] = inst_52054);

(statearr_52149_52235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (27))){
var state_52142__$1 = state_52142;
var statearr_52150_52236 = state_52142__$1;
(statearr_52150_52236[(2)] = null);

(statearr_52150_52236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (1))){
var inst_51995 = (state_52142[(13)]);
var inst_51992 = before_jsload.call(null,files);
var inst_51993 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_51994 = (function (){return ((function (inst_51995,inst_51992,inst_51993,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51737_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51737_SHARP_);
});
;})(inst_51995,inst_51992,inst_51993,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51995__$1 = cljs.core.filter.call(null,inst_51994,files);
var inst_51996 = cljs.core.not_empty.call(null,inst_51995__$1);
var state_52142__$1 = (function (){var statearr_52151 = state_52142;
(statearr_52151[(13)] = inst_51995__$1);

(statearr_52151[(14)] = inst_51993);

(statearr_52151[(15)] = inst_51992);

return statearr_52151;
})();
if(cljs.core.truth_(inst_51996)){
var statearr_52152_52237 = state_52142__$1;
(statearr_52152_52237[(1)] = (2));

} else {
var statearr_52153_52238 = state_52142__$1;
(statearr_52153_52238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (24))){
var state_52142__$1 = state_52142;
var statearr_52154_52239 = state_52142__$1;
(statearr_52154_52239[(2)] = null);

(statearr_52154_52239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (39))){
var inst_52096 = (state_52142[(16)]);
var state_52142__$1 = state_52142;
var statearr_52155_52240 = state_52142__$1;
(statearr_52155_52240[(2)] = inst_52096);

(statearr_52155_52240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (46))){
var inst_52137 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52156_52241 = state_52142__$1;
(statearr_52156_52241[(2)] = inst_52137);

(statearr_52156_52241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (4))){
var inst_52040 = (state_52142[(2)]);
var inst_52041 = cljs.core.List.EMPTY;
var inst_52042 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52041);
var inst_52043 = (function (){return ((function (inst_52040,inst_52041,inst_52042,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51738_SHARP_){
var and__44085__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51738_SHARP_);
if(cljs.core.truth_(and__44085__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51738_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__51738_SHARP_)));
} else {
return and__44085__auto__;
}
});
;})(inst_52040,inst_52041,inst_52042,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52044 = cljs.core.filter.call(null,inst_52043,files);
var inst_52045 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52046 = cljs.core.concat.call(null,inst_52044,inst_52045);
var state_52142__$1 = (function (){var statearr_52157 = state_52142;
(statearr_52157[(17)] = inst_52040);

(statearr_52157[(12)] = inst_52046);

(statearr_52157[(18)] = inst_52042);

return statearr_52157;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52158_52242 = state_52142__$1;
(statearr_52158_52242[(1)] = (16));

} else {
var statearr_52159_52243 = state_52142__$1;
(statearr_52159_52243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (15))){
var inst_52030 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52160_52244 = state_52142__$1;
(statearr_52160_52244[(2)] = inst_52030);

(statearr_52160_52244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (21))){
var inst_52056 = (state_52142[(19)]);
var inst_52056__$1 = (state_52142[(2)]);
var inst_52057 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52056__$1);
var state_52142__$1 = (function (){var statearr_52161 = state_52142;
(statearr_52161[(19)] = inst_52056__$1);

return statearr_52161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52142__$1,(22),inst_52057);
} else {
if((state_val_52143 === (31))){
var inst_52140 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52142__$1,inst_52140);
} else {
if((state_val_52143 === (32))){
var inst_52096 = (state_52142[(16)]);
var inst_52101 = inst_52096.cljs$lang$protocol_mask$partition0$;
var inst_52102 = (inst_52101 & (64));
var inst_52103 = inst_52096.cljs$core$ISeq$;
var inst_52104 = (inst_52102) || (inst_52103);
var state_52142__$1 = state_52142;
if(cljs.core.truth_(inst_52104)){
var statearr_52162_52245 = state_52142__$1;
(statearr_52162_52245[(1)] = (35));

} else {
var statearr_52163_52246 = state_52142__$1;
(statearr_52163_52246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (40))){
var inst_52117 = (state_52142[(20)]);
var inst_52116 = (state_52142[(2)]);
var inst_52117__$1 = cljs.core.get.call(null,inst_52116,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52118 = cljs.core.get.call(null,inst_52116,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52119 = cljs.core.not_empty.call(null,inst_52117__$1);
var state_52142__$1 = (function (){var statearr_52164 = state_52142;
(statearr_52164[(20)] = inst_52117__$1);

(statearr_52164[(21)] = inst_52118);

return statearr_52164;
})();
if(cljs.core.truth_(inst_52119)){
var statearr_52165_52247 = state_52142__$1;
(statearr_52165_52247[(1)] = (41));

} else {
var statearr_52166_52248 = state_52142__$1;
(statearr_52166_52248[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (33))){
var state_52142__$1 = state_52142;
var statearr_52167_52249 = state_52142__$1;
(statearr_52167_52249[(2)] = false);

(statearr_52167_52249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (13))){
var inst_52016 = (state_52142[(22)]);
var inst_52020 = cljs.core.chunk_first.call(null,inst_52016);
var inst_52021 = cljs.core.chunk_rest.call(null,inst_52016);
var inst_52022 = cljs.core.count.call(null,inst_52020);
var inst_52003 = inst_52021;
var inst_52004 = inst_52020;
var inst_52005 = inst_52022;
var inst_52006 = (0);
var state_52142__$1 = (function (){var statearr_52168 = state_52142;
(statearr_52168[(7)] = inst_52005);

(statearr_52168[(8)] = inst_52004);

(statearr_52168[(9)] = inst_52006);

(statearr_52168[(10)] = inst_52003);

return statearr_52168;
})();
var statearr_52169_52250 = state_52142__$1;
(statearr_52169_52250[(2)] = null);

(statearr_52169_52250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (22))){
var inst_52059 = (state_52142[(23)]);
var inst_52064 = (state_52142[(24)]);
var inst_52056 = (state_52142[(19)]);
var inst_52060 = (state_52142[(25)]);
var inst_52059__$1 = (state_52142[(2)]);
var inst_52060__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52059__$1);
var inst_52061 = (function (){var all_files = inst_52056;
var res_SINGLEQUOTE_ = inst_52059__$1;
var res = inst_52060__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52059,inst_52064,inst_52056,inst_52060,inst_52059__$1,inst_52060__$1,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51739_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51739_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52059,inst_52064,inst_52056,inst_52060,inst_52059__$1,inst_52060__$1,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52062 = cljs.core.filter.call(null,inst_52061,inst_52059__$1);
var inst_52063 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52064__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52063);
var inst_52065 = cljs.core.not_empty.call(null,inst_52064__$1);
var state_52142__$1 = (function (){var statearr_52170 = state_52142;
(statearr_52170[(23)] = inst_52059__$1);

(statearr_52170[(26)] = inst_52062);

(statearr_52170[(24)] = inst_52064__$1);

(statearr_52170[(25)] = inst_52060__$1);

return statearr_52170;
})();
if(cljs.core.truth_(inst_52065)){
var statearr_52171_52251 = state_52142__$1;
(statearr_52171_52251[(1)] = (23));

} else {
var statearr_52172_52252 = state_52142__$1;
(statearr_52172_52252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (36))){
var state_52142__$1 = state_52142;
var statearr_52173_52253 = state_52142__$1;
(statearr_52173_52253[(2)] = false);

(statearr_52173_52253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (41))){
var inst_52117 = (state_52142[(20)]);
var inst_52121 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52122 = cljs.core.map.call(null,inst_52121,inst_52117);
var inst_52123 = cljs.core.pr_str.call(null,inst_52122);
var inst_52124 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52123)].join('');
var inst_52125 = figwheel.client.utils.log.call(null,inst_52124);
var state_52142__$1 = state_52142;
var statearr_52174_52254 = state_52142__$1;
(statearr_52174_52254[(2)] = inst_52125);

(statearr_52174_52254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (43))){
var inst_52118 = (state_52142[(21)]);
var inst_52128 = (state_52142[(2)]);
var inst_52129 = cljs.core.not_empty.call(null,inst_52118);
var state_52142__$1 = (function (){var statearr_52175 = state_52142;
(statearr_52175[(27)] = inst_52128);

return statearr_52175;
})();
if(cljs.core.truth_(inst_52129)){
var statearr_52176_52255 = state_52142__$1;
(statearr_52176_52255[(1)] = (44));

} else {
var statearr_52177_52256 = state_52142__$1;
(statearr_52177_52256[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (29))){
var inst_52059 = (state_52142[(23)]);
var inst_52096 = (state_52142[(16)]);
var inst_52062 = (state_52142[(26)]);
var inst_52064 = (state_52142[(24)]);
var inst_52056 = (state_52142[(19)]);
var inst_52060 = (state_52142[(25)]);
var inst_52092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52095 = (function (){var all_files = inst_52056;
var res_SINGLEQUOTE_ = inst_52059;
var res = inst_52060;
var files_not_loaded = inst_52062;
var dependencies_that_loaded = inst_52064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52096,inst_52062,inst_52064,inst_52056,inst_52060,inst_52092,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52094){
var map__52178 = p__52094;
var map__52178__$1 = ((((!((map__52178 == null)))?((((map__52178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52178):map__52178);
var namespace = cljs.core.get.call(null,map__52178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52096,inst_52062,inst_52064,inst_52056,inst_52060,inst_52092,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52096__$1 = cljs.core.group_by.call(null,inst_52095,inst_52062);
var inst_52098 = (inst_52096__$1 == null);
var inst_52099 = cljs.core.not.call(null,inst_52098);
var state_52142__$1 = (function (){var statearr_52180 = state_52142;
(statearr_52180[(28)] = inst_52092);

(statearr_52180[(16)] = inst_52096__$1);

return statearr_52180;
})();
if(inst_52099){
var statearr_52181_52257 = state_52142__$1;
(statearr_52181_52257[(1)] = (32));

} else {
var statearr_52182_52258 = state_52142__$1;
(statearr_52182_52258[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (44))){
var inst_52118 = (state_52142[(21)]);
var inst_52131 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52118);
var inst_52132 = cljs.core.pr_str.call(null,inst_52131);
var inst_52133 = [cljs.core.str("not required: "),cljs.core.str(inst_52132)].join('');
var inst_52134 = figwheel.client.utils.log.call(null,inst_52133);
var state_52142__$1 = state_52142;
var statearr_52183_52259 = state_52142__$1;
(statearr_52183_52259[(2)] = inst_52134);

(statearr_52183_52259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (6))){
var inst_52037 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52184_52260 = state_52142__$1;
(statearr_52184_52260[(2)] = inst_52037);

(statearr_52184_52260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (28))){
var inst_52062 = (state_52142[(26)]);
var inst_52089 = (state_52142[(2)]);
var inst_52090 = cljs.core.not_empty.call(null,inst_52062);
var state_52142__$1 = (function (){var statearr_52185 = state_52142;
(statearr_52185[(29)] = inst_52089);

return statearr_52185;
})();
if(cljs.core.truth_(inst_52090)){
var statearr_52186_52261 = state_52142__$1;
(statearr_52186_52261[(1)] = (29));

} else {
var statearr_52187_52262 = state_52142__$1;
(statearr_52187_52262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (25))){
var inst_52060 = (state_52142[(25)]);
var inst_52076 = (state_52142[(2)]);
var inst_52077 = cljs.core.not_empty.call(null,inst_52060);
var state_52142__$1 = (function (){var statearr_52188 = state_52142;
(statearr_52188[(30)] = inst_52076);

return statearr_52188;
})();
if(cljs.core.truth_(inst_52077)){
var statearr_52189_52263 = state_52142__$1;
(statearr_52189_52263[(1)] = (26));

} else {
var statearr_52190_52264 = state_52142__$1;
(statearr_52190_52264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (34))){
var inst_52111 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
if(cljs.core.truth_(inst_52111)){
var statearr_52191_52265 = state_52142__$1;
(statearr_52191_52265[(1)] = (38));

} else {
var statearr_52192_52266 = state_52142__$1;
(statearr_52192_52266[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (17))){
var state_52142__$1 = state_52142;
var statearr_52193_52267 = state_52142__$1;
(statearr_52193_52267[(2)] = recompile_dependents);

(statearr_52193_52267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (3))){
var state_52142__$1 = state_52142;
var statearr_52194_52268 = state_52142__$1;
(statearr_52194_52268[(2)] = null);

(statearr_52194_52268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (12))){
var inst_52033 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52195_52269 = state_52142__$1;
(statearr_52195_52269[(2)] = inst_52033);

(statearr_52195_52269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (2))){
var inst_51995 = (state_52142[(13)]);
var inst_52002 = cljs.core.seq.call(null,inst_51995);
var inst_52003 = inst_52002;
var inst_52004 = null;
var inst_52005 = (0);
var inst_52006 = (0);
var state_52142__$1 = (function (){var statearr_52196 = state_52142;
(statearr_52196[(7)] = inst_52005);

(statearr_52196[(8)] = inst_52004);

(statearr_52196[(9)] = inst_52006);

(statearr_52196[(10)] = inst_52003);

return statearr_52196;
})();
var statearr_52197_52270 = state_52142__$1;
(statearr_52197_52270[(2)] = null);

(statearr_52197_52270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (23))){
var inst_52059 = (state_52142[(23)]);
var inst_52062 = (state_52142[(26)]);
var inst_52064 = (state_52142[(24)]);
var inst_52056 = (state_52142[(19)]);
var inst_52060 = (state_52142[(25)]);
var inst_52067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52069 = (function (){var all_files = inst_52056;
var res_SINGLEQUOTE_ = inst_52059;
var res = inst_52060;
var files_not_loaded = inst_52062;
var dependencies_that_loaded = inst_52064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52062,inst_52064,inst_52056,inst_52060,inst_52067,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52068){
var map__52198 = p__52068;
var map__52198__$1 = ((((!((map__52198 == null)))?((((map__52198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52198):map__52198);
var request_url = cljs.core.get.call(null,map__52198__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52062,inst_52064,inst_52056,inst_52060,inst_52067,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52070 = cljs.core.reverse.call(null,inst_52064);
var inst_52071 = cljs.core.map.call(null,inst_52069,inst_52070);
var inst_52072 = cljs.core.pr_str.call(null,inst_52071);
var inst_52073 = figwheel.client.utils.log.call(null,inst_52072);
var state_52142__$1 = (function (){var statearr_52200 = state_52142;
(statearr_52200[(31)] = inst_52067);

return statearr_52200;
})();
var statearr_52201_52271 = state_52142__$1;
(statearr_52201_52271[(2)] = inst_52073);

(statearr_52201_52271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (35))){
var state_52142__$1 = state_52142;
var statearr_52202_52272 = state_52142__$1;
(statearr_52202_52272[(2)] = true);

(statearr_52202_52272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (19))){
var inst_52046 = (state_52142[(12)]);
var inst_52052 = figwheel.client.file_reloading.expand_files.call(null,inst_52046);
var state_52142__$1 = state_52142;
var statearr_52203_52273 = state_52142__$1;
(statearr_52203_52273[(2)] = inst_52052);

(statearr_52203_52273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (11))){
var state_52142__$1 = state_52142;
var statearr_52204_52274 = state_52142__$1;
(statearr_52204_52274[(2)] = null);

(statearr_52204_52274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (9))){
var inst_52035 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52205_52275 = state_52142__$1;
(statearr_52205_52275[(2)] = inst_52035);

(statearr_52205_52275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (5))){
var inst_52005 = (state_52142[(7)]);
var inst_52006 = (state_52142[(9)]);
var inst_52008 = (inst_52006 < inst_52005);
var inst_52009 = inst_52008;
var state_52142__$1 = state_52142;
if(cljs.core.truth_(inst_52009)){
var statearr_52206_52276 = state_52142__$1;
(statearr_52206_52276[(1)] = (7));

} else {
var statearr_52207_52277 = state_52142__$1;
(statearr_52207_52277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (14))){
var inst_52016 = (state_52142[(22)]);
var inst_52025 = cljs.core.first.call(null,inst_52016);
var inst_52026 = figwheel.client.file_reloading.eval_body.call(null,inst_52025,opts);
var inst_52027 = cljs.core.next.call(null,inst_52016);
var inst_52003 = inst_52027;
var inst_52004 = null;
var inst_52005 = (0);
var inst_52006 = (0);
var state_52142__$1 = (function (){var statearr_52208 = state_52142;
(statearr_52208[(7)] = inst_52005);

(statearr_52208[(8)] = inst_52004);

(statearr_52208[(32)] = inst_52026);

(statearr_52208[(9)] = inst_52006);

(statearr_52208[(10)] = inst_52003);

return statearr_52208;
})();
var statearr_52209_52278 = state_52142__$1;
(statearr_52209_52278[(2)] = null);

(statearr_52209_52278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (45))){
var state_52142__$1 = state_52142;
var statearr_52210_52279 = state_52142__$1;
(statearr_52210_52279[(2)] = null);

(statearr_52210_52279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (26))){
var inst_52059 = (state_52142[(23)]);
var inst_52062 = (state_52142[(26)]);
var inst_52064 = (state_52142[(24)]);
var inst_52056 = (state_52142[(19)]);
var inst_52060 = (state_52142[(25)]);
var inst_52079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52081 = (function (){var all_files = inst_52056;
var res_SINGLEQUOTE_ = inst_52059;
var res = inst_52060;
var files_not_loaded = inst_52062;
var dependencies_that_loaded = inst_52064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52062,inst_52064,inst_52056,inst_52060,inst_52079,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52080){
var map__52211 = p__52080;
var map__52211__$1 = ((((!((map__52211 == null)))?((((map__52211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52211):map__52211);
var namespace = cljs.core.get.call(null,map__52211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52062,inst_52064,inst_52056,inst_52060,inst_52079,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52082 = cljs.core.map.call(null,inst_52081,inst_52060);
var inst_52083 = cljs.core.pr_str.call(null,inst_52082);
var inst_52084 = figwheel.client.utils.log.call(null,inst_52083);
var inst_52085 = (function (){var all_files = inst_52056;
var res_SINGLEQUOTE_ = inst_52059;
var res = inst_52060;
var files_not_loaded = inst_52062;
var dependencies_that_loaded = inst_52064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52062,inst_52064,inst_52056,inst_52060,inst_52079,inst_52081,inst_52082,inst_52083,inst_52084,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52059,inst_52062,inst_52064,inst_52056,inst_52060,inst_52079,inst_52081,inst_52082,inst_52083,inst_52084,state_val_52143,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52086 = setTimeout(inst_52085,(10));
var state_52142__$1 = (function (){var statearr_52213 = state_52142;
(statearr_52213[(33)] = inst_52084);

(statearr_52213[(34)] = inst_52079);

return statearr_52213;
})();
var statearr_52214_52280 = state_52142__$1;
(statearr_52214_52280[(2)] = inst_52086);

(statearr_52214_52280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (16))){
var state_52142__$1 = state_52142;
var statearr_52215_52281 = state_52142__$1;
(statearr_52215_52281[(2)] = reload_dependents);

(statearr_52215_52281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (38))){
var inst_52096 = (state_52142[(16)]);
var inst_52113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52096);
var state_52142__$1 = state_52142;
var statearr_52216_52282 = state_52142__$1;
(statearr_52216_52282[(2)] = inst_52113);

(statearr_52216_52282[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (30))){
var state_52142__$1 = state_52142;
var statearr_52217_52283 = state_52142__$1;
(statearr_52217_52283[(2)] = null);

(statearr_52217_52283[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (10))){
var inst_52016 = (state_52142[(22)]);
var inst_52018 = cljs.core.chunked_seq_QMARK_.call(null,inst_52016);
var state_52142__$1 = state_52142;
if(inst_52018){
var statearr_52218_52284 = state_52142__$1;
(statearr_52218_52284[(1)] = (13));

} else {
var statearr_52219_52285 = state_52142__$1;
(statearr_52219_52285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (18))){
var inst_52050 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
if(cljs.core.truth_(inst_52050)){
var statearr_52220_52286 = state_52142__$1;
(statearr_52220_52286[(1)] = (19));

} else {
var statearr_52221_52287 = state_52142__$1;
(statearr_52221_52287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (42))){
var state_52142__$1 = state_52142;
var statearr_52222_52288 = state_52142__$1;
(statearr_52222_52288[(2)] = null);

(statearr_52222_52288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (37))){
var inst_52108 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52223_52289 = state_52142__$1;
(statearr_52223_52289[(2)] = inst_52108);

(statearr_52223_52289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (8))){
var inst_52016 = (state_52142[(22)]);
var inst_52003 = (state_52142[(10)]);
var inst_52016__$1 = cljs.core.seq.call(null,inst_52003);
var state_52142__$1 = (function (){var statearr_52224 = state_52142;
(statearr_52224[(22)] = inst_52016__$1);

return statearr_52224;
})();
if(inst_52016__$1){
var statearr_52225_52290 = state_52142__$1;
(statearr_52225_52290[(1)] = (10));

} else {
var statearr_52226_52291 = state_52142__$1;
(statearr_52226_52291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48258__auto__,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto____0 = (function (){
var statearr_52230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52230[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto__);

(statearr_52230[(1)] = (1));

return statearr_52230;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto____1 = (function (state_52142){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_52142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e52231){if((e52231 instanceof Object)){
var ex__48262__auto__ = e52231;
var statearr_52232_52292 = state_52142;
(statearr_52232_52292[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52293 = state_52142;
state_52142 = G__52293;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto__ = function(state_52142){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto____1.call(this,state_52142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48372__auto__ = (function (){var statearr_52233 = f__48371__auto__.call(null);
(statearr_52233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_52233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__,map__51988,map__51988__$1,opts,before_jsload,on_jsload,reload_dependents,map__51989,map__51989__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48370__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52296,link){
var map__52299 = p__52296;
var map__52299__$1 = ((((!((map__52299 == null)))?((((map__52299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52299):map__52299);
var file = cljs.core.get.call(null,map__52299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52299,map__52299__$1,file){
return (function (p1__52294_SHARP_,p2__52295_SHARP_){
if(cljs.core._EQ_.call(null,p1__52294_SHARP_,p2__52295_SHARP_)){
return p1__52294_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52299,map__52299__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52305){
var map__52306 = p__52305;
var map__52306__$1 = ((((!((map__52306 == null)))?((((map__52306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52306):map__52306);
var match_length = cljs.core.get.call(null,map__52306__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52306__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52301_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52301_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52308_SHARP_,p2__52309_SHARP_){
return cljs.core.assoc.call(null,p1__52308_SHARP_,cljs.core.get.call(null,p2__52309_SHARP_,key),p2__52309_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_52310 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_52310);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_52310);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52311,p__52312){
var map__52317 = p__52311;
var map__52317__$1 = ((((!((map__52317 == null)))?((((map__52317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52317):map__52317);
var on_cssload = cljs.core.get.call(null,map__52317__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52318 = p__52312;
var map__52318__$1 = ((((!((map__52318 == null)))?((((map__52318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52318):map__52318);
var files_msg = map__52318__$1;
var files = cljs.core.get.call(null,map__52318__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489402288011