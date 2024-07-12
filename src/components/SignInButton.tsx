import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

interface Props {

    text: string;
}

export function SignInButton({ text }: Props) {

    return (

        <Button variant="black" onClick={() => signIn("google", { redirect: true, callbackUrl: "/dashboard" })}>

            {text}
        </Button>
    );
}