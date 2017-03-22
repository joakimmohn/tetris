// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args48415 = [];
var len__45172__auto___48421 = arguments.length;
var i__45173__auto___48422 = (0);
while(true){
if((i__45173__auto___48422 < len__45172__auto___48421)){
args48415.push((arguments[i__45173__auto___48422]));

var G__48423 = (i__45173__auto___48422 + (1));
i__45173__auto___48422 = G__48423;
continue;
} else {
}
break;
}

var G__48417 = args48415.length;
switch (G__48417) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48415.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48418 = (function (f,blockable,meta48419){
this.f = f;
this.blockable = blockable;
this.meta48419 = meta48419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48420,meta48419__$1){
var self__ = this;
var _48420__$1 = this;
return (new cljs.core.async.t_cljs$core$async48418(self__.f,self__.blockable,meta48419__$1));
});

cljs.core.async.t_cljs$core$async48418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48420){
var self__ = this;
var _48420__$1 = this;
return self__.meta48419;
});

cljs.core.async.t_cljs$core$async48418.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48419","meta48419",-807047474,null)], null);
});

cljs.core.async.t_cljs$core$async48418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48418";

cljs.core.async.t_cljs$core$async48418.cljs$lang$ctorPrWriter = (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async48418");
});

cljs.core.async.__GT_t_cljs$core$async48418 = (function cljs$core$async$__GT_t_cljs$core$async48418(f__$1,blockable__$1,meta48419){
return (new cljs.core.async.t_cljs$core$async48418(f__$1,blockable__$1,meta48419));
});

}

return (new cljs.core.async.t_cljs$core$async48418(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args48427 = [];
var len__45172__auto___48430 = arguments.length;
var i__45173__auto___48431 = (0);
while(true){
if((i__45173__auto___48431 < len__45172__auto___48430)){
args48427.push((arguments[i__45173__auto___48431]));

var G__48432 = (i__45173__auto___48431 + (1));
i__45173__auto___48431 = G__48432;
continue;
} else {
}
break;
}

var G__48429 = args48427.length;
switch (G__48429) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48427.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args48434 = [];
var len__45172__auto___48437 = arguments.length;
var i__45173__auto___48438 = (0);
while(true){
if((i__45173__auto___48438 < len__45172__auto___48437)){
args48434.push((arguments[i__45173__auto___48438]));

var G__48439 = (i__45173__auto___48438 + (1));
i__45173__auto___48438 = G__48439;
continue;
} else {
}
break;
}

var G__48436 = args48434.length;
switch (G__48436) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48434.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args48441 = [];
var len__45172__auto___48444 = arguments.length;
var i__45173__auto___48445 = (0);
while(true){
if((i__45173__auto___48445 < len__45172__auto___48444)){
args48441.push((arguments[i__45173__auto___48445]));

var G__48446 = (i__45173__auto___48445 + (1));
i__45173__auto___48445 = G__48446;
continue;
} else {
}
break;
}

var G__48443 = args48441.length;
switch (G__48443) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48441.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48448 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48448);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48448,ret){
return (function (){
return fn1.call(null,val_48448);
});})(val_48448,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args48449 = [];
var len__45172__auto___48452 = arguments.length;
var i__45173__auto___48453 = (0);
while(true){
if((i__45173__auto___48453 < len__45172__auto___48452)){
args48449.push((arguments[i__45173__auto___48453]));

var G__48454 = (i__45173__auto___48453 + (1));
i__45173__auto___48453 = G__48454;
continue;
} else {
}
break;
}

var G__48451 = args48449.length;
switch (G__48451) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48449.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__45012__auto___48456 = n;
var x_48457 = (0);
while(true){
if((x_48457 < n__45012__auto___48456)){
(a[x_48457] = (0));

var G__48458 = (x_48457 + (1));
x_48457 = G__48458;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__48459 = (i + (1));
i = G__48459;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48463 = (function (alt_flag,flag,meta48464){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta48464 = meta48464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48465,meta48464__$1){
var self__ = this;
var _48465__$1 = this;
return (new cljs.core.async.t_cljs$core$async48463(self__.alt_flag,self__.flag,meta48464__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48465){
var self__ = this;
var _48465__$1 = this;
return self__.meta48464;
});})(flag))
;

cljs.core.async.t_cljs$core$async48463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48463.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48464","meta48464",736616007,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48463";

cljs.core.async.t_cljs$core$async48463.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async48463");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48463 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48463(alt_flag__$1,flag__$1,meta48464){
return (new cljs.core.async.t_cljs$core$async48463(alt_flag__$1,flag__$1,meta48464));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48463(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48469 = (function (alt_handler,flag,cb,meta48470){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta48470 = meta48470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48471,meta48470__$1){
var self__ = this;
var _48471__$1 = this;
return (new cljs.core.async.t_cljs$core$async48469(self__.alt_handler,self__.flag,self__.cb,meta48470__$1));
});

cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48471){
var self__ = this;
var _48471__$1 = this;
return self__.meta48470;
});

cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48470","meta48470",-1933323195,null)], null);
});

cljs.core.async.t_cljs$core$async48469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48469";

cljs.core.async.t_cljs$core$async48469.cljs$lang$ctorPrWriter = (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async48469");
});

cljs.core.async.__GT_t_cljs$core$async48469 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48469(alt_handler__$1,flag__$1,cb__$1,meta48470){
return (new cljs.core.async.t_cljs$core$async48469(alt_handler__$1,flag__$1,cb__$1,meta48470));
});

}

