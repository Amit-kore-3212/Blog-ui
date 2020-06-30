import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        const url='https://jsonplaceholder.typicode.com/posts'
        Axios.get(url)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h2 className="h1">Listing posts-{this.state.posts.length}</h2>
                <ul className="ul">
                    {
                        this.state.posts.map((ele)=>{
                            return(
                                <li className=" action-to-use li" key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Posts