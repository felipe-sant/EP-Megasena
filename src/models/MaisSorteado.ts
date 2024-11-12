class MaisSorteado {
    public number: number
    public count: number

    constructor(number: number) {
        this.number = number
        this.count = 1
    }

    public incrementar(): void {
        this.count++
    }

    public decrementar(): void {
        this.count--
    }

    public toString(): string {
        return `${this.number}: ${this.count}`
    }
}

export default MaisSorteado