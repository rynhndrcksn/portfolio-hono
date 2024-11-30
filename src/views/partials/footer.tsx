import { html } from 'hono/html';

export const Footer = () => html`
    <footer>
        <div>Powered by <a href="https://hono.dev/" target="_blank">Hono</a> in ${new Date().getFullYear()}</div>
    </footer>
`;
