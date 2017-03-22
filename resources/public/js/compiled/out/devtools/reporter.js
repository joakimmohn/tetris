// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___57710 = arguments.length;
var i__45173__auto___57711 = (0);
while(true){
if((i__45173__auto___57711 < len__45172__auto___57710)){
args__45179__auto__.push((arguments[i__45173__auto___57711]));

var G__57712 = (i__45173__auto___57711 + (1));
i__45173__auto___57711 = G__57712;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__57705){
var vec__57706 = p__57705;
var context = cljs.core.nth.call(null,vec__57706,(0),null);
var footer = cljs.core.nth.call(null,vec__57706,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__44097__auto__ = e.message;
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str(" "),cljs.core.str(message)].join('')];
var context_msg = [cljs.core.str("In "),cljs.core.str(devtools.util.get_lib_info.call(null)),cljs.core.str((cljs.core.truth_(context)?[cljs.core.str(", "),cljs.core.str(context),cljs.core.str(".")].join(''):".")),cljs.core.str("\n\n")].join('');
var footer_msg = ((cljs.core.some_QMARK_.call(null,footer))?footer:[cljs.core.str("\n\n"),cljs.core.str("---\n"),cljs.core.str("Please report the issue here: "),cljs.core.str(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = goog.object.get(c,"groupCollapsed");
var log = goog.object.get(c,"log");
var group_end = goog.object.get(c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e57709){var e__$1 = e57709;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq57703){
var G__57704 = cljs.core.first.call(null,seq57703);
var seq57703__$1 = cljs.core.next.call(null,seq57703);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57704,seq57703__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1489402293510