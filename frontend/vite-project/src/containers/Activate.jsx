// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { verify } from '../actions/auth';

// const Activate = ({ verify, match }) => {
//     const [verified, setVerified] = useState(false);

//     const verify_account = e => {
//         const uid = match.params.uid;
//         const token = match.params.token;

//         verify(uid, token);
//         setVerified(true);
//     };

//     if (verified) {
//         return <Navigate to='/' />
//     }

//     return (
//         <div className='container'>
//             <div
//                 className='d-flex flex-column justify-content-center align-items-center'
//                 style={{ marginTop: '200px' }}
//             >
//                 <h1>Verify your Account:</h1>
//                 <button
//                     onClick={verify_account}
//                     style={{ marginTop: '50px' }}
//                     type='button'
//                     className='btn btn-primary'
//                 >
//                     Verify
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default connect(null, { verify })(Activate);
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();

    const verifyAccount = async () => {
        const uid = match.params.uid;
        const token = match.params.token;

        try {
            // Assuming verify is an asynchronous function
            await verify(uid, token);
            setVerified(true);

        } catch (error) {
            // Handle errors if needed
            console.error('Verification failed:', error);
        }
    };

    if (verified) {
        // Use navigate() instead of <Navigate to='/'> for React Router
        navigate('/');
    }

    return (
        <div className='container'>
            <div
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verifyAccount}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

// Connect the component to the Redux store
export default connect(null, { verify })(Activate);

