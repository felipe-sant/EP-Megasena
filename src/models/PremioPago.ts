class PremioPago {
    premio: number;
    ano?: number;
    ganhadores: number;
    apostas: number;
    
    constructor(ano?: number) {
        this.ano = ano || 0
        this.apostas = 0
        this.ganhadores = 0
        this.premio = 0;
    }

    adicionarAposta(valor: number): void { this.apostas += valor; }
    removerAposta(valor: number): void { this.apostas -= valor; }

    adicionarGanhadores(valor: number): void { this.ganhadores += valor; }
    removerGanhadores(valor: number): void { this.ganhadores -= valor }

    adicionarPremio(valor: number): void { this.premio += valor; }

    removerPremio(valor: number): void { this.premio -= valor; }
}

export default PremioPago;