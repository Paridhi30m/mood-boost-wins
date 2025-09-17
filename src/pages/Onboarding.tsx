import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const onboardingSteps = [
  {
    emoji: "🎯",
    title: "Set Daily Wins",
    description: "Break big goals into tiny, achievable daily tasks that build momentum."
  },
  {
    emoji: "🔥",
    title: "Build Streaks",
    description: "Every completed task adds to your streak. Consistency creates lasting change."
  },
  {
    emoji: "💚",
    title: "Forgive & Restart",
    description: "Missed a day? No problem! Hit 'Forgive' and keep building without guilt."
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/personalization");
    }
  };

  const handleSkip = () => {
    navigate("/personalization");
  };

  const step = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-6">
          <div className="text-8xl mb-4">{step.emoji}</div>
          <CardTitle className="text-3xl font-bold text-foreground">
            {step.title}
          </CardTitle>
          <CardDescription className="text-lg leading-relaxed">
            {step.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex justify-center space-x-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                  index <= currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={handleNext}
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg"
            >
              {currentStep < onboardingSteps.length - 1 ? "Next" : "Get Started"} →
            </Button>
            
            {currentStep < onboardingSteps.length - 1 && (
              <Button 
                variant="ghost" 
                onClick={handleSkip}
                className="w-full h-10 text-muted-foreground hover:text-foreground"
              >
                Skip intro
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;