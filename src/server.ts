import { createServer } from "miragejs";

export default function () {
    createServer({
        routes() {
            this.get("/api/test", () => ({
                data: "test",
            }));

            this.post('/api/login', (schema, request) => {
                console.log(schema, request);

                return {
                    token: 'tokentest',
                    username: 'User'
                }
            })
        },
    });
}
