export type Bot = {
    name: string,
    cost: number,
    "24h": number,
    "7d": number,
    "30d": number,
    "60d": number,
    "90d": number,
    all_time: number
}

export type GraphData = {
    name:string,
    uv:number
}[]
