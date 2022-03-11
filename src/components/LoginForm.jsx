import React from "react";
import {useState} from "react";
import axios from "axios";


const LoginForm = () => {
    const [username, setUsername] = useState( '');
    const [password, setPassword] = useState( '');
    const [error, setError] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const authenticate = { 'Project-ID': "a5c5a2d5-6da5-4590-ac2b-f6aec41ea58c", 'User-Name': username, "User-Secret": password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authenticate });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (error) {
            setError('Wrong username/password')
        }
    }
    return (
        <div className ="wrapper">
            <div className = "form">
                <h1 className = "title">
                    My Chat App
                </h1> 
                <form onSubmit={handleSubmit}>
                    <input 
                        type = "text"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        className ="input"
                        placeholder = "Username"
                        required
                    />
                     <input 
                        type = "password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        className ="input"
                        placeholder = "Password"
                        required
                    />
                    <div align ="center">
                        <button type ="submit" className ="button">
                            <span>Enter a chat</span>    
                        </button>

                    </div>
                    <h2 className = "error">
                        {error}</h2>

                </form>   
            </div>
        </div>
    )

}
export default LoginForm;