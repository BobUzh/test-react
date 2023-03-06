import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../redux/wishlistSlice";

interface Props {
    movie: Movie,
    grid: number
}

const ItemCard = ({movie, grid}: Props) => {

    return (
        <Card 
            variant="elevation"
            sx={{
                position: 'relative',
                height: '100%',
                display: 'flex', 
                p:3, background: 'linear-gradient(rgba(255, 255, 255, 0.09), #121212)'
            }}
        >
            <CardMedia
                component="img"
                sx={{width: 190}}
                image={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            />
            <Typography
                position="absolute"
                top="5px"
                right="5px" 
            >{movie.vote_average}</Typography>
            {grid != 3 ? (
                <CardContent>
                    <Typography variant="h6" mt={2}>
                        {movie.title}
                    </Typography>
                    <Box mb={1}>
                        <Typography display="inline-block" width={95} color="GrayText">
                            {movie.release_date}
                        </Typography>
                    </Box>
                    <Box width={1}>
                        <Typography display="inline-block" component="span" variant="body2">
                            {movie.overview}
                        </Typography>
                    </Box>
                </CardContent>
            ) : ''}
        </Card>
    )
}

export default ItemCard;