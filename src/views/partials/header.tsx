import { html } from 'hono/html';

export const Header = () => html`
    <header>
        <nav class="navbar">
            <a href="/" class="home">Home</a>
        </nav>
    </header>
`;
