import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Logout from '@/app/components/logout';
import Login from '@/app/components/login';

export default async function Public() {
    const session = await getServerSession(authOptions)

    if (session) {
        return <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
            <div>You are accessing a public page</div>
            <div>Your name is {session.user?.name}</div>
            <div>
                <Logout />
            </div>
        </div>
    }

    return (
        <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
            <div>You are accessing a public page</div>
            <div>
                <Login />
            </div>
        </div>
    )
}
