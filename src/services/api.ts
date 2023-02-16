export const api = {
    get: (url: string) => fetch(url),
    post: (url: string, body: object) => fetch(url, {
        body: JSON.stringify(body)
    })
}

