'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Logo } from '@/components/icons/logo';
import { LoginForm } from '@/components/auth/login-form';
import { SignUpForm } from '@/components/auth/signup-form';

export default function AuthenticationPage() {
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-center mb-8">
        <Logo />
      </div>
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-2">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <CardHeader>
                    {/* Optional: Add title or description */}
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </TabsContent>
            <TabsContent value="signup">
                <CardHeader>
                    {/* Optional: Add title or description */}
                </CardHeader>
                <CardContent>
                    <SignUpForm />
                </CardContent>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
