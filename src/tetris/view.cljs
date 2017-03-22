(ns tetris.view
  (:require [reagent.core :as r]
            [tetris.game :refer [transpose app-state]]))

(defn block [x y color]
  [:rect {:x x
          :y y
          :rx 0.1
          :width 1
          :height 1
          :stroke "black"
          :stroke-opacity "0.8"
          :stroke-width "0.01"
          :fill color}])

(defn tetris [{:keys [piece x y block-pile color pause? done? score] :as world}]
  [:div {:style {:display "flex"
                 :justify-content "center"}}
   [:svg {:viewBox "0 0 10 20"
          :on-click #(swap! app-state update :pause? not)
          :style {:width 300
                  :height 600
                  :border-radius "3px"
                  :background-color "rgb(200, 220, 220)"}}
    (for [a (range (count piece))
          b (range (count (first piece)))
          :when (pos? (get-in piece [a b]))]
      ^{:key (rand)} [block (+ a x) (+ y b) color])
    (for [a (range (count block-pile))
          b (range (count (first block-pile)))
          :let [block-type (get-in block-pile [a b])]
          :when (= -2 block-type)]
      ^{:key (rand)}[block a b "grey"])
    [:text {:x 7
            :y 1
            :font-size 0.5
            :font-family "helvetica"}
     (str "Score: " score)]
    (when (or pause? done?)
      [:text {:x "1"
              :y "10"
              :font-family "helvetica"
              :font-size 1.5}
       (if done? "Game Over" "PAUSE")])]])

(defn root-view []
   [:div {:style {:height "100%"
                  :display :flex
                  :flex-direction :column
                  :justify-content "center"}}
    [:div {:style {:display :flex
                   :justify-content :center}}
     [:h1#header "TETRIS"]]
    [tetris @app-state]
    [:div {:style {:display :flex
                   :margin-top "20px"
                   :justify-content :center}}
     [:a#ghlink {:href "https://www.github.com/joakmmohn/tetris"} "Project available on Github"]]])
