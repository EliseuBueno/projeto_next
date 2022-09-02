import Container from '@mui/material/Container';
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Home() {
    return (
        <>
            <AppBar position="static" sx={{ color: grey[900] }}>
                <Container>
                </Container>
            </AppBar>
            <h1>Página Home</h1>
        </>
    )

}