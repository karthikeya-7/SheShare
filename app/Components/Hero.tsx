import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button, buttonVariants } from "@/components/ui/button";
import { createAirbnbHome } from "../actions";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default async function Hero() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const isLogin = await isAuthenticated();
  const user = await getUser();

  const createHomewithId = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });

  return (
  
    <div className="   ">
      <HeroHighlight className="flex flex-col  w-screen h-[60vh] gap-6 justify-center items-center ">
      <h1 className="text-black  berkshire-swash-regular lg:text-7xl text-3xl font-[600] text-center">
      Create lasting memories in a space   <hr className="w-0" /> designed{" "}
        <span className="text-rose-600">for women by women.</span>
      </h1>
      <h1 className="text-gray-600 text-[0.75rem] lg:text-lg text-center">
      Girlfriend getaways, solo adventures, and everything in between. {" "}
        <hr className="w-0 hidden lg:flex" /> Find your perfect women-friendly Airbnb
      </h1>
      {isLogin ? (
        <div className="flex  gap-3 items-center">
          <Link href="/home">
          <Button>Rent a room</Button>
          </Link>
          

          <form action={createHomewithId} className="w-full">
                <Button type="submit"  variant={"link"} className=" flex items-center gap-2 font-semibold group">
                 Share you home
                  <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-all " />
                </Button>
                
              </form>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <LoginLink className={buttonVariants()}>Sign in</LoginLink>

          <RegisterLink
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex items-center gap-2 font-semibold group"
            )}
          >
            Create a account
            <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-all " />
          </RegisterLink>
        </div>
      )}
      </HeroHighlight>
    </div>
   
  );
}