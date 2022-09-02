import { Container } from "@mui/material";
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function RedPant() {
    return (
        <>
            <AppBar position="static" sx={{ color: grey[900] }}>
                <Container>
                </Container>
            </AppBar>
            <h1>Calça Vermelha - R$89,90</h1>
        </>
    )
}