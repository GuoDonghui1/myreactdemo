import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/app-logo.svg';
import {useEffect} from 'react';
Login.propTypes = {};

function Login(props) {
    useEffect(() => {
        // 将类添加到 body 元素
        document.body.classList.add('app-login');
        document.body.classList.add('p-0');
        return () => {
            // 当组件卸载时从 body 元素中删除类
            document.body.classList.remove('app-login');
            document.body.classList.remove('p-0');

        }
    }, []);
    return (
        <div className="row g-0 app-auth-wrapper">
            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                <div className="d-flex flex-column align-content-end">
                    <div className="app-auth-body mx-auto">
                        <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img
                            className="logo-icon mr-2" src={logo} alt="logo"/></a></div>
                        <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
                        <div className="auth-form-container text-left">
                            <form className="auth-form login-form">
                                <div className="email mb-3">
                                    <label className="sr-only" htmlFor="signin-email">Email</label>
                                    <input id="signin-email" name="signin-email" type="email"
                                           className="form-control signin-email" placeholder="Email address"
                                           required="required"/>
                                </div>

                                <div className="password mb-3">
                                    <label className="sr-only" htmlFor="signin-password">Password</label>
                                    <input id="signin-password" name="signin-password" type="password"
                                           className="form-control signin-password" placeholder="Password"
                                           required="required"/>
                                    <div className="extra mt-3 row justify-content-between">
                                        <div className="col-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="RememberPassword"/>
                                                <label className="form-check-label" htmlFor="RememberPassword">Remember
                                                    me </label>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="forgot-password text-right"><a
                                                href="reset-password.html">Forgot password?</a></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button type="submit"
                                            className="btn app-btn-primary btn-block theme-btn mx-auto">Log In
                                    </button>
                                </div>
                            </form>
                            <div className="auth-option text-center pt-5">No Account? Sign up <a className="text-link"
                                                                                                 href="signup.html">here</a>.
                            </div>
                        </div>
                    </div>
                    <footer className="app-auth-footer">
                        <div className="container text-center py-3"><small className="copyright">Designed with <i
                            className="fa fa-heart" style={{color: '#fb866a'}}/>by <a className="app-link" href="#">Xiaoying
                            Riley</a>for developers</small></div>
                    </footer>
                </div>
            </div>

            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"/>
                <div className="auth-background-mask"/>
                <div className="auth-background-overlay p-3 p-lg-5">
                    <div className="d-flex flex-column align-content-end h-100">
                        <div className="h-100"/>
                        <div className="overlay-content p-3 p-lg-4 rounded">
                            <h5 className="mb-3 overlay-title">Explore Portal Admin Template</h5>
                            <div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the
                                template license <a href="">here</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
