import dados from "../const/Dados"
import Megasena from "../models/Megasena"
import PremioPago from "../models/PremioPago"

function verificarAnoExiste(premios: PremioPago[], ano: number): boolean {
    let anoExiste = false
    premios.forEach((premio) => {
        if (premio.ano === ano) {
            anoExiste = true
        }
    })
    return anoExiste
}

function totalDePremioPagos() {
    const premios: PremioPago[] = []
    dados.getCSV().forEach((sorteio: Megasena) => {
        verificarAnoExiste(premios, sorteio.data.getFullYear()) || premios.push(new PremioPago(sorteio.data.getFullYear()))
        premios.forEach(premio => {
            if (premio.ano === sorteio.data.getFullYear()) {
                premio.adicionarPremio(sorteio.premio)
                premio.adicionarGanhadores(sorteio.ganhadores)
            }
        })
    })
    premios.sort((a, b) => a.ano! - b.ano!)
    premios.forEach(premio => console.log(`Ano: ${premio.ano} - Ganhadores: ${premio.ganhadores} - Total de prêmios pagos: R$ ${premio.premio}`))
}

export default totalDePremioPagos