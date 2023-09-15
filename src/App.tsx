import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from './components/Login'
import StatusLine from './components/StatusLine'

export type User = {
    userName: string,
    isAdmin: boolean,
    password: string,
    loginStatus: string
}
const EOL_URL = "https://localhost:7084/ArbinEOL/"


function App() {
    const [testObjects, setTestObjects] = useState<Array<string>>([])
    const [user, setUser] = useState<User>(
        {
            userName: "",
            password: "",
            isAdmin: false,
            loginStatus: ""
        }
    )

    const TESTOBJ_URL = EOL_URL + "GetTestObjects"
    function fetchUser(userinfo: User) {

            axios.post(EOL_URL + "Login", {
                userName: userinfo.userName ,
                isAdmin: userinfo.isAdmin,
                password: userinfo.password,
                loginStatus: userinfo.loginStatus,
            })
            .then(res => {
                console.log(res.data)
                const {isAdmin, loginStatus, password, userName} = res.data as User
                if (loginStatus == "Login successful") {
                        setUser({userName, password, loginStatus, isAdmin})
                }
            })
            .catch(e => console.log("Login Err",e))
    }

    useEffect(() => {
        /*axios.get(TESTOBJ_URL).then(res => {
            if(res.status == 200){
                setTestObjects(res.data)
                console.log(testObjects)
            }
            else{
                console.log("failed with status : ", res.status)
            }
        })*/
    }, [])

    return (
        <div className='h-screen'>
            <Login user={user} setUser={setUser} fetchUser={fetchUser} />
            <StatusLine loginStatus={user.loginStatus == "" ? "Not yet" : user.loginStatus}></StatusLine>
        </div>
    )
}

export default App
