"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { supabase } from "@/lib/supabaseClient"

export default function Login() {
  const [userType, setUserType] = useState("customer")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }
  
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      }
    });
    if (error) console.error("Error logging in:", error.message);
  };

  return (
    <div className="container mx-auto px-6 py-8 flex justify-center items-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Your Account</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customer" id="customer" />
                  <Label htmlFor="customer">Renter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="owner" id="owner" />
                  <Label htmlFor="owner">Host</Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              Login
            </Button>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <Button 
            onClick={handleGoogleLogin}
            type="button"
            variant="outline"
            className="w-full mt-6 flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-2 3.018v2.51h3.232c1.891-1.742 2.986-4.305 2.986-7.35z" fill="#4285F4" />
                <path d="M10 20c2.7 0 4.964-.895 6.614-2.423l-3.232-2.509c-.895.6-2.04.955-3.382.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0 0 10 20z" fill="#34A853" />
                <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 0 0 0 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.192 5.736 7.396 3.977 10 3.977z" fill="#EA4335" />
              </g>
            </svg>
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}