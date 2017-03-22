// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args53785 = [];
var len__45172__auto___53788 = arguments.length;
var i__45173__auto___53789 = (0);
while(true){
if((i__45173__auto___53789 < len__45172__auto___53788)){
args53785.push((arguments[i__45173__auto___53789]));

var G__53790 = (i__45173__auto___53789 + (1));
i__45173__auto___53789 = G__53790;
continue;
} else {
}
break;
}

var G__53787 = args53785.length;
switch (G__53787) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53785.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45179__auto__ = [];
var len__45172__auto___53793 = arguments.length;
var i__45173__auto___53794 = (0);
while(true){
if((i__45173__auto___53794 < len__45172__auto___53793)){
args__45179__auto__.push((arguments[i__45173__auto___53794]));

var G__53795 = (i__45173__auto___53794 + (1));
i__45173__auto___53794 = G__53795;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53792){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53792));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45179__auto__ = [];
var len__45172__auto___53797 = arguments.length;
var i__45173__auto___53798 = (0);
while(true){
if((i__45173__auto___53798 < len__45172__auto___53797)){
args__45179__auto__.push((arguments[i__45173__auto___53798]));

var G__53799 = (i__45173__auto___53798 + (1));
i__45173__auto___53798 = G__53799;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53796){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53796));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53800){
var map__53803 = p__53800;
var map__53803__$1 = ((((!((map__53803 == null)))?((((map__53803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53803):map__53803);
var message = cljs.core.get.call(null,map__53803__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53803__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44097__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44085__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44085__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44085__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__48370__auto___53965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___53965,ch){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___53965,ch){
return (function (state_53934){
var state_val_53935 = (state_53934[(1)]);
if((state_val_53935 === (7))){
var inst_53930 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53936_53966 = state_53934__$1;
(statearr_53936_53966[(2)] = inst_53930);

(statearr_53936_53966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (1))){
var state_53934__$1 = state_53934;
var statearr_53937_53967 = state_53934__$1;
(statearr_53937_53967[(2)] = null);

(statearr_53937_53967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (4))){
var inst_53887 = (state_53934[(7)]);
var inst_53887__$1 = (state_53934[(2)]);
var state_53934__$1 = (function (){var statearr_53938 = state_53934;
(statearr_53938[(7)] = inst_53887__$1);

return statearr_53938;
})();
if(cljs.core.truth_(inst_53887__$1)){
var statearr_53939_53968 = state_53934__$1;
(statearr_53939_53968[(1)] = (5));

} else {
var statearr_53940_53969 = state_53934__$1;
(statearr_53940_53969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (15))){
var inst_53894 = (state_53934[(8)]);
var inst_53909 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53894);
var inst_53910 = cljs.core.first.call(null,inst_53909);
var inst_53911 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53910);
var inst_53912 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_53911)].join('');
var inst_53913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53912);
var state_53934__$1 = state_53934;
var statearr_53941_53970 = state_53934__$1;
(statearr_53941_53970[(2)] = inst_53913);

(statearr_53941_53970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (13))){
var inst_53918 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53942_53971 = state_53934__$1;
(statearr_53942_53971[(2)] = inst_53918);

(statearr_53942_53971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (6))){
var state_53934__$1 = state_53934;
var statearr_53943_53972 = state_53934__$1;
(statearr_53943_53972[(2)] = null);

(statearr_53943_53972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (17))){
var inst_53916 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53944_53973 = state_53934__$1;
(statearr_53944_53973[(2)] = inst_53916);

(statearr_53944_53973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (3))){
var inst_53932 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53934__$1,inst_53932);
} else {
if((state_val_53935 === (12))){
var inst_53893 = (state_53934[(9)]);
var inst_53907 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53893,opts);
var state_53934__$1 = state_53934;
if(cljs.core.truth_(inst_53907)){
var statearr_53945_53974 = state_53934__$1;
(statearr_53945_53974[(1)] = (15));

} else {
var statearr_53946_53975 = state_53934__$1;
(statearr_53946_53975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (2))){
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53934__$1,(4),ch);
} else {
if((state_val_53935 === (11))){
var inst_53894 = (state_53934[(8)]);
var inst_53899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53900 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53894);
var inst_53901 = cljs.core.async.timeout.call(null,(1000));
var inst_53902 = [inst_53900,inst_53901];
var inst_53903 = (new cljs.core.PersistentVector(null,2,(5),inst_53899,inst_53902,null));
var state_53934__$1 = state_53934;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53934__$1,(14),inst_53903);
} else {
if((state_val_53935 === (9))){
var inst_53894 = (state_53934[(8)]);
var inst_53920 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53921 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53894);
var inst_53922 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53921);
var inst_53923 = [cljs.core.str("Not loading: "),cljs.core.str(inst_53922)].join('');
var inst_53924 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53923);
var state_53934__$1 = (function (){var statearr_53947 = state_53934;
(statearr_53947[(10)] = inst_53920);

return statearr_53947;
})();
var statearr_53948_53976 = state_53934__$1;
(statearr_53948_53976[(2)] = inst_53924);

(statearr_53948_53976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (5))){
var inst_53887 = (state_53934[(7)]);
var inst_53889 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53890 = (new cljs.core.PersistentArrayMap(null,2,inst_53889,null));
var inst_53891 = (new cljs.core.PersistentHashSet(null,inst_53890,null));
var inst_53892 = figwheel.client.focus_msgs.call(null,inst_53891,inst_53887);
var inst_53893 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53892);
var inst_53894 = cljs.core.first.call(null,inst_53892);
var inst_53895 = figwheel.client.autoload_QMARK_.call(null);
var state_53934__$1 = (function (){var statearr_53949 = state_53934;
(statearr_53949[(8)] = inst_53894);

(statearr_53949[(9)] = inst_53893);

return statearr_53949;
})();
if(cljs.core.truth_(inst_53895)){
var statearr_53950_53977 = state_53934__$1;
(statearr_53950_53977[(1)] = (8));

} else {
var statearr_53951_53978 = state_53934__$1;
(statearr_53951_53978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (14))){
var inst_53905 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53952_53979 = state_53934__$1;
(statearr_53952_53979[(2)] = inst_53905);

(statearr_53952_53979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (16))){
var state_53934__$1 = state_53934;
var statearr_53953_53980 = state_53934__$1;
(statearr_53953_53980[(2)] = null);

(statearr_53953_53980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (10))){
var inst_53926 = (state_53934[(2)]);
var state_53934__$1 = (function (){var statearr_53954 = state_53934;
(statearr_53954[(11)] = inst_53926);

return statearr_53954;
})();
var statearr_53955_53981 = state_53934__$1;
(statearr_53955_53981[(2)] = null);

(statearr_53955_53981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (8))){
var inst_53893 = (state_53934[(9)]);
var inst_53897 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53893,opts);
var state_53934__$1 = state_53934;
if(cljs.core.truth_(inst_53897)){
var statearr_53956_53982 = state_53934__$1;
(statearr_53956_53982[(1)] = (11));

} else {
var statearr_53957_53983 = state_53934__$1;
(statearr_53957_53983[(1)] = (12));

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
});})(c__48370__auto___53965,ch))
;
return ((function (switch__48258__auto__,c__48370__auto___53965,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48259__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48259__auto____0 = (function (){
var statearr_53961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53961[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48259__auto__);

(statearr_53961[(1)] = (1));

return statearr_53961;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48259__auto____1 = (function (state_53934){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_53934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e53962){if((e53962 instanceof Object)){
var ex__48262__auto__ = e53962;
var statearr_53963_53984 = state_53934;
(statearr_53963_53984[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53985 = state_53934;
state_53934 = G__53985;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48259__auto__ = function(state_53934){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48259__auto____1.call(this,state_53934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48259__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48259__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___53965,ch))
})();
var state__48372__auto__ = (function (){var statearr_53964 = f__48371__auto__.call(null);
(statearr_53964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___53965);

return statearr_53964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___53965,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53986_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53986_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_53989 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53989){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e53988){if((e53988 instanceof Error)){
var e = e53988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53989], null));
} else {
var e = e53988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_53989))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53990){
var map__53999 = p__53990;
var map__53999__$1 = ((((!((map__53999 == null)))?((((map__53999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53999):map__53999);
var opts = map__53999__$1;
var build_id = cljs.core.get.call(null,map__53999__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53999,map__53999__$1,opts,build_id){
return (function (p__54001){
var vec__54002 = p__54001;
var seq__54003 = cljs.core.seq.call(null,vec__54002);
var first__54004 = cljs.core.first.call(null,seq__54003);
var seq__54003__$1 = cljs.core.next.call(null,seq__54003);
var map__54005 = first__54004;
var map__54005__$1 = ((((!((map__54005 == null)))?((((map__54005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54005):map__54005);
var msg = map__54005__$1;
var msg_name = cljs.core.get.call(null,map__54005__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54003__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54002,seq__54003,first__54004,seq__54003__$1,map__54005,map__54005__$1,msg,msg_name,_,map__53999,map__53999__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54002,seq__54003,first__54004,seq__54003__$1,map__54005,map__54005__$1,msg,msg_name,_,map__53999,map__53999__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53999,map__53999__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54013){
var vec__54014 = p__54013;
var seq__54015 = cljs.core.seq.call(null,vec__54014);
var first__54016 = cljs.core.first.call(null,seq__54015);
var seq__54015__$1 = cljs.core.next.call(null,seq__54015);
var map__54017 = first__54016;
var map__54017__$1 = ((((!((map__54017 == null)))?((((map__54017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54017):map__54017);
var msg = map__54017__$1;
var msg_name = cljs.core.get.call(null,map__54017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54015__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54019){
var map__54031 = p__54019;
var map__54031__$1 = ((((!((map__54031 == null)))?((((map__54031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54031):map__54031);
var on_compile_warning = cljs.core.get.call(null,map__54031__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54031__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54031,map__54031__$1,on_compile_warning,on_compile_fail){
return (function (p__54033){
var vec__54034 = p__54033;
var seq__54035 = cljs.core.seq.call(null,vec__54034);
var first__54036 = cljs.core.first.call(null,seq__54035);
var seq__54035__$1 = cljs.core.next.call(null,seq__54035);
var map__54037 = first__54036;
var map__54037__$1 = ((((!((map__54037 == null)))?((((map__54037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54037):map__54037);
var msg = map__54037__$1;
var msg_name = cljs.core.get.call(null,map__54037__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54035__$1;
var pred__54039 = cljs.core._EQ_;
var expr__54040 = msg_name;
if(cljs.core.truth_(pred__54039.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54040))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54039.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54040))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54031,map__54031__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__,msg_hist,msg_names,msg){
return (function (state_54268){
var state_val_54269 = (state_54268[(1)]);
if((state_val_54269 === (7))){
var inst_54188 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54188)){
var statearr_54270_54320 = state_54268__$1;
(statearr_54270_54320[(1)] = (8));

} else {
var statearr_54271_54321 = state_54268__$1;
(statearr_54271_54321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (20))){
var inst_54262 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54272_54322 = state_54268__$1;
(statearr_54272_54322[(2)] = inst_54262);

(statearr_54272_54322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (27))){
var inst_54258 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54273_54323 = state_54268__$1;
(statearr_54273_54323[(2)] = inst_54258);

(statearr_54273_54323[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (1))){
var inst_54181 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54181)){
var statearr_54274_54324 = state_54268__$1;
(statearr_54274_54324[(1)] = (2));

} else {
var statearr_54275_54325 = state_54268__$1;
(statearr_54275_54325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (24))){
var inst_54260 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54276_54326 = state_54268__$1;
(statearr_54276_54326[(2)] = inst_54260);

(statearr_54276_54326[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (4))){
var inst_54266 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54268__$1,inst_54266);
} else {
if((state_val_54269 === (15))){
var inst_54264 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54277_54327 = state_54268__$1;
(statearr_54277_54327[(2)] = inst_54264);

(statearr_54277_54327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (21))){
var inst_54217 = (state_54268[(2)]);
var inst_54218 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54219 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54218);
var state_54268__$1 = (function (){var statearr_54278 = state_54268;
(statearr_54278[(7)] = inst_54217);

return statearr_54278;
})();
var statearr_54279_54328 = state_54268__$1;
(statearr_54279_54328[(2)] = inst_54219);

(statearr_54279_54328[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (31))){
var inst_54247 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54247)){
var statearr_54280_54329 = state_54268__$1;
(statearr_54280_54329[(1)] = (34));

} else {
var statearr_54281_54330 = state_54268__$1;
(statearr_54281_54330[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (32))){
var inst_54256 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54282_54331 = state_54268__$1;
(statearr_54282_54331[(2)] = inst_54256);

(statearr_54282_54331[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (33))){
var inst_54243 = (state_54268[(2)]);
var inst_54244 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54245 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54244);
var state_54268__$1 = (function (){var statearr_54283 = state_54268;
(statearr_54283[(8)] = inst_54243);

return statearr_54283;
})();
var statearr_54284_54332 = state_54268__$1;
(statearr_54284_54332[(2)] = inst_54245);

(statearr_54284_54332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (13))){
var inst_54202 = figwheel.client.heads_up.clear.call(null);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(16),inst_54202);
} else {
if((state_val_54269 === (22))){
var inst_54223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54224 = figwheel.client.heads_up.append_warning_message.call(null,inst_54223);
var state_54268__$1 = state_54268;
var statearr_54285_54333 = state_54268__$1;
(statearr_54285_54333[(2)] = inst_54224);

(statearr_54285_54333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (36))){
var inst_54254 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54286_54334 = state_54268__$1;
(statearr_54286_54334[(2)] = inst_54254);

(statearr_54286_54334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (29))){
var inst_54234 = (state_54268[(2)]);
var inst_54235 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54236 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54235);
var state_54268__$1 = (function (){var statearr_54287 = state_54268;
(statearr_54287[(9)] = inst_54234);

return statearr_54287;
})();
var statearr_54288_54335 = state_54268__$1;
(statearr_54288_54335[(2)] = inst_54236);

(statearr_54288_54335[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (6))){
var inst_54183 = (state_54268[(10)]);
var state_54268__$1 = state_54268;
var statearr_54289_54336 = state_54268__$1;
(statearr_54289_54336[(2)] = inst_54183);

(statearr_54289_54336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (28))){
var inst_54230 = (state_54268[(2)]);
var inst_54231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54232 = figwheel.client.heads_up.display_warning.call(null,inst_54231);
var state_54268__$1 = (function (){var statearr_54290 = state_54268;
(statearr_54290[(11)] = inst_54230);

return statearr_54290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(29),inst_54232);
} else {
if((state_val_54269 === (25))){
var inst_54228 = figwheel.client.heads_up.clear.call(null);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(28),inst_54228);
} else {
if((state_val_54269 === (34))){
var inst_54249 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(37),inst_54249);
} else {
if((state_val_54269 === (17))){
var inst_54208 = (state_54268[(2)]);
var inst_54209 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54210 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54209);
var state_54268__$1 = (function (){var statearr_54291 = state_54268;
(statearr_54291[(12)] = inst_54208);

return statearr_54291;
})();
var statearr_54292_54337 = state_54268__$1;
(statearr_54292_54337[(2)] = inst_54210);

(statearr_54292_54337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (3))){
var inst_54200 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54200)){
var statearr_54293_54338 = state_54268__$1;
(statearr_54293_54338[(1)] = (13));

} else {
var statearr_54294_54339 = state_54268__$1;
(statearr_54294_54339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (12))){
var inst_54196 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54295_54340 = state_54268__$1;
(statearr_54295_54340[(2)] = inst_54196);

(statearr_54295_54340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (2))){
var inst_54183 = (state_54268[(10)]);
var inst_54183__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54268__$1 = (function (){var statearr_54296 = state_54268;
(statearr_54296[(10)] = inst_54183__$1);

return statearr_54296;
})();
if(cljs.core.truth_(inst_54183__$1)){
var statearr_54297_54341 = state_54268__$1;
(statearr_54297_54341[(1)] = (5));

} else {
var statearr_54298_54342 = state_54268__$1;
(statearr_54298_54342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (23))){
var inst_54226 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54226)){
var statearr_54299_54343 = state_54268__$1;
(statearr_54299_54343[(1)] = (25));

} else {
var statearr_54300_54344 = state_54268__$1;
(statearr_54300_54344[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (35))){
var state_54268__$1 = state_54268;
var statearr_54301_54345 = state_54268__$1;
(statearr_54301_54345[(2)] = null);

(statearr_54301_54345[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (19))){
var inst_54221 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54221)){
var statearr_54302_54346 = state_54268__$1;
(statearr_54302_54346[(1)] = (22));

} else {
var statearr_54303_54347 = state_54268__$1;
(statearr_54303_54347[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (11))){
var inst_54192 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54304_54348 = state_54268__$1;
(statearr_54304_54348[(2)] = inst_54192);

(statearr_54304_54348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (9))){
var inst_54194 = figwheel.client.heads_up.clear.call(null);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(12),inst_54194);
} else {
if((state_val_54269 === (5))){
var inst_54185 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54268__$1 = state_54268;
var statearr_54305_54349 = state_54268__$1;
(statearr_54305_54349[(2)] = inst_54185);

(statearr_54305_54349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (14))){
var inst_54212 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54212)){
var statearr_54306_54350 = state_54268__$1;
(statearr_54306_54350[(1)] = (18));

} else {
var statearr_54307_54351 = state_54268__$1;
(statearr_54307_54351[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (26))){
var inst_54238 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54268__$1 = state_54268;
if(cljs.core.truth_(inst_54238)){
var statearr_54308_54352 = state_54268__$1;
(statearr_54308_54352[(1)] = (30));

} else {
var statearr_54309_54353 = state_54268__$1;
(statearr_54309_54353[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (16))){
var inst_54204 = (state_54268[(2)]);
var inst_54205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54206 = figwheel.client.heads_up.display_exception.call(null,inst_54205);
var state_54268__$1 = (function (){var statearr_54310 = state_54268;
(statearr_54310[(13)] = inst_54204);

return statearr_54310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(17),inst_54206);
} else {
if((state_val_54269 === (30))){
var inst_54240 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54241 = figwheel.client.heads_up.display_warning.call(null,inst_54240);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(33),inst_54241);
} else {
if((state_val_54269 === (10))){
var inst_54198 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54311_54354 = state_54268__$1;
(statearr_54311_54354[(2)] = inst_54198);

(statearr_54311_54354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (18))){
var inst_54214 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54215 = figwheel.client.heads_up.display_exception.call(null,inst_54214);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(21),inst_54215);
} else {
if((state_val_54269 === (37))){
var inst_54251 = (state_54268[(2)]);
var state_54268__$1 = state_54268;
var statearr_54312_54355 = state_54268__$1;
(statearr_54312_54355[(2)] = inst_54251);

(statearr_54312_54355[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54269 === (8))){
var inst_54190 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54268__$1 = state_54268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54268__$1,(11),inst_54190);
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
});})(c__48370__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48258__auto__,c__48370__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto____0 = (function (){
var statearr_54316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54316[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto__);

(statearr_54316[(1)] = (1));

return statearr_54316;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto____1 = (function (state_54268){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_54268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e54317){if((e54317 instanceof Object)){
var ex__48262__auto__ = e54317;
var statearr_54318_54356 = state_54268;
(statearr_54318_54356[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54357 = state_54268;
state_54268 = G__54357;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto__ = function(state_54268){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto____1.call(this,state_54268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__,msg_hist,msg_names,msg))
})();
var state__48372__auto__ = (function (){var statearr_54319 = f__48371__auto__.call(null);
(statearr_54319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_54319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__,msg_hist,msg_names,msg))
);

return c__48370__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48370__auto___54420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___54420,ch){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___54420,ch){
return (function (state_54403){
var state_val_54404 = (state_54403[(1)]);
if((state_val_54404 === (1))){
var state_54403__$1 = state_54403;
var statearr_54405_54421 = state_54403__$1;
(statearr_54405_54421[(2)] = null);

(statearr_54405_54421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54404 === (2))){
var state_54403__$1 = state_54403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54403__$1,(4),ch);
} else {
if((state_val_54404 === (3))){
var inst_54401 = (state_54403[(2)]);
var state_54403__$1 = state_54403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54403__$1,inst_54401);
} else {
if((state_val_54404 === (4))){
var inst_54391 = (state_54403[(7)]);
var inst_54391__$1 = (state_54403[(2)]);
var state_54403__$1 = (function (){var statearr_54406 = state_54403;
(statearr_54406[(7)] = inst_54391__$1);

return statearr_54406;
})();
if(cljs.core.truth_(inst_54391__$1)){
var statearr_54407_54422 = state_54403__$1;
(statearr_54407_54422[(1)] = (5));

} else {
var statearr_54408_54423 = state_54403__$1;
(statearr_54408_54423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54404 === (5))){
var inst_54391 = (state_54403[(7)]);
var inst_54393 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54391);
var state_54403__$1 = state_54403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54403__$1,(8),inst_54393);
} else {
if((state_val_54404 === (6))){
var state_54403__$1 = state_54403;
var statearr_54409_54424 = state_54403__$1;
(statearr_54409_54424[(2)] = null);

(statearr_54409_54424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54404 === (7))){
var inst_54399 = (state_54403[(2)]);
var state_54403__$1 = state_54403;
var statearr_54410_54425 = state_54403__$1;
(statearr_54410_54425[(2)] = inst_54399);

(statearr_54410_54425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54404 === (8))){
var inst_54395 = (state_54403[(2)]);
var state_54403__$1 = (function (){var statearr_54411 = state_54403;
(statearr_54411[(8)] = inst_54395);

return statearr_54411;
})();
var statearr_54412_54426 = state_54403__$1;
(statearr_54412_54426[(2)] = null);

(statearr_54412_54426[(1)] = (2));


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
});})(c__48370__auto___54420,ch))
;
return ((function (switch__48258__auto__,c__48370__auto___54420,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48259__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48259__auto____0 = (function (){
var statearr_54416 = [null,null,null,null,null,null,null,null,null];
(statearr_54416[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48259__auto__);

(statearr_54416[(1)] = (1));

return statearr_54416;
});
var figwheel$client$heads_up_plugin_$_state_machine__48259__auto____1 = (function (state_54403){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_54403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e54417){if((e54417 instanceof Object)){
var ex__48262__auto__ = e54417;
var statearr_54418_54427 = state_54403;
(statearr_54418_54427[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54428 = state_54403;
state_54403 = G__54428;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48259__auto__ = function(state_54403){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48259__auto____1.call(this,state_54403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48259__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48259__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___54420,ch))
})();
var state__48372__auto__ = (function (){var statearr_54419 = f__48371__auto__.call(null);
(statearr_54419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___54420);

return statearr_54419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___54420,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__){
return (function (state_54449){
var state_val_54450 = (state_54449[(1)]);
if((state_val_54450 === (1))){
var inst_54444 = cljs.core.async.timeout.call(null,(3000));
var state_54449__$1 = state_54449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54449__$1,(2),inst_54444);
} else {
if((state_val_54450 === (2))){
var inst_54446 = (state_54449[(2)]);
var inst_54447 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54449__$1 = (function (){var statearr_54451 = state_54449;
(statearr_54451[(7)] = inst_54446);

return statearr_54451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54449__$1,inst_54447);
} else {
return null;
}
}
});})(c__48370__auto__))
;
return ((function (switch__48258__auto__,c__48370__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48259__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48259__auto____0 = (function (){
var statearr_54455 = [null,null,null,null,null,null,null,null];
(statearr_54455[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48259__auto__);

(statearr_54455[(1)] = (1));

return statearr_54455;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48259__auto____1 = (function (state_54449){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_54449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e54456){if((e54456 instanceof Object)){
var ex__48262__auto__ = e54456;
var statearr_54457_54459 = state_54449;
(statearr_54457_54459[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54460 = state_54449;
state_54449 = G__54460;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48259__auto__ = function(state_54449){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48259__auto____1.call(this,state_54449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48259__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48259__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__))
})();
var state__48372__auto__ = (function (){var statearr_54458 = f__48371__auto__.call(null);
(statearr_54458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_54458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__))
);

return c__48370__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54483){
var state_val_54484 = (state_54483[(1)]);
if((state_val_54484 === (1))){
var inst_54477 = cljs.core.async.timeout.call(null,(2000));
var state_54483__$1 = state_54483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54483__$1,(2),inst_54477);
} else {
if((state_val_54484 === (2))){
var inst_54479 = (state_54483[(2)]);
var inst_54480 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54481 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54480);
var state_54483__$1 = (function (){var statearr_54485 = state_54483;
(statearr_54485[(7)] = inst_54479);

return statearr_54485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54483__$1,inst_54481);
} else {
return null;
}
}
});})(c__48370__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__48258__auto__,c__48370__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto____0 = (function (){
var statearr_54489 = [null,null,null,null,null,null,null,null];
(statearr_54489[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto__);

(statearr_54489[(1)] = (1));

return statearr_54489;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto____1 = (function (state_54483){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_54483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e54490){if((e54490 instanceof Object)){
var ex__48262__auto__ = e54490;
var statearr_54491_54493 = state_54483;
(statearr_54491_54493[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54494 = state_54483;
state_54483 = G__54494;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto__ = function(state_54483){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto____1.call(this,state_54483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__,figwheel_version,temp__4657__auto__))
})();
var state__48372__auto__ = (function (){var statearr_54492 = f__48371__auto__.call(null);
(statearr_54492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_54492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__,figwheel_version,temp__4657__auto__))
);

return c__48370__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54495){
var map__54499 = p__54495;
var map__54499__$1 = ((((!((map__54499 == null)))?((((map__54499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54499):map__54499);
var file = cljs.core.get.call(null,map__54499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54499__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54499__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54501 = "";
var G__54501__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__54501),cljs.core.str("file "),cljs.core.str(file)].join(''):G__54501);
var G__54501__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__54501__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54501__$1);
if(cljs.core.truth_((function (){var and__44085__auto__ = line;
if(cljs.core.truth_(and__44085__auto__)){
return column;
} else {
return and__44085__auto__;
}
})())){
return [cljs.core.str(G__54501__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__54501__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54502){
var map__54509 = p__54502;
var map__54509__$1 = ((((!((map__54509 == null)))?((((map__54509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54509):map__54509);
var ed = map__54509__$1;
var formatted_exception = cljs.core.get.call(null,map__54509__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54509__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54509__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54511_54515 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54512_54516 = null;
var count__54513_54517 = (0);
var i__54514_54518 = (0);
while(true){
if((i__54514_54518 < count__54513_54517)){
var msg_54519 = cljs.core._nth.call(null,chunk__54512_54516,i__54514_54518);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54519);

var G__54520 = seq__54511_54515;
var G__54521 = chunk__54512_54516;
var G__54522 = count__54513_54517;
var G__54523 = (i__54514_54518 + (1));
seq__54511_54515 = G__54520;
chunk__54512_54516 = G__54521;
count__54513_54517 = G__54522;
i__54514_54518 = G__54523;
continue;
} else {
var temp__4657__auto___54524 = cljs.core.seq.call(null,seq__54511_54515);
if(temp__4657__auto___54524){
var seq__54511_54525__$1 = temp__4657__auto___54524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54511_54525__$1)){
var c__44908__auto___54526 = cljs.core.chunk_first.call(null,seq__54511_54525__$1);
var G__54527 = cljs.core.chunk_rest.call(null,seq__54511_54525__$1);
var G__54528 = c__44908__auto___54526;
var G__54529 = cljs.core.count.call(null,c__44908__auto___54526);
var G__54530 = (0);
seq__54511_54515 = G__54527;
chunk__54512_54516 = G__54528;
count__54513_54517 = G__54529;
i__54514_54518 = G__54530;
continue;
} else {
var msg_54531 = cljs.core.first.call(null,seq__54511_54525__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54531);

var G__54532 = cljs.core.next.call(null,seq__54511_54525__$1);
var G__54533 = null;
var G__54534 = (0);
var G__54535 = (0);
seq__54511_54515 = G__54532;
chunk__54512_54516 = G__54533;
count__54513_54517 = G__54534;
i__54514_54518 = G__54535;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54536){
var map__54539 = p__54536;
var map__54539__$1 = ((((!((map__54539 == null)))?((((map__54539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54539):map__54539);
var w = map__54539__$1;
var message = cljs.core.get.call(null,map__54539__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44085__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44085__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44085__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__54551 = cljs.core.seq.call(null,plugins);
var chunk__54552 = null;
var count__54553 = (0);
var i__54554 = (0);
while(true){
if((i__54554 < count__54553)){
var vec__54555 = cljs.core._nth.call(null,chunk__54552,i__54554);
var k = cljs.core.nth.call(null,vec__54555,(0),null);
var plugin = cljs.core.nth.call(null,vec__54555,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54561 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54551,chunk__54552,count__54553,i__54554,pl_54561,vec__54555,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54561.call(null,msg_hist);
});})(seq__54551,chunk__54552,count__54553,i__54554,pl_54561,vec__54555,k,plugin))
);
} else {
}

var G__54562 = seq__54551;
var G__54563 = chunk__54552;
var G__54564 = count__54553;
var G__54565 = (i__54554 + (1));
seq__54551 = G__54562;
chunk__54552 = G__54563;
count__54553 = G__54564;
i__54554 = G__54565;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54551);
if(temp__4657__auto__){
var seq__54551__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54551__$1)){
var c__44908__auto__ = cljs.core.chunk_first.call(null,seq__54551__$1);
var G__54566 = cljs.core.chunk_rest.call(null,seq__54551__$1);
var G__54567 = c__44908__auto__;
var G__54568 = cljs.core.count.call(null,c__44908__auto__);
var G__54569 = (0);
seq__54551 = G__54566;
chunk__54552 = G__54567;
count__54553 = G__54568;
i__54554 = G__54569;
continue;
} else {
var vec__54558 = cljs.core.first.call(null,seq__54551__$1);
var k = cljs.core.nth.call(null,vec__54558,(0),null);
var plugin = cljs.core.nth.call(null,vec__54558,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54570 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54551,chunk__54552,count__54553,i__54554,pl_54570,vec__54558,k,plugin,seq__54551__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54570.call(null,msg_hist);
});})(seq__54551,chunk__54552,count__54553,i__54554,pl_54570,vec__54558,k,plugin,seq__54551__$1,temp__4657__auto__))
);
} else {
}

var G__54571 = cljs.core.next.call(null,seq__54551__$1);
var G__54572 = null;
var G__54573 = (0);
var G__54574 = (0);
seq__54551 = G__54571;
chunk__54552 = G__54572;
count__54553 = G__54573;
i__54554 = G__54574;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args54575 = [];
var len__45172__auto___54582 = arguments.length;
var i__45173__auto___54583 = (0);
while(true){
if((i__45173__auto___54583 < len__45172__auto___54582)){
args54575.push((arguments[i__45173__auto___54583]));

var G__54584 = (i__45173__auto___54583 + (1));
i__45173__auto___54583 = G__54584;
continue;
} else {
}
break;
}

var G__54577 = args54575.length;
switch (G__54577) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54575.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__54578_54586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54579_54587 = null;
var count__54580_54588 = (0);
var i__54581_54589 = (0);
while(true){
if((i__54581_54589 < count__54580_54588)){
var msg_54590 = cljs.core._nth.call(null,chunk__54579_54587,i__54581_54589);
figwheel.client.socket.handle_incoming_message.call(null,msg_54590);

var G__54591 = seq__54578_54586;
var G__54592 = chunk__54579_54587;
var G__54593 = count__54580_54588;
var G__54594 = (i__54581_54589 + (1));
seq__54578_54586 = G__54591;
chunk__54579_54587 = G__54592;
count__54580_54588 = G__54593;
i__54581_54589 = G__54594;
continue;
} else {
var temp__4657__auto___54595 = cljs.core.seq.call(null,seq__54578_54586);
if(temp__4657__auto___54595){
var seq__54578_54596__$1 = temp__4657__auto___54595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54578_54596__$1)){
var c__44908__auto___54597 = cljs.core.chunk_first.call(null,seq__54578_54596__$1);
var G__54598 = cljs.core.chunk_rest.call(null,seq__54578_54596__$1);
var G__54599 = c__44908__auto___54597;
var G__54600 = cljs.core.count.call(null,c__44908__auto___54597);
var G__54601 = (0);
seq__54578_54586 = G__54598;
chunk__54579_54587 = G__54599;
count__54580_54588 = G__54600;
i__54581_54589 = G__54601;
continue;
} else {
var msg_54602 = cljs.core.first.call(null,seq__54578_54596__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54602);

var G__54603 = cljs.core.next.call(null,seq__54578_54596__$1);
var G__54604 = null;
var G__54605 = (0);
var G__54606 = (0);
seq__54578_54586 = G__54603;
chunk__54579_54587 = G__54604;
count__54580_54588 = G__54605;
i__54581_54589 = G__54606;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45179__auto__ = [];
var len__45172__auto___54611 = arguments.length;
var i__45173__auto___54612 = (0);
while(true){
if((i__45173__auto___54612 < len__45172__auto___54611)){
args__45179__auto__.push((arguments[i__45173__auto___54612]));

var G__54613 = (i__45173__auto___54612 + (1));
i__45173__auto___54612 = G__54613;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((0) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45180__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54608){
var map__54609 = p__54608;
var map__54609__$1 = ((((!((map__54609 == null)))?((((map__54609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54609):map__54609);
var opts = map__54609__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54607){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54607));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54615){if((e54615 instanceof Error)){
var e = e54615;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54615;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__54619){
var map__54620 = p__54619;
var map__54620__$1 = ((((!((map__54620 == null)))?((((map__54620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54620):map__54620);
var msg_name = cljs.core.get.call(null,map__54620__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489402289888