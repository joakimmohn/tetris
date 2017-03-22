// Compiled by ClojureScript 1.9.229 {}
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('tetris.view');
goog.require('tetris.game');
goog.require('reagent.core');
tetris.core.init_BANG_ = (function tetris$core$init_BANG_(){
setInterval(tetris.game.tick,(250));

document.addEventListener("keydown",tetris.game.handle_event);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.view.root_view], null),document.getElementById("app"));
});
tetris.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1490222751117