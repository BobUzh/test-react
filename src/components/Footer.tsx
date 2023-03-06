import { Box, Button, TextField, Typography } from "@mui/material";


const Footer = () => {

    return (
        <Box mt={0} width={1} bgcolor="rgba(255, 255, 255, 0.09)">
            <Box
                width="75%"
                m="auto"
                display="flex"
                flexDirection="column"
                pb={1}
                textAlign="center"
            >
                <Box>
                    <Typography pt={3} variant="subtitle1">Join our mailing list and never miss an update</Typography>
                </Box>
                <Box width={1} display="flex">
                    <TextField focused size="small" type="email" sx={{flexGrow: 1}}/>
                    <Button variant="outlined">Subscribe Now</Button>
                </Box>
            </Box>
            <Box textAlign="center">
                <Typography variant="caption">© 2022 Site by BryVolodymyr</Typography>
            </Box>
        </Box>
    )
}

export default Footer;