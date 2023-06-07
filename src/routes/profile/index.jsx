import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

function Profile() {

    const auth = useAuth();
    console.log(auth);

    return (
        <div>
            <p>Olá, {auth.name}!</p>
            <p>Estamos logado!</p>
        </div>
    );
};


export default Profile