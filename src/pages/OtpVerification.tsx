import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock OTP - any input works
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="text-6xl mb-2">📱</div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Verify Your Number
          </CardTitle>
          <CardDescription className="text-base">
            We sent a verification code to your phone. Enter it below to continue your journey!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-14 text-center text-2xl tracking-widest border-2 focus:border-primary"
                maxLength={6}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg"
            >
              Verify & Continue →
            </Button>
          </form>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Didn't receive the code?</p>
            <button className="text-primary hover:text-accent transition-colors underline text-sm">
              Resend Code
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtpVerification;