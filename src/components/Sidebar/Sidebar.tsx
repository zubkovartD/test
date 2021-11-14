import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className="border flex-fill w-25">
      <h3>Sidebar</h3>
      <p><Link to="/allposts">View all posts</Link></p>
      <p><Link to="/create">Create post</Link></p> 
    </div>
  )
}

export default Sidebar