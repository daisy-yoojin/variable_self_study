import React, {Component} from 'react';

class EditUserComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            id: '',
            pwd: '',
            name: '',
            email: '',
            phone:''
        }
    }
    componentDidMount(){
        this.loadUser();
    }
    loadUser= ()=>{
        ApiService.fetchUserByID(window.localStorage.getItem('id'))
        .then(res =>{
            let user = res.data;
            this.setState({
                id: user.id,
                pwd: user.pwd,
                name: user.name,
                email: user.email,
                phone:user.phone

            })
        })
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    saveUser = (e)=>{
        e.preventDefault();
        let user={
            id: this.state.id,
            pwd: this.state.pwd,
            name: this.state.name,
            email: this.state.email,
            phone:this.state.phone,
        }
        ApiService.addUser(user)
        .then(res =>{
            this.setState({
                message: user.name + '님이 성공적을 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch( err =>{
            console.log('saveUser() 에러',err);
        });
    }
    render(){
        return(
            <div>
                <h2>Add User</h2>
                <form>
                    <div>
                        <label>ID</label>
                        <input type='text' placeholder='Enter your ID' name='id' value={this.state.id} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>PWD</label>
                        <input type='text' placeholder='Enter your password' name='pwd' value={this.state.pwd} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Name</label>
                        <input type='text' placeholder='Enter your name' name='name' value={this.state.name} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' placeholder='Enter your email' name='email' value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='text' placeholder='Enter your phone' name='phone' value={this.state.phone} onChange={this.onChange}/>
                    </div>
                    <button onClick={this.saveUser}>Save</button>

                </form>
            </div>
        );
    }
}

export default EditUserComponent;