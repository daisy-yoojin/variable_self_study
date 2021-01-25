import React, {Component} from 'react';

class UserListComponent extends Component{
    constructor(porps){
        super(porps);
        
        this.state={
            users: [],
            message:null,
        }
    }
    componentDidMount(){
        ApiService.fetchUsers()
        .then(res=>{
            this.setState({
                users:res.data
            })
        })
        .catch(err=>{
            console.log('reloadUserList() ERROR!', err);
        }) 
    }

    deleteUser = (userID)=>{
        ApiService.deleteUser(userID)
        .then( res => {
            this.setState({
                message: 'User Deleted Successfully.'
            });
            this.setState({
                users: this.state.users.filter( user=> 
                    user.id !== userID)
            });
        })
        .catch(err =>{
            console.log('deleteUser() ERROR!', err);
        })
    }

    editUser = (ID) =>{
        window.localStorage.setItem("userID",ID);
        this.props.history.push('/edit-user');
    }
    
    addUser = (ID) =>{
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    }

    render(){
        return(
            <div>
                <h2>User List</h2>
                <button onClick={this.addUser}> Add User </button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Password</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map( user=>
                            <tr key={user.id}>
                                <td>{user.pwd}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={()=>this.editUser(user.id)}>Edit</button>
                                    <button onClick={()=>this.deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserListComponent;