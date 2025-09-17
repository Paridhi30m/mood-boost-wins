import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const moodOptions = [
  {
    id: "low-energy",
    emoji: "😴",
    label: "Low Energy",
    description: "Feeling drained or tired",
    color: "from-energy-low/20 to-energy-low/10",
    tasks: [
      "Organize your desk for 5 minutes",
      "Write down 3 things you're grateful for",
      "Take 10 deep breaths",
      "Drink a glass of water"
    ]
  },
  {
    id: "focused",
    emoji: "🎯",
    label: "Focused",
    description: "Ready to tackle something big",
    color: "from-primary/20 to-primary/10",
    tasks: [
      "Work on your most important project for 25 minutes",
      "Complete 3 challenging tasks from your list",
      "Review and plan tomorrow's priorities",
      "Learn something new for 30 minutes"
    ]
  },
  {
    id: "overwhelmed",
    emoji: "😵‍💫",
    label: "Overwhelmed",
    description: "Too much on your plate",
    color: "from-warning/20 to-warning/10",
    tasks: [
      "Pick just ONE small task and complete it",
      "Do a 5-minute brain dump on paper",
      "Take a 10-minute walk outside",
      "Listen to calming music for 5 minutes"
    ]
  }
];

const MoodNudge = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [suggestedTask, setSuggestedTask] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    const mood = moodOptions.find(m => m.id === moodId);
    if (mood) {
      const randomTask = mood.tasks[Math.floor(Math.random() * mood.tasks.length)];
      setSuggestedTask(randomTask);
    }
  };

  const handleAcceptTask = () => {
    navigate("/dashboard");
  };

  if (selectedMood && suggestedTask) {
    const mood = moodOptions.find(m => m.id === selectedMood)!;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-xl border-0 bg-card/95 backdrop-blur">
          <CardHeader className="text-center space-y-4">
            <div className="text-6xl mb-2">✨</div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Perfect Match!
            </CardTitle>
            <CardDescription className="text-lg">
              Here's a task that matches your current energy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className={`p-6 border-0 bg-gradient-to-r ${mood.color}`}>
              <div className="text-center space-y-3">
                <div className="text-4xl">{mood.emoji}</div>
                <h3 className="text-xl font-semibold">{suggestedTask}</h3>
              </div>
            </Card>
            
            <div className="space-y-3">
              <Button 
                onClick={handleAcceptTask}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg"
              >
                Let's Do This! 🚀
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedMood(null);
                  setSuggestedTask(null);
                }}
                className="w-full h-10 border-2"
              >
                Get Different Suggestion
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="text-6xl mb-2">🌙</div>
          <CardTitle className="text-2xl font-bold text-foreground">
            How are you feeling right now?
          </CardTitle>
          <CardDescription className="text-lg">
            Let's find the perfect task for your current energy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {moodOptions.map((mood) => (
            <Button
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              variant="outline"
              className={`w-full h-20 text-left justify-start border-2 hover:border-primary transition-all duration-200 bg-gradient-to-r ${mood.color}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{mood.emoji}</span>
                <div>
                  <div className="text-lg font-semibold">{mood.label}</div>
                  <div className="text-sm text-muted-foreground">{mood.description}</div>
                </div>
              </div>
            </Button>
          ))}
          
          <Button 
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="w-full mt-4"
          >
            ← Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodNudge;