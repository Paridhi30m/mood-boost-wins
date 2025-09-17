import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Trash2, Plus, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [streak, setStreak] = useState(7); // Mock streak data
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Load mock tasks
    const mockTasks = [
      { id: "1", text: "Review job applications", completed: true },
      { id: "2", text: "30-min workout", completed: true },
      { id: "3", text: "Read 10 pages", completed: false },
      { id: "4", text: "Update LinkedIn profile", completed: false },
    ];
    setTasks(mockTasks);
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
      };
      setTasks(prev => [...prev, task]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const forgiveAndRestart = () => {
    setStreak(1);
    toast({
      title: "Streak Forgiven! 💚",
      description: "Fresh start, no guilt. You've got this!",
    });
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <Card className="border-0 bg-gradient-to-r from-primary to-accent text-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
              <span className="text-4xl">🔥</span>
              {streak} Day Streak!
            </CardTitle>
            <CardDescription className="text-white/90 text-lg">
              You're building amazing habits
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Progress */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Today's Progress
              <span className="text-2xl">{Math.round(progressPercentage)}%</span>
            </CardTitle>
            <Progress value={progressPercentage} className="h-3" />
          </CardHeader>
        </Card>

        {/* Add Task */}
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Input
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                className="flex-1 h-12 border-2 focus:border-primary"
              />
              <Button 
                onClick={addTask}
                className="h-12 px-6 bg-primary hover:bg-primary/90"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tasks */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 ${
                  task.completed 
                    ? "bg-success/10 border-success text-success-foreground" 
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed 
                      ? "bg-success border-success text-white" 
                      : "border-muted-foreground hover:border-primary"
                  }`}
                >
                  {task.completed && "✓"}
                </button>
                <span className={`flex-1 ${task.completed ? "line-through opacity-70" : ""}`}>
                  {task.text}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            {tasks.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Add your first task to get started! 🚀
              </p>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={() => navigate("/mood-nudge")}
            className="h-14 bg-accent hover:bg-accent/90 text-white font-semibold"
          >
            <span className="text-xl mr-2">🌟</span>
            Get Mood Nudge
          </Button>
          <Button
            onClick={() => navigate("/rewards")}
            variant="outline"
            className="h-14 border-2 font-semibold"
          >
            <span className="text-xl mr-2">🏆</span>
            View Rewards
          </Button>
          <Button
            onClick={forgiveAndRestart}
            variant="outline"
            className="h-14 border-2 text-forgive-soft border-warning/50 hover:bg-warning/10 font-semibold"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Forgive & Restart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;