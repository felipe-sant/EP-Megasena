class PremioPago {
    premio: number;
    ano: number;
    ganhadores: number;
    
    constructor(ano: number) {
        this.ano = ano;
        this.premio = 0;
        this.ganhadores = 0
    }

    adicionarPremio(valor: number, ganhadores: number): void {
        this.premio += valor;
        this.ganhadores += ganhadores;
    }

    removerPremio(valor: number): void {
        this.premio -= valor;
    }
}

export default PremioPago;