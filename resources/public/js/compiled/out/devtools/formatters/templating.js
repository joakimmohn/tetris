// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x57353_57354 = value;
x57353_57354.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x57358_57359 = value;
x57358_57359.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x57363_57364 = value;
x57363_57364.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__44085__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__44085__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__44085__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__45179__auto__ = [];
var len__45172__auto___57372 = arguments.length;
var i__45173__auto___57373 = (0);
while(true){
if((i__45173__auto___57373 < len__45172__auto___57372)){
args__45179__auto__.push((arguments[i__45173__auto___57373]));

var G__57374 = (i__45173__auto___57373 + (1));
i__45173__auto___57373 = G__57374;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__57368_57375 = cljs.core.seq.call(null,items);
var chunk__57369_57376 = null;
var count__57370_57377 = (0);
var i__57371_57378 = (0);
while(true){
if((i__57371_57378 < count__57370_57377)){
var item_57379 = cljs.core._nth.call(null,chunk__57369_57376,i__57371_57378);
if(cljs.core.some_QMARK_.call(null,item_57379)){
if(cljs.core.coll_QMARK_.call(null,item_57379)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_57379)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_57379));
}
} else {
}

var G__57380 = seq__57368_57375;
var G__57381 = chunk__57369_57376;
var G__57382 = count__57370_57377;
var G__57383 = (i__57371_57378 + (1));
seq__57368_57375 = G__57380;
chunk__57369_57376 = G__57381;
count__57370_57377 = G__57382;
i__57371_57378 = G__57383;
continue;
} else {
var temp__4657__auto___57384 = cljs.core.seq.call(null,seq__57368_57375);
if(temp__4657__auto___57384){
var seq__57368_57385__$1 = temp__4657__auto___57384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57368_57385__$1)){
var c__44908__auto___57386 = cljs.core.chunk_first.call(null,seq__57368_57385__$1);
var G__57387 = cljs.core.chunk_rest.call(null,seq__57368_57385__$1);
var G__57388 = c__44908__auto___57386;
var G__57389 = cljs.core.count.call(null,c__44908__auto___57386);
var G__57390 = (0);
seq__57368_57375 = G__57387;
chunk__57369_57376 = G__57388;
count__57370_57377 = G__57389;
i__57371_57378 = G__57390;
continue;
} else {
var item_57391 = cljs.core.first.call(null,seq__57368_57385__$1);
if(cljs.core.some_QMARK_.call(null,item_57391)){
if(cljs.core.coll_QMARK_.call(null,item_57391)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_57391)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_57391));
}
} else {
}

var G__57392 = cljs.core.next.call(null,seq__57368_57385__$1);
var G__57393 = null;
var G__57394 = (0);
var G__57395 = (0);
seq__57368_57375 = G__57392;
chunk__57369_57376 = G__57393;
count__57370_57377 = G__57394;
i__57371_57378 = G__57395;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq57367){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57367));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45179__auto__ = [];
var len__45172__auto___57403 = arguments.length;
var i__45173__auto___57404 = (0);
while(true){
if((i__45173__auto___57404 < len__45172__auto___57403)){
args__45179__auto__.push((arguments[i__45173__auto___57404]));

var G__57405 = (i__45173__auto___57404 + (1));
i__45173__auto___57404 = G__57405;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((2) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45180__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__57399_57406 = cljs.core.seq.call(null,children);
var chunk__57400_57407 = null;
var count__57401_57408 = (0);
var i__57402_57409 = (0);
while(true){
if((i__57402_57409 < count__57401_57408)){
var child_57410 = cljs.core._nth.call(null,chunk__57400_57407,i__57402_57409);
if(cljs.core.some_QMARK_.call(null,child_57410)){
if(cljs.core.coll_QMARK_.call(null,child_57410)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_57410))));
} else {
var temp__4655__auto___57411 = devtools.formatters.helpers.pref.call(null,child_57410);
if(cljs.core.truth_(temp__4655__auto___57411)){
var child_value_57412 = temp__4655__auto___57411;
template.push(child_value_57412);
} else {
}
}
} else {
}

var G__57413 = seq__57399_57406;
var G__57414 = chunk__57400_57407;
var G__57415 = count__57401_57408;
var G__57416 = (i__57402_57409 + (1));
seq__57399_57406 = G__57413;
chunk__57400_57407 = G__57414;
count__57401_57408 = G__57415;
i__57402_57409 = G__57416;
continue;
} else {
var temp__4657__auto___57417 = cljs.core.seq.call(null,seq__57399_57406);
if(temp__4657__auto___57417){
var seq__57399_57418__$1 = temp__4657__auto___57417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57399_57418__$1)){
var c__44908__auto___57419 = cljs.core.chunk_first.call(null,seq__57399_57418__$1);
var G__57420 = cljs.core.chunk_rest.call(null,seq__57399_57418__$1);
var G__57421 = c__44908__auto___57419;
var G__57422 = cljs.core.count.call(null,c__44908__auto___57419);
var G__57423 = (0);
seq__57399_57406 = G__57420;
chunk__57400_57407 = G__57421;
count__57401_57408 = G__57422;
i__57402_57409 = G__57423;
continue;
} else {
var child_57424 = cljs.core.first.call(null,seq__57399_57418__$1);
if(cljs.core.some_QMARK_.call(null,child_57424)){
if(cljs.core.coll_QMARK_.call(null,child_57424)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_57424))));
} else {
var temp__4655__auto___57425 = devtools.formatters.helpers.pref.call(null,child_57424);
if(cljs.core.truth_(temp__4655__auto___57425)){
var child_value_57426 = temp__4655__auto___57425;
template.push(child_value_57426);
} else {
}
}
} else {
}