return (new cljs.core.async.t_cljs$core$async48469(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48472_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48472_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48473_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48473_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44097__auto__ = wport;
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48474 = (i + (1));
i = G__48474;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44097__auto__ = ret;
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44085__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44085__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44085__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___48480 = arguments.length;
var i__45173__auto___48481 = (0);
while(true){
if((i__45173__auto___48481 < len__45172__auto___48480)){
args__45179__auto__.push((arguments[i__45173__auto___48481]));

var G__48482 = (i__45173__auto___48481 + (1));
i__45173__auto___48481 = G__48482;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((1) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45180__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48477){
var map__48478 = p__48477;
var map__48478__$1 = ((((!((map__48478 == null)))?((((map__48478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48478):map__48478);
var opts = map__48478__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48475){
var G__48476 = cljs.core.first.call(null,seq48475);
var seq48475__$1 = cljs.core.next.call(null,seq48475);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48476,seq48475__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args48483 = [];
var len__45172__auto___48533 = arguments.length;
var i__45173__auto___48534 = (0);
while(true){
if((i__45173__auto___48534 < len__45172__auto___48533)){
args48483.push((arguments[i__45173__auto___48534]));

var G__48535 = (i__45173__auto___48534 + (1));
i__45173__auto___48534 = G__48535;
continue;
} else {
}
break;
}

var G__48485 = args48483.length;
switch (G__48485) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48483.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48370__auto___48537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___48537){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___48537){
return (function (state_48509){
var state_val_48510 = (state_48509[(1)]);
if((state_val_48510 === (7))){
var inst_48505 = (state_48509[(2)]);
var state_48509__$1 = state_48509;
var statearr_48511_48538 = state_48509__$1;
(statearr_48511_48538[(2)] = inst_48505);

(statearr_48511_48538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (1))){
var state_48509__$1 = state_48509;
var statearr_48512_48539 = state_48509__$1;
(statearr_48512_48539[(2)] = null);

(statearr_48512_48539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (4))){
var inst_48488 = (state_48509[(7)]);
var inst_48488__$1 = (state_48509[(2)]);
var inst_48489 = (inst_48488__$1 == null);
var state_48509__$1 = (function (){var statearr_48513 = state_48509;
(statearr_48513[(7)] = inst_48488__$1);

return statearr_48513;
})();
if(cljs.core.truth_(inst_48489)){
var statearr_48514_48540 = state_48509__$1;
(statearr_48514_48540[(1)] = (5));

} else {
var statearr_48515_48541 = state_48509__$1;
(statearr_48515_48541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (13))){
var state_48509__$1 = state_48509;
var statearr_48516_48542 = state_48509__$1;
(statearr_48516_48542[(2)] = null);

(statearr_48516_48542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (6))){
var inst_48488 = (state_48509[(7)]);
var state_48509__$1 = state_48509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48509__$1,(11),to,inst_48488);
} else {
if((state_val_48510 === (3))){
var inst_48507 = (state_48509[(2)]);
var state_48509__$1 = state_48509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48509__$1,inst_48507);
} else {
if((state_val_48510 === (12))){
var state_48509__$1 = state_48509;
var statearr_48517_48543 = state_48509__$1;
(statearr_48517_48543[(2)] = null);

(statearr_48517_48543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (2))){
var state_48509__$1 = state_48509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48509__$1,(4),from);
} else {
if((state_val_48510 === (11))){
var inst_48498 = (state_48509[(2)]);
var state_48509__$1 = state_48509;
if(cljs.core.truth_(inst_48498)){
var statearr_48518_48544 = state_48509__$1;
(statearr_48518_48544[(1)] = (12));

} else {
var statearr_48519_48545 = state_48509__$1;
(statearr_48519_48545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (9))){
var state_48509__$1 = state_48509;
var statearr_48520_48546 = state_48509__$1;
(statearr_48520_48546[(2)] = null);

(statearr_48520_48546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (5))){
var state_48509__$1 = state_48509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48521_48547 = state_48509__$1;
(statearr_48521_48547[(1)] = (8));

} else {
var statearr_48522_48548 = state_48509__$1;
(statearr_48522_48548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (14))){
var inst_48503 = (state_48509[(2)]);
var state_48509__$1 = state_48509;
var statearr_48523_48549 = state_48509__$1;
(statearr_48523_48549[(2)] = inst_48503);

(statearr_48523_48549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (10))){
var inst_48495 = (state_48509[(2)]);
var state_48509__$1 = state_48509;
var statearr_48524_48550 = state_48509__$1;
(statearr_48524_48550[(2)] = inst_48495);

(statearr_48524_48550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48510 === (8))){
var inst_48492 = cljs.core.async.close_BANG_.call(null,to);
var state_48509__$1 = state_48509;
var statearr_48525_48551 = state_48509__$1;
(statearr_48525_48551[(2)] = inst_48492);

(statearr_48525_48551[(1)] = (10));


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
});})(c__48370__auto___48537))
;
return ((function (switch__48258__auto__,c__48370__auto___48537){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_48529 = [null,null,null,null,null,null,null,null];
(statearr_48529[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_48529[(1)] = (1));

return statearr_48529;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_48509){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_48509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e48530){if((e48530 instanceof Object)){
var ex__48262__auto__ = e48530;
var statearr_48531_48552 = state_48509;
(statearr_48531_48552[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48553 = state_48509;
state_48509 = G__48553;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_48509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_48509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___48537))
})();
var state__48372__auto__ = (function (){var statearr_48532 = f__48371__auto__.call(null);
(statearr_48532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___48537);

return statearr_48532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___48537))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__48741){
var vec__48742 = p__48741;
var v = cljs.core.nth.call(null,vec__48742,(0),null);
var p = cljs.core.nth.call(null,vec__48742,(1),null);
var job = vec__48742;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48370__auto___48928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___48928,res,vec__48742,v,p,job,jobs,results){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___48928,res,vec__48742,v,p,job,jobs,results){
return (function (state_48749){
var state_val_48750 = (state_48749[(1)]);
if((state_val_48750 === (1))){
var state_48749__$1 = state_48749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48749__$1,(2),res,v);
} else {
if((state_val_48750 === (2))){
var inst_48746 = (state_48749[(2)]);
var inst_48747 = cljs.core.async.close_BANG_.call(null,res);
var state_48749__$1 = (function (){var statearr_48751 = state_48749;
(statearr_48751[(7)] = inst_48746);

return statearr_48751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48749__$1,inst_48747);
} else {
return null;
}
}
});})(c__48370__auto___48928,res,vec__48742,v,p,job,jobs,results))
;
return ((function (switch__48258__auto__,c__48370__auto___48928,res,vec__48742,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0 = (function (){
var statearr_48755 = [null,null,null,null,null,null,null,null];
(statearr_48755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__);

(statearr_48755[(1)] = (1));

return statearr_48755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1 = (function (state_48749){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_48749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e48756){if((e48756 instanceof Object)){
var ex__48262__auto__ = e48756;
var statearr_48757_48929 = state_48749;
(statearr_48757_48929[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48930 = state_48749;
state_48749 = G__48930;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = function(state_48749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1.call(this,state_48749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___48928,res,vec__48742,v,p,job,jobs,results))
})();
var state__48372__auto__ = (function (){var statearr_48758 = f__48371__auto__.call(null);
(statearr_48758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___48928);

return statearr_48758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___48928,res,vec__48742,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48759){
var vec__48760 = p__48759;
var v = cljs.core.nth.call(null,vec__48760,(0),null);
var p = cljs.core.nth.call(null,vec__48760,(1),null);
var job = vec__48760;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__45012__auto___48931 = n;
var __48932 = (0);
while(true){
if((__48932 < n__45012__auto___48931)){
var G__48763_48933 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48763_48933) {
case "compute":
var c__48370__auto___48935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48932,c__48370__auto___48935,G__48763_48933,n__45012__auto___48931,jobs,results,process,async){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (__48932,c__48370__auto___48935,G__48763_48933,n__45012__auto___48931,jobs,results,process,async){
return (function (state_48776){
var state_val_48777 = (state_48776[(1)]);
if((state_val_48777 === (1))){
var state_48776__$1 = state_48776;
var statearr_48778_48936 = state_48776__$1;
(statearr_48778_48936[(2)] = null);

(statearr_48778_48936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48777 === (2))){
var state_48776__$1 = state_48776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48776__$1,(4),jobs);
} else {
if((state_val_48777 === (3))){
var inst_48774 = (state_48776[(2)]);
var state_48776__$1 = state_48776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48776__$1,inst_48774);
} else {
if((state_val_48777 === (4))){
var inst_48766 = (state_48776[(2)]);
var inst_48767 = process.call(null,inst_48766);
var state_48776__$1 = state_48776;
if(cljs.core.truth_(inst_48767)){
var statearr_48779_48937 = state_48776__$1;
(statearr_48779_48937[(1)] = (5));

} else {
var statearr_48780_48938 = state_48776__$1;
(statearr_48780_48938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48777 === (5))){
var state_48776__$1 = state_48776;
var statearr_48781_48939 = state_48776__$1;
(statearr_48781_48939[(2)] = null);

(statearr_48781_48939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48777 === (6))){
var state_48776__$1 = state_48776;
var statearr_48782_48940 = state_48776__$1;
(statearr_48782_48940[(2)] = null);

(statearr_48782_48940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48777 === (7))){
var inst_48772 = (state_48776[(2)]);
var state_48776__$1 = state_48776;
var statearr_48783_48941 = state_48776__$1;
(statearr_48783_48941[(2)] = inst_48772);

(statearr_48783_48941[(1)] = (3));


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
});})(__48932,c__48370__auto___48935,G__48763_48933,n__45012__auto___48931,jobs,results,process,async))
;
return ((function (__48932,switch__48258__auto__,c__48370__auto___48935,G__48763_48933,n__45012__auto___48931,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0 = (function (){
var statearr_48787 = [null,null,null,null,null,null,null];
(statearr_48787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__);

(statearr_48787[(1)] = (1));

return statearr_48787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1 = (function (state_48776){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_48776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e48788){if((e48788 instanceof Object)){
var ex__48262__auto__ = e48788;
var statearr_48789_48942 = state_48776;
(statearr_48789_48942[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48943 = state_48776;
state_48776 = G__48943;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = function(state_48776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1.call(this,state_48776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__;
})()
;})(__48932,switch__48258__auto__,c__48370__auto___48935,G__48763_48933,n__45012__auto___48931,jobs,results,process,async))
})();
var state__48372__auto__ = (function (){var statearr_48790 = f__48371__auto__.call(null);
(statearr_48790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___48935);

return statearr_48790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(__48932,c__48370__auto___48935,G__48763_48933,n__45012__auto___48931,jobs,results,process,async))
);


break;
case "async":
var c__48370__auto___48944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48932,c__48370__auto___48944,G__48763_48933,n__45012__auto___48931,jobs,results,process,async){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (__48932,c__48370__auto___48944,G__48763_48933,n__45012__auto___48931,jobs,results,process,async){
return (function (state_48803){
var state_val_48804 = (state_48803[(1)]);
if((state_val_48804 === (1))){
var state_48803__$1 = state_48803;
var statearr_48805_48945 = state_48803__$1;
(statearr_48805_48945[(2)] = null);

(statearr_48805_48945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (2))){
var state_48803__$1 = state_48803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48803__$1,(4),jobs);
} else {
if((state_val_48804 === (3))){
var inst_48801 = (state_48803[(2)]);
var state_48803__$1 = state_48803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48803__$1,inst_48801);
} else {
if((state_val_48804 === (4))){
var inst_48793 = (state_48803[(2)]);
var inst_48794 = async.call(null,inst_48793);
var state_48803__$1 = state_48803;
if(cljs.core.truth_(inst_48794)){
var statearr_48806_48946 = state_48803__$1;
(statearr_48806_48946[(1)] = (5));

} else {
var statearr_48807_48947 = state_48803__$1;
(statearr_48807_48947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (5))){
var state_48803__$1 = state_48803;
var statearr_48808_48948 = state_48803__$1;
(statearr_48808_48948[(2)] = null);

(statearr_48808_48948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (6))){
var state_48803__$1 = state_48803;
var statearr_48809_48949 = state_48803__$1;
(statearr_48809_48949[(2)] = null);

(statearr_48809_48949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48804 === (7))){
var inst_48799 = (state_48803[(2)]);
var state_48803__$1 = state_48803;
var statearr_48810_48950 = state_48803__$1;
(statearr_48810_48950[(2)] = inst_48799);

(statearr_48810_48950[(1)] = (3));


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
});})(__48932,c__48370__auto___48944,G__48763_48933,n__45012__auto___48931,jobs,results,process,async))
;
return ((function (__48932,switch__48258__auto__,c__48370__auto___48944,G__48763_48933,n__45012__auto___48931,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0 = (function (){
var statearr_48814 = [null,null,null,null,null,null,null];
(statearr_48814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__);

(statearr_48814[(1)] = (1));

return statearr_48814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1 = (function (state_48803){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_48803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e48815){if((e48815 instanceof Object)){
var ex__48262__auto__ = e48815;
var statearr_48816_48951 = state_48803;
(statearr_48816_48951[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48952 = state_48803;
state_48803 = G__48952;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = function(state_48803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1.call(this,state_48803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__;
})()
;})(__48932,switch__48258__auto__,c__48370__auto___48944,G__48763_48933,n__45012__auto___48931,jobs,results,process,async))
})();
var state__48372__auto__ = (function (){var statearr_48817 = f__48371__auto__.call(null);
(statearr_48817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___48944);

return statearr_48817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(__48932,c__48370__auto___48944,G__48763_48933,n__45012__auto___48931,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__48953 = (__48932 + (1));
__48932 = G__48953;
continue;
} else {
}
break;
}

var c__48370__auto___48954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___48954,jobs,results,process,async){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___48954,jobs,results,process,async){
return (function (state_48839){
var state_val_48840 = (state_48839[(1)]);
if((state_val_48840 === (1))){
var state_48839__$1 = state_48839;
var statearr_48841_48955 = state_48839__$1;
(statearr_48841_48955[(2)] = null);

(statearr_48841_48955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48840 === (2))){
var state_48839__$1 = state_48839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48839__$1,(4),from);
} else {
if((state_val_48840 === (3))){
var inst_48837 = (state_48839[(2)]);
var state_48839__$1 = state_48839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48839__$1,inst_48837);
} else {
if((state_val_48840 === (4))){
var inst_48820 = (state_48839[(7)]);
var inst_48820__$1 = (state_48839[(2)]);
var inst_48821 = (inst_48820__$1 == null);
var state_48839__$1 = (function (){var statearr_48842 = state_48839;
(statearr_48842[(7)] = inst_48820__$1);

return statearr_48842;
})();
if(cljs.core.truth_(inst_48821)){
var statearr_48843_48956 = state_48839__$1;
(statearr_48843_48956[(1)] = (5));

} else {
var statearr_48844_48957 = state_48839__$1;
(statearr_48844_48957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48840 === (5))){
var inst_48823 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48839__$1 = state_48839;
var statearr_48845_48958 = state_48839__$1;
(statearr_48845_48958[(2)] = inst_48823);

(statearr_48845_48958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48840 === (6))){
var inst_48825 = (state_48839[(8)]);
var inst_48820 = (state_48839[(7)]);
var inst_48825__$1 = cljs.core.async.chan.call(null,(1));
var inst_48826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48827 = [inst_48820,inst_48825__$1];
var inst_48828 = (new cljs.core.PersistentVector(null,2,(5),inst_48826,inst_48827,null));
var state_48839__$1 = (function (){var statearr_48846 = state_48839;
(statearr_48846[(8)] = inst_48825__$1);

return statearr_48846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48839__$1,(8),jobs,inst_48828);
} else {
if((state_val_48840 === (7))){
var inst_48835 = (state_48839[(2)]);
var state_48839__$1 = state_48839;
var statearr_48847_48959 = state_48839__$1;
(statearr_48847_48959[(2)] = inst_48835);

(statearr_48847_48959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48840 === (8))){
var inst_48825 = (state_48839[(8)]);
var inst_48830 = (state_48839[(2)]);
var state_48839__$1 = (function (){var statearr_48848 = state_48839;
(statearr_48848[(9)] = inst_48830);

return statearr_48848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48839__$1,(9),results,inst_48825);
} else {
if((state_val_48840 === (9))){
var inst_48832 = (state_48839[(2)]);
var state_48839__$1 = (function (){var statearr_48849 = state_48839;
(statearr_48849[(10)] = inst_48832);

return statearr_48849;
})();
var statearr_48850_48960 = state_48839__$1;
(statearr_48850_48960[(2)] = null);

(statearr_48850_48960[(1)] = (2));


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
});})(c__48370__auto___48954,jobs,results,process,async))
;
return ((function (switch__48258__auto__,c__48370__auto___48954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0 = (function (){
var statearr_48854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__);

(statearr_48854[(1)] = (1));

return statearr_48854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1 = (function (state_48839){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_48839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e48855){if((e48855 instanceof Object)){
var ex__48262__auto__ = e48855;
var statearr_48856_48961 = state_48839;
(statearr_48856_48961[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48962 = state_48839;
state_48839 = G__48962;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = function(state_48839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1.call(this,state_48839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___48954,jobs,results,process,async))
})();
var state__48372__auto__ = (function (){var statearr_48857 = f__48371__auto__.call(null);
(statearr_48857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___48954);

return statearr_48857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___48954,jobs,results,process,async))
);


var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__,jobs,results,process,async){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__,jobs,results,process,async){
return (function (state_48895){
var state_val_48896 = (state_48895[(1)]);
if((state_val_48896 === (7))){
var inst_48891 = (state_48895[(2)]);
var state_48895__$1 = state_48895;
var statearr_48897_48963 = state_48895__$1;
(statearr_48897_48963[(2)] = inst_48891);

(statearr_48897_48963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (20))){
var state_48895__$1 = state_48895;
var statearr_48898_48964 = state_48895__$1;
(statearr_48898_48964[(2)] = null);

(statearr_48898_48964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (1))){
var state_48895__$1 = state_48895;
var statearr_48899_48965 = state_48895__$1;
(statearr_48899_48965[(2)] = null);

(statearr_48899_48965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (4))){
var inst_48860 = (state_48895[(7)]);
var inst_48860__$1 = (state_48895[(2)]);
var inst_48861 = (inst_48860__$1 == null);
var state_48895__$1 = (function (){var statearr_48900 = state_48895;
(statearr_48900[(7)] = inst_48860__$1);

return statearr_48900;
})();
if(cljs.core.truth_(inst_48861)){
var statearr_48901_48966 = state_48895__$1;
(statearr_48901_48966[(1)] = (5));

} else {
var statearr_48902_48967 = state_48895__$1;
(statearr_48902_48967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (15))){
var inst_48873 = (state_48895[(8)]);
var state_48895__$1 = state_48895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48895__$1,(18),to,inst_48873);
} else {
if((state_val_48896 === (21))){
var inst_48886 = (state_48895[(2)]);
var state_48895__$1 = state_48895;
var statearr_48903_48968 = state_48895__$1;
(statearr_48903_48968[(2)] = inst_48886);

(statearr_48903_48968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (13))){
var inst_48888 = (state_48895[(2)]);
var state_48895__$1 = (function (){var statearr_48904 = state_48895;
(statearr_48904[(9)] = inst_48888);

return statearr_48904;
})();
var statearr_48905_48969 = state_48895__$1;
(statearr_48905_48969[(2)] = null);

(statearr_48905_48969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (6))){
var inst_48860 = (state_48895[(7)]);
var state_48895__$1 = state_48895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48895__$1,(11),inst_48860);
} else {
if((state_val_48896 === (17))){
var inst_48881 = (state_48895[(2)]);
var state_48895__$1 = state_48895;
if(cljs.core.truth_(inst_48881)){
var statearr_48906_48970 = state_48895__$1;
(statearr_48906_48970[(1)] = (19));

} else {
var statearr_48907_48971 = state_48895__$1;
(statearr_48907_48971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (3))){
var inst_48893 = (state_48895[(2)]);
var state_48895__$1 = state_48895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48895__$1,inst_48893);
} else {
if((state_val_48896 === (12))){
var inst_48870 = (state_48895[(10)]);
var state_48895__$1 = state_48895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48895__$1,(14),inst_48870);
} else {
if((state_val_48896 === (2))){
var state_48895__$1 = state_48895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48895__$1,(4),results);
} else {
if((state_val_48896 === (19))){
var state_48895__$1 = state_48895;
var statearr_48908_48972 = state_48895__$1;
(statearr_48908_48972[(2)] = null);

(statearr_48908_48972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (11))){
var inst_48870 = (state_48895[(2)]);
var state_48895__$1 = (function (){var statearr_48909 = state_48895;
(statearr_48909[(10)] = inst_48870);

return statearr_48909;
})();
var statearr_48910_48973 = state_48895__$1;
(statearr_48910_48973[(2)] = null);

(statearr_48910_48973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (9))){
var state_48895__$1 = state_48895;
var statearr_48911_48974 = state_48895__$1;
(statearr_48911_48974[(2)] = null);

(statearr_48911_48974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (5))){
var state_48895__$1 = state_48895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48912_48975 = state_48895__$1;
(statearr_48912_48975[(1)] = (8));

} else {
var statearr_48913_48976 = state_48895__$1;
(statearr_48913_48976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (14))){
var inst_48875 = (state_48895[(11)]);
var inst_48873 = (state_48895[(8)]);
var inst_48873__$1 = (state_48895[(2)]);
var inst_48874 = (inst_48873__$1 == null);
var inst_48875__$1 = cljs.core.not.call(null,inst_48874);
var state_48895__$1 = (function (){var statearr_48914 = state_48895;
(statearr_48914[(11)] = inst_48875__$1);

(statearr_48914[(8)] = inst_48873__$1);

return statearr_48914;
})();
if(inst_48875__$1){
var statearr_48915_48977 = state_48895__$1;
(statearr_48915_48977[(1)] = (15));

} else {
var statearr_48916_48978 = state_48895__$1;
(statearr_48916_48978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (16))){
var inst_48875 = (state_48895[(11)]);
var state_48895__$1 = state_48895;
var statearr_48917_48979 = state_48895__$1;
(statearr_48917_48979[(2)] = inst_48875);

(statearr_48917_48979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (10))){
var inst_48867 = (state_48895[(2)]);
var state_48895__$1 = state_48895;
var statearr_48918_48980 = state_48895__$1;
(statearr_48918_48980[(2)] = inst_48867);

(statearr_48918_48980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (18))){
var inst_48878 = (state_48895[(2)]);
var state_48895__$1 = state_48895;
var statearr_48919_48981 = state_48895__$1;
(statearr_48919_48981[(2)] = inst_48878);

(statearr_48919_48981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48896 === (8))){
var inst_48864 = cljs.core.async.close_BANG_.call(null,to);
var state_48895__$1 = state_48895;
var statearr_48920_48982 = state_48895__$1;
(statearr_48920_48982[(2)] = inst_48864);

(statearr_48920_48982[(1)] = (10));


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
});})(c__48370__auto__,jobs,results,process,async))
;
return ((function (switch__48258__auto__,c__48370__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0 = (function (){
var statearr_48924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__);

(statearr_48924[(1)] = (1));

return statearr_48924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1 = (function (state_48895){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_48895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e48925){if((e48925 instanceof Object)){
var ex__48262__auto__ = e48925;
var statearr_48926_48983 = state_48895;
(statearr_48926_48983[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48984 = state_48895;
state_48895 = G__48984;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__ = function(state_48895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1.call(this,state_48895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__,jobs,results,process,async))
})();
var state__48372__auto__ = (function (){var statearr_48927 = f__48371__auto__.call(null);
(statearr_48927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_48927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__,jobs,results,process,async))
);

return c__48370__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args48985 = [];
var len__45172__auto___48988 = arguments.length;
var i__45173__auto___48989 = (0);
while(true){
if((i__45173__auto___48989 < len__45172__auto___48988)){
args48985.push((arguments[i__45173__auto___48989]));

var G__48990 = (i__45173__auto___48989 + (1));
i__45173__auto___48989 = G__48990;
continue;
} else {
}
break;
}

var G__48987 = args48985.length;
switch (G__48987) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48985.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args48992 = [];
var len__45172__auto___48995 = arguments.length;
var i__45173__auto___48996 = (0);
while(true){
if((i__45173__auto___48996 < len__45172__auto___48995)){
args48992.push((arguments[i__45173__auto___48996]));

var G__48997 = (i__45173__auto___48996 + (1));
i__45173__auto___48996 = G__48997;
continue;
} else {
}
break;
}

var G__48994 = args48992.length;
switch (G__48994) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48992.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args48999 = [];
var len__45172__auto___49052 = arguments.length;
var i__45173__auto___49053 = (0);
while(true){
if((i__45173__auto___49053 < len__45172__auto___49052)){
args48999.push((arguments[i__45173__auto___49053]));

var G__49054 = (i__45173__auto___49053 + (1));
i__45173__auto___49053 = G__49054;
continue;
} else {
}
break;
}

var G__49001 = args48999.length;
switch (G__49001) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48999.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48370__auto___49056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___49056,tc,fc){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___49056,tc,fc){
return (function (state_49027){
var state_val_49028 = (state_49027[(1)]);
if((state_val_49028 === (7))){
var inst_49023 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
var statearr_49029_49057 = state_49027__$1;
(statearr_49029_49057[(2)] = inst_49023);

(statearr_49029_49057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (1))){
var state_49027__$1 = state_49027;
var statearr_49030_49058 = state_49027__$1;
(statearr_49030_49058[(2)] = null);

(statearr_49030_49058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (4))){
var inst_49004 = (state_49027[(7)]);
var inst_49004__$1 = (state_49027[(2)]);
var inst_49005 = (inst_49004__$1 == null);
var state_49027__$1 = (function (){var statearr_49031 = state_49027;
(statearr_49031[(7)] = inst_49004__$1);

return statearr_49031;
})();
if(cljs.core.truth_(inst_49005)){
var statearr_49032_49059 = state_49027__$1;
(statearr_49032_49059[(1)] = (5));

} else {
var statearr_49033_49060 = state_49027__$1;
(statearr_49033_49060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (13))){
var state_49027__$1 = state_49027;
var statearr_49034_49061 = state_49027__$1;
(statearr_49034_49061[(2)] = null);

(statearr_49034_49061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (6))){
var inst_49004 = (state_49027[(7)]);
var inst_49010 = p.call(null,inst_49004);
var state_49027__$1 = state_49027;
if(cljs.core.truth_(inst_49010)){
var statearr_49035_49062 = state_49027__$1;
(statearr_49035_49062[(1)] = (9));

} else {
var statearr_49036_49063 = state_49027__$1;
(statearr_49036_49063[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (3))){
var inst_49025 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49027__$1,inst_49025);
} else {
if((state_val_49028 === (12))){
var state_49027__$1 = state_49027;
var statearr_49037_49064 = state_49027__$1;
(statearr_49037_49064[(2)] = null);

(statearr_49037_49064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (2))){
var state_49027__$1 = state_49027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49027__$1,(4),ch);
} else {
if((state_val_49028 === (11))){
var inst_49004 = (state_49027[(7)]);
var inst_49014 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49027__$1,(8),inst_49014,inst_49004);
} else {
if((state_val_49028 === (9))){
var state_49027__$1 = state_49027;
var statearr_49038_49065 = state_49027__$1;
(statearr_49038_49065[(2)] = tc);

(statearr_49038_49065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (5))){
var inst_49007 = cljs.core.async.close_BANG_.call(null,tc);
var inst_49008 = cljs.core.async.close_BANG_.call(null,fc);
var state_49027__$1 = (function (){var statearr_49039 = state_49027;
(statearr_49039[(8)] = inst_49007);

return statearr_49039;
})();
var statearr_49040_49066 = state_49027__$1;
(statearr_49040_49066[(2)] = inst_49008);

(statearr_49040_49066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (14))){
var inst_49021 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
var statearr_49041_49067 = state_49027__$1;
(statearr_49041_49067[(2)] = inst_49021);

(statearr_49041_49067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (10))){
var state_49027__$1 = state_49027;
var statearr_49042_49068 = state_49027__$1;
(statearr_49042_49068[(2)] = fc);

(statearr_49042_49068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (8))){
var inst_49016 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
if(cljs.core.truth_(inst_49016)){
var statearr_49043_49069 = state_49027__$1;
(statearr_49043_49069[(1)] = (12));

} else {
var statearr_49044_49070 = state_49027__$1;
(statearr_49044_49070[(1)] = (13));

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
});})(c__48370__auto___49056,tc,fc))
;
return ((function (switch__48258__auto__,c__48370__auto___49056,tc,fc){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_49048 = [null,null,null,null,null,null,null,null,null];
(statearr_49048[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_49048[(1)] = (1));

return statearr_49048;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_49027){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_49027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e49049){if((e49049 instanceof Object)){
var ex__48262__auto__ = e49049;
var statearr_49050_49071 = state_49027;
(statearr_49050_49071[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49072 = state_49027;
state_49027 = G__49072;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_49027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_49027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___49056,tc,fc))
})();
var state__48372__auto__ = (function (){var statearr_49051 = f__48371__auto__.call(null);
(statearr_49051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___49056);

return statearr_49051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___49056,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__){
return (function (state_49136){
var state_val_49137 = (state_49136[(1)]);
if((state_val_49137 === (7))){
var inst_49132 = (state_49136[(2)]);
var state_49136__$1 = state_49136;
var statearr_49138_49159 = state_49136__$1;
(statearr_49138_49159[(2)] = inst_49132);

(statearr_49138_49159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (1))){
var inst_49116 = init;
var state_49136__$1 = (function (){var statearr_49139 = state_49136;
(statearr_49139[(7)] = inst_49116);

return statearr_49139;
})();
var statearr_49140_49160 = state_49136__$1;
(statearr_49140_49160[(2)] = null);

(statearr_49140_49160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (4))){
var inst_49119 = (state_49136[(8)]);
var inst_49119__$1 = (state_49136[(2)]);
var inst_49120 = (inst_49119__$1 == null);
var state_49136__$1 = (function (){var statearr_49141 = state_49136;
(statearr_49141[(8)] = inst_49119__$1);

return statearr_49141;
})();
if(cljs.core.truth_(inst_49120)){
var statearr_49142_49161 = state_49136__$1;
(statearr_49142_49161[(1)] = (5));

} else {
var statearr_49143_49162 = state_49136__$1;
(statearr_49143_49162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (6))){
var inst_49116 = (state_49136[(7)]);
var inst_49119 = (state_49136[(8)]);
var inst_49123 = (state_49136[(9)]);
var inst_49123__$1 = f.call(null,inst_49116,inst_49119);
var inst_49124 = cljs.core.reduced_QMARK_.call(null,inst_49123__$1);
var state_49136__$1 = (function (){var statearr_49144 = state_49136;
(statearr_49144[(9)] = inst_49123__$1);

return statearr_49144;
})();
if(inst_49124){
var statearr_49145_49163 = state_49136__$1;
(statearr_49145_49163[(1)] = (8));

} else {
var statearr_49146_49164 = state_49136__$1;
(statearr_49146_49164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (3))){
var inst_49134 = (state_49136[(2)]);
var state_49136__$1 = state_49136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49136__$1,inst_49134);
} else {
if((state_val_49137 === (2))){
var state_49136__$1 = state_49136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49136__$1,(4),ch);
} else {
if((state_val_49137 === (9))){
var inst_49123 = (state_49136[(9)]);
var inst_49116 = inst_49123;
var state_49136__$1 = (function (){var statearr_49147 = state_49136;
(statearr_49147[(7)] = inst_49116);

return statearr_49147;
})();
var statearr_49148_49165 = state_49136__$1;
(statearr_49148_49165[(2)] = null);

(statearr_49148_49165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (5))){
var inst_49116 = (state_49136[(7)]);
var state_49136__$1 = state_49136;
var statearr_49149_49166 = state_49136__$1;
(statearr_49149_49166[(2)] = inst_49116);

(statearr_49149_49166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (10))){
var inst_49130 = (state_49136[(2)]);
var state_49136__$1 = state_49136;
var statearr_49150_49167 = state_49136__$1;
(statearr_49150_49167[(2)] = inst_49130);

(statearr_49150_49167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49137 === (8))){
var inst_49123 = (state_49136[(9)]);
var inst_49126 = cljs.core.deref.call(null,inst_49123);
var state_49136__$1 = state_49136;
var statearr_49151_49168 = state_49136__$1;
(statearr_49151_49168[(2)] = inst_49126);

(statearr_49151_49168[(1)] = (10));


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
});})(c__48370__auto__))
;
return ((function (switch__48258__auto__,c__48370__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48259__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48259__auto____0 = (function (){
var statearr_49155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49155[(0)] = cljs$core$async$reduce_$_state_machine__48259__auto__);

(statearr_49155[(1)] = (1));

return statearr_49155;
});
var cljs$core$async$reduce_$_state_machine__48259__auto____1 = (function (state_49136){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_49136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e49156){if((e49156 instanceof Object)){
var ex__48262__auto__ = e49156;
var statearr_49157_49169 = state_49136;
(statearr_49157_49169[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49170 = state_49136;
state_49136 = G__49170;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48259__auto__ = function(state_49136){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48259__auto____1.call(this,state_49136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48259__auto____0;
cljs$core$async$reduce_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48259__auto____1;
return cljs$core$async$reduce_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__))
})();
var state__48372__auto__ = (function (){var statearr_49158 = f__48371__auto__.call(null);
(statearr_49158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_49158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__))
);

return c__48370__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__,f__$1){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__,f__$1){
return (function (state_49190){
var state_val_49191 = (state_49190[(1)]);
if((state_val_49191 === (1))){
var inst_49185 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_49190__$1 = state_49190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49190__$1,(2),inst_49185);
} else {
if((state_val_49191 === (2))){
var inst_49187 = (state_49190[(2)]);
var inst_49188 = f__$1.call(null,inst_49187);
var state_49190__$1 = state_49190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49190__$1,inst_49188);
} else {
return null;
}
}
});})(c__48370__auto__,f__$1))
;
return ((function (switch__48258__auto__,c__48370__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48259__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48259__auto____0 = (function (){
var statearr_49195 = [null,null,null,null,null,null,null];
(statearr_49195[(0)] = cljs$core$async$transduce_$_state_machine__48259__auto__);

(statearr_49195[(1)] = (1));

return statearr_49195;
});
var cljs$core$async$transduce_$_state_machine__48259__auto____1 = (function (state_49190){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_49190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e49196){if((e49196 instanceof Object)){
var ex__48262__auto__ = e49196;
var statearr_49197_49199 = state_49190;
(statearr_49197_49199[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49200 = state_49190;
state_49190 = G__49200;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48259__auto__ = function(state_49190){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48259__auto____1.call(this,state_49190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48259__auto____0;
cljs$core$async$transduce_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48259__auto____1;
return cljs$core$async$transduce_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__,f__$1))
})();
var state__48372__auto__ = (function (){var statearr_49198 = f__48371__auto__.call(null);
(statearr_49198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_49198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__,f__$1))
);

return c__48370__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args49201 = [];
var len__45172__auto___49253 = arguments.length;
var i__45173__auto___49254 = (0);
while(true){
if((i__45173__auto___49254 < len__45172__auto___49253)){
args49201.push((arguments[i__45173__auto___49254]));

var G__49255 = (i__45173__auto___49254 + (1));
i__45173__auto___49254 = G__49255;
continue;
} else {
}
break;
}

var G__49203 = args49201.length;
switch (G__49203) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49201.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__){
return (function (state_49228){
var state_val_49229 = (state_49228[(1)]);
if((state_val_49229 === (7))){
var inst_49210 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49230_49257 = state_49228__$1;
(statearr_49230_49257[(2)] = inst_49210);

(statearr_49230_49257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (1))){
var inst_49204 = cljs.core.seq.call(null,coll);
var inst_49205 = inst_49204;
var state_49228__$1 = (function (){var statearr_49231 = state_49228;
(statearr_49231[(7)] = inst_49205);

return statearr_49231;
})();
var statearr_49232_49258 = state_49228__$1;
(statearr_49232_49258[(2)] = null);

(statearr_49232_49258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (4))){
var inst_49205 = (state_49228[(7)]);
var inst_49208 = cljs.core.first.call(null,inst_49205);
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49228__$1,(7),ch,inst_49208);
} else {
if((state_val_49229 === (13))){
var inst_49222 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49233_49259 = state_49228__$1;
(statearr_49233_49259[(2)] = inst_49222);

(statearr_49233_49259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (6))){
var inst_49213 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
if(cljs.core.truth_(inst_49213)){
var statearr_49234_49260 = state_49228__$1;
(statearr_49234_49260[(1)] = (8));

} else {
var statearr_49235_49261 = state_49228__$1;
(statearr_49235_49261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (3))){
var inst_49226 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49228__$1,inst_49226);
} else {
if((state_val_49229 === (12))){
var state_49228__$1 = state_49228;
var statearr_49236_49262 = state_49228__$1;
(statearr_49236_49262[(2)] = null);

(statearr_49236_49262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (2))){
var inst_49205 = (state_49228[(7)]);
var state_49228__$1 = state_49228;
if(cljs.core.truth_(inst_49205)){
var statearr_49237_49263 = state_49228__$1;
(statearr_49237_49263[(1)] = (4));

} else {
var statearr_49238_49264 = state_49228__$1;
(statearr_49238_49264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (11))){
var inst_49219 = cljs.core.async.close_BANG_.call(null,ch);
var state_49228__$1 = state_49228;
var statearr_49239_49265 = state_49228__$1;
(statearr_49239_49265[(2)] = inst_49219);

(statearr_49239_49265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (9))){
var state_49228__$1 = state_49228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49240_49266 = state_49228__$1;
(statearr_49240_49266[(1)] = (11));

} else {
var statearr_49241_49267 = state_49228__$1;
(statearr_49241_49267[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (5))){
var inst_49205 = (state_49228[(7)]);
var state_49228__$1 = state_49228;
var statearr_49242_49268 = state_49228__$1;
(statearr_49242_49268[(2)] = inst_49205);

(statearr_49242_49268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (10))){
var inst_49224 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49243_49269 = state_49228__$1;
(statearr_49243_49269[(2)] = inst_49224);

(statearr_49243_49269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (8))){
var inst_49205 = (state_49228[(7)]);
var inst_49215 = cljs.core.next.call(null,inst_49205);
var inst_49205__$1 = inst_49215;
var state_49228__$1 = (function (){var statearr_49244 = state_49228;
(statearr_49244[(7)] = inst_49205__$1);

return statearr_49244;
})();
var statearr_49245_49270 = state_49228__$1;
(statearr_49245_49270[(2)] = null);

(statearr_49245_49270[(1)] = (2));


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
});})(c__48370__auto__))
;
return ((function (switch__48258__auto__,c__48370__auto__){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_49249 = [null,null,null,null,null,null,null,null];
(statearr_49249[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_49249[(1)] = (1));

return statearr_49249;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_49228){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_49228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e49250){if((e49250 instanceof Object)){
var ex__48262__auto__ = e49250;
var statearr_49251_49271 = state_49228;
(statearr_49251_49271[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49272 = state_49228;
state_49228 = G__49272;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_49228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_49228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__))
})();
var state__48372__auto__ = (function (){var statearr_49252 = f__48371__auto__.call(null);
(statearr_49252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_49252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__))
);

return c__48370__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44760__auto__ = (((_ == null))?null:_);
var m__44761__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,_);
} else {
var m__44761__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44761__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m,ch);
} else {
var m__44761__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m);
} else {
var m__44761__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49498 = (function (mult,ch,cs,meta49499){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta49499 = meta49499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49500,meta49499__$1){
var self__ = this;
var _49500__$1 = this;
return (new cljs.core.async.t_cljs$core$async49498(self__.mult,self__.ch,self__.cs,meta49499__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49500){
var self__ = this;
var _49500__$1 = this;
return self__.meta49499;
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49499","meta49499",-1111427950,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49498";

cljs.core.async.t_cljs$core$async49498.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async49498");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49498 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49498(mult__$1,ch__$1,cs__$1,meta49499){
return (new cljs.core.async.t_cljs$core$async49498(mult__$1,ch__$1,cs__$1,meta49499));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49498(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__48370__auto___49723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___49723,cs,m,dchan,dctr,done){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___49723,cs,m,dchan,dctr,done){
return (function (state_49635){
var state_val_49636 = (state_49635[(1)]);
if((state_val_49636 === (7))){
var inst_49631 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49637_49724 = state_49635__$1;
(statearr_49637_49724[(2)] = inst_49631);

(statearr_49637_49724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (20))){
var inst_49534 = (state_49635[(7)]);
var inst_49546 = cljs.core.first.call(null,inst_49534);
var inst_49547 = cljs.core.nth.call(null,inst_49546,(0),null);
var inst_49548 = cljs.core.nth.call(null,inst_49546,(1),null);
var state_49635__$1 = (function (){var statearr_49638 = state_49635;
(statearr_49638[(8)] = inst_49547);

return statearr_49638;
})();
if(cljs.core.truth_(inst_49548)){
var statearr_49639_49725 = state_49635__$1;
(statearr_49639_49725[(1)] = (22));

} else {
var statearr_49640_49726 = state_49635__$1;
(statearr_49640_49726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (27))){
var inst_49576 = (state_49635[(9)]);
var inst_49583 = (state_49635[(10)]);
var inst_49578 = (state_49635[(11)]);
var inst_49503 = (state_49635[(12)]);
var inst_49583__$1 = cljs.core._nth.call(null,inst_49576,inst_49578);
var inst_49584 = cljs.core.async.put_BANG_.call(null,inst_49583__$1,inst_49503,done);
var state_49635__$1 = (function (){var statearr_49641 = state_49635;
(statearr_49641[(10)] = inst_49583__$1);

return statearr_49641;
})();
if(cljs.core.truth_(inst_49584)){
var statearr_49642_49727 = state_49635__$1;
(statearr_49642_49727[(1)] = (30));

} else {
var statearr_49643_49728 = state_49635__$1;
(statearr_49643_49728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (1))){
var state_49635__$1 = state_49635;
var statearr_49644_49729 = state_49635__$1;
(statearr_49644_49729[(2)] = null);

(statearr_49644_49729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (24))){
var inst_49534 = (state_49635[(7)]);
var inst_49553 = (state_49635[(2)]);
var inst_49554 = cljs.core.next.call(null,inst_49534);
var inst_49512 = inst_49554;
var inst_49513 = null;
var inst_49514 = (0);
var inst_49515 = (0);
var state_49635__$1 = (function (){var statearr_49645 = state_49635;
(statearr_49645[(13)] = inst_49512);

(statearr_49645[(14)] = inst_49513);

(statearr_49645[(15)] = inst_49515);

(statearr_49645[(16)] = inst_49514);

(statearr_49645[(17)] = inst_49553);

return statearr_49645;
})();
var statearr_49646_49730 = state_49635__$1;
(statearr_49646_49730[(2)] = null);

(statearr_49646_49730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (39))){
var state_49635__$1 = state_49635;
var statearr_49650_49731 = state_49635__$1;
(statearr_49650_49731[(2)] = null);

(statearr_49650_49731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (4))){
var inst_49503 = (state_49635[(12)]);
var inst_49503__$1 = (state_49635[(2)]);
var inst_49504 = (inst_49503__$1 == null);
var state_49635__$1 = (function (){var statearr_49651 = state_49635;
(statearr_49651[(12)] = inst_49503__$1);

return statearr_49651;
})();
if(cljs.core.truth_(inst_49504)){
var statearr_49652_49732 = state_49635__$1;
(statearr_49652_49732[(1)] = (5));

} else {
var statearr_49653_49733 = state_49635__$1;
(statearr_49653_49733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (15))){
var inst_49512 = (state_49635[(13)]);
var inst_49513 = (state_49635[(14)]);
var inst_49515 = (state_49635[(15)]);
var inst_49514 = (state_49635[(16)]);
var inst_49530 = (state_49635[(2)]);
var inst_49531 = (inst_49515 + (1));
var tmp49647 = inst_49512;
var tmp49648 = inst_49513;
var tmp49649 = inst_49514;
var inst_49512__$1 = tmp49647;
var inst_49513__$1 = tmp49648;
var inst_49514__$1 = tmp49649;
var inst_49515__$1 = inst_49531;
var state_49635__$1 = (function (){var statearr_49654 = state_49635;
(statearr_49654[(18)] = inst_49530);

(statearr_49654[(13)] = inst_49512__$1);

(statearr_49654[(14)] = inst_49513__$1);

(statearr_49654[(15)] = inst_49515__$1);

(statearr_49654[(16)] = inst_49514__$1);

return statearr_49654;
})();
var statearr_49655_49734 = state_49635__$1;
(statearr_49655_49734[(2)] = null);

(statearr_49655_49734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (21))){
var inst_49557 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49659_49735 = state_49635__$1;
(statearr_49659_49735[(2)] = inst_49557);

(statearr_49659_49735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (31))){
var inst_49583 = (state_49635[(10)]);
var inst_49587 = done.call(null,null);
var inst_49588 = cljs.core.async.untap_STAR_.call(null,m,inst_49583);
var state_49635__$1 = (function (){var statearr_49660 = state_49635;
(statearr_49660[(19)] = inst_49587);

return statearr_49660;
})();
var statearr_49661_49736 = state_49635__$1;
(statearr_49661_49736[(2)] = inst_49588);

(statearr_49661_49736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (32))){
var inst_49575 = (state_49635[(20)]);
var inst_49577 = (state_49635[(21)]);
var inst_49576 = (state_49635[(9)]);
var inst_49578 = (state_49635[(11)]);
var inst_49590 = (state_49635[(2)]);
var inst_49591 = (inst_49578 + (1));
var tmp49656 = inst_49575;
var tmp49657 = inst_49577;
var tmp49658 = inst_49576;
var inst_49575__$1 = tmp49656;
var inst_49576__$1 = tmp49658;
var inst_49577__$1 = tmp49657;
var inst_49578__$1 = inst_49591;
var state_49635__$1 = (function (){var statearr_49662 = state_49635;
(statearr_49662[(22)] = inst_49590);

(statearr_49662[(20)] = inst_49575__$1);

(statearr_49662[(21)] = inst_49577__$1);

(statearr_49662[(9)] = inst_49576__$1);

(statearr_49662[(11)] = inst_49578__$1);

return statearr_49662;
})();
var statearr_49663_49737 = state_49635__$1;
(statearr_49663_49737[(2)] = null);

(statearr_49663_49737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (40))){
var inst_49603 = (state_49635[(23)]);
var inst_49607 = done.call(null,null);
var inst_49608 = cljs.core.async.untap_STAR_.call(null,m,inst_49603);
var state_49635__$1 = (function (){var statearr_49664 = state_49635;
(statearr_49664[(24)] = inst_49607);

return statearr_49664;
})();
var statearr_49665_49738 = state_49635__$1;
(statearr_49665_49738[(2)] = inst_49608);

(statearr_49665_49738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (33))){
var inst_49594 = (state_49635[(25)]);
var inst_49596 = cljs.core.chunked_seq_QMARK_.call(null,inst_49594);
var state_49635__$1 = state_49635;
if(inst_49596){
var statearr_49666_49739 = state_49635__$1;
(statearr_49666_49739[(1)] = (36));

} else {
var statearr_49667_49740 = state_49635__$1;
(statearr_49667_49740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (13))){
var inst_49524 = (state_49635[(26)]);
var inst_49527 = cljs.core.async.close_BANG_.call(null,inst_49524);
var state_49635__$1 = state_49635;
var statearr_49668_49741 = state_49635__$1;
(statearr_49668_49741[(2)] = inst_49527);

(statearr_49668_49741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (22))){
var inst_49547 = (state_49635[(8)]);
var inst_49550 = cljs.core.async.close_BANG_.call(null,inst_49547);
var state_49635__$1 = state_49635;
var statearr_49669_49742 = state_49635__$1;
(statearr_49669_49742[(2)] = inst_49550);

(statearr_49669_49742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (36))){
var inst_49594 = (state_49635[(25)]);
var inst_49598 = cljs.core.chunk_first.call(null,inst_49594);
var inst_49599 = cljs.core.chunk_rest.call(null,inst_49594);
var inst_49600 = cljs.core.count.call(null,inst_49598);
var inst_49575 = inst_49599;
var inst_49576 = inst_49598;
var inst_49577 = inst_49600;
var inst_49578 = (0);
var state_49635__$1 = (function (){var statearr_49670 = state_49635;
(statearr_49670[(20)] = inst_49575);

(statearr_49670[(21)] = inst_49577);

(statearr_49670[(9)] = inst_49576);

(statearr_49670[(11)] = inst_49578);

return statearr_49670;
})();
var statearr_49671_49743 = state_49635__$1;
(statearr_49671_49743[(2)] = null);

(statearr_49671_49743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (41))){
var inst_49594 = (state_49635[(25)]);
var inst_49610 = (state_49635[(2)]);
var inst_49611 = cljs.core.next.call(null,inst_49594);
var inst_49575 = inst_49611;
var inst_49576 = null;
var inst_49577 = (0);
var inst_49578 = (0);
var state_49635__$1 = (function (){var statearr_49672 = state_49635;
(statearr_49672[(20)] = inst_49575);

(statearr_49672[(27)] = inst_49610);

(statearr_49672[(21)] = inst_49577);

(statearr_49672[(9)] = inst_49576);

(statearr_49672[(11)] = inst_49578);

return statearr_49672;
})();
var statearr_49673_49744 = state_49635__$1;
(statearr_49673_49744[(2)] = null);

(statearr_49673_49744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (43))){
var state_49635__$1 = state_49635;
var statearr_49674_49745 = state_49635__$1;
(statearr_49674_49745[(2)] = null);

(statearr_49674_49745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (29))){
var inst_49619 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49675_49746 = state_49635__$1;
(statearr_49675_49746[(2)] = inst_49619);

(statearr_49675_49746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (44))){
var inst_49628 = (state_49635[(2)]);
var state_49635__$1 = (function (){var statearr_49676 = state_49635;
(statearr_49676[(28)] = inst_49628);

return statearr_49676;
})();
var statearr_49677_49747 = state_49635__$1;
(statearr_49677_49747[(2)] = null);

(statearr_49677_49747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (6))){
var inst_49567 = (state_49635[(29)]);
var inst_49566 = cljs.core.deref.call(null,cs);
var inst_49567__$1 = cljs.core.keys.call(null,inst_49566);
var inst_49568 = cljs.core.count.call(null,inst_49567__$1);
var inst_49569 = cljs.core.reset_BANG_.call(null,dctr,inst_49568);
var inst_49574 = cljs.core.seq.call(null,inst_49567__$1);
var inst_49575 = inst_49574;
var inst_49576 = null;
var inst_49577 = (0);
var inst_49578 = (0);
var state_49635__$1 = (function (){var statearr_49678 = state_49635;
(statearr_49678[(29)] = inst_49567__$1);

(statearr_49678[(20)] = inst_49575);

(statearr_49678[(21)] = inst_49577);

(statearr_49678[(30)] = inst_49569);

(statearr_49678[(9)] = inst_49576);

(statearr_49678[(11)] = inst_49578);

return statearr_49678;
})();
var statearr_49679_49748 = state_49635__$1;
(statearr_49679_49748[(2)] = null);

(statearr_49679_49748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (28))){
var inst_49594 = (state_49635[(25)]);
var inst_49575 = (state_49635[(20)]);
var inst_49594__$1 = cljs.core.seq.call(null,inst_49575);
var state_49635__$1 = (function (){var statearr_49680 = state_49635;
(statearr_49680[(25)] = inst_49594__$1);

return statearr_49680;
})();
if(inst_49594__$1){
var statearr_49681_49749 = state_49635__$1;
(statearr_49681_49749[(1)] = (33));

} else {
var statearr_49682_49750 = state_49635__$1;
(statearr_49682_49750[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (25))){
var inst_49577 = (state_49635[(21)]);
var inst_49578 = (state_49635[(11)]);
var inst_49580 = (inst_49578 < inst_49577);
var inst_49581 = inst_49580;
var state_49635__$1 = state_49635;
if(cljs.core.truth_(inst_49581)){
var statearr_49683_49751 = state_49635__$1;
(statearr_49683_49751[(1)] = (27));

} else {
var statearr_49684_49752 = state_49635__$1;
(statearr_49684_49752[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (34))){
var state_49635__$1 = state_49635;
var statearr_49685_49753 = state_49635__$1;
(statearr_49685_49753[(2)] = null);

(statearr_49685_49753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (17))){
var state_49635__$1 = state_49635;
var statearr_49686_49754 = state_49635__$1;
(statearr_49686_49754[(2)] = null);

(statearr_49686_49754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (3))){
var inst_49633 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49635__$1,inst_49633);
} else {
if((state_val_49636 === (12))){
var inst_49562 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49687_49755 = state_49635__$1;
(statearr_49687_49755[(2)] = inst_49562);

(statearr_49687_49755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (2))){
var state_49635__$1 = state_49635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49635__$1,(4),ch);
} else {
if((state_val_49636 === (23))){
var state_49635__$1 = state_49635;
var statearr_49688_49756 = state_49635__$1;
(statearr_49688_49756[(2)] = null);

(statearr_49688_49756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (35))){
var inst_49617 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49689_49757 = state_49635__$1;
(statearr_49689_49757[(2)] = inst_49617);

(statearr_49689_49757[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (19))){
var inst_49534 = (state_49635[(7)]);
var inst_49538 = cljs.core.chunk_first.call(null,inst_49534);
var inst_49539 = cljs.core.chunk_rest.call(null,inst_49534);
var inst_49540 = cljs.core.count.call(null,inst_49538);
var inst_49512 = inst_49539;
var inst_49513 = inst_49538;
var inst_49514 = inst_49540;
var inst_49515 = (0);
var state_49635__$1 = (function (){var statearr_49690 = state_49635;
(statearr_49690[(13)] = inst_49512);

(statearr_49690[(14)] = inst_49513);

(statearr_49690[(15)] = inst_49515);

(statearr_49690[(16)] = inst_49514);

return statearr_49690;
})();
var statearr_49691_49758 = state_49635__$1;
(statearr_49691_49758[(2)] = null);

(statearr_49691_49758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (11))){
var inst_49534 = (state_49635[(7)]);
var inst_49512 = (state_49635[(13)]);
var inst_49534__$1 = cljs.core.seq.call(null,inst_49512);
var state_49635__$1 = (function (){var statearr_49692 = state_49635;
(statearr_49692[(7)] = inst_49534__$1);

return statearr_49692;
})();
if(inst_49534__$1){
var statearr_49693_49759 = state_49635__$1;
(statearr_49693_49759[(1)] = (16));

} else {
var statearr_49694_49760 = state_49635__$1;
(statearr_49694_49760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (9))){
var inst_49564 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49695_49761 = state_49635__$1;
(statearr_49695_49761[(2)] = inst_49564);

(statearr_49695_49761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (5))){
var inst_49510 = cljs.core.deref.call(null,cs);
var inst_49511 = cljs.core.seq.call(null,inst_49510);
var inst_49512 = inst_49511;
var inst_49513 = null;
var inst_49514 = (0);
var inst_49515 = (0);
var state_49635__$1 = (function (){var statearr_49696 = state_49635;
(statearr_49696[(13)] = inst_49512);

(statearr_49696[(14)] = inst_49513);

(statearr_49696[(15)] = inst_49515);

(statearr_49696[(16)] = inst_49514);

return statearr_49696;
})();
var statearr_49697_49762 = state_49635__$1;
(statearr_49697_49762[(2)] = null);

(statearr_49697_49762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (14))){
var state_49635__$1 = state_49635;
var statearr_49698_49763 = state_49635__$1;
(statearr_49698_49763[(2)] = null);

(statearr_49698_49763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (45))){
var inst_49625 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49699_49764 = state_49635__$1;
(statearr_49699_49764[(2)] = inst_49625);

(statearr_49699_49764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (26))){
var inst_49567 = (state_49635[(29)]);
var inst_49621 = (state_49635[(2)]);
var inst_49622 = cljs.core.seq.call(null,inst_49567);
var state_49635__$1 = (function (){var statearr_49700 = state_49635;
(statearr_49700[(31)] = inst_49621);

return statearr_49700;
})();
if(inst_49622){
var statearr_49701_49765 = state_49635__$1;
(statearr_49701_49765[(1)] = (42));

} else {
var statearr_49702_49766 = state_49635__$1;
(statearr_49702_49766[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (16))){
var inst_49534 = (state_49635[(7)]);
var inst_49536 = cljs.core.chunked_seq_QMARK_.call(null,inst_49534);
var state_49635__$1 = state_49635;
if(inst_49536){
var statearr_49703_49767 = state_49635__$1;
(statearr_49703_49767[(1)] = (19));

} else {
var statearr_49704_49768 = state_49635__$1;
(statearr_49704_49768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (38))){
var inst_49614 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49705_49769 = state_49635__$1;
(statearr_49705_49769[(2)] = inst_49614);

(statearr_49705_49769[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (30))){
var state_49635__$1 = state_49635;
var statearr_49706_49770 = state_49635__$1;
(statearr_49706_49770[(2)] = null);

(statearr_49706_49770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (10))){
var inst_49513 = (state_49635[(14)]);
var inst_49515 = (state_49635[(15)]);
var inst_49523 = cljs.core._nth.call(null,inst_49513,inst_49515);
var inst_49524 = cljs.core.nth.call(null,inst_49523,(0),null);
var inst_49525 = cljs.core.nth.call(null,inst_49523,(1),null);
var state_49635__$1 = (function (){var statearr_49707 = state_49635;
(statearr_49707[(26)] = inst_49524);

return statearr_49707;
})();
if(cljs.core.truth_(inst_49525)){
var statearr_49708_49771 = state_49635__$1;
(statearr_49708_49771[(1)] = (13));

} else {
var statearr_49709_49772 = state_49635__$1;
(statearr_49709_49772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (18))){
var inst_49560 = (state_49635[(2)]);
var state_49635__$1 = state_49635;
var statearr_49710_49773 = state_49635__$1;
(statearr_49710_49773[(2)] = inst_49560);

(statearr_49710_49773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (42))){
var state_49635__$1 = state_49635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49635__$1,(45),dchan);
} else {
if((state_val_49636 === (37))){
var inst_49594 = (state_49635[(25)]);
var inst_49603 = (state_49635[(23)]);
var inst_49503 = (state_49635[(12)]);
var inst_49603__$1 = cljs.core.first.call(null,inst_49594);
var inst_49604 = cljs.core.async.put_BANG_.call(null,inst_49603__$1,inst_49503,done);
var state_49635__$1 = (function (){var statearr_49711 = state_49635;
(statearr_49711[(23)] = inst_49603__$1);

return statearr_49711;
})();
if(cljs.core.truth_(inst_49604)){
var statearr_49712_49774 = state_49635__$1;
(statearr_49712_49774[(1)] = (39));

} else {
var statearr_49713_49775 = state_49635__$1;
(statearr_49713_49775[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49636 === (8))){
var inst_49515 = (state_49635[(15)]);
var inst_49514 = (state_49635[(16)]);
var inst_49517 = (inst_49515 < inst_49514);
var inst_49518 = inst_49517;
var state_49635__$1 = state_49635;
if(cljs.core.truth_(inst_49518)){
var statearr_49714_49776 = state_49635__$1;
(statearr_49714_49776[(1)] = (10));

} else {
var statearr_49715_49777 = state_49635__$1;
(statearr_49715_49777[(1)] = (11));

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
});})(c__48370__auto___49723,cs,m,dchan,dctr,done))
;
return ((function (switch__48258__auto__,c__48370__auto___49723,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48259__auto__ = null;
var cljs$core$async$mult_$_state_machine__48259__auto____0 = (function (){
var statearr_49719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49719[(0)] = cljs$core$async$mult_$_state_machine__48259__auto__);

(statearr_49719[(1)] = (1));

return statearr_49719;
});
var cljs$core$async$mult_$_state_machine__48259__auto____1 = (function (state_49635){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_49635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e49720){if((e49720 instanceof Object)){
var ex__48262__auto__ = e49720;
var statearr_49721_49778 = state_49635;
(statearr_49721_49778[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49779 = state_49635;
state_49635 = G__49779;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48259__auto__ = function(state_49635){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48259__auto____1.call(this,state_49635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48259__auto____0;
cljs$core$async$mult_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48259__auto____1;
return cljs$core$async$mult_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___49723,cs,m,dchan,dctr,done))
})();
var state__48372__auto__ = (function (){var statearr_49722 = f__48371__auto__.call(null);
(statearr_49722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___49723);

return statearr_49722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___49723,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args49780 = [];
var len__45172__auto___49783 = arguments.length;
var i__45173__auto___49784 = (0);
while(true){
if((i__45173__auto___49784 < len__45172__auto___49783)){
args49780.push((arguments[i__45173__auto___49784]));

var G__49785 = (i__45173__auto___49784 + (1));
i__45173__auto___49784 = G__49785;
continue;
} else {
}
break;
}

var G__49782 = args49780.length;
switch (G__49782) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49780.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m,ch);
} else {
var m__44761__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m,ch);
} else {
var m__44761__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m);
} else {
var m__44761__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m,state_map);
} else {
var m__44761__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44760__auto__ = (((m == null))?null:m);
var m__44761__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,m,mode);
} else {
var m__44761__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45179__auto__ = [];
var len__45172__auto___49797 = arguments.length;
var i__45173__auto___49798 = (0);
while(true){
if((i__45173__auto___49798 < len__45172__auto___49797)){
args__45179__auto__.push((arguments[i__45173__auto___49798]));

var G__49799 = (i__45173__auto___49798 + (1));
i__45173__auto___49798 = G__49799;
continue;
} else {
}
break;
}

var argseq__45180__auto__ = ((((3) < args__45179__auto__.length))?(new cljs.core.IndexedSeq(args__45179__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45180__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49791){
var map__49792 = p__49791;
var map__49792__$1 = ((((!((map__49792 == null)))?((((map__49792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49792):map__49792);
var opts = map__49792__$1;
var statearr_49794_49800 = state;
(statearr_49794_49800[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__49792,map__49792__$1,opts){
return (function (val){
var statearr_49795_49801 = state;
(statearr_49795_49801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49792,map__49792__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_49796_49802 = state;
(statearr_49796_49802[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49787){
var G__49788 = cljs.core.first.call(null,seq49787);
var seq49787__$1 = cljs.core.next.call(null,seq49787);
var G__49789 = cljs.core.first.call(null,seq49787__$1);
var seq49787__$2 = cljs.core.next.call(null,seq49787__$1);
var G__49790 = cljs.core.first.call(null,seq49787__$2);
var seq49787__$3 = cljs.core.next.call(null,seq49787__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49788,G__49789,G__49790,seq49787__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49968 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49969){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49969 = meta49969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49970,meta49969__$1){
var self__ = this;
var _49970__$1 = this;
return (new cljs.core.async.t_cljs$core$async49968(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49969__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49970){
var self__ = this;
var _49970__$1 = this;
return self__.meta49969;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49969","meta49969",625561220,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49968";

cljs.core.async.t_cljs$core$async49968.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async49968");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49968 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49968(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49969){
return (new cljs.core.async.t_cljs$core$async49968(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49969));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49968(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48370__auto___50133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50070){
var state_val_50071 = (state_50070[(1)]);
if((state_val_50071 === (7))){
var inst_49986 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
var statearr_50072_50134 = state_50070__$1;
(statearr_50072_50134[(2)] = inst_49986);

(statearr_50072_50134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (20))){
var inst_49998 = (state_50070[(7)]);
var state_50070__$1 = state_50070;
var statearr_50073_50135 = state_50070__$1;
(statearr_50073_50135[(2)] = inst_49998);

(statearr_50073_50135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (27))){
var state_50070__$1 = state_50070;
var statearr_50074_50136 = state_50070__$1;
(statearr_50074_50136[(2)] = null);

(statearr_50074_50136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (1))){
var inst_49974 = (state_50070[(8)]);
var inst_49974__$1 = calc_state.call(null);
var inst_49976 = (inst_49974__$1 == null);
var inst_49977 = cljs.core.not.call(null,inst_49976);
var state_50070__$1 = (function (){var statearr_50075 = state_50070;
(statearr_50075[(8)] = inst_49974__$1);

return statearr_50075;
})();
if(inst_49977){
var statearr_50076_50137 = state_50070__$1;
(statearr_50076_50137[(1)] = (2));

} else {
var statearr_50077_50138 = state_50070__$1;
(statearr_50077_50138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (24))){
var inst_50030 = (state_50070[(9)]);
var inst_50021 = (state_50070[(10)]);
var inst_50044 = (state_50070[(11)]);
var inst_50044__$1 = inst_50021.call(null,inst_50030);
var state_50070__$1 = (function (){var statearr_50078 = state_50070;
(statearr_50078[(11)] = inst_50044__$1);

return statearr_50078;
})();
if(cljs.core.truth_(inst_50044__$1)){
var statearr_50079_50139 = state_50070__$1;
(statearr_50079_50139[(1)] = (29));

} else {
var statearr_50080_50140 = state_50070__$1;
(statearr_50080_50140[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (4))){
var inst_49989 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_49989)){
var statearr_50081_50141 = state_50070__$1;
(statearr_50081_50141[(1)] = (8));

} else {
var statearr_50082_50142 = state_50070__$1;
(statearr_50082_50142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (15))){
var inst_50015 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_50015)){
var statearr_50083_50143 = state_50070__$1;
(statearr_50083_50143[(1)] = (19));

} else {
var statearr_50084_50144 = state_50070__$1;
(statearr_50084_50144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (21))){
var inst_50020 = (state_50070[(12)]);
var inst_50020__$1 = (state_50070[(2)]);
var inst_50021 = cljs.core.get.call(null,inst_50020__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50022 = cljs.core.get.call(null,inst_50020__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50023 = cljs.core.get.call(null,inst_50020__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50070__$1 = (function (){var statearr_50085 = state_50070;
(statearr_50085[(10)] = inst_50021);

(statearr_50085[(12)] = inst_50020__$1);

(statearr_50085[(13)] = inst_50022);

return statearr_50085;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_50070__$1,(22),inst_50023);
} else {
if((state_val_50071 === (31))){
var inst_50052 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_50052)){
var statearr_50086_50145 = state_50070__$1;
(statearr_50086_50145[(1)] = (32));

} else {
var statearr_50087_50146 = state_50070__$1;
(statearr_50087_50146[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (32))){
var inst_50029 = (state_50070[(14)]);
var state_50070__$1 = state_50070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50070__$1,(35),out,inst_50029);
} else {
if((state_val_50071 === (33))){
var inst_50020 = (state_50070[(12)]);
var inst_49998 = inst_50020;
var state_50070__$1 = (function (){var statearr_50088 = state_50070;
(statearr_50088[(7)] = inst_49998);

return statearr_50088;
})();
var statearr_50089_50147 = state_50070__$1;
(statearr_50089_50147[(2)] = null);

(statearr_50089_50147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (13))){
var inst_49998 = (state_50070[(7)]);
var inst_50005 = inst_49998.cljs$lang$protocol_mask$partition0$;
var inst_50006 = (inst_50005 & (64));
var inst_50007 = inst_49998.cljs$core$ISeq$;
var inst_50008 = (inst_50006) || (inst_50007);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_50008)){
var statearr_50090_50148 = state_50070__$1;
(statearr_50090_50148[(1)] = (16));

} else {
var statearr_50091_50149 = state_50070__$1;
(statearr_50091_50149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (22))){
var inst_50030 = (state_50070[(9)]);
var inst_50029 = (state_50070[(14)]);
var inst_50028 = (state_50070[(2)]);
var inst_50029__$1 = cljs.core.nth.call(null,inst_50028,(0),null);
var inst_50030__$1 = cljs.core.nth.call(null,inst_50028,(1),null);
var inst_50031 = (inst_50029__$1 == null);
var inst_50032 = cljs.core._EQ_.call(null,inst_50030__$1,change);
var inst_50033 = (inst_50031) || (inst_50032);
var state_50070__$1 = (function (){var statearr_50092 = state_50070;
(statearr_50092[(9)] = inst_50030__$1);

(statearr_50092[(14)] = inst_50029__$1);

return statearr_50092;
})();
if(cljs.core.truth_(inst_50033)){
var statearr_50093_50150 = state_50070__$1;
(statearr_50093_50150[(1)] = (23));

} else {
var statearr_50094_50151 = state_50070__$1;
(statearr_50094_50151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (36))){
var inst_50020 = (state_50070[(12)]);
var inst_49998 = inst_50020;
var state_50070__$1 = (function (){var statearr_50095 = state_50070;
(statearr_50095[(7)] = inst_49998);

return statearr_50095;
})();
var statearr_50096_50152 = state_50070__$1;
(statearr_50096_50152[(2)] = null);

(statearr_50096_50152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (29))){
var inst_50044 = (state_50070[(11)]);
var state_50070__$1 = state_50070;
var statearr_50097_50153 = state_50070__$1;
(statearr_50097_50153[(2)] = inst_50044);

(statearr_50097_50153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (6))){
var state_50070__$1 = state_50070;
var statearr_50098_50154 = state_50070__$1;
(statearr_50098_50154[(2)] = false);

(statearr_50098_50154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (28))){
var inst_50040 = (state_50070[(2)]);
var inst_50041 = calc_state.call(null);
var inst_49998 = inst_50041;
var state_50070__$1 = (function (){var statearr_50099 = state_50070;
(statearr_50099[(7)] = inst_49998);

(statearr_50099[(15)] = inst_50040);

return statearr_50099;
})();
var statearr_50100_50155 = state_50070__$1;
(statearr_50100_50155[(2)] = null);

(statearr_50100_50155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (25))){
var inst_50066 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
var statearr_50101_50156 = state_50070__$1;
(statearr_50101_50156[(2)] = inst_50066);

(statearr_50101_50156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (34))){
var inst_50064 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
var statearr_50102_50157 = state_50070__$1;
(statearr_50102_50157[(2)] = inst_50064);

(statearr_50102_50157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (17))){
var state_50070__$1 = state_50070;
var statearr_50103_50158 = state_50070__$1;
(statearr_50103_50158[(2)] = false);

(statearr_50103_50158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (3))){
var state_50070__$1 = state_50070;
var statearr_50104_50159 = state_50070__$1;
(statearr_50104_50159[(2)] = false);

(statearr_50104_50159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (12))){
var inst_50068 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50070__$1,inst_50068);
} else {
if((state_val_50071 === (2))){
var inst_49974 = (state_50070[(8)]);
var inst_49979 = inst_49974.cljs$lang$protocol_mask$partition0$;
var inst_49980 = (inst_49979 & (64));
var inst_49981 = inst_49974.cljs$core$ISeq$;
var inst_49982 = (inst_49980) || (inst_49981);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_49982)){
var statearr_50105_50160 = state_50070__$1;
(statearr_50105_50160[(1)] = (5));

} else {
var statearr_50106_50161 = state_50070__$1;
(statearr_50106_50161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (23))){
var inst_50029 = (state_50070[(14)]);
var inst_50035 = (inst_50029 == null);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_50035)){
var statearr_50107_50162 = state_50070__$1;
(statearr_50107_50162[(1)] = (26));

} else {
var statearr_50108_50163 = state_50070__$1;
(statearr_50108_50163[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (35))){
var inst_50055 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
if(cljs.core.truth_(inst_50055)){
var statearr_50109_50164 = state_50070__$1;
(statearr_50109_50164[(1)] = (36));

} else {
var statearr_50110_50165 = state_50070__$1;
(statearr_50110_50165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (19))){
var inst_49998 = (state_50070[(7)]);
var inst_50017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49998);
var state_50070__$1 = state_50070;
var statearr_50111_50166 = state_50070__$1;
(statearr_50111_50166[(2)] = inst_50017);

(statearr_50111_50166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (11))){
var inst_49998 = (state_50070[(7)]);
var inst_50002 = (inst_49998 == null);
var inst_50003 = cljs.core.not.call(null,inst_50002);
var state_50070__$1 = state_50070;
if(inst_50003){
var statearr_50112_50167 = state_50070__$1;
(statearr_50112_50167[(1)] = (13));

} else {
var statearr_50113_50168 = state_50070__$1;
(statearr_50113_50168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (9))){
var inst_49974 = (state_50070[(8)]);
var state_50070__$1 = state_50070;
var statearr_50114_50169 = state_50070__$1;
(statearr_50114_50169[(2)] = inst_49974);

(statearr_50114_50169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (5))){
var state_50070__$1 = state_50070;
var statearr_50115_50170 = state_50070__$1;
(statearr_50115_50170[(2)] = true);

(statearr_50115_50170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (14))){
var state_50070__$1 = state_50070;
var statearr_50116_50171 = state_50070__$1;
(statearr_50116_50171[(2)] = false);

(statearr_50116_50171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (26))){
var inst_50030 = (state_50070[(9)]);
var inst_50037 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_50030);
var state_50070__$1 = state_50070;
var statearr_50117_50172 = state_50070__$1;
(statearr_50117_50172[(2)] = inst_50037);

(statearr_50117_50172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (16))){
var state_50070__$1 = state_50070;
var statearr_50118_50173 = state_50070__$1;
(statearr_50118_50173[(2)] = true);

(statearr_50118_50173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (38))){
var inst_50060 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
var statearr_50119_50174 = state_50070__$1;
(statearr_50119_50174[(2)] = inst_50060);

(statearr_50119_50174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (30))){
var inst_50030 = (state_50070[(9)]);
var inst_50021 = (state_50070[(10)]);
var inst_50022 = (state_50070[(13)]);
var inst_50047 = cljs.core.empty_QMARK_.call(null,inst_50021);
var inst_50048 = inst_50022.call(null,inst_50030);
var inst_50049 = cljs.core.not.call(null,inst_50048);
var inst_50050 = (inst_50047) && (inst_50049);
var state_50070__$1 = state_50070;
var statearr_50120_50175 = state_50070__$1;
(statearr_50120_50175[(2)] = inst_50050);

(statearr_50120_50175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (10))){
var inst_49974 = (state_50070[(8)]);
var inst_49994 = (state_50070[(2)]);
var inst_49995 = cljs.core.get.call(null,inst_49994,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49996 = cljs.core.get.call(null,inst_49994,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49997 = cljs.core.get.call(null,inst_49994,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49998 = inst_49974;
var state_50070__$1 = (function (){var statearr_50121 = state_50070;
(statearr_50121[(16)] = inst_49996);

(statearr_50121[(7)] = inst_49998);

(statearr_50121[(17)] = inst_49995);

(statearr_50121[(18)] = inst_49997);

return statearr_50121;
})();
var statearr_50122_50176 = state_50070__$1;
(statearr_50122_50176[(2)] = null);

(statearr_50122_50176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (18))){
var inst_50012 = (state_50070[(2)]);
var state_50070__$1 = state_50070;
var statearr_50123_50177 = state_50070__$1;
(statearr_50123_50177[(2)] = inst_50012);

(statearr_50123_50177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (37))){
var state_50070__$1 = state_50070;
var statearr_50124_50178 = state_50070__$1;
(statearr_50124_50178[(2)] = null);

(statearr_50124_50178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50071 === (8))){
var inst_49974 = (state_50070[(8)]);
var inst_49991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49974);
var state_50070__$1 = state_50070;
var statearr_50125_50179 = state_50070__$1;
(statearr_50125_50179[(2)] = inst_49991);

(statearr_50125_50179[(1)] = (10));


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
});})(c__48370__auto___50133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48258__auto__,c__48370__auto___50133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48259__auto__ = null;
var cljs$core$async$mix_$_state_machine__48259__auto____0 = (function (){
var statearr_50129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50129[(0)] = cljs$core$async$mix_$_state_machine__48259__auto__);

(statearr_50129[(1)] = (1));

return statearr_50129;
});
var cljs$core$async$mix_$_state_machine__48259__auto____1 = (function (state_50070){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50130){if((e50130 instanceof Object)){
var ex__48262__auto__ = e50130;
var statearr_50131_50180 = state_50070;
(statearr_50131_50180[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50181 = state_50070;
state_50070 = G__50181;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48259__auto__ = function(state_50070){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48259__auto____1.call(this,state_50070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48259__auto____0;
cljs$core$async$mix_$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48259__auto____1;
return cljs$core$async$mix_$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48372__auto__ = (function (){var statearr_50132 = f__48371__auto__.call(null);
(statearr_50132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50133);

return statearr_50132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44760__auto__ = (((p == null))?null:p);
var m__44761__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44761__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44760__auto__ = (((p == null))?null:p);
var m__44761__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,p,v,ch);
} else {
var m__44761__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args50182 = [];
var len__45172__auto___50185 = arguments.length;
var i__45173__auto___50186 = (0);
while(true){
if((i__45173__auto___50186 < len__45172__auto___50185)){
args50182.push((arguments[i__45173__auto___50186]));

var G__50187 = (i__45173__auto___50186 + (1));
i__45173__auto___50186 = G__50187;
continue;
} else {
}
break;
}

var G__50184 = args50182.length;
switch (G__50184) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50182.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44760__auto__ = (((p == null))?null:p);
var m__44761__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,p);
} else {
var m__44761__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44760__auto__ = (((p == null))?null:p);
var m__44761__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44760__auto__)]);
if(!((m__44761__auto__ == null))){
return m__44761__auto__.call(null,p,v);
} else {
var m__44761__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44761__auto____$1 == null))){
return m__44761__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args50190 = [];
var len__45172__auto___50315 = arguments.length;
var i__45173__auto___50316 = (0);
while(true){
if((i__45173__auto___50316 < len__45172__auto___50315)){
args50190.push((arguments[i__45173__auto___50316]));

var G__50317 = (i__45173__auto___50316 + (1));
i__45173__auto___50316 = G__50317;
continue;
} else {
}
break;
}

var G__50192 = args50190.length;
switch (G__50192) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50190.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44097__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44097__auto__)){
return or__44097__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44097__auto__,mults){
return (function (p1__50189_SHARP_){
if(cljs.core.truth_(p1__50189_SHARP_.call(null,topic))){
return p1__50189_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50189_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44097__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50193 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50194){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50194 = meta50194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50195,meta50194__$1){
var self__ = this;
var _50195__$1 = this;
return (new cljs.core.async.t_cljs$core$async50193(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50194__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50195){
var self__ = this;
var _50195__$1 = this;
return self__.meta50194;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50194","meta50194",-1548729962,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50193";

cljs.core.async.t_cljs$core$async50193.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async50193");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50193 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50194){
return (new cljs.core.async.t_cljs$core$async50193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50194));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50193(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48370__auto___50319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50319,mults,ensure_mult,p){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50319,mults,ensure_mult,p){
return (function (state_50267){
var state_val_50268 = (state_50267[(1)]);
if((state_val_50268 === (7))){
var inst_50263 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
var statearr_50269_50320 = state_50267__$1;
(statearr_50269_50320[(2)] = inst_50263);

(statearr_50269_50320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (20))){
var state_50267__$1 = state_50267;
var statearr_50270_50321 = state_50267__$1;
(statearr_50270_50321[(2)] = null);

(statearr_50270_50321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (1))){
var state_50267__$1 = state_50267;
var statearr_50271_50322 = state_50267__$1;
(statearr_50271_50322[(2)] = null);

(statearr_50271_50322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (24))){
var inst_50246 = (state_50267[(7)]);
var inst_50255 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50246);
var state_50267__$1 = state_50267;
var statearr_50272_50323 = state_50267__$1;
(statearr_50272_50323[(2)] = inst_50255);

(statearr_50272_50323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (4))){
var inst_50198 = (state_50267[(8)]);
var inst_50198__$1 = (state_50267[(2)]);
var inst_50199 = (inst_50198__$1 == null);
var state_50267__$1 = (function (){var statearr_50273 = state_50267;
(statearr_50273[(8)] = inst_50198__$1);

return statearr_50273;
})();
if(cljs.core.truth_(inst_50199)){
var statearr_50274_50324 = state_50267__$1;
(statearr_50274_50324[(1)] = (5));

} else {
var statearr_50275_50325 = state_50267__$1;
(statearr_50275_50325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (15))){
var inst_50240 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
var statearr_50276_50326 = state_50267__$1;
(statearr_50276_50326[(2)] = inst_50240);

(statearr_50276_50326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (21))){
var inst_50260 = (state_50267[(2)]);
var state_50267__$1 = (function (){var statearr_50277 = state_50267;
(statearr_50277[(9)] = inst_50260);

return statearr_50277;
})();
var statearr_50278_50327 = state_50267__$1;
(statearr_50278_50327[(2)] = null);

(statearr_50278_50327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (13))){
var inst_50222 = (state_50267[(10)]);
var inst_50224 = cljs.core.chunked_seq_QMARK_.call(null,inst_50222);
var state_50267__$1 = state_50267;
if(inst_50224){
var statearr_50279_50328 = state_50267__$1;
(statearr_50279_50328[(1)] = (16));

} else {
var statearr_50280_50329 = state_50267__$1;
(statearr_50280_50329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (22))){
var inst_50252 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
if(cljs.core.truth_(inst_50252)){
var statearr_50281_50330 = state_50267__$1;
(statearr_50281_50330[(1)] = (23));

} else {
var statearr_50282_50331 = state_50267__$1;
(statearr_50282_50331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (6))){
var inst_50198 = (state_50267[(8)]);
var inst_50248 = (state_50267[(11)]);
var inst_50246 = (state_50267[(7)]);
var inst_50246__$1 = topic_fn.call(null,inst_50198);
var inst_50247 = cljs.core.deref.call(null,mults);
var inst_50248__$1 = cljs.core.get.call(null,inst_50247,inst_50246__$1);
var state_50267__$1 = (function (){var statearr_50283 = state_50267;
(statearr_50283[(11)] = inst_50248__$1);

(statearr_50283[(7)] = inst_50246__$1);

return statearr_50283;
})();
if(cljs.core.truth_(inst_50248__$1)){
var statearr_50284_50332 = state_50267__$1;
(statearr_50284_50332[(1)] = (19));

} else {
var statearr_50285_50333 = state_50267__$1;
(statearr_50285_50333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (25))){
var inst_50257 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
var statearr_50286_50334 = state_50267__$1;
(statearr_50286_50334[(2)] = inst_50257);

(statearr_50286_50334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (17))){
var inst_50222 = (state_50267[(10)]);
var inst_50231 = cljs.core.first.call(null,inst_50222);
var inst_50232 = cljs.core.async.muxch_STAR_.call(null,inst_50231);
var inst_50233 = cljs.core.async.close_BANG_.call(null,inst_50232);
var inst_50234 = cljs.core.next.call(null,inst_50222);
var inst_50208 = inst_50234;
var inst_50209 = null;
var inst_50210 = (0);
var inst_50211 = (0);
var state_50267__$1 = (function (){var statearr_50287 = state_50267;
(statearr_50287[(12)] = inst_50210);

(statearr_50287[(13)] = inst_50209);

(statearr_50287[(14)] = inst_50208);

(statearr_50287[(15)] = inst_50233);

(statearr_50287[(16)] = inst_50211);

return statearr_50287;
})();
var statearr_50288_50335 = state_50267__$1;
(statearr_50288_50335[(2)] = null);

(statearr_50288_50335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (3))){
var inst_50265 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50267__$1,inst_50265);
} else {
if((state_val_50268 === (12))){
var inst_50242 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
var statearr_50289_50336 = state_50267__$1;
(statearr_50289_50336[(2)] = inst_50242);

(statearr_50289_50336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (2))){
var state_50267__$1 = state_50267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50267__$1,(4),ch);
} else {
if((state_val_50268 === (23))){
var state_50267__$1 = state_50267;
var statearr_50290_50337 = state_50267__$1;
(statearr_50290_50337[(2)] = null);

(statearr_50290_50337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (19))){
var inst_50198 = (state_50267[(8)]);
var inst_50248 = (state_50267[(11)]);
var inst_50250 = cljs.core.async.muxch_STAR_.call(null,inst_50248);
var state_50267__$1 = state_50267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50267__$1,(22),inst_50250,inst_50198);
} else {
if((state_val_50268 === (11))){
var inst_50222 = (state_50267[(10)]);
var inst_50208 = (state_50267[(14)]);
var inst_50222__$1 = cljs.core.seq.call(null,inst_50208);
var state_50267__$1 = (function (){var statearr_50291 = state_50267;
(statearr_50291[(10)] = inst_50222__$1);

return statearr_50291;
})();
if(inst_50222__$1){
var statearr_50292_50338 = state_50267__$1;
(statearr_50292_50338[(1)] = (13));

} else {
var statearr_50293_50339 = state_50267__$1;
(statearr_50293_50339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (9))){
var inst_50244 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
var statearr_50294_50340 = state_50267__$1;
(statearr_50294_50340[(2)] = inst_50244);

(statearr_50294_50340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (5))){
var inst_50205 = cljs.core.deref.call(null,mults);
var inst_50206 = cljs.core.vals.call(null,inst_50205);
var inst_50207 = cljs.core.seq.call(null,inst_50206);
var inst_50208 = inst_50207;
var inst_50209 = null;
var inst_50210 = (0);
var inst_50211 = (0);
var state_50267__$1 = (function (){var statearr_50295 = state_50267;
(statearr_50295[(12)] = inst_50210);

(statearr_50295[(13)] = inst_50209);

(statearr_50295[(14)] = inst_50208);

(statearr_50295[(16)] = inst_50211);

return statearr_50295;
})();
var statearr_50296_50341 = state_50267__$1;
(statearr_50296_50341[(2)] = null);

(statearr_50296_50341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (14))){
var state_50267__$1 = state_50267;
var statearr_50300_50342 = state_50267__$1;
(statearr_50300_50342[(2)] = null);

(statearr_50300_50342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (16))){
var inst_50222 = (state_50267[(10)]);
var inst_50226 = cljs.core.chunk_first.call(null,inst_50222);
var inst_50227 = cljs.core.chunk_rest.call(null,inst_50222);
var inst_50228 = cljs.core.count.call(null,inst_50226);
var inst_50208 = inst_50227;
var inst_50209 = inst_50226;
var inst_50210 = inst_50228;
var inst_50211 = (0);
var state_50267__$1 = (function (){var statearr_50301 = state_50267;
(statearr_50301[(12)] = inst_50210);

(statearr_50301[(13)] = inst_50209);

(statearr_50301[(14)] = inst_50208);

(statearr_50301[(16)] = inst_50211);

return statearr_50301;
})();
var statearr_50302_50343 = state_50267__$1;
(statearr_50302_50343[(2)] = null);

(statearr_50302_50343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (10))){
var inst_50210 = (state_50267[(12)]);
var inst_50209 = (state_50267[(13)]);
var inst_50208 = (state_50267[(14)]);
var inst_50211 = (state_50267[(16)]);
var inst_50216 = cljs.core._nth.call(null,inst_50209,inst_50211);
var inst_50217 = cljs.core.async.muxch_STAR_.call(null,inst_50216);
var inst_50218 = cljs.core.async.close_BANG_.call(null,inst_50217);
var inst_50219 = (inst_50211 + (1));
var tmp50297 = inst_50210;
var tmp50298 = inst_50209;
var tmp50299 = inst_50208;
var inst_50208__$1 = tmp50299;
var inst_50209__$1 = tmp50298;
var inst_50210__$1 = tmp50297;
var inst_50211__$1 = inst_50219;
var state_50267__$1 = (function (){var statearr_50303 = state_50267;
(statearr_50303[(12)] = inst_50210__$1);

(statearr_50303[(17)] = inst_50218);

(statearr_50303[(13)] = inst_50209__$1);

(statearr_50303[(14)] = inst_50208__$1);

(statearr_50303[(16)] = inst_50211__$1);

return statearr_50303;
})();
var statearr_50304_50344 = state_50267__$1;
(statearr_50304_50344[(2)] = null);

(statearr_50304_50344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (18))){
var inst_50237 = (state_50267[(2)]);
var state_50267__$1 = state_50267;
var statearr_50305_50345 = state_50267__$1;
(statearr_50305_50345[(2)] = inst_50237);

(statearr_50305_50345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50268 === (8))){
var inst_50210 = (state_50267[(12)]);
var inst_50211 = (state_50267[(16)]);
var inst_50213 = (inst_50211 < inst_50210);
var inst_50214 = inst_50213;
var state_50267__$1 = state_50267;
if(cljs.core.truth_(inst_50214)){
var statearr_50306_50346 = state_50267__$1;
(statearr_50306_50346[(1)] = (10));

} else {
var statearr_50307_50347 = state_50267__$1;
(statearr_50307_50347[(1)] = (11));

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
});})(c__48370__auto___50319,mults,ensure_mult,p))
;
return ((function (switch__48258__auto__,c__48370__auto___50319,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_50311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50311[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_50311[(1)] = (1));

return statearr_50311;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_50267){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50312){if((e50312 instanceof Object)){
var ex__48262__auto__ = e50312;
var statearr_50313_50348 = state_50267;
(statearr_50313_50348[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50349 = state_50267;
state_50267 = G__50349;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_50267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_50267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50319,mults,ensure_mult,p))
})();
var state__48372__auto__ = (function (){var statearr_50314 = f__48371__auto__.call(null);
(statearr_50314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50319);

return statearr_50314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50319,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args50350 = [];
var len__45172__auto___50353 = arguments.length;
var i__45173__auto___50354 = (0);
while(true){
if((i__45173__auto___50354 < len__45172__auto___50353)){
args50350.push((arguments[i__45173__auto___50354]));

var G__50355 = (i__45173__auto___50354 + (1));
i__45173__auto___50354 = G__50355;
continue;
} else {
}
break;
}

var G__50352 = args50350.length;
switch (G__50352) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50350.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args50357 = [];
var len__45172__auto___50360 = arguments.length;
var i__45173__auto___50361 = (0);
while(true){
if((i__45173__auto___50361 < len__45172__auto___50360)){
args50357.push((arguments[i__45173__auto___50361]));

var G__50362 = (i__45173__auto___50361 + (1));
i__45173__auto___50361 = G__50362;
continue;
} else {
}
break;
}

var G__50359 = args50357.length;
switch (G__50359) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50357.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args50364 = [];
var len__45172__auto___50435 = arguments.length;
var i__45173__auto___50436 = (0);
while(true){
if((i__45173__auto___50436 < len__45172__auto___50435)){
args50364.push((arguments[i__45173__auto___50436]));

var G__50437 = (i__45173__auto___50436 + (1));
i__45173__auto___50436 = G__50437;
continue;
} else {
}
break;
}

var G__50366 = args50364.length;
switch (G__50366) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50364.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__48370__auto___50439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50405){
var state_val_50406 = (state_50405[(1)]);
if((state_val_50406 === (7))){
var state_50405__$1 = state_50405;
var statearr_50407_50440 = state_50405__$1;
(statearr_50407_50440[(2)] = null);

(statearr_50407_50440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (1))){
var state_50405__$1 = state_50405;
var statearr_50408_50441 = state_50405__$1;
(statearr_50408_50441[(2)] = null);

(statearr_50408_50441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (4))){
var inst_50369 = (state_50405[(7)]);
var inst_50371 = (inst_50369 < cnt);
var state_50405__$1 = state_50405;
if(cljs.core.truth_(inst_50371)){
var statearr_50409_50442 = state_50405__$1;
(statearr_50409_50442[(1)] = (6));

} else {
var statearr_50410_50443 = state_50405__$1;
(statearr_50410_50443[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (15))){
var inst_50401 = (state_50405[(2)]);
var state_50405__$1 = state_50405;
var statearr_50411_50444 = state_50405__$1;
(statearr_50411_50444[(2)] = inst_50401);

(statearr_50411_50444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (13))){
var inst_50394 = cljs.core.async.close_BANG_.call(null,out);
var state_50405__$1 = state_50405;
var statearr_50412_50445 = state_50405__$1;
(statearr_50412_50445[(2)] = inst_50394);

(statearr_50412_50445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (6))){
var state_50405__$1 = state_50405;
var statearr_50413_50446 = state_50405__$1;
(statearr_50413_50446[(2)] = null);

(statearr_50413_50446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (3))){
var inst_50403 = (state_50405[(2)]);
var state_50405__$1 = state_50405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50405__$1,inst_50403);
} else {
if((state_val_50406 === (12))){
var inst_50391 = (state_50405[(8)]);
var inst_50391__$1 = (state_50405[(2)]);
var inst_50392 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50391__$1);
var state_50405__$1 = (function (){var statearr_50414 = state_50405;
(statearr_50414[(8)] = inst_50391__$1);

return statearr_50414;
})();
if(cljs.core.truth_(inst_50392)){
var statearr_50415_50447 = state_50405__$1;
(statearr_50415_50447[(1)] = (13));

} else {
var statearr_50416_50448 = state_50405__$1;
(statearr_50416_50448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (2))){
var inst_50368 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50369 = (0);
var state_50405__$1 = (function (){var statearr_50417 = state_50405;
(statearr_50417[(7)] = inst_50369);

(statearr_50417[(9)] = inst_50368);

return statearr_50417;
})();
var statearr_50418_50449 = state_50405__$1;
(statearr_50418_50449[(2)] = null);

(statearr_50418_50449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (11))){
var inst_50369 = (state_50405[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50405,(10),Object,null,(9));
var inst_50378 = chs__$1.call(null,inst_50369);
var inst_50379 = done.call(null,inst_50369);
var inst_50380 = cljs.core.async.take_BANG_.call(null,inst_50378,inst_50379);
var state_50405__$1 = state_50405;
var statearr_50419_50450 = state_50405__$1;
(statearr_50419_50450[(2)] = inst_50380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (9))){
var inst_50369 = (state_50405[(7)]);
var inst_50382 = (state_50405[(2)]);
var inst_50383 = (inst_50369 + (1));
var inst_50369__$1 = inst_50383;
var state_50405__$1 = (function (){var statearr_50420 = state_50405;
(statearr_50420[(10)] = inst_50382);

(statearr_50420[(7)] = inst_50369__$1);

return statearr_50420;
})();
var statearr_50421_50451 = state_50405__$1;
(statearr_50421_50451[(2)] = null);

(statearr_50421_50451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (5))){
var inst_50389 = (state_50405[(2)]);
var state_50405__$1 = (function (){var statearr_50422 = state_50405;
(statearr_50422[(11)] = inst_50389);

return statearr_50422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50405__$1,(12),dchan);
} else {
if((state_val_50406 === (14))){
var inst_50391 = (state_50405[(8)]);
var inst_50396 = cljs.core.apply.call(null,f,inst_50391);
var state_50405__$1 = state_50405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50405__$1,(16),out,inst_50396);
} else {
if((state_val_50406 === (16))){
var inst_50398 = (state_50405[(2)]);
var state_50405__$1 = (function (){var statearr_50423 = state_50405;
(statearr_50423[(12)] = inst_50398);

return statearr_50423;
})();
var statearr_50424_50452 = state_50405__$1;
(statearr_50424_50452[(2)] = null);

(statearr_50424_50452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (10))){
var inst_50373 = (state_50405[(2)]);
var inst_50374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50405__$1 = (function (){var statearr_50425 = state_50405;
(statearr_50425[(13)] = inst_50373);

return statearr_50425;
})();
var statearr_50426_50453 = state_50405__$1;
(statearr_50426_50453[(2)] = inst_50374);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50406 === (8))){
var inst_50387 = (state_50405[(2)]);
var state_50405__$1 = state_50405;
var statearr_50427_50454 = state_50405__$1;
(statearr_50427_50454[(2)] = inst_50387);

(statearr_50427_50454[(1)] = (5));


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
});})(c__48370__auto___50439,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48258__auto__,c__48370__auto___50439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_50431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50431[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_50431[(1)] = (1));

return statearr_50431;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_50405){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50432){if((e50432 instanceof Object)){
var ex__48262__auto__ = e50432;
var statearr_50433_50455 = state_50405;
(statearr_50433_50455[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50456 = state_50405;
state_50405 = G__50456;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_50405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_50405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50439,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48372__auto__ = (function (){var statearr_50434 = f__48371__auto__.call(null);
(statearr_50434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50439);

return statearr_50434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50439,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args50458 = [];
var len__45172__auto___50516 = arguments.length;
var i__45173__auto___50517 = (0);
while(true){
if((i__45173__auto___50517 < len__45172__auto___50516)){
args50458.push((arguments[i__45173__auto___50517]));

var G__50518 = (i__45173__auto___50517 + (1));
i__45173__auto___50517 = G__50518;
continue;
} else {
}
break;
}

var G__50460 = args50458.length;
switch (G__50460) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50458.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48370__auto___50520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50520,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50520,out){
return (function (state_50492){
var state_val_50493 = (state_50492[(1)]);
if((state_val_50493 === (7))){
var inst_50472 = (state_50492[(7)]);
var inst_50471 = (state_50492[(8)]);
var inst_50471__$1 = (state_50492[(2)]);
var inst_50472__$1 = cljs.core.nth.call(null,inst_50471__$1,(0),null);
var inst_50473 = cljs.core.nth.call(null,inst_50471__$1,(1),null);
var inst_50474 = (inst_50472__$1 == null);
var state_50492__$1 = (function (){var statearr_50494 = state_50492;
(statearr_50494[(7)] = inst_50472__$1);

(statearr_50494[(9)] = inst_50473);

(statearr_50494[(8)] = inst_50471__$1);

return statearr_50494;
})();
if(cljs.core.truth_(inst_50474)){
var statearr_50495_50521 = state_50492__$1;
(statearr_50495_50521[(1)] = (8));

} else {
var statearr_50496_50522 = state_50492__$1;
(statearr_50496_50522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (1))){
var inst_50461 = cljs.core.vec.call(null,chs);
var inst_50462 = inst_50461;
var state_50492__$1 = (function (){var statearr_50497 = state_50492;
(statearr_50497[(10)] = inst_50462);

return statearr_50497;
})();
var statearr_50498_50523 = state_50492__$1;
(statearr_50498_50523[(2)] = null);

(statearr_50498_50523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (4))){
var inst_50462 = (state_50492[(10)]);
var state_50492__$1 = state_50492;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50492__$1,(7),inst_50462);
} else {
if((state_val_50493 === (6))){
var inst_50488 = (state_50492[(2)]);
var state_50492__$1 = state_50492;
var statearr_50499_50524 = state_50492__$1;
(statearr_50499_50524[(2)] = inst_50488);

(statearr_50499_50524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (3))){
var inst_50490 = (state_50492[(2)]);
var state_50492__$1 = state_50492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50492__$1,inst_50490);
} else {
if((state_val_50493 === (2))){
var inst_50462 = (state_50492[(10)]);
var inst_50464 = cljs.core.count.call(null,inst_50462);
var inst_50465 = (inst_50464 > (0));
var state_50492__$1 = state_50492;
if(cljs.core.truth_(inst_50465)){
var statearr_50501_50525 = state_50492__$1;
(statearr_50501_50525[(1)] = (4));

} else {
var statearr_50502_50526 = state_50492__$1;
(statearr_50502_50526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (11))){
var inst_50462 = (state_50492[(10)]);
var inst_50481 = (state_50492[(2)]);
var tmp50500 = inst_50462;
var inst_50462__$1 = tmp50500;
var state_50492__$1 = (function (){var statearr_50503 = state_50492;
(statearr_50503[(10)] = inst_50462__$1);

(statearr_50503[(11)] = inst_50481);

return statearr_50503;
})();
var statearr_50504_50527 = state_50492__$1;
(statearr_50504_50527[(2)] = null);

(statearr_50504_50527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (9))){
var inst_50472 = (state_50492[(7)]);
var state_50492__$1 = state_50492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50492__$1,(11),out,inst_50472);
} else {
if((state_val_50493 === (5))){
var inst_50486 = cljs.core.async.close_BANG_.call(null,out);
var state_50492__$1 = state_50492;
var statearr_50505_50528 = state_50492__$1;
(statearr_50505_50528[(2)] = inst_50486);

(statearr_50505_50528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (10))){
var inst_50484 = (state_50492[(2)]);
var state_50492__$1 = state_50492;
var statearr_50506_50529 = state_50492__$1;
(statearr_50506_50529[(2)] = inst_50484);

(statearr_50506_50529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50493 === (8))){
var inst_50472 = (state_50492[(7)]);
var inst_50462 = (state_50492[(10)]);
var inst_50473 = (state_50492[(9)]);
var inst_50471 = (state_50492[(8)]);
var inst_50476 = (function (){var cs = inst_50462;
var vec__50467 = inst_50471;
var v = inst_50472;
var c = inst_50473;
return ((function (cs,vec__50467,v,c,inst_50472,inst_50462,inst_50473,inst_50471,state_val_50493,c__48370__auto___50520,out){
return (function (p1__50457_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50457_SHARP_);
});
;})(cs,vec__50467,v,c,inst_50472,inst_50462,inst_50473,inst_50471,state_val_50493,c__48370__auto___50520,out))
})();
var inst_50477 = cljs.core.filterv.call(null,inst_50476,inst_50462);
var inst_50462__$1 = inst_50477;
var state_50492__$1 = (function (){var statearr_50507 = state_50492;
(statearr_50507[(10)] = inst_50462__$1);

return statearr_50507;
})();
var statearr_50508_50530 = state_50492__$1;
(statearr_50508_50530[(2)] = null);

(statearr_50508_50530[(1)] = (2));


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
});})(c__48370__auto___50520,out))
;
return ((function (switch__48258__auto__,c__48370__auto___50520,out){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_50512 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50512[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_50512[(1)] = (1));

return statearr_50512;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_50492){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50513){if((e50513 instanceof Object)){
var ex__48262__auto__ = e50513;
var statearr_50514_50531 = state_50492;
(statearr_50514_50531[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50532 = state_50492;
state_50492 = G__50532;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_50492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_50492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50520,out))
})();
var state__48372__auto__ = (function (){var statearr_50515 = f__48371__auto__.call(null);
(statearr_50515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50520);

return statearr_50515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50520,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args50533 = [];
var len__45172__auto___50582 = arguments.length;
var i__45173__auto___50583 = (0);
while(true){
if((i__45173__auto___50583 < len__45172__auto___50582)){
args50533.push((arguments[i__45173__auto___50583]));

var G__50584 = (i__45173__auto___50583 + (1));
i__45173__auto___50583 = G__50584;
continue;
} else {
}
break;
}

var G__50535 = args50533.length;
switch (G__50535) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50533.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48370__auto___50586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50586,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50586,out){
return (function (state_50559){
var state_val_50560 = (state_50559[(1)]);
if((state_val_50560 === (7))){
var inst_50541 = (state_50559[(7)]);
var inst_50541__$1 = (state_50559[(2)]);
var inst_50542 = (inst_50541__$1 == null);
var inst_50543 = cljs.core.not.call(null,inst_50542);
var state_50559__$1 = (function (){var statearr_50561 = state_50559;
(statearr_50561[(7)] = inst_50541__$1);

return statearr_50561;
})();
if(inst_50543){
var statearr_50562_50587 = state_50559__$1;
(statearr_50562_50587[(1)] = (8));

} else {
var statearr_50563_50588 = state_50559__$1;
(statearr_50563_50588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (1))){
var inst_50536 = (0);
var state_50559__$1 = (function (){var statearr_50564 = state_50559;
(statearr_50564[(8)] = inst_50536);

return statearr_50564;
})();
var statearr_50565_50589 = state_50559__$1;
(statearr_50565_50589[(2)] = null);

(statearr_50565_50589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (4))){
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50559__$1,(7),ch);
} else {
if((state_val_50560 === (6))){
var inst_50554 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50566_50590 = state_50559__$1;
(statearr_50566_50590[(2)] = inst_50554);

(statearr_50566_50590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (3))){
var inst_50556 = (state_50559[(2)]);
var inst_50557 = cljs.core.async.close_BANG_.call(null,out);
var state_50559__$1 = (function (){var statearr_50567 = state_50559;
(statearr_50567[(9)] = inst_50556);

return statearr_50567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50559__$1,inst_50557);
} else {
if((state_val_50560 === (2))){
var inst_50536 = (state_50559[(8)]);
var inst_50538 = (inst_50536 < n);
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50538)){
var statearr_50568_50591 = state_50559__$1;
(statearr_50568_50591[(1)] = (4));

} else {
var statearr_50569_50592 = state_50559__$1;
(statearr_50569_50592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (11))){
var inst_50536 = (state_50559[(8)]);
var inst_50546 = (state_50559[(2)]);
var inst_50547 = (inst_50536 + (1));
var inst_50536__$1 = inst_50547;
var state_50559__$1 = (function (){var statearr_50570 = state_50559;
(statearr_50570[(10)] = inst_50546);

(statearr_50570[(8)] = inst_50536__$1);

return statearr_50570;
})();
var statearr_50571_50593 = state_50559__$1;
(statearr_50571_50593[(2)] = null);

(statearr_50571_50593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (9))){
var state_50559__$1 = state_50559;
var statearr_50572_50594 = state_50559__$1;
(statearr_50572_50594[(2)] = null);

(statearr_50572_50594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (5))){
var state_50559__$1 = state_50559;
var statearr_50573_50595 = state_50559__$1;
(statearr_50573_50595[(2)] = null);

(statearr_50573_50595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (10))){
var inst_50551 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50574_50596 = state_50559__$1;
(statearr_50574_50596[(2)] = inst_50551);

(statearr_50574_50596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (8))){
var inst_50541 = (state_50559[(7)]);
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50559__$1,(11),out,inst_50541);
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
});})(c__48370__auto___50586,out))
;
return ((function (switch__48258__auto__,c__48370__auto___50586,out){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_50578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50578[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_50578[(1)] = (1));

return statearr_50578;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_50559){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50579){if((e50579 instanceof Object)){
var ex__48262__auto__ = e50579;
var statearr_50580_50597 = state_50559;
(statearr_50580_50597[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50598 = state_50559;
state_50559 = G__50598;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_50559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_50559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50586,out))
})();
var state__48372__auto__ = (function (){var statearr_50581 = f__48371__auto__.call(null);
(statearr_50581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50586);

return statearr_50581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50586,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50606 = (function (map_LT_,f,ch,meta50607){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50607 = meta50607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50608,meta50607__$1){
var self__ = this;
var _50608__$1 = this;
return (new cljs.core.async.t_cljs$core$async50606(self__.map_LT_,self__.f,self__.ch,meta50607__$1));
});

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50608){
var self__ = this;
var _50608__$1 = this;
return self__.meta50607;
});

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50609 = (function (map_LT_,f,ch,meta50607,_,fn1,meta50610){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50607 = meta50607;
this._ = _;
this.fn1 = fn1;
this.meta50610 = meta50610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50611,meta50610__$1){
var self__ = this;
var _50611__$1 = this;
return (new cljs.core.async.t_cljs$core$async50609(self__.map_LT_,self__.f,self__.ch,self__.meta50607,self__._,self__.fn1,meta50610__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50611){
var self__ = this;
var _50611__$1 = this;
return self__.meta50610;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50609.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50599_SHARP_){
return f1.call(null,(((p1__50599_SHARP_ == null))?null:self__.f.call(null,p1__50599_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50609.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50607","meta50607",525733898,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50606","cljs.core.async/t_cljs$core$async50606",-1157119763,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50610","meta50610",1588400954,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50609";

cljs.core.async.t_cljs$core$async50609.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async50609");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50609 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50609(map_LT___$1,f__$1,ch__$1,meta50607__$1,___$2,fn1__$1,meta50610){
return (new cljs.core.async.t_cljs$core$async50609(map_LT___$1,f__$1,ch__$1,meta50607__$1,___$2,fn1__$1,meta50610));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50609(self__.map_LT_,self__.f,self__.ch,self__.meta50607,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44085__auto__ = ret;
if(cljs.core.truth_(and__44085__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44085__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50607","meta50607",525733898,null)], null);
});

cljs.core.async.t_cljs$core$async50606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50606";

cljs.core.async.t_cljs$core$async50606.cljs$lang$ctorPrWriter = (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async50606");
});

cljs.core.async.__GT_t_cljs$core$async50606 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50606(map_LT___$1,f__$1,ch__$1,meta50607){
return (new cljs.core.async.t_cljs$core$async50606(map_LT___$1,f__$1,ch__$1,meta50607));
});

}

return (new cljs.core.async.t_cljs$core$async50606(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50615 = (function (map_GT_,f,ch,meta50616){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta50616 = meta50616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50617,meta50616__$1){
var self__ = this;
var _50617__$1 = this;
return (new cljs.core.async.t_cljs$core$async50615(self__.map_GT_,self__.f,self__.ch,meta50616__$1));
});

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50617){
var self__ = this;
var _50617__$1 = this;
return self__.meta50616;
});

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50616","meta50616",1403114398,null)], null);
});

cljs.core.async.t_cljs$core$async50615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50615";

cljs.core.async.t_cljs$core$async50615.cljs$lang$ctorPrWriter = (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async50615");
});

cljs.core.async.__GT_t_cljs$core$async50615 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50615(map_GT___$1,f__$1,ch__$1,meta50616){
return (new cljs.core.async.t_cljs$core$async50615(map_GT___$1,f__$1,ch__$1,meta50616));
});

}

return (new cljs.core.async.t_cljs$core$async50615(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50621 = (function (filter_GT_,p,ch,meta50622){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta50622 = meta50622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50623,meta50622__$1){
var self__ = this;
var _50623__$1 = this;
return (new cljs.core.async.t_cljs$core$async50621(self__.filter_GT_,self__.p,self__.ch,meta50622__$1));
});

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50623){
var self__ = this;
var _50623__$1 = this;
return self__.meta50622;
});

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50622","meta50622",1942198334,null)], null);
});

cljs.core.async.t_cljs$core$async50621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50621";

cljs.core.async.t_cljs$core$async50621.cljs$lang$ctorPrWriter = (function (this__44703__auto__,writer__44704__auto__,opt__44705__auto__){
return cljs.core._write.call(null,writer__44704__auto__,"cljs.core.async/t_cljs$core$async50621");
});

cljs.core.async.__GT_t_cljs$core$async50621 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50621(filter_GT___$1,p__$1,ch__$1,meta50622){
return (new cljs.core.async.t_cljs$core$async50621(filter_GT___$1,p__$1,ch__$1,meta50622));
});

}

return (new cljs.core.async.t_cljs$core$async50621(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args50624 = [];
var len__45172__auto___50668 = arguments.length;
var i__45173__auto___50669 = (0);
while(true){
if((i__45173__auto___50669 < len__45172__auto___50668)){
args50624.push((arguments[i__45173__auto___50669]));

var G__50670 = (i__45173__auto___50669 + (1));
i__45173__auto___50669 = G__50670;
continue;
} else {
}
break;
}

var G__50626 = args50624.length;
switch (G__50626) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50624.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48370__auto___50672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50672,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50672,out){
return (function (state_50647){
var state_val_50648 = (state_50647[(1)]);
if((state_val_50648 === (7))){
var inst_50643 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
var statearr_50649_50673 = state_50647__$1;
(statearr_50649_50673[(2)] = inst_50643);

(statearr_50649_50673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (1))){
var state_50647__$1 = state_50647;
var statearr_50650_50674 = state_50647__$1;
(statearr_50650_50674[(2)] = null);

(statearr_50650_50674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (4))){
var inst_50629 = (state_50647[(7)]);
var inst_50629__$1 = (state_50647[(2)]);
var inst_50630 = (inst_50629__$1 == null);
var state_50647__$1 = (function (){var statearr_50651 = state_50647;
(statearr_50651[(7)] = inst_50629__$1);

return statearr_50651;
})();
if(cljs.core.truth_(inst_50630)){
var statearr_50652_50675 = state_50647__$1;
(statearr_50652_50675[(1)] = (5));

} else {
var statearr_50653_50676 = state_50647__$1;
(statearr_50653_50676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (6))){
var inst_50629 = (state_50647[(7)]);
var inst_50634 = p.call(null,inst_50629);
var state_50647__$1 = state_50647;
if(cljs.core.truth_(inst_50634)){
var statearr_50654_50677 = state_50647__$1;
(statearr_50654_50677[(1)] = (8));

} else {
var statearr_50655_50678 = state_50647__$1;
(statearr_50655_50678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (3))){
var inst_50645 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50647__$1,inst_50645);
} else {
if((state_val_50648 === (2))){
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50647__$1,(4),ch);
} else {
if((state_val_50648 === (11))){
var inst_50637 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
var statearr_50656_50679 = state_50647__$1;
(statearr_50656_50679[(2)] = inst_50637);

(statearr_50656_50679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (9))){
var state_50647__$1 = state_50647;
var statearr_50657_50680 = state_50647__$1;
(statearr_50657_50680[(2)] = null);

(statearr_50657_50680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (5))){
var inst_50632 = cljs.core.async.close_BANG_.call(null,out);
var state_50647__$1 = state_50647;
var statearr_50658_50681 = state_50647__$1;
(statearr_50658_50681[(2)] = inst_50632);

(statearr_50658_50681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (10))){
var inst_50640 = (state_50647[(2)]);
var state_50647__$1 = (function (){var statearr_50659 = state_50647;
(statearr_50659[(8)] = inst_50640);

return statearr_50659;
})();
var statearr_50660_50682 = state_50647__$1;
(statearr_50660_50682[(2)] = null);

(statearr_50660_50682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (8))){
var inst_50629 = (state_50647[(7)]);
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50647__$1,(11),out,inst_50629);
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
});})(c__48370__auto___50672,out))
;
return ((function (switch__48258__auto__,c__48370__auto___50672,out){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_50664 = [null,null,null,null,null,null,null,null,null];
(statearr_50664[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_50664[(1)] = (1));

return statearr_50664;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_50647){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50665){if((e50665 instanceof Object)){
var ex__48262__auto__ = e50665;
var statearr_50666_50683 = state_50647;
(statearr_50666_50683[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50684 = state_50647;
state_50647 = G__50684;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_50647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_50647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50672,out))
})();
var state__48372__auto__ = (function (){var statearr_50667 = f__48371__auto__.call(null);
(statearr_50667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50672);

return statearr_50667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50672,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args50685 = [];
var len__45172__auto___50688 = arguments.length;
var i__45173__auto___50689 = (0);
while(true){
if((i__45173__auto___50689 < len__45172__auto___50688)){
args50685.push((arguments[i__45173__auto___50689]));

var G__50690 = (i__45173__auto___50689 + (1));
i__45173__auto___50689 = G__50690;
continue;
} else {
}
break;
}

var G__50687 = args50685.length;
switch (G__50687) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50685.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto__){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto__){
return (function (state_50857){
var state_val_50858 = (state_50857[(1)]);
if((state_val_50858 === (7))){
var inst_50853 = (state_50857[(2)]);
var state_50857__$1 = state_50857;
var statearr_50859_50900 = state_50857__$1;
(statearr_50859_50900[(2)] = inst_50853);

(statearr_50859_50900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (20))){
var inst_50823 = (state_50857[(7)]);
var inst_50834 = (state_50857[(2)]);
var inst_50835 = cljs.core.next.call(null,inst_50823);
var inst_50809 = inst_50835;
var inst_50810 = null;
var inst_50811 = (0);
var inst_50812 = (0);
var state_50857__$1 = (function (){var statearr_50860 = state_50857;
(statearr_50860[(8)] = inst_50812);

(statearr_50860[(9)] = inst_50811);

(statearr_50860[(10)] = inst_50809);

(statearr_50860[(11)] = inst_50834);

(statearr_50860[(12)] = inst_50810);

return statearr_50860;
})();
var statearr_50861_50901 = state_50857__$1;
(statearr_50861_50901[(2)] = null);

(statearr_50861_50901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (1))){
var state_50857__$1 = state_50857;
var statearr_50862_50902 = state_50857__$1;
(statearr_50862_50902[(2)] = null);

(statearr_50862_50902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (4))){
var inst_50798 = (state_50857[(13)]);
var inst_50798__$1 = (state_50857[(2)]);
var inst_50799 = (inst_50798__$1 == null);
var state_50857__$1 = (function (){var statearr_50863 = state_50857;
(statearr_50863[(13)] = inst_50798__$1);

return statearr_50863;
})();
if(cljs.core.truth_(inst_50799)){
var statearr_50864_50903 = state_50857__$1;
(statearr_50864_50903[(1)] = (5));

} else {
var statearr_50865_50904 = state_50857__$1;
(statearr_50865_50904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (15))){
var state_50857__$1 = state_50857;
var statearr_50869_50905 = state_50857__$1;
(statearr_50869_50905[(2)] = null);

(statearr_50869_50905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (21))){
var state_50857__$1 = state_50857;
var statearr_50870_50906 = state_50857__$1;
(statearr_50870_50906[(2)] = null);

(statearr_50870_50906[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (13))){
var inst_50812 = (state_50857[(8)]);
var inst_50811 = (state_50857[(9)]);
var inst_50809 = (state_50857[(10)]);
var inst_50810 = (state_50857[(12)]);
var inst_50819 = (state_50857[(2)]);
var inst_50820 = (inst_50812 + (1));
var tmp50866 = inst_50811;
var tmp50867 = inst_50809;
var tmp50868 = inst_50810;
var inst_50809__$1 = tmp50867;
var inst_50810__$1 = tmp50868;
var inst_50811__$1 = tmp50866;
var inst_50812__$1 = inst_50820;
var state_50857__$1 = (function (){var statearr_50871 = state_50857;
(statearr_50871[(8)] = inst_50812__$1);

(statearr_50871[(9)] = inst_50811__$1);

(statearr_50871[(10)] = inst_50809__$1);

(statearr_50871[(12)] = inst_50810__$1);

(statearr_50871[(14)] = inst_50819);

return statearr_50871;
})();
var statearr_50872_50907 = state_50857__$1;
(statearr_50872_50907[(2)] = null);

(statearr_50872_50907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (22))){
var state_50857__$1 = state_50857;
var statearr_50873_50908 = state_50857__$1;
(statearr_50873_50908[(2)] = null);

(statearr_50873_50908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (6))){
var inst_50798 = (state_50857[(13)]);
var inst_50807 = f.call(null,inst_50798);
var inst_50808 = cljs.core.seq.call(null,inst_50807);
var inst_50809 = inst_50808;
var inst_50810 = null;
var inst_50811 = (0);
var inst_50812 = (0);
var state_50857__$1 = (function (){var statearr_50874 = state_50857;
(statearr_50874[(8)] = inst_50812);

(statearr_50874[(9)] = inst_50811);

(statearr_50874[(10)] = inst_50809);

(statearr_50874[(12)] = inst_50810);

return statearr_50874;
})();
var statearr_50875_50909 = state_50857__$1;
(statearr_50875_50909[(2)] = null);

(statearr_50875_50909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (17))){
var inst_50823 = (state_50857[(7)]);
var inst_50827 = cljs.core.chunk_first.call(null,inst_50823);
var inst_50828 = cljs.core.chunk_rest.call(null,inst_50823);
var inst_50829 = cljs.core.count.call(null,inst_50827);
var inst_50809 = inst_50828;
var inst_50810 = inst_50827;
var inst_50811 = inst_50829;
var inst_50812 = (0);
var state_50857__$1 = (function (){var statearr_50876 = state_50857;
(statearr_50876[(8)] = inst_50812);

(statearr_50876[(9)] = inst_50811);

(statearr_50876[(10)] = inst_50809);

(statearr_50876[(12)] = inst_50810);

return statearr_50876;
})();
var statearr_50877_50910 = state_50857__$1;
(statearr_50877_50910[(2)] = null);

(statearr_50877_50910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (3))){
var inst_50855 = (state_50857[(2)]);
var state_50857__$1 = state_50857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50857__$1,inst_50855);
} else {
if((state_val_50858 === (12))){
var inst_50843 = (state_50857[(2)]);
var state_50857__$1 = state_50857;
var statearr_50878_50911 = state_50857__$1;
(statearr_50878_50911[(2)] = inst_50843);

(statearr_50878_50911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (2))){
var state_50857__$1 = state_50857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50857__$1,(4),in$);
} else {
if((state_val_50858 === (23))){
var inst_50851 = (state_50857[(2)]);
var state_50857__$1 = state_50857;
var statearr_50879_50912 = state_50857__$1;
(statearr_50879_50912[(2)] = inst_50851);

(statearr_50879_50912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (19))){
var inst_50838 = (state_50857[(2)]);
var state_50857__$1 = state_50857;
var statearr_50880_50913 = state_50857__$1;
(statearr_50880_50913[(2)] = inst_50838);

(statearr_50880_50913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (11))){
var inst_50809 = (state_50857[(10)]);
var inst_50823 = (state_50857[(7)]);
var inst_50823__$1 = cljs.core.seq.call(null,inst_50809);
var state_50857__$1 = (function (){var statearr_50881 = state_50857;
(statearr_50881[(7)] = inst_50823__$1);

return statearr_50881;
})();
if(inst_50823__$1){
var statearr_50882_50914 = state_50857__$1;
(statearr_50882_50914[(1)] = (14));

} else {
var statearr_50883_50915 = state_50857__$1;
(statearr_50883_50915[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (9))){
var inst_50845 = (state_50857[(2)]);
var inst_50846 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50857__$1 = (function (){var statearr_50884 = state_50857;
(statearr_50884[(15)] = inst_50845);

return statearr_50884;
})();
if(cljs.core.truth_(inst_50846)){
var statearr_50885_50916 = state_50857__$1;
(statearr_50885_50916[(1)] = (21));

} else {
var statearr_50886_50917 = state_50857__$1;
(statearr_50886_50917[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (5))){
var inst_50801 = cljs.core.async.close_BANG_.call(null,out);
var state_50857__$1 = state_50857;
var statearr_50887_50918 = state_50857__$1;
(statearr_50887_50918[(2)] = inst_50801);

(statearr_50887_50918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (14))){
var inst_50823 = (state_50857[(7)]);
var inst_50825 = cljs.core.chunked_seq_QMARK_.call(null,inst_50823);
var state_50857__$1 = state_50857;
if(inst_50825){
var statearr_50888_50919 = state_50857__$1;
(statearr_50888_50919[(1)] = (17));

} else {
var statearr_50889_50920 = state_50857__$1;
(statearr_50889_50920[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (16))){
var inst_50841 = (state_50857[(2)]);
var state_50857__$1 = state_50857;
var statearr_50890_50921 = state_50857__$1;
(statearr_50890_50921[(2)] = inst_50841);

(statearr_50890_50921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50858 === (10))){
var inst_50812 = (state_50857[(8)]);
var inst_50810 = (state_50857[(12)]);
var inst_50817 = cljs.core._nth.call(null,inst_50810,inst_50812);
var state_50857__$1 = state_50857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50857__$1,(13),out,inst_50817);
} else {
if((state_val_50858 === (18))){
var inst_50823 = (state_50857[(7)]);
var inst_50832 = cljs.core.first.call(null,inst_50823);
var state_50857__$1 = state_50857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50857__$1,(20),out,inst_50832);
} else {
if((state_val_50858 === (8))){
var inst_50812 = (state_50857[(8)]);
var inst_50811 = (state_50857[(9)]);
var inst_50814 = (inst_50812 < inst_50811);
var inst_50815 = inst_50814;
var state_50857__$1 = state_50857;
if(cljs.core.truth_(inst_50815)){
var statearr_50891_50922 = state_50857__$1;
(statearr_50891_50922[(1)] = (10));

} else {
var statearr_50892_50923 = state_50857__$1;
(statearr_50892_50923[(1)] = (11));

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
});})(c__48370__auto__))
;
return ((function (switch__48258__auto__,c__48370__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48259__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48259__auto____0 = (function (){
var statearr_50896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50896[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48259__auto__);

(statearr_50896[(1)] = (1));

return statearr_50896;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48259__auto____1 = (function (state_50857){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50897){if((e50897 instanceof Object)){
var ex__48262__auto__ = e50897;
var statearr_50898_50924 = state_50857;
(statearr_50898_50924[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50925 = state_50857;
state_50857 = G__50925;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48259__auto__ = function(state_50857){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48259__auto____1.call(this,state_50857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48259__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48259__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto__))
})();
var state__48372__auto__ = (function (){var statearr_50899 = f__48371__auto__.call(null);
(statearr_50899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto__);

return statearr_50899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto__))
);

return c__48370__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args50926 = [];
var len__45172__auto___50929 = arguments.length;
var i__45173__auto___50930 = (0);
while(true){
if((i__45173__auto___50930 < len__45172__auto___50929)){
args50926.push((arguments[i__45173__auto___50930]));

var G__50931 = (i__45173__auto___50930 + (1));
i__45173__auto___50930 = G__50931;
continue;
} else {
}
break;
}

var G__50928 = args50926.length;
switch (G__50928) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50926.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args50933 = [];
var len__45172__auto___50936 = arguments.length;
var i__45173__auto___50937 = (0);
while(true){
if((i__45173__auto___50937 < len__45172__auto___50936)){
args50933.push((arguments[i__45173__auto___50937]));

var G__50938 = (i__45173__auto___50937 + (1));
i__45173__auto___50937 = G__50938;
continue;
} else {
}
break;
}

var G__50935 = args50933.length;
switch (G__50935) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50933.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args50940 = [];
var len__45172__auto___50991 = arguments.length;
var i__45173__auto___50992 = (0);
while(true){
if((i__45173__auto___50992 < len__45172__auto___50991)){
args50940.push((arguments[i__45173__auto___50992]));

var G__50993 = (i__45173__auto___50992 + (1));
i__45173__auto___50992 = G__50993;
continue;
} else {
}
break;
}

var G__50942 = args50940.length;
switch (G__50942) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50940.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48370__auto___50995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___50995,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___50995,out){
return (function (state_50966){
var state_val_50967 = (state_50966[(1)]);
if((state_val_50967 === (7))){
var inst_50961 = (state_50966[(2)]);
var state_50966__$1 = state_50966;
var statearr_50968_50996 = state_50966__$1;
(statearr_50968_50996[(2)] = inst_50961);

(statearr_50968_50996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (1))){
var inst_50943 = null;
var state_50966__$1 = (function (){var statearr_50969 = state_50966;
(statearr_50969[(7)] = inst_50943);

return statearr_50969;
})();
var statearr_50970_50997 = state_50966__$1;
(statearr_50970_50997[(2)] = null);

(statearr_50970_50997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (4))){
var inst_50946 = (state_50966[(8)]);
var inst_50946__$1 = (state_50966[(2)]);
var inst_50947 = (inst_50946__$1 == null);
var inst_50948 = cljs.core.not.call(null,inst_50947);
var state_50966__$1 = (function (){var statearr_50971 = state_50966;
(statearr_50971[(8)] = inst_50946__$1);

return statearr_50971;
})();
if(inst_50948){
var statearr_50972_50998 = state_50966__$1;
(statearr_50972_50998[(1)] = (5));

} else {
var statearr_50973_50999 = state_50966__$1;
(statearr_50973_50999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (6))){
var state_50966__$1 = state_50966;
var statearr_50974_51000 = state_50966__$1;
(statearr_50974_51000[(2)] = null);

(statearr_50974_51000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (3))){
var inst_50963 = (state_50966[(2)]);
var inst_50964 = cljs.core.async.close_BANG_.call(null,out);
var state_50966__$1 = (function (){var statearr_50975 = state_50966;
(statearr_50975[(9)] = inst_50963);

return statearr_50975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50966__$1,inst_50964);
} else {
if((state_val_50967 === (2))){
var state_50966__$1 = state_50966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50966__$1,(4),ch);
} else {
if((state_val_50967 === (11))){
var inst_50946 = (state_50966[(8)]);
var inst_50955 = (state_50966[(2)]);
var inst_50943 = inst_50946;
var state_50966__$1 = (function (){var statearr_50976 = state_50966;
(statearr_50976[(10)] = inst_50955);

(statearr_50976[(7)] = inst_50943);

return statearr_50976;
})();
var statearr_50977_51001 = state_50966__$1;
(statearr_50977_51001[(2)] = null);

(statearr_50977_51001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (9))){
var inst_50946 = (state_50966[(8)]);
var state_50966__$1 = state_50966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50966__$1,(11),out,inst_50946);
} else {
if((state_val_50967 === (5))){
var inst_50946 = (state_50966[(8)]);
var inst_50943 = (state_50966[(7)]);
var inst_50950 = cljs.core._EQ_.call(null,inst_50946,inst_50943);
var state_50966__$1 = state_50966;
if(inst_50950){
var statearr_50979_51002 = state_50966__$1;
(statearr_50979_51002[(1)] = (8));

} else {
var statearr_50980_51003 = state_50966__$1;
(statearr_50980_51003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (10))){
var inst_50958 = (state_50966[(2)]);
var state_50966__$1 = state_50966;
var statearr_50981_51004 = state_50966__$1;
(statearr_50981_51004[(2)] = inst_50958);

(statearr_50981_51004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50967 === (8))){
var inst_50943 = (state_50966[(7)]);
var tmp50978 = inst_50943;
var inst_50943__$1 = tmp50978;
var state_50966__$1 = (function (){var statearr_50982 = state_50966;
(statearr_50982[(7)] = inst_50943__$1);

return statearr_50982;
})();
var statearr_50983_51005 = state_50966__$1;
(statearr_50983_51005[(2)] = null);

(statearr_50983_51005[(1)] = (2));


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
});})(c__48370__auto___50995,out))
;
return ((function (switch__48258__auto__,c__48370__auto___50995,out){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_50987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50987[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_50987[(1)] = (1));

return statearr_50987;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_50966){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_50966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e50988){if((e50988 instanceof Object)){
var ex__48262__auto__ = e50988;
var statearr_50989_51006 = state_50966;
(statearr_50989_51006[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51007 = state_50966;
state_50966 = G__51007;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_50966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_50966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___50995,out))
})();
var state__48372__auto__ = (function (){var statearr_50990 = f__48371__auto__.call(null);
(statearr_50990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___50995);

return statearr_50990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___50995,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args51008 = [];
var len__45172__auto___51078 = arguments.length;
var i__45173__auto___51079 = (0);
while(true){
if((i__45173__auto___51079 < len__45172__auto___51078)){
args51008.push((arguments[i__45173__auto___51079]));

var G__51080 = (i__45173__auto___51079 + (1));
i__45173__auto___51079 = G__51080;
continue;
} else {
}
break;
}

var G__51010 = args51008.length;
switch (G__51010) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51008.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48370__auto___51082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___51082,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___51082,out){
return (function (state_51048){
var state_val_51049 = (state_51048[(1)]);
if((state_val_51049 === (7))){
var inst_51044 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
var statearr_51050_51083 = state_51048__$1;
(statearr_51050_51083[(2)] = inst_51044);

(statearr_51050_51083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (1))){
var inst_51011 = (new Array(n));
var inst_51012 = inst_51011;
var inst_51013 = (0);
var state_51048__$1 = (function (){var statearr_51051 = state_51048;
(statearr_51051[(7)] = inst_51013);

(statearr_51051[(8)] = inst_51012);

return statearr_51051;
})();
var statearr_51052_51084 = state_51048__$1;
(statearr_51052_51084[(2)] = null);

(statearr_51052_51084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (4))){
var inst_51016 = (state_51048[(9)]);
var inst_51016__$1 = (state_51048[(2)]);
var inst_51017 = (inst_51016__$1 == null);
var inst_51018 = cljs.core.not.call(null,inst_51017);
var state_51048__$1 = (function (){var statearr_51053 = state_51048;
(statearr_51053[(9)] = inst_51016__$1);

return statearr_51053;
})();
if(inst_51018){
var statearr_51054_51085 = state_51048__$1;
(statearr_51054_51085[(1)] = (5));

} else {
var statearr_51055_51086 = state_51048__$1;
(statearr_51055_51086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (15))){
var inst_51038 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
var statearr_51056_51087 = state_51048__$1;
(statearr_51056_51087[(2)] = inst_51038);

(statearr_51056_51087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (13))){
var state_51048__$1 = state_51048;
var statearr_51057_51088 = state_51048__$1;
(statearr_51057_51088[(2)] = null);

(statearr_51057_51088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (6))){
var inst_51013 = (state_51048[(7)]);
var inst_51034 = (inst_51013 > (0));
var state_51048__$1 = state_51048;
if(cljs.core.truth_(inst_51034)){
var statearr_51058_51089 = state_51048__$1;
(statearr_51058_51089[(1)] = (12));

} else {
var statearr_51059_51090 = state_51048__$1;
(statearr_51059_51090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (3))){
var inst_51046 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51048__$1,inst_51046);
} else {
if((state_val_51049 === (12))){
var inst_51012 = (state_51048[(8)]);
var inst_51036 = cljs.core.vec.call(null,inst_51012);
var state_51048__$1 = state_51048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51048__$1,(15),out,inst_51036);
} else {
if((state_val_51049 === (2))){
var state_51048__$1 = state_51048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51048__$1,(4),ch);
} else {
if((state_val_51049 === (11))){
var inst_51028 = (state_51048[(2)]);
var inst_51029 = (new Array(n));
var inst_51012 = inst_51029;
var inst_51013 = (0);
var state_51048__$1 = (function (){var statearr_51060 = state_51048;
(statearr_51060[(7)] = inst_51013);

(statearr_51060[(8)] = inst_51012);

(statearr_51060[(10)] = inst_51028);

return statearr_51060;
})();
var statearr_51061_51091 = state_51048__$1;
(statearr_51061_51091[(2)] = null);

(statearr_51061_51091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (9))){
var inst_51012 = (state_51048[(8)]);
var inst_51026 = cljs.core.vec.call(null,inst_51012);
var state_51048__$1 = state_51048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51048__$1,(11),out,inst_51026);
} else {
if((state_val_51049 === (5))){
var inst_51013 = (state_51048[(7)]);
var inst_51016 = (state_51048[(9)]);
var inst_51021 = (state_51048[(11)]);
var inst_51012 = (state_51048[(8)]);
var inst_51020 = (inst_51012[inst_51013] = inst_51016);
var inst_51021__$1 = (inst_51013 + (1));
var inst_51022 = (inst_51021__$1 < n);
var state_51048__$1 = (function (){var statearr_51062 = state_51048;
(statearr_51062[(12)] = inst_51020);

(statearr_51062[(11)] = inst_51021__$1);

return statearr_51062;
})();
if(cljs.core.truth_(inst_51022)){
var statearr_51063_51092 = state_51048__$1;
(statearr_51063_51092[(1)] = (8));

} else {
var statearr_51064_51093 = state_51048__$1;
(statearr_51064_51093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (14))){
var inst_51041 = (state_51048[(2)]);
var inst_51042 = cljs.core.async.close_BANG_.call(null,out);
var state_51048__$1 = (function (){var statearr_51066 = state_51048;
(statearr_51066[(13)] = inst_51041);

return statearr_51066;
})();
var statearr_51067_51094 = state_51048__$1;
(statearr_51067_51094[(2)] = inst_51042);

(statearr_51067_51094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (10))){
var inst_51032 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
var statearr_51068_51095 = state_51048__$1;
(statearr_51068_51095[(2)] = inst_51032);

(statearr_51068_51095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (8))){
var inst_51021 = (state_51048[(11)]);
var inst_51012 = (state_51048[(8)]);
var tmp51065 = inst_51012;
var inst_51012__$1 = tmp51065;
var inst_51013 = inst_51021;
var state_51048__$1 = (function (){var statearr_51069 = state_51048;
(statearr_51069[(7)] = inst_51013);

(statearr_51069[(8)] = inst_51012__$1);

return statearr_51069;
})();
var statearr_51070_51096 = state_51048__$1;
(statearr_51070_51096[(2)] = null);

(statearr_51070_51096[(1)] = (2));


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
});})(c__48370__auto___51082,out))
;
return ((function (switch__48258__auto__,c__48370__auto___51082,out){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_51074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51074[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_51074[(1)] = (1));

return statearr_51074;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_51048){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_51048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e51075){if((e51075 instanceof Object)){
var ex__48262__auto__ = e51075;
var statearr_51076_51097 = state_51048;
(statearr_51076_51097[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51098 = state_51048;
state_51048 = G__51098;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_51048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_51048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___51082,out))
})();
var state__48372__auto__ = (function (){var statearr_51077 = f__48371__auto__.call(null);
(statearr_51077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___51082);

return statearr_51077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___51082,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args51099 = [];
var len__45172__auto___51173 = arguments.length;
var i__45173__auto___51174 = (0);
while(true){
if((i__45173__auto___51174 < len__45172__auto___51173)){
args51099.push((arguments[i__45173__auto___51174]));

var G__51175 = (i__45173__auto___51174 + (1));
i__45173__auto___51174 = G__51175;
continue;
} else {
}
break;
}

var G__51101 = args51099.length;
switch (G__51101) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51099.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48370__auto___51177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48370__auto___51177,out){
return (function (){
var f__48371__auto__ = (function (){var switch__48258__auto__ = ((function (c__48370__auto___51177,out){
return (function (state_51143){
var state_val_51144 = (state_51143[(1)]);
if((state_val_51144 === (7))){
var inst_51139 = (state_51143[(2)]);
var state_51143__$1 = state_51143;
var statearr_51145_51178 = state_51143__$1;
(statearr_51145_51178[(2)] = inst_51139);

(statearr_51145_51178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (1))){
var inst_51102 = [];
var inst_51103 = inst_51102;
var inst_51104 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51143__$1 = (function (){var statearr_51146 = state_51143;
(statearr_51146[(7)] = inst_51103);

(statearr_51146[(8)] = inst_51104);

return statearr_51146;
})();
var statearr_51147_51179 = state_51143__$1;
(statearr_51147_51179[(2)] = null);

(statearr_51147_51179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (4))){
var inst_51107 = (state_51143[(9)]);
var inst_51107__$1 = (state_51143[(2)]);
var inst_51108 = (inst_51107__$1 == null);
var inst_51109 = cljs.core.not.call(null,inst_51108);
var state_51143__$1 = (function (){var statearr_51148 = state_51143;
(statearr_51148[(9)] = inst_51107__$1);

return statearr_51148;
})();
if(inst_51109){
var statearr_51149_51180 = state_51143__$1;
(statearr_51149_51180[(1)] = (5));

} else {
var statearr_51150_51181 = state_51143__$1;
(statearr_51150_51181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (15))){
var inst_51133 = (state_51143[(2)]);
var state_51143__$1 = state_51143;
var statearr_51151_51182 = state_51143__$1;
(statearr_51151_51182[(2)] = inst_51133);

(statearr_51151_51182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (13))){
var state_51143__$1 = state_51143;
var statearr_51152_51183 = state_51143__$1;
(statearr_51152_51183[(2)] = null);

(statearr_51152_51183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (6))){
var inst_51103 = (state_51143[(7)]);
var inst_51128 = inst_51103.length;
var inst_51129 = (inst_51128 > (0));
var state_51143__$1 = state_51143;
if(cljs.core.truth_(inst_51129)){
var statearr_51153_51184 = state_51143__$1;
(statearr_51153_51184[(1)] = (12));

} else {
var statearr_51154_51185 = state_51143__$1;
(statearr_51154_51185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (3))){
var inst_51141 = (state_51143[(2)]);
var state_51143__$1 = state_51143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51143__$1,inst_51141);
} else {
if((state_val_51144 === (12))){
var inst_51103 = (state_51143[(7)]);
var inst_51131 = cljs.core.vec.call(null,inst_51103);
var state_51143__$1 = state_51143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51143__$1,(15),out,inst_51131);
} else {
if((state_val_51144 === (2))){
var state_51143__$1 = state_51143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51143__$1,(4),ch);
} else {
if((state_val_51144 === (11))){
var inst_51107 = (state_51143[(9)]);
var inst_51111 = (state_51143[(10)]);
var inst_51121 = (state_51143[(2)]);
var inst_51122 = [];
var inst_51123 = inst_51122.push(inst_51107);
var inst_51103 = inst_51122;
var inst_51104 = inst_51111;
var state_51143__$1 = (function (){var statearr_51155 = state_51143;
(statearr_51155[(11)] = inst_51121);

(statearr_51155[(7)] = inst_51103);

(statearr_51155[(8)] = inst_51104);

(statearr_51155[(12)] = inst_51123);

return statearr_51155;
})();
var statearr_51156_51186 = state_51143__$1;
(statearr_51156_51186[(2)] = null);

(statearr_51156_51186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (9))){
var inst_51103 = (state_51143[(7)]);
var inst_51119 = cljs.core.vec.call(null,inst_51103);
var state_51143__$1 = state_51143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51143__$1,(11),out,inst_51119);
} else {
if((state_val_51144 === (5))){
var inst_51107 = (state_51143[(9)]);
var inst_51104 = (state_51143[(8)]);
var inst_51111 = (state_51143[(10)]);
var inst_51111__$1 = f.call(null,inst_51107);
var inst_51112 = cljs.core._EQ_.call(null,inst_51111__$1,inst_51104);
var inst_51113 = cljs.core.keyword_identical_QMARK_.call(null,inst_51104,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51114 = (inst_51112) || (inst_51113);
var state_51143__$1 = (function (){var statearr_51157 = state_51143;
(statearr_51157[(10)] = inst_51111__$1);

return statearr_51157;
})();
if(cljs.core.truth_(inst_51114)){
var statearr_51158_51187 = state_51143__$1;
(statearr_51158_51187[(1)] = (8));

} else {
var statearr_51159_51188 = state_51143__$1;
(statearr_51159_51188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (14))){
var inst_51136 = (state_51143[(2)]);
var inst_51137 = cljs.core.async.close_BANG_.call(null,out);
var state_51143__$1 = (function (){var statearr_51161 = state_51143;
(statearr_51161[(13)] = inst_51136);

return statearr_51161;
})();
var statearr_51162_51189 = state_51143__$1;
(statearr_51162_51189[(2)] = inst_51137);

(statearr_51162_51189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (10))){
var inst_51126 = (state_51143[(2)]);
var state_51143__$1 = state_51143;
var statearr_51163_51190 = state_51143__$1;
(statearr_51163_51190[(2)] = inst_51126);

(statearr_51163_51190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51144 === (8))){
var inst_51107 = (state_51143[(9)]);
var inst_51103 = (state_51143[(7)]);
var inst_51111 = (state_51143[(10)]);
var inst_51116 = inst_51103.push(inst_51107);
var tmp51160 = inst_51103;
var inst_51103__$1 = tmp51160;
var inst_51104 = inst_51111;
var state_51143__$1 = (function (){var statearr_51164 = state_51143;
(statearr_51164[(7)] = inst_51103__$1);

(statearr_51164[(8)] = inst_51104);

(statearr_51164[(14)] = inst_51116);

return statearr_51164;
})();
var statearr_51165_51191 = state_51143__$1;
(statearr_51165_51191[(2)] = null);

(statearr_51165_51191[(1)] = (2));


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
});})(c__48370__auto___51177,out))
;
return ((function (switch__48258__auto__,c__48370__auto___51177,out){
return (function() {
var cljs$core$async$state_machine__48259__auto__ = null;
var cljs$core$async$state_machine__48259__auto____0 = (function (){
var statearr_51169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51169[(0)] = cljs$core$async$state_machine__48259__auto__);

(statearr_51169[(1)] = (1));

return statearr_51169;
});
var cljs$core$async$state_machine__48259__auto____1 = (function (state_51143){
while(true){
var ret_value__48260__auto__ = (function (){try{while(true){
var result__48261__auto__ = switch__48258__auto__.call(null,state_51143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48261__auto__;
}
break;
}
}catch (e51170){if((e51170 instanceof Object)){
var ex__48262__auto__ = e51170;
var statearr_51171_51192 = state_51143;
(statearr_51171_51192[(5)] = ex__48262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51193 = state_51143;
state_51143 = G__51193;
continue;
} else {
return ret_value__48260__auto__;
}
break;
}
});
cljs$core$async$state_machine__48259__auto__ = function(state_51143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48259__auto____1.call(this,state_51143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48259__auto____0;
cljs$core$async$state_machine__48259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48259__auto____1;
return cljs$core$async$state_machine__48259__auto__;
})()
;})(switch__48258__auto__,c__48370__auto___51177,out))
})();
var state__48372__auto__ = (function (){var statearr_51172 = f__48371__auto__.call(null);
(statearr_51172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48370__auto___51177);

return statearr_51172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48372__auto__);
});})(c__48370__auto___51177,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489402287410