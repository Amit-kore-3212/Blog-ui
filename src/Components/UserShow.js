import React from 'react'
import axios from 'axios'
import PostShow from './PostShow'
import {Link} from 'react-router-dom'
import '../App.css'
 

class UserShow extends React.Component{

    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }
    componentDidMount(){
        console.log('component did mount','props')
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    
        .then((response)=>{
            const user=response.data
            this.setState({user})
        })
        const id1=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id1}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
    }
    render(){
        return(
            <div>
                 <h2 className="h1">User Name:{this.state.user.name}</h2>

                 <h3 className="h1">Posts written by user</h3>
                
                {
                    this.state.posts.map((ele)=>{
                        return(
                            <li className="li" key={ele.id}><Link to={`/posts/${ele.title}`}>{ele.title}</Link></li>
                             
                        )
                    })
                }
            
                
               
            </div>
        )
    }
}
export default UserShow