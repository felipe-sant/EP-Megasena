import dados from "../const/Dados";
import MaioresPremios from "../models/MaioresPremios";
import Megasena from "../models/Megasena";
import PremioPago from "../models/PremioPago";

function maioresPremiosPagos() {
    const maioresPremios = new MaioresPremios()
    dados.getCSV().forEach((sorteio: Megasena) => {
        const premio = new PremioPago(sorteio.data.getFullYear())
        premio.premio = sorteio.premio
        maioresPremios.adicionarPremio(premio)
    })
    console.log(`Os maiores prêmios pagos foram:`)
    console.log(`1º - Ano: ${maioresPremios.primeiro.ano} - R$ ${maioresPremios.primeiro.premio}`)
    console.log(`2º - Ano: ${maioresPremios.segundo.ano} - R$ ${maioresPremios.segundo.premio}`)
    console.log(`3º - Ano: ${maioresPremios.terceiro.ano} - R$ ${maioresPremios.terceiro.premio}`)
}

export default maioresPremiosPagos;