/**
 * v0 by Vercel.
 * @see https://v0.dev/t/epQw8E9OHo2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-36">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
    </div>
      <Card>
        <CardContent>
          <div>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
            >
              <Avatar
                src="/placeholder.svg?height=24&width=24"
                alt="Google logo"
                className="mr-2 h-6 w-6"
              />
              Sign up with Google
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="#" className="underline" prefetch={false}>
          Login
        </Link>
      </div>
    </div>
  );
}
