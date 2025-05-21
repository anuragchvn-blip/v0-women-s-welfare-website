"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Icons and concepts related to women's empowerment
const cardItems = [
  { id: 1, content: "Education", icon: "📚" },
  { id: 2, content: "Education", icon: "📚" },
  { id: 3, content: "Healthcare", icon: "🏥" },
  { id: 4, content: "Healthcare", icon: "🏥" },
  { id: 5, content: "Leadership", icon: "👑" },
  { id: 6, content: "Leadership", icon: "👑" },
  { id: 7, content: "Equality", icon: "⚖️" },
  { id: 8, content: "Equality", icon: "⚖️" },
  { id: 9, content: "Empowerment", icon: "💪" },
  { id: 10, content: "Empowerment", icon: "💪" },
  { id: 11, content: "Community", icon: "🏘️" },
  { id: 12, content: "Community", icon: "🏘️" },
]

interface MemoryCard {
  id: number
  content: string
  icon: string
  isFlipped: boolean
  isMatched: boolean
}

export function MemoryGame() {
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [gameCompleted, setGameCompleted] = useState<boolean>(false)

  // Initialize or reset the game
  const initializeGame = () => {
    // Shuffle the cards
    const shuffledCards = [...cardItems]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
      }))

    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  // Handle card click
  const handleCardClick = (id: number) => {
    // Ignore click if game is not started or card is already flipped or matched
    if (!gameStarted || flippedCards.length >= 2) return

    const clickedCard = cards.find((card) => card.id === id)
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return

    // Flip the card
    const newFlippedCards = [...flippedCards, id]
    setFlippedCards(newFlippedCards)

    // Update the card state
    setCards(cards.map((card) => (card.id === id ? { ...card, isFlipped: true } : card)))

    // Check for a match if two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)

      const [firstId, secondId] = newFlippedCards
      const firstCard = cards.find((card) => card.id === firstId)
      const secondCard = cards.find((card) => card.id === secondId)

      if (firstCard && secondCard && firstCard.content === secondCard.content) {
        // Match found
        setMatchedPairs(matchedPairs + 1)
        setCards(
          cards.map((card) => (card.id === firstId || card.id === secondId ? { ...card, isMatched: true } : card)),
        )
        setFlippedCards([])

        // Check if game is completed
        if (matchedPairs + 1 === cardItems.length / 2) {
          setGameCompleted(true)
        }
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setCards(cards.map((card) => (newFlippedCards.includes(card.id) ? { ...card, isFlipped: false } : card)))
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  // Initialize game on first render
  useEffect(() => {
    initializeGame()
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-[#002f86] flex justify-between items-center">
          <span>Women's Empowerment Memory Game</span>
          <Button variant="outline" size="sm" onClick={initializeGame} className="text-xs">
            New Game
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {gameCompleted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
            <p className="text-gray-600 mb-4">You completed the game in {moves} moves!</p>
            <Button onClick={initializeGame} className="bg-[#002f86]">
              Play Again
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.05 }}
                whileTap={{ scale: card.isFlipped || card.isMatched ? 1 : 0.95 }}
                className="aspect-square"
              >
                <div
                  className="w-full h-full rounded-lg cursor-pointer relative"
                  onClick={() => handleCardClick(card.id)}
                >
                  {/* Card back (question mark) */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-lg border-2 
                    ${card.isMatched ? "border-green-500 bg-green-50" : "border-[#002f86] bg-white"}
                    transition-all duration-300 backface-visibility-hidden
                    ${card.isFlipped || card.isMatched ? "opacity-0 rotate-y-180" : "opacity-100"}`}
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span className="text-[#002f86] text-xl font-bold">?</span>
                  </div>

                  {/* Card front (content) */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 
                    ${card.isMatched ? "border-green-500 bg-green-50" : "border-[#002f86] bg-white"}
                    transition-all duration-300 backface-visibility-hidden
                    ${card.isFlipped || card.isMatched ? "opacity-100" : "opacity-0 rotate-y-180"}`}
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span className="text-3xl mb-1">{card.icon}</span>
                    <span className="text-xs font-medium text-center">{card.content}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between text-sm text-gray-500 border-t pt-4">
        <div>
          Pairs: {matchedPairs}/{cardItems.length / 2}
        </div>
        <div>Moves: {moves}</div>
      </CardFooter>
    </Card>
  )
}
