import Link from "next/link"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UndoIcon from '@mui/icons-material/Undo';

export default function Product() {
    return (
        <Container>
            <h1>Página de Produtos</h1>
            <Link href="/">
                <UndoIcon color="primary" sx={{ fontSize: 40 }}>Voltar</UndoIcon>
            </Link>
        </Container>
    )
}