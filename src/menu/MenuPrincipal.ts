import anoComMaiorApostas from "../exercicios/anoComMaiorApostas";
import dezenasMaisSorteadas from "../exercicios/dezenasMaisSorteadas";
import maioresPremiosPagos from "../exercicios/maioresPremiosPagos";
import totalDePremioPagos from "../exercicios/totalDePremioPagos";
import limparTerminal from "../utils/limparTerminal";
import Menu from "./_Menu";

class MenuPrincipal extends Menu {
    public mostrar(): void {
        console.log("Mostrando menu principal");
        console.log("===".repeat(10))
        console.log("1. As 6 dezenas mais sorteadas")
        console.log("2. Total de prêmios pagos ano a ano")
        console.log("3. Os 3 maiores prêmios pagos")
        console.log("4. Ano com maior número de apostas.")
        console.log("0. Sair")
        console.log("===".repeat(10))
    }

    public executar(): void {
        limparTerminal()
        this.mostrar()
        this.opcao = this.entrada.receberNumero("Digite uma opcao:")
        switch (this.opcao) {
            case 1:
                dezenasMaisSorteadas()
                this.entrada.aguardarEnter()
                break;
            case 2:
                totalDePremioPagos()
                this.entrada.aguardarEnter()
                break;
            case 3:
                maioresPremiosPagos()
                this.entrada.aguardarEnter()
                break;
            case 4:
                anoComMaiorApostas()
                this.entrada.aguardarEnter()
                break;
            case 0:
                console.log("Saindo...")
                this.executando = false
                break;
            default:
                console.log("Opcao invalida")
                break
        }
    }
}

export default MenuPrincipal;