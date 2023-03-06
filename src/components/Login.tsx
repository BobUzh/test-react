import { AccountCircle, LockOutlined } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispach } from "../redux/hook";
import { setUser } from '../redux/userSlice';

interface Props {
    isOpen: boolean,
    close: () => void
}
const Login = ({isOpen, close}: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispach();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    //TODO move this login logic
    const login = () => {
        if (username !== 'admin' || password !== '12345') {
            setIsError(true);
            
            return
        }
        setIsError(false);
        localStorage.setItem('userId', '1');
        dispatch(setUser({id:1, isAuthorized: true}));
        close()
        return navigate('/profile');
    }

    return (
        <Dialog open={isOpen} onClose={close}>
            <DialogTitle textAlign="center" variant="h4">Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    value={username}
                    onChange={handleUsername}
                    margin="dense"
                    id="username"
                    label="username"
                    type="text"
                    fullWidth
                    variant="standard"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                />
                <TextField
                    value={password}
                    onChange={handlePassword}
                    margin="dense"
                    id="password"
                    label="password"
                    type="password"
                    fullWidth
                    variant="standard"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <LockOutlined />
                        </InputAdornment>
                    ),
                    }}
                />
                {isError && <Typography color="red">Username or password entered incorrectly.</Typography>}
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={login}>Log In</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login;