(ns tetris.game
  (:require [reagent.core :as r]))

;; data
(def colors
  ["#230007"
   "#D6062F"
   "#590011"
   "#564343"
   "#52D1DC"
   "#475A5B"
   "#8E2C2C"
   "#D33030"
   "#454BEF"
   "#111249"
   "#6EABAD"
   "#4D5D5E"
   "#70163A"])

(def pieces
  "Vektor med matriser som representerer hver enkelt tetrimino. Henholdvis I, O, Z, L, T"
  [[[0 0 0 0]
    [0 0 0 0]
    [1 1 1 1]
    [0 0 0 0]
    [0 0 0 0]]
   [[1 1]
    [1 1]]
   [[1 0]
    [1 1]
    [0 1]]
   [[1 0]
    [1 0]
    [1 1]]
   [[1 1 1]
    [0 1 0]]])

;; game logic
(defn flip [matrix]
  (vec (reverse matrix)))

(defn transpose [matrix]
  "transpose - flip matrix diagonally https://en.wikipedia.org/wiki/Transpose"
  (apply mapv vector matrix))

(defn make-empty-board [x y]
  (vec (repeat x (vec (repeat y -1)))))

(def app-state
 "inital state"
 (r/atom {:piece (rand-nth pieces)
          :x 4
          :y 0
          :block-pile (make-empty-board 10 20)
          :pause? false
          :done? false
          :color (rand-nth colors)
          :score 0}))

(defn valid-world? [{:keys [x y piece block-pile done]}]
  "returns true eller false, avhengig av hvor den aktive tetrimino befinner seg"
  (every? #{-1}
          (for [i (range (count piece))
                j (range (count (first piece)))
                :when (pos? (get-in piece [i j]))
                :let [matrix-x (+ x i)
                      matrix-y (+ y j)]]
            (get-in block-pile [matrix-x matrix-y]))))

(defn collect-piece [block-pile [x y color]]
 (assoc-in block-pile [x y] -2))

(defn attach-piece [{:as world :keys [piece color x y block-pile]}]
  (let [piece-width (count piece)
        piece-height (count (first piece))]
    (assoc world :block-pile
           (reduce collect-piece block-pile
                   (for [i (range piece-width)
                         j (range piece-height)
                         :when (pos? (get-in piece [i j]))]
                     [(+ x i) (+ y j) color])))))

(defn new-piece [{:keys [piece x y] :as world}]
  (let [piece (rand-nth pieces)]
   (assoc world
          :piece piece
          :x (- 5 (quot (count piece) 2))
          :y 0
          :color (rand-nth colors))))

(defn collect-rows [world]
  (let [remaining-rows (remove #(every? #{-2} %) (transpose (world :block-pile)))
        cc (- 20 (count remaining-rows))
        new-rows (repeat cc (vec (repeat 10 -1)))]
    (-> world
        (update :score + cc)
        (assoc :block-pile (transpose (concat new-rows remaining-rows))))))

(defn finished? [world]
  (if (valid-world? world)
    world
    (assoc world :done? true)))

(defn landed [world]
  (-> world
      attach-piece
      collect-rows
      new-piece
      finished?))

(defn gravity [world]
  (let [new-world (update-in world [:y] inc)]
    (if (valid-world? new-world)
      new-world
      (landed world))))

(defn tick []
  (when-not (or (:done? @app-state)
                (:pause? @app-state))
    (swap! app-state gravity)))

(defn step [world f]
  (let [new-world (f world)]
    (if (valid-world? new-world)
      (reset! app-state new-world)
      world)))

(def action
  {39 (fn [] (step @app-state #(update-in % [:x] inc)))
   37 (fn [] (step @app-state #(update-in % [:x] dec)))
   38 (fn [] (swap! app-state update-in [:piece] (comp transpose flip)))})

(defn handle-event [e]
  (when-let [f (action (.-keyCode e))]
    (.preventDefault e)
    (f)))

