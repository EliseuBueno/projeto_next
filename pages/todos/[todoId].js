import Link from "next/link";

import { useRouter } from "next/router";

export default function Todo() {

    const router = useRouter()
    const todoId = router.query.todoId

    return (
        <>
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <h1>Exibindo o Todo: {todoId}</h1>
            <p>Comentário: comentário 1 <Link href={`/todos/${todoId}/comments/1`}><a>Detalhes...</a></Link></p>
            <p>Comentário: comentário 2 <Link href={`/todos/${todoId}/comments/2`}><a>Detalhes...</a></Link></p>
            <p>Comentário: comentário 3 <Link href={`/todos/${todoId}/comments/3`}><a>Detalhes...</a></Link></p>
            <p>Comentário: comentário 4 <Link href={`/todos/${todoId}/comments/4`}><a>Detalhes...</a></Link></p>
        </>
    )
}