import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div>
            <Link href={'/'}> <Button>Home</Button> </Link>
            <Link href={'/audio'}> <Button>Audio</Button> </Link>
        </div>
    )
}

export default Navbar