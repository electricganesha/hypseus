import React, { useState, useContext } from 'react';
import { AuthContext } from "../../auth/context";
import firebase from 'firebase/compat/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from './Auth.module.scss';
import Modal from 'react-modal';

const userIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>;

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Auth = props => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext); 

    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                setAuth(authResult);
                closeModal();
                return false;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return <div className={styles.auth}>
        {user ? <div className={styles.auth__loggedin}>{userIcon} {user.displayName}</div> :
            <p onClick={() => openModal()} className={styles.auth__cta}>Login / Create Account</p>
        }

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Login / Create Account"
            style={modalStyles}
        >
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Modal>
    </div>
};

export default Auth;
