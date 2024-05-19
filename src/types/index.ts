export interface Prediction {
    url: string,
    is_phising: 1 | 0,
    probability: number
}