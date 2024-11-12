import dados from "../const/Dados";
import Megasena from "../models/Megasena";
import PremioPago from "../models/PremioPago";

function anoComMaiorApostas() {
    const anoComMaiorAposta: PremioPago = new PremioPago()
    dados.getCSV().forEach((premio: Megasena) => {
        if (premio.apostas > anoComMaiorAposta.apostas) {
            anoComMaiorAposta.apostas = premio.apostas
            anoComMaiorAposta.ano = premio.data.getFullYear()
        }
    })
    console.log(`O ano com maior número de apostas foi ${anoComMaiorAposta.ano} com ${anoComMaiorAposta.apostas} apostas.`)
}

export default anoComMaiorApostas;