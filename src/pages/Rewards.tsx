import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const badges = [
  { id: "starter", name: "Getting Started", emoji: "🌱", description: "Completed your first task", earned: true },
  { id: "streak3", name: "3-Day Warrior", emoji: "🔥", description: "Maintained a 3-day streak", earned: true },
  { id: "streak7", name: "Week Champion", emoji: "👑", description: "Maintained a 7-day streak", earned: true },
  { id: "early-bird", name: "Early Bird", emoji: "🌅", description: "Completed morning tasks 5 times", earned: true },
  { id: "comeback", name: "Comeback Kid", emoji: "💚", description: "Used Forgive & Restart", earned: false },
  { id: "streak30", name: "Month Master", emoji: "🏆", description: "Maintained a 30-day streak", earned: false },
  { id: "task-master", name: "Task Master", emoji: "⚡", description: "Completed 100 total tasks", earned: false },
  { id: "consistent", name: "Consistency King", emoji: "👑", description: "Completed tasks 20 days in a row", earned: false }
];

const achievements = [
  { title: "Tasks Completed", value: "47", emoji: "✅" },
  { title: "Current Streak", value: "7 days", emoji: "🔥" },
  { title: "Longest Streak", value: "12 days", emoji: "🏆" },
  { title: "Days Active", value: "23", emoji: "📅" }
];

const Rewards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <Card className="border-0 bg-gradient-to-r from-primary to-accent text-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
              <span className="text-4xl">🏆</span>
              Your Achievements
            </CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Look how far you've come!
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">{achievement.emoji}</div>
                <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Badges */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎖️</span>
              Badge Collection
            </CardTitle>
            <CardDescription>
              Unlock badges by building great habits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {badges.map((badge) => (
                <Card
                  key={badge.id}
                  className={`p-4 border-2 transition-all duration-200 ${
                    badge.earned 
                      ? "bg-gradient-to-r from-success/10 to-success/5 border-success shadow-lg" 
                      : "bg-muted/30 border-muted opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`text-3xl ${!badge.earned && "grayscale"}`}>
                      {badge.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{badge.name}</h3>
                        {badge.earned && (
                          <Badge variant="secondary" className="bg-success text-white">
                            Earned
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motivational Message */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-accent/10 to-primary/10">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="text-4xl">✨</div>
            <h3 className="text-xl font-semibold">You're doing amazing!</h3>
            <p className="text-muted-foreground">
              Every small step you take is building the life you want. Keep going!
            </p>
          </CardContent>
        </Card>

        {/* Back Button */}
        <Button 
          onClick={() => navigate("/dashboard")}
          variant="outline"
          className="w-full h-12 border-2 font-semibold"
        >
          ← Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Rewards;