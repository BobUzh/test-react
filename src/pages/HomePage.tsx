import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hook";
import { Movie } from '../redux/wishlistSlice';

import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import { GridViewSharp, ViewCompactRounded } from "@mui/icons-material";

import ItemCard from "../components/ItemCard";
import { getMovies } from "../redux/api";

const Home  = () => {
    const [grid, setGrid] = useState(3);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const {value} = useAppSelector(state => state.lang);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMovies(1, value);
            setMovies([...res.data.results]);
            setPage(res.data.page);
        }
        
        fetchData(); 
    }, [value]);

    const loadMore = async () => {
        const res = await getMovies(page+1, value);
        setMovies([...movies, ...res.data.results]);
        setPage(res.data.page);
    }

    return (
        <Container>
            <Box mt={1} bgcolor="#212121">
                <Box display="flex" justifyContent="flex-end">
                    <IconButton color="warning" onClick={() => setGrid(6)}>
                        <GridViewSharp fontSize="large" />
                    </IconButton>
                    <IconButton color="warning" onClick={() => setGrid(3)}>
                        <ViewCompactRounded fontSize="large" />
                    </IconButton>
                </Box>
                <Grid container spacing={1}>
                    {movies?.map(movie => (
                        <Grid key={movie.id} item xs={12} sm={6} md={3} lg={grid}>
                            <ItemCard movie={movie} grid={grid}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box textAlign="center" my={3}>
                    <Button variant="text" size="large"onClick={loadMore}>load more</Button>
                </Box>
        </Container>
    )
}

export default Home;