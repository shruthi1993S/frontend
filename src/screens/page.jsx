/* eslint-disable react/prop-types */
import Sidebar from '../components/Sidebar';

import Header from '../components/Navbar';
import { useAuth } from '../context/auth_context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Page({ children }) { // Destructure children from props
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !loading)
            navigate('/signin')
    }, [loading, navigate, user])
    return (
        <>
            {(user?._id && !loading) &&
                <>
                    <Header />
                    <div className="content d-flex">
                        <Sidebar />
                        <div className='mt-10' style={{ width: '100%' }}>{children}</div>
                    </div>
                </>
            }
        </>
    );
}
