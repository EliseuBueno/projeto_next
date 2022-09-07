import { Container } from "@mui/system"
import Link from "next/link"

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()
    // console.log(todos)

    return {
        props: { todos },
    }
}

export default function Todo({ todos }) {
    return (
        <Container>
            <br></br>
            <h1>Tarefas para fazer:</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title} - <Link href={`/todos/${todo.id}`}><a>Ver mais</a></Link></li>
                ))}
            </ul>
        </Container>
    )
}