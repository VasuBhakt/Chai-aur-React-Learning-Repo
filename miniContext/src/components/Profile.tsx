import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const userContext = useContext(UserContext);
    if (!userContext?.user) return <div>Please login to view profile</div>
    return <div>Welcome, {userContext.user.username}!</div>
}

export default Profile