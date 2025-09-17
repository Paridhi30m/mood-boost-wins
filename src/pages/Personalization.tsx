import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const questions = [
  {
    id: "goals",
    question: "What's your main focus right now?",
    emoji: "🎯",
    options: [
      { value: "career", label: "Career & Skills", emoji: "💼" },
      { value: "health", label: "Health & Fitness", emoji: "💪" },
      { value: "learning", label: "Learning & Growth", emoji: "📚" },
      { value: "personal", label: "Personal Projects", emoji: "🎨" }
    ]
  },
  {
    id: "energy",
    question: "When do you feel most productive?",
    emoji: "⚡",
    options: [
      { value: "morning", label: "Early Morning", emoji: "🌅" },
      { value: "afternoon", label: "Afternoon", emoji: "☀️" },
      { value: "evening", label: "Evening", emoji: "🌆" },
      { value: "night", label: "Late Night", emoji: "🌙" }
    ]
  },
  {
    id: "challenge",
    question: "What's your biggest productivity challenge?",
    emoji: "🤔",
    options: [
      { value: "procrastination", label: "Procrastination", emoji: "😅" },
      { value: "overwhelm", label: "Feeling Overwhelmed", emoji: "😵" },
      { value: "distractions", label: "Too Many Distractions", emoji: "📱" },
      { value: "consistency", label: "Staying Consistent", emoji: "🔄" }
    ]
  }
];

const Personalization = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Store answers in localStorage for session persistence
      localStorage.setItem('streakup-profile', JSON.stringify(answers));
      navigate("/dashboard");
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="text-6xl mb-2">{question.emoji}</div>
          <CardTitle className="text-2xl font-bold text-foreground">
            {question.question}
          </CardTitle>
          <CardDescription>
            Question {currentQuestion + 1} of {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            {question.options.map((option) => (
              <Button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                variant="outline"
                className="w-full h-16 text-left justify-start text-lg border-2 hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <span className="text-2xl mr-3">{option.emoji}</span>
                {option.label}
              </Button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                  index <= currentQuestion ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Personalization;