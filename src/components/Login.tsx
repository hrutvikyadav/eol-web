import { User } from "../App"
export type LoginProps = {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    fetchUser(userinfo: User): void
}

export default function Login({user, setUser, fetchUser}: LoginProps) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', user);
        fetchUser(user)
    };

    return <div className="flex h-[95%]">
        <div className="basis-1/2 h-full">
            <h1 className="text-2xl font-bold text-center">Logos</h1>

        </div>

        <div className="basis-1/2 h-full bg-sky-700">
            <h1 className="text-2xl font-bold text-center ">Login</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Username :
                    <input name="username" type="text" value={user?.userName} onChange={e => {setUser({...user, userName: e.target.value, loginStatus: ""})}}/>
                </label>
                <br/>
                <label>
                    Password :
                    <input name="password" type="text" value={user?.password} onChange={e => {setUser({...user, password: e.target.value, loginStatus: ""})}}/>
                </label>
                <br/>
                <button type="submit">Login</button>

            </form>
        </div>
    </div>
}
