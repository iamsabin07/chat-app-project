import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';

const App = () => {
    //if username is not entered, call Login Form
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        //render chatEngine
        <ChatEngine
            height = "100vh"
            projectID= "a5c5a2d5-6da5-4590-ac2b-f6aec41ea58c"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App; 