import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Head>
                <title>Página Principal</title>
            </Head>
            <Container>
                <h1>Página Home</h1>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/4.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Image src="/images/4.jpg" width="200px" height="200px" alt="Imagem Câmera" />
            </Container>
        </>
    )

}