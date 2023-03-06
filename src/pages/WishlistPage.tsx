import { useEffect } from "react";
import { useAppDispach, useAppSelector } from "../redux/hook";
import { fetchWishList } from '../redux/wishlistSlice'

import { Box, Container, Grid } from "@mui/material";
import Card from "../components/Card";

const WishlistPage  = () => {
    const {list, status} = useAppSelector(state => state.wishlist)
    const {value} = useAppSelector(state => state.lang)
    const dispatch = useAppDispach();

    useEffect(() => {
        dispatch(fetchWishList(value));
    },[value]);

    return (
        <Container>
            <Box >
                <Grid container spacing={1} mt={1}>
                    {list?.map(e => (
                        <Grid item key={e.id} xs={3}>
                            <Card movie={e} />
                        </Grid> 
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default WishlistPage;