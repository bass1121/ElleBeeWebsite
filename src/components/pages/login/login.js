import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-title">
                    Member's Login
                </div>
                <div className="login-form">
                    <input type="email" placeholder="Email" />
                </div>
            </div>
        );
    }
}

export default Login;