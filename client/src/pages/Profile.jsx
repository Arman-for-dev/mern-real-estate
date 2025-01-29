import { useSelector } from "react-redux"

function Profile() {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div>
      <h1>Profile</h1>
      <h3>{currentUser.username}</h3>
      <h3>{currentUser.email}</h3>
    </div>
  )
}

export default Profile