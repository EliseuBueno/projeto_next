import { Container } from "@mui/material";
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function BluePant() {
    return (
        <>
            <AppBar position="static" sx={{ color: grey[900] }}>
                <Container>
                </Container>
            </AppBar>
            <h1>Calça Azul - R$99,90</h1>
        </>
    )
}