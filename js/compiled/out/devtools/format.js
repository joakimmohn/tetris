// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__44760__auto__ = (((value == null))?null:value);
var m__44761__auto__ = (devtools.format._header[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,value);
} else {
var m__44761__auto____$1 = (devtools.format._header["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__44760__auto__ = (((value == null))?null:value);
var m__44761__auto__ = (devtools.format._has_body[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,value);
} else {
var m__44761__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__44760__auto__ = (((value == null))?null:value);
var m__44761__auto__ = (devtools.format._body[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,value);
} else {
var m__44761__auto____$1 = (devtools.format._body["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__54671__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__54671__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__54671__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__54671__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__54670__auto__ = temp__4657__auto____$2;
return goog.object.get(o__54670__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54692 = arguments.length;
var i__45173__auto___54693 = (0);
while(true){
if((i__45173__auto___54693 < len__45172__auto___54692)){
args__45179__auto__.push((arguments[i__45173__auto___54693]));

var G__54694 = (i__45173__auto___54693 + (1));
i__45173__auto___54693 = G__54694;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq54691){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54691));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54696 = arguments.length;
var i__45173__auto___54697 = (0);
while(true){
if((i__45173__auto___54697 < len__45172__auto___54696)){
args__45179__auto__.push((arguments[i__45173__auto___54697]));

var G__54698 = (i__45173__auto___54697 + (1));
i__45173__auto___54697 = G__54698;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq54695){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54695));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54700 = arguments.length;
var i__45173__auto___54701 = (0);
while(true){
if((i__45173__auto___54701 < len__45172__auto___54700)){
args__45179__auto__.push((arguments[i__45173__auto___54701]));

var G__54702 = (i__45173__auto___54701 + (1));
i__45173__auto___54701 = G__54702;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq54699){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54699));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54704 = arguments.length;
var i__45173__auto___54705 = (0);
while(true){
if((i__45173__auto___54705 < len__45172__auto___54704)){
args__45179__auto__.push((arguments[i__45173__auto___54705]));

var G__54706 = (i__45173__auto___54705 + (1));
i__45173__auto___54705 = G__54706;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq54703){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54703));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54708 = arguments.length;
var i__45173__auto___54709 = (0);
while(true){
if((i__45173__auto___54709 < len__45172__auto___54708)){
args__45179__auto__.push((arguments[i__45173__auto___54709]));

var G__54710 = (i__45173__auto___54709 + (1));
i__45173__auto___54709 = G__54710;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq54707){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54707));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54712 = arguments.length;
var i__45173__auto___54713 = (0);
while(true){
if((i__45173__auto___54713 < len__45172__auto___54712)){
args__45179__auto__.push((arguments[i__45173__auto___54713]));

var G__54714 = (i__45173__auto___54713 + (1));
i__45173__auto___54713 = G__54714;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq54711){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54711));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54716 = arguments.length;
var i__45173__auto___54717 = (0);
while(true){
if((i__45173__auto___54717 < len__45172__auto___54716)){
args__45179__auto__.push((arguments[i__45173__auto___54717]));

var G__54718 = (i__45173__auto___54717 + (1));
i__45173__auto___54717 = G__54718;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq54715){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54715));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54726 = arguments.length;
var i__45173__auto___54727 = (0);
while(true){
if((i__45173__auto___54727 < len__45172__auto___54726)){
args__45179__auto__.push((arguments[i__45173__auto___54727]));

var G__54728 = (i__45173__auto___54727 + (1));
i__45173__auto___54727 = G__54728;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__54722){
var vec__54723 = p__54722;
var state_override = cljs.core.nth.call(null,vec__54723,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__54723,state_override){
return (function (p1__54719_SHARP_){
return cljs.core.merge.call(null,p1__54719_SHARP_,state_override);
});})(vec__54723,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq54720){
var G__54721 = cljs.core.first.call(null,seq54720);
var seq54720__$1 = cljs.core.next.call(null,seq54720);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__54721,seq54720__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54730 = arguments.length;
var i__45173__auto___54731 = (0);
while(true){
if((i__45173__auto___54731 < len__45172__auto___54730)){
args__45179__auto__.push((arguments[i__45173__auto___54731]));

var G__54732 = (i__45173__auto___54731 + (1));
i__45173__auto___54731 = G__54732;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq54729){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54729));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54735 = arguments.length;
var i__45173__auto___54736 = (0);
while(true){
if((i__45173__auto___54736 < len__45172__auto___54735)){
args__45179__auto__.push((arguments[i__45173__auto___54736]));

var G__54737 = (i__45173__auto___54736 + (1));
i__45173__auto___54736 = G__54737;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq54733){
var G__54734 = cljs.core.first.call(null,seq54733);
var seq54733__$1 = cljs.core.next.call(null,seq54733);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__54734,seq54733__$1);
});


//# sourceMappingURL=format.js.map?rel=1489402290146