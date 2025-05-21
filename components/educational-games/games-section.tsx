"use client"

import { useState } from "react"
import { Gamepad2, Brain, Puzzle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { QuizGame } from "@/components/educational-games/quiz-game"
import { MemoryGame } from "@/components/educational-games/memory-game"

export function GamesSection() {
  const [activeTab, setActiveTab] = useState("quiz")

  return (
    <section className="w-full py-16 md:py-24 bg-[#f7931e]/10 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#002f86]/10 mb-2">
              <Gamepad2 className="h-6 w-6 text-[#002f86]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#002f86]">
              Educational Games
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn about women's welfare and empowerment through interactive games
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ScrollReveal delay={0.1}>
            <Card
              className={`cursor-pointer transition-all ${activeTab === "quiz" ? "border-[#002f86] shadow-md" : "hover:border-[#002f86]/50"}`}
              onClick={() => setActiveTab("quiz")}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Brain className="h-8 w-8 text-[#002f86]" />
                  {activeTab === "quiz" && (
                    <div className="inline-flex items-center rounded-full bg-[#002f86]/10 px-2.5 py-0.5 text-xs font-semibold text-[#002f86]">
                      Active
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg mt-2">Knowledge Quiz</CardTitle>
                <CardDescription>Test your knowledge about women's welfare issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Answer questions about women's rights, empowerment, and global issues to test your knowledge.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card
              className={`cursor-pointer transition-all ${activeTab === "memory" ? "border-[#002f86] shadow-md" : "hover:border-[#002f86]/50"}`}
              onClick={() => setActiveTab("memory")}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Puzzle className="h-8 w-8 text-[#002f86]" />
                  {activeTab === "memory" && (
                    <div className="inline-flex items-center rounded-full bg-[#002f86]/10 px-2.5 py-0.5 text-xs font-semibold text-[#002f86]">
                      Active
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg mt-2">Memory Game</CardTitle>
                <CardDescription>Match pairs of women's empowerment concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Improve your memory while learning about important concepts related to women's empowerment.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card className="bg-gray-50 border-dashed">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#002f86]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <CardTitle className="text-lg mt-2 text-gray-400">Coming Soon</CardTitle>
                <CardDescription className="text-gray-400">More educational games are on the way</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  We're developing more interactive games to help educate about women's welfare issues.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="quiz">Quiz Game</TabsTrigger>
            <TabsTrigger value="memory">Memory Game</TabsTrigger>
          </TabsList>

          <ScrollReveal>
            <TabsContent value="quiz" className="mt-0">
              <QuizGame />
            </TabsContent>

            <TabsContent value="memory" className="mt-0">
              <MemoryGame />
            </TabsContent>
          </ScrollReveal>
        </Tabs>
      </div>
    </section>
  )
}
