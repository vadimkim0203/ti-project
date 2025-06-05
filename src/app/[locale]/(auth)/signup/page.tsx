'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {useRouter} from "next/navigation";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        {/* div for an image */}
        <div className="relative ">
          <Image
            src="/images/collageSignup.png"
            alt="kids collage"
            width={1300}
            height={1300}
          />
        </div>

        {/* signup card */}
        {/* Background pattern wrapper */}
        <div className="fixed inset-0 w-full h-full -z-100">
          <div className="absolute inset-0 grid grid-cols-6 gap-8 p-8 opacity-15">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="relative w-full aspect-square">
                <Image
                  src="/icons/tiLogo.png"
                  alt="background logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link" className="cursor-pointer">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button variant="outline" className="w-full cursor-pointer" >
                I'm a student
              </Button>
              <Button variant="outline" className="w-full cursor-pointer">
                I'm a teacher
              </Button>
              <Button variant="outline" className="w-full cursor-pointer">
                I'm a parent
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
