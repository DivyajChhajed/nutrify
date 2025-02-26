"use client";
import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
      <div className="max-w-md w-full">
        <SignUp signInFallbackRedirectUrl="/mealplan" />
      </div>
    </div>
  );
};

export default SignUpPage;
