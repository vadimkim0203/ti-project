'use client';

import Image from 'next/image';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Languages } from 'lucide-react';

const NavigationIcons = () => {
  //   const { data: session } = useSession();
  const session = {
    user: {
      name: 'Test User',
      image: '/icons/profile.png',
    },
  };
  return (
    <div>
      <div className="flex items-center gap-4 xl:gap-6 relative">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              {session && session.user ? (
                <>
                  <AvatarImage src={session.user.image!} />
                  <AvatarFallback>
                    {session.user.name
                      ?.trim()
                      .split(' ')
                      .slice(0, 2)
                      .map((word) => word[0].toUpperCase())
                      .join('')}
                  </AvatarFallback>
                </>
              ) : (
                <AvatarImage src="/icons/profile.png" />
              )}
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {session && session.user ? (
              <div>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </div>
            ) : (
              <DropdownMenuItem>Login</DropdownMenuItem>
            )}
          </DropdownMenuContent>

          <AlertDialog>
            {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Logout</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to logout?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Languages size={16} className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>한국어</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavigationIcons;
