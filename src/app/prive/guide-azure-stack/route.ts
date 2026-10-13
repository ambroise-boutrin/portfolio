import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { timingSafeEqual } from 'node:crypto'

// Document privé : servi uniquement avec le mot de passe défini dans la variable
// d'environnement PRIVATE_FILES_PASSWORD (identifiant libre). Sans variable, la page n'existe pas.
export const dynamic = 'force-dynamic'

function isAuthorized(header: string | null, password: string) {
    if (!header?.startsWith('Basic ')) return false
    const decoded = Buffer.from(header.slice(6), 'base64').toString()
    const given = Buffer.from(decoded.slice(decoded.indexOf(':') + 1))
    const expected = Buffer.from(password)
    return given.length === expected.length && timingSafeEqual(given, expected)
}

export async function GET(request: Request) {
    const password = process.env.PRIVATE_FILES_PASSWORD
    if (!password) return new Response('Not found', { status: 404 })

    if (!isAuthorized(request.headers.get('authorization'), password)) {
        return new Response('Accès réservé', {
            status: 401,
            headers: { 'WWW-Authenticate': 'Basic realm="Documents prives", charset="UTF-8"' },
        })
    }

    const file = await readFile(path.join(process.cwd(), 'private', 'guide-deploiement-azure-stack.pdf'))
    return new Response(file, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="guide-deploiement-azure-stack.pdf"',
            'Cache-Control': 'private, no-store',
            'X-Robots-Tag': 'noindex, nofollow',
        },
    })
}
