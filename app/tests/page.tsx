import { createUser } from '@/lib/actions/user.actions';
import User from '@/lib/database/models/user.model'
import React from 'react'

const TestsPage = () => {
    const newUser = {
        clerkId: "clerk_123",
        email: "utilisateur@example.com",
        userName: "utilisateur123",
        photo: "https://example.com/photo.jpg",
        firstName: "John",
        lastName: "Doe",
        planId: 2,
        creditBalance: 50,
        username: "utilisateur123", // Ajout de la propriété username
    };

    createUser(newUser);


    return (
        <div>TestsPage</div>
    )
}

export default TestsPage