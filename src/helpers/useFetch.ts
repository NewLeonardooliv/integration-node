interface IUseFetch {
    url: string;
    method: string;
    token?: string;
    contentType?: string;
    data?: any;
}

export async function useFetch({ url, method, token, contentType = "application/json", data }: IUseFetch) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Authorization': `${token}`,
            'Content-Type': contentType
        },
        body: contentType == "application/json" ? JSON.stringify(data) : data
    })

    return await response.json();
}