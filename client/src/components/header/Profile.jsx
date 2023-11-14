/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Box, Menu, MenuItem, Typography, css } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, Navigate, useNavigate } from "react-router-dom";

const component = css`
    margin-top: 5px;
`;

const logoutBtn = css`
    font-size: 14px;
    margin-left: 20px;
`;

const userbtn = css`
    :hover {
        background: #2a55e5;
        border-radius: 8px;
        & > p {
            color: #fff !important;
        }

        & > svg > path {
            fill: #fff !important;
        }
    }
`


const Profile = ({ account, setAccount }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        setAccount('');
        navigate('/');
    }

    return (
        <>
            <Box css={userbtn} onClick={handleClick} style={{ padding: '8px', display: "flex", justifyContent: "space-between", alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                {/* <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.6489 19.8746C20.2211 17.4062 18.0208 15.6362 15.4529 14.7971C16.7231 14.041 17.7099 12.8888 18.2619 11.5176C18.8139 10.1463 18.9004 8.63175 18.5083 7.20652C18.1162 5.78129 17.2671 4.52418 16.0914 3.62824C14.9156 2.7323 13.4783 2.24707 12.0001 2.24707C10.5219 2.24707 9.08463 2.7323 7.90891 3.62824C6.73318 4.52418 5.88406 5.78129 5.49195 7.20652C5.09984 8.63175 5.18641 10.1463 5.73837 11.5176C6.29033 12.8888 7.27716 14.041 8.54732 14.7971C5.97951 15.6352 3.77919 17.4052 2.35138 19.8746C2.29902 19.96 2.26429 20.055 2.24924 20.154C2.23419 20.253 2.23912 20.3541 2.26375 20.4511C2.28837 20.5482 2.33219 20.6394 2.39262 20.7192C2.45305 20.7991 2.52887 20.8661 2.61559 20.9162C2.70232 20.9663 2.7982 20.9985 2.89758 21.0109C2.99695 21.0234 3.09782 21.0158 3.19421 20.9886C3.29061 20.9614 3.38059 20.9152 3.45884 20.8527C3.53709 20.7902 3.60203 20.7126 3.64982 20.6246C5.41607 17.5721 8.53794 15.7496 12.0001 15.7496C15.4623 15.7496 18.5842 17.5721 20.3504 20.6246C20.3982 20.7126 20.4632 20.7902 20.5414 20.8527C20.6197 20.9152 20.7097 20.9614 20.806 20.9886C20.9024 21.0158 21.0033 21.0234 21.1027 21.0109C21.2021 20.9985 21.2979 20.9663 21.3847 20.9162C21.4714 20.8661 21.5472 20.7991 21.6076 20.7192C21.6681 20.6394 21.7119 20.5482 21.7365 20.4511C21.7611 20.3541 21.7661 20.253 21.751 20.154C21.736 20.055 21.7012 19.96 21.6489 19.8746ZM6.75013 8.99962C6.75013 7.96127 7.05804 6.94624 7.63492 6.08288C8.21179 5.21952 9.03173 4.54661 9.99104 4.14925C10.9504 3.75189 12.006 3.64793 13.0244 3.8505C14.0428 4.05307 14.9782 4.55308 15.7124 5.28731C16.4467 6.02154 16.9467 6.957 17.1493 7.9754C17.3518 8.9938 17.2479 10.0494 16.8505 11.0087C16.4531 11.968 15.7802 12.788 14.9169 13.3648C14.0535 13.9417 13.0385 14.2496 12.0001 14.2496C10.6082 14.2481 9.27371 13.6945 8.28947 12.7103C7.30522 11.726 6.75162 10.3916 6.75013 8.99962Z"
                        fill="#212121" />
                </svg>
                <Typography style={{marginLeft: 10, cursor: 'pointer' }}>{account}</Typography>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                css={component}
            >

                <MenuItem onClick={handleClose}>
                    <Link to="/dashboard" style={{ textDecoration: 'none', textTransform: 'none', color: '#000' }}>
                        <Typography>Dashboard</Typography>
                    </Link>
                </MenuItem>

                <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Typography css={logoutBtn}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;