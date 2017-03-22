(ns tetris.core
  (:require [tetris.view :as ui]
            [tetris.game :as game]
            [reagent.core :as r]))

(defn init! []
  (js/setInterval game/tick 250)
  (.addEventListener js/document "keydown" game/handle-event)
  (r/render [ui/root-view] (.getElementById js/document "app")))

(init!)

