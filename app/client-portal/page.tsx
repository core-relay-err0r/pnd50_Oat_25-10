import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ClientPortalPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-100 dark:bg-gray-950 px-4 py-12">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Client Portal</CardTitle>
          <CardDescription>Sign in to access your secure dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <p className="text-center text-xs text-muted-foreground pt-2">
              This is a demonstration portal. Functionality is currently disabled.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
