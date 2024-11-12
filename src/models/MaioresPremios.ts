import PremioPago from "./PremioPago";

class MaioresPremios {
    public primeiro: PremioPago;
    public segundo: PremioPago;
    public terceiro: PremioPago;

    constructor() {
        const premio = new PremioPago()
        this.primeiro = premio
        this.segundo = premio
        this.terceiro = premio
    }

    adicionarPremio(valor: PremioPago): void {
        if (valor.premio > this.primeiro.premio) {
            this.terceiro = this.segundo
            this.segundo = this.primeiro
            this.primeiro = valor
        } else if (valor.premio > this.segundo.premio) {
            this.terceiro = this.segundo
            this.segundo = valor
        } else if (valor.premio > this.terceiro.premio) {
            this.terceiro = valor
        }
    }
}

export default MaioresPremios;