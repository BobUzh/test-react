import { useAppDispach } from "../redux/hook";
import { remove, Movie } from '../redux/wishlistSlice'

import { DeleteOutline } from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";


interface Props {
    movie: Movie
}
const Card = ({movie}: Props) => {
    const dispatch = useAppDispach();

    return (
        <Paper sx={{height: '100%'}}>
            <Box display="flex" flexDirection="column" height={1}>
                <img width={'100%'} src={`https://image.tmdb.org/t/p/w185${movie?.poster_path}`} alt="" />
                <Box height={1} p={3} display="flex" flexDirection="column" justifyContent="space-between">
                    <Typography variant="h6" mb={2} textAlign="center">
                        {movie.title}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography>{movie.vote_average}</Typography>
                        <Typography>{movie.release_date}</Typography>
                        <IconButton onClick={() => dispatch(remove(movie.id))}>
                            <DeleteOutline />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Paper>
    )
}

export default Card;