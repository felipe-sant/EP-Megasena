class Megasena {
    public concurso: number
    public data: Date
    public a1: number
    public a2: number
    public a3: number
    public a4: number
    public a5: number
    public a6: number
    public ganhadores: number
    public premio: number
    public apostas: number
    
    constructor(concurso: string, data: string, a1: string, a2: string, a3: string, a4: string, a5: string, a6: string, ganhadores: string, premio: string, apostas: string) {
        this.concurso = parseInt(concurso)
        const dia = parseInt(data.split("/")[0])
        const mes = parseInt(data.split("/")[1])
        const ano = parseInt(data.split("/")[2])
        this.data = new Date(ano, mes - 1, dia)
        this.a1 = parseInt(a1)
        this.a2 = parseInt(a2)
        this.a3 = parseInt(a3)               
        this.a4 = parseInt(a4)
        this.a5 = parseInt(a5)
        this.a6 = parseInt(a6)
        this.ganhadores = parseInt(ganhadores)
        this.premio = parseInt(premio)
        this.apostas = parseInt(apostas)
    }
}

export default Megasena