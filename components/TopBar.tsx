import { AppBar, Toolbar, Box, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () =>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Box display="flex" justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                <Image alt="Logo" src="/logo_white.png" width={100} height={20} />
            </Box>

            <Button color="inherit">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Button>

            <Button color="inherit">
                <Link href="/posts">
                    <a>Posts</a>
                </Link></Button>

            <Button color="inherit">
                <Link href="/blog">
                    <a>Blog</a>
                </Link></Button>

            <Button color="inherit">
                <Link href="/about">
                    <a>About Us</a>
                </Link></Button>
        </Toolbar>
    </AppBar>

