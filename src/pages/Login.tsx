import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - any input works
    navigate("/otp-verification");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="text-6xl mb-2">🚀</div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            StreakUp
          </CardTitle>
          <CardDescription className="text-lg">
            {isSignUp ? "Join thousands breaking procrastination" : "Welcome back, champion!"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-2 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="Phone number (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 border-2 focus:border-primary"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg"
            >
              {isSignUp ? "Get Started" : "Continue"} →
            </Button>
          </form>
          
          <div className="text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-accent transition-colors underline"
            >
              {isSignUp ? "Already have an account? Sign in" : "New here? Create account"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;