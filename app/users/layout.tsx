import getUsers from "../actions/getUsers"
import Sidebar from "../components/sidebars/Sidebar"
import Userlist from "./components/UserList";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}){
    const users = await getUsers();
    return (
        <Sidebar>
            <div className="h-full">
                <Userlist items={users} />
                {children}
            </div>
        </Sidebar>
    )
}