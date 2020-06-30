import React from 'react'
import axios from 'axios'
import {Link,Route} from 'react-router-dom'
import UserShow from './UserShow'
import '../App.css'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            user:{},
            comments:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const post=response.data
            this.setState({post})
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const user=response.data
                this.setState({user})
            })
          
            
        })
        
        
    
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
            console.log(comments)
            this.setState({comments})
        })
    }
    render(){
        return(
            <div>
                <h2 className="h1">User Name:{this.state.user.name}</h2>
                <p>{this.state.post.name}</p>
                <hr/>
               


                <h2 className="h1">Title:{this.state.post.title}</h2>
                <h2 style={{color:'Green'}}>Body:</h2>
                <h2 className="li">{this.state.post.body}</h2>
                <h3 style={{color:'Blue'}} >Comments</h3>
                <hr/>
              
                <ul>
                {
                      this.state.comments.map((ele)=>{
                          return(
                              <li className="li" key={ele.id}>{ele.body}</li>
                          )
                      })
                  }
                </ul>

                <hr/>
                <Link to="/users/:id/posts/:id1">More Posts of author:{this.state.user.name}</Link>
                <Route path="/users/:id/posts/:id1/" component={UserShow}/>
                
              
                
                  
            </div>
        )
    }
}
export default PostShow 


