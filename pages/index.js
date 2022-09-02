import Link from "next/link";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Home() {
    return (
        <Container>
            <h1>Página Principal</h1>
            <Button href="/products" variant="contained">Produto</Button>
            <Button href="/about" variant="contained">About</Button>
        </Container>
    )
}