/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U2K0n8UJ2Rk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Enter your information to create an account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Noella Promise" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" required />
          <p className="text-red-500 text-sm">Make sure passwords match</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthday">Birthday</Label>
          <Input id="birthday" type="date" required />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </div>
    </div>
  )
}