import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return;
      NextResponse.json({ error: "User not found!" }, { status: 404 });
    }
    const email = clerkUser.emailAddresses[0].emailAddress || "";
    if (!email) {
      return;
      NextResponse.json(
        { error: "User does not have an Email Address" },
        { status: 400 }
      );
    }
    const existingProfile = await prisma.profile.findUnique({
      where: { userId: clerkUser.id },
    });
    if (existingProfile) {
      return;
      NextResponse.json({ message: "Profile Already Exists..." });
    }
    await prisma.profile.create({
      data: {
        userId: clerkUser.id,
        email,
        subscriptionTier: null,
        stripeSubscriptionId: null,
        subscriptionActive: false,
      },
    });
    return NextResponse.json(
      { message: "Profile created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
