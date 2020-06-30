import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        const url='https://jsonplaceholder.typicode.com/users'
        axios.get(url)
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h1 className="h1">Listing Users -{this.state.users.length}</h1>
                <ul className="ul">
                {
                    this.state.users.map((ele)=>{
                        return(
                            <li className="li" key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
export default Users