import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";

interface QuizBoxProps {
  onStartQuiz: () => void;
}

const QuizBox = ({ onStartQuiz }: QuizBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="w-80 bg-gradient-secondary border-secondary/20 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center mb-2">
          <Sparkles className={`h-6 w-6 text-secondary-foreground transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
        </div>
        <CardTitle className="text-lg font-bold text-secondary-foreground">
          Style Quiz
        </CardTitle>
        <Badge variant="outline" className="mx-auto border-secondary/30 text-secondary-foreground">
          Find Your Perfect Look
        </Badge>
      </CardHeader>
      
      <CardContent className="text-center space-y-4">
        <p className="text-sm text-secondary-foreground/80 leading-relaxed">
          Not sure what to wear? Take our personalized style quiz and discover outfits perfect for any occasion!
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2 text-xs text-secondary-foreground/70">
            <span>✨ Occasion-based</span>
            <span>•</span>
            <span>👔 Style preferences</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs text-secondary-foreground/70">
            <span>📏 Size matching</span>
            <span>•</span>
            <span>🎨 Color analysis</span>
          </div>
        </div>

        <Button
          variant="quiz"
          className="w-full group"
          onClick={onStartQuiz}
        >
          Take Quiz
          <ChevronRight className={`h-4 w-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </Button>
        
        <p className="text-xs text-secondary-foreground/60">
          Takes only 2-3 minutes • Get instant recommendations
        </p>
      </CardContent>
    </Card>
  );
};

export default QuizBox;