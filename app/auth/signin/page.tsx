import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Login from "@/app/components/login";
import { getServerSession } from "next-auth";
import { redirect, useParams } from "next/navigation";

const signinErrors: Record<string | "default", string> = {
// ...
}

interface SignInPageProp {
    params: object
    searchParams: {
        callbackUrl: string
        error: string
    }
}

export default async function Signin({ searchParams: { callbackUrl, error } }: SignInPageProp) {
    const session = await getServerSession(authOptions);
    if (session) {
        redirect(callbackUrl || "/")
    }
    return (
        <div>
            {error && <div>
                {signinErrors[error.toLowerCase()]}
            </div>}
            <Login />
        </div>
    )
}
