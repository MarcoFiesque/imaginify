import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='auth bg-red-600'>
            {children}
        </main>
    )
}

export default Layout