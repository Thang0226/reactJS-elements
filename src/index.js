import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className="container">
    <div className="card">
        <div className="card--header"/>
        <img
            className="avatar"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
        />
        <div className="card--body">
            <div>
                <p className="text-header">Ruma Khan</p>
                <p className="text-sub">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry
                </p>
                <button className="btn third">FOLLOW</button>
            </div>
        </div>
    </div>
</div>);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<div className="container d-flex align-items-center text-center">
    <div className="form-signin">
        <form>
            <img className="mb-4"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                 alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com"/>
                <label>Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control password" id="floatingPassword" placeholder="Password"/>
                <label>Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox"/> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    </div>
</div>);