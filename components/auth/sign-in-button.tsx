"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link"

interface signInButtonProps{
    className?:string;
}

export function SignInButton({className}:signInButtonProps){
    return (

        <Button
        asChild className={className}>
            <Link
            href="/login"
            >Sign In</Link>
        </Button>
    )
}