//나중에 배포할때 .env를 만들어줘야 되는데 그때 없을때는 localhost:3000 으로 세팅된다

const host = process.env.REACT_APP_API_HOST ?? 'localhost';
const port = process.env.REACT_APP_API_PORT ?? 3000;

const API_ENDPOINT = `${host}:${port}`;

export { API_ENDPOINT };
