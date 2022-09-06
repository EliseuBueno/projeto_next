import Link from "next/link"
import { useRouter } from "next/router"


export default function Todo() {
    const router = useRouter()
    const todoId = router.query.todoId
    return (
        <>
            <Link href="/"><a>Voltar</a></Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>Comentário: Este é um comentário qualquer 1...<Link href={`/todos/${todoId}/comments/1`}><a>Detalhes</a></Link></p>
            <p>Comentário: Este é um comentário qualquer 2...<Link href={`/todos/${todoId}/comments/2`}><a>Detalhes</a></Link></p>
            <p>Comentário: Este é um comentário qualquer 3...<Link href={`/todos/${todoId}/comments/3`}><a>Detalhes</a></Link></p>
            <p>Comentário: Este é um comentário qualquer 4...<Link href={`/todos/${todoId}/comments/4`}><a>Detalhes</a></Link></p>
        </>
    )
}