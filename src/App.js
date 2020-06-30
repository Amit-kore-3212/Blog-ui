import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Posts from './Components/Posts'
import UserShow from './Components/UserShow'
import PostShow from './Components/PostShow'
import '../src/App.css'

function App(){
    return(

        
        <BrowserRouter>
         <div className="div">
             
             <Link to="Home">Home</Link>-
             <Link to="/users">Users</Link>-
             <Link to="/posts">Posts</Link>
             
             

             <Route path="/" component={Home} exact={true}/>
             <Route path="/users" component={Users} exact={true}/>
             <Route path="/users/:id" component={UserShow} exact={true}/>
             <Route path="/posts" component={Posts} exact={true}/>
             <Route path="/posts/:id" component={PostShow}/>
             
             
             

            

            </div>
        </BrowserRouter>
        
       
    )
}
export default App