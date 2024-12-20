import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className=' bg-slate-50 p-2 flex gap-3'>
            <Link href={'/'}> Home</Link>
            <Link href={'/audio'}> Audio</Link>
        </div>
    )
}

export default Navbar