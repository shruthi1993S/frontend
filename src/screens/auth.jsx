/* eslint-disable react/prop-types */
import './auth.css'

export default function Auth({ children }) { // Destructure children from props
    return (
        <div className=' p-5 d-flex justify-content-start align-items-center vh-100 loginPage'>
    <div className="d-flex align-items-center justify-content-start loginForm" > {children}</div>

        </div>
    );
}
