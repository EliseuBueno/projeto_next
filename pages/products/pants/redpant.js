import { Container } from "@mui/material";
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";
import Head from "next/head";

export default function RedPant() {
    return (
        <>
            <Head>
                <title>Página Calça Vermelha</title>
            </Head>
            <AppBar position="static" sx={{ color: grey[900] }}>
                <Container>
                </Container>
            </AppBar>
            <h1>Calça Vermelha - R$89,90</h1>
        </>
    )
}