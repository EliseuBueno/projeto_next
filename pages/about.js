import Link from "next/link"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UndoIcon from '@mui/icons-material/Undo';
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>Página de About</title>
            </Head>
            <AppBar position="static" sx={{ color: grey[900] }}>
                <Container>
                </Container>
            </AppBar>
            <h1>Página de About</h1>
        </>
    )
}