import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

interface Props {

    text: string;
    size?: "default" | "sm" | "lg" | "icon" | null;
}

export function SignInButton({ text, size = "default" }: Props) {

    return (

        <Button size={size} variant="black" onClick={() => signIn("google", { redirect: true, callbackUrl: "/dashboard" })}>

            {text}
        </Button>
    );
}