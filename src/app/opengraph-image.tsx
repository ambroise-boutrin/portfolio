import { ImageResponse } from 'next/og';

// export const runtime = 'edge'; // Commenté pour permettre la génération statique (SSG)

export const alt = 'Ambroise B. | Studio Créatif et Développement Web';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    padding: '80px',
                    border: '1px solid #333',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px'
                }}>
                    <div style={{
                        fontSize: 84,
                        fontWeight: 900,
                        letterSpacing: '-0.05em',
                        background: 'linear-gradient(to right, #ffffff, #a3a3a3)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        marginBottom: '10px'
                    }}>
                        Ambroise B.
                    </div>

                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: '#ffffff',
                        marginBottom: '30px'
                    }} />

                    <div style={{
                        fontSize: 36,
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: '#cccccc',
                        textAlign: 'center',
                    }}>
                        Studio de Développement Web et Design
                    </div>

                    <div style={{
                        display: 'flex',
                        marginTop: '40px',
                        fontSize: 24,
                        color: '#888888',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>
                        Next.js • React • TypeScript • UI/UX
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
