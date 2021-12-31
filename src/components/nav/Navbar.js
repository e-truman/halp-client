import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Navbar.css"

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { getMyProfile, deleteProfile, updateProfile, getReviewerById } from "../reviewers/ReviewerManager";
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './halpLogo.png';




const pages = [<Link className="link" to="/write_review">Write a Review</Link>, 
<Link className="link" to={`/my_reviews`}>Your Reviews</Link>];
const settings = [<Link className="link" to="my_profile">Profile</Link>, 'Logout'];



export const Navbar = () => {
    const history = useHistory()
    const [reviewer, setReviewer] = useState({})
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        getMyProfile()
            .then(data => setReviewer(data))
    }, [])

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    return (

        <>
            <AppBar className="app__bar" position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link className="link" to="/"><img className="navbar__logo" src={logo} alt="logo" /></Link>
                            
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img className="navbar__logo" src={logo} alt="halp logo" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={reviewer.username} src={reviewer.profile_pic} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                
                                    <MenuItem  onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center"><Link className="link" to="my_profile">Profile</Link></Typography>
                                    </MenuItem>
                                    <MenuItem  onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                    {
                                                (localStorage.getItem("halp_user_id") !== null) ?

                                                    <p className="nav-link fakeLink"
                                                        onClick={() => {
                                                            localStorage.removeItem("halp_user_id")
                                                            history.push({ pathname: "/" })
                                                        }}
                                                    >Logout</p>
                                                    :
                                                    <>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/login">Login</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/register">Register</Link>
                                                        </li>
                                                    </>
                                            }
                                    </Typography>
                                </MenuItem>
                                    
                              
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>

        //     < Box sx={{ flexGrow: 1 }
        //     }>
        //         <AppBar position="static">
        //             <Container maxWidth="xl">
        //                 <Toolbar>
        //                     {/* <IconButton
        //                     size="large"
        //                     edge="start"
        //                     color="inherit"
        //                     aria-label="open drawer"
        //                     sx={{ mr: 2 }}
        //                 >
        //                     <MenuIcon />
        //                 </IconButton> */}


        //                     <Typography
        //                         variant="h6"
        //                         noWrap
        //                         component="div"
        //                         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        //                     >
        //                         <Link className="navbar__link" to="/">Home</Link>
        //                     </Typography>




        //                     <Typography
        //                         variant="h6"
        //                         noWrap
        //                         component="div"
        //                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        //                     >
        //                         <Link className="navbar__link" to="/">Home</Link>
        //                     </Typography>
        //                     <Typography
        //                         variant="h6"
        //                         noWrap
        //                         component="div"
        //                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        //                     >
        //                         <Link className="navbar__link" to={`/my_reviews`}>Your Reviews</Link>
        //                     </Typography>
        //                     {/* <Typography
        //         variant="h6"
        //         noWrap
        //         component="div"
        //         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        //     >
        //         <Link className="navbar__link" to="/write_review">Write a Review</Link>
        //     </Typography> */}
        //                     <Typography
        //                         variant="h6"
        //                         noWrap
        //                         component="div"
        //                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        //                     >

        //                     </Typography>
        //                     <Search>
        //                         <SearchIconWrapper>
        //                             <SearchIcon />
        //                         </SearchIconWrapper>
        //                         <StyledInputBase
        //                             placeholder="Search…"
        //                             inputProps={{ 'aria-label': 'search' }}
        //                         />
        //                     </Search>

        //                     <Box sx={{ flexGrow: 0 }}>
        //                         <Tooltip title="Open settings">
        //                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        //                            <Link to= "/my_profile">
        //                                 <Avatar alt="profile" src="/static/images/avatar/2.jpg" />
        //                                 </Link>
        //                             </IconButton>
        //                         </Tooltip>
        //                         <Menu
        //                             sx={{ mt: '45px' }}
        //                             id="menu-appbar"
        //                             anchorEl={anchorElUser}
        //                             anchorOrigin={{
        //                                 vertical: 'top',
        //                                 horizontal: 'right',
        //                             }}
        //                             keepMounted
        //                             transformOrigin={{
        //                                 vertical: 'top',
        //                                 horizontal: 'right',
        //                             }}
        //                             open={Boolean(anchorElUser)}
        //                             onClose={handleCloseUserMenu}
        //                         >

        //                             <MenuItem  onClick={handleCloseNavMenu}>
        //                                 <Typography textAlign="center">
        //                                     {
        //                                         (localStorage.getItem("halp_user_id") !== null) ?

        //                                             <p className="nav-link fakeLink"
        //                                                 onClick={() => {
        //                                                     localStorage.removeItem("halp_user_id")
        //                                                     history.push({ pathname: "/" })
        //                                                 }}
        //                                             >Logout</p>
        //                                             :
        //                                             <>
        //                                                 <li className="nav-item">
        //                                                     <Link className="nav-link" to="/login">Login</Link>
        //                                                 </li>
        //                                                 <li className="nav-item">
        //                                                     <Link className="nav-link" to="/register">Register</Link>
        //                                                 </li>
        //                                             </>
        //                                     }

        //                                 </Typography>
        //                             </MenuItem>




        //                             {/* {settings.map((setting) => (
        //         <MenuItem key={setting} onClick={handleCloseNavMenu}>
        //           <Typography textAlign="center">{setting}</Typography>
        //         </MenuItem>
        //       ))} */}
        //                         </Menu>
        //                     </Box>
        //                 </Toolbar>
        //             </Container>
        //         </AppBar>
        //     </Box >



        // </>
    )
}




// {
//     (localStorage.getItem("halp_user_id") !== null) ?

//         <button className="nav-link fakeLink"
//             onClick={() => {
//                 localStorage.removeItem("halp_user_id")
//                 history.push({ pathname: "/" })
//             }}
//         >Logout</button>
//         :
//         <>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/register">Register</Link>
//             </li>
//         </>
// }