
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GameBoard from './GameBoard';
import { RadioTower, House, Building2, TreePine, Info } from 'lucide-react';

const SignalSamurai: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore);
  };

  const handleGameComplete = (won: boolean) => {
    setGameComplete(true);
    setGameWon(won);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 pixel-font text-primary">
          Signal Samurai
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Place your tower strategically to maximize signal coverage and keep residents happy!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl pixel-font">Town Map</CardTitle>
                <div className="text-2xl font-bold pixel-font text-primary">
                  Score: {score}/100
                </div>
              </div>
              <CardDescription>
                Click an empty tile to place your tower. Choose wisely!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GameBoard 
                onScoreUpdate={handleScoreUpdate} 
                onGameComplete={handleGameComplete} 
              />
            </CardContent>
            <CardFooter className="justify-center">
              {gameComplete && (
                <div className="text-center">
                  <p className="text-xl font-bold mb-2">
                    {gameWon ? 
                      "🎉 Victory! The town thrives in harmony." : 
                      "😔 The mayor is disappointed. Try again!"}
                  </p>
                  <p className="text-muted-foreground">
                    {gameWon ? 
                      "You've successfully balanced technology with tradition!" :
                      "Hint: Try to place your tower where it can reach all buildings without being too close to houses."}
                  </p>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="border-2 border-primary/20 shadow-lg h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl pixel-font">
                  {showInstructions ? "How to Play" : "Legend"}
                </CardTitle>
                <button 
                  onClick={toggleInstructions}
                  className="text-primary hover:text-primary/80"
                >
                  <Info className="h-5 w-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              {showInstructions ? (
                <div className="space-y-4">
                  <p className="text-sm">Place a single telecom tower on the grid to achieve the highest score.</p>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">Scoring System:</h3>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <House className="h-5 w-5 text-purple-500 mt-0.5" />
                        <span>
                          <span className="font-medium">Houses:</span> Too close (≤2 tiles): -10 pts | Good (3-5 tiles): +5 pts
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-orange-500 mt-0.5" />
                        <span>
                          <span className="font-medium">Businesses:</span> Close (≤3 tiles): +10 pts | Medium (4-6 tiles): +5 pts
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">+</span>
                        <span>
                          <span className="font-medium">Bonus:</span> +20 pts if all buildings have signal!
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-t pt-2">
                    <p className="text-sm">You need a score of <span className="font-bold">80 or higher</span> to win.</p>
                    <p className="text-sm mt-2">Choose wisely, you can only place the tower once!</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-bold">Map Elements:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <House className="h-5 w-5 text-purple-500" />
                      <span className="text-sm">Houses - Keep a respectful distance!</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">Businesses - Need good signal to thrive</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TreePine className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Trees - Cannot place tower here</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <RadioTower className="h-5 w-5 text-primary" />
                      <span className="text-sm">Tower - Your strategic placement</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold mt-4">Signal Strength:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-100 border border-red-300"></div>
                      <span className="text-sm">Too Close (≤2 tiles)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-100 border border-green-300"></div>
                      <span className="text-sm">Good Signal (3-4 tiles)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-100 border border-yellow-300"></div>
                      <span className="text-sm">Weak Signal (5-6 tiles)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-100 border border-gray-200"></div>
                      <span className="text-sm">No Signal (7+ tiles)</span>
                    </li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="/home" className="text-primary hover:underline">
          Visit Our Company Website &rarr;
        </a>
      </div>
    </div>
  );
};

export default SignalSamurai;