var G__57427 = cljs.core.next.call(null,seq__57399_57418__$1);
var G__57428 = null;
var G__57429 = (0);
var G__57430 = (0);
seq__57399_57406 = G__57427;
chunk__57400_57407 = G__57428;
count__57401_57408 = G__57429;
i__57402_57409 = G__57430;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq57396){
var G__57397 = cljs.core.first.call(null,seq57396);
var seq57396__$1 = cljs.core.next.call(null,seq57396);
var G__57398 = cljs.core.first.call(null,seq57396__$1);
var seq57396__$2 = cljs.core.next.call(null,seq57396__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__57397,G__57398,seq57396__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___57433 = arguments.length;
var i__45173__auto___57434 = (0);
while(true){
if((i__45173__auto___57434 < len__45172__auto___57433)){
args__45179__auto__.push((arguments[i__45173__auto___57434]));

var G__57435 = (i__45173__auto___57434 + (1));
i__45173__auto___57434 = G__57435;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq57431){
var G__57432 = cljs.core.first.call(null,seq57431);
var seq57431__$1 = cljs.core.next.call(null,seq57431);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57432,seq57431__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___57438 = arguments.length;
var i__45173__auto___57439 = (0);
while(true){
if((i__45173__auto___57439 < len__45172__auto___57438)){
args__45179__auto__.push((arguments[i__45173__auto___57439]));

var G__57440 = (i__45173__auto___57439 + (1));
i__45173__auto___57439 = G__57440;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq57436){
var G__57437 = cljs.core.first.call(null,seq57436);
var seq57436__$1 = cljs.core.next.call(null,seq57436);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57437,seq57436__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args57441 = [];
var len__45172__auto___57446 = arguments.length;
var i__45173__auto___57447 = (0);
while(true){
if((i__45173__auto___57447 < len__45172__auto___57446)){
args57441.push((arguments[i__45173__auto___57447]));

var G__57448 = (i__45173__auto___57447 + (1));
i__45173__auto___57447 = G__57448;
continue;
} else {
}
break;
}

var G__57443 = args57441.length;
switch (G__57443) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57441.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj57445 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44097__auto__ = start_index;
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return (0);
}
})()};
return obj57445;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__45179__auto__ = [];
var len__45172__auto___57456 = arguments.length;
var i__45173__auto___57457 = (0);
while(true){
if((i__45173__auto___57457 < len__45172__auto___57456)){
args__45179__auto__.push((arguments[i__45173__auto___57457]));

var G__57458 = (i__45173__auto___57457 + (1));
i__45173__auto___57457 = G__57458;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__57452){
var vec__57453 = p__57452;
var state_override_fn = cljs.core.nth.call(null,vec__57453,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq57450){
var G__57451 = cljs.core.first.call(null,seq57450);
var seq57450__$1 = cljs.core.next.call(null,seq57450);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__57451,seq57450__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__45083__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57462_57465 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57463_57466 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57462_57465,_STAR_print_fn_STAR_57463_57466,sb__45083__auto__){
return (function (x__45084__auto__){
return sb__45083__auto__.append(x__45084__auto__);
});})(_STAR_print_newline_STAR_57462_57465,_STAR_print_fn_STAR_57463_57466,sb__45083__auto__))
;

try{var _STAR_print_level_STAR_57464_57467 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_57464_57467;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57463_57466;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57462_57465;
}
return [cljs.core.str(sb__45083__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_57469 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_57469;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__57471 = name;
switch (G__57471) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__57476 = tag;
var html_tag = cljs.core.nth.call(null,vec__57476,(0),null);
var style = cljs.core.nth.call(null,vec__57476,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_57480 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_57480;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_57483 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_57484 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_57484;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_57483;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__57485 = initial_value;
var G__57486 = value.call(null);
initial_value = G__57485;
value = G__57486;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__57487 = initial_value;
var G__57488 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__57487;
value = G__57488;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__57489 = initial_value;
var G__57490 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__57489;
value = G__57490;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1489402293214