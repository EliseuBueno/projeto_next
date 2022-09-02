import Link from "next/link"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UndoIcon from '@mui/icons-material/Undo';
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function About() {
    return (
        <>
            <AppBar position="static" sx={{ color: grey[900] }}>
                <Container>
                </Container>
            </AppBar>
            <h1>Página de About</h1>
        </>
    )
}