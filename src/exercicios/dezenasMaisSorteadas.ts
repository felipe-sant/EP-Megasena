import dados from "../const/Dados"
import MaisSorteado from "../models/MaisSorteado"
import Megasena from "../models/Megasena"

function verificarNumeroExiste(dezenasMaisSorteadas: MaisSorteado[], numero: number): boolean {
    let numeroExiste = false
    dezenasMaisSorteadas.forEach((dezena) => {
        if (dezena.number === numero) {
            dezena.incrementar()
            numeroExiste = true
        }
    })
    return numeroExiste
}

function dezenasMaisSorteadas() {
    const dezenasMaisSorteadas: MaisSorteado[] = []

    dados.getCSV().forEach((sorteio: Megasena) => verificarNumeroExiste(dezenasMaisSorteadas, sorteio.a1) || dezenasMaisSorteadas.push(new MaisSorteado(sorteio.a1)))
    dados.getCSV().forEach((sorteio: Megasena) => verificarNumeroExiste(dezenasMaisSorteadas, sorteio.a2) || dezenasMaisSorteadas.push(new MaisSorteado(sorteio.a2)))
    dados.getCSV().forEach((sorteio: Megasena) => verificarNumeroExiste(dezenasMaisSorteadas, sorteio.a3) || dezenasMaisSorteadas.push(new MaisSorteado(sorteio.a3)))
    dados.getCSV().forEach((sorteio: Megasena) => verificarNumeroExiste(dezenasMaisSorteadas, sorteio.a4) || dezenasMaisSorteadas.push(new MaisSorteado(sorteio.a4)))
    dados.getCSV().forEach((sorteio: Megasena) => verificarNumeroExiste(dezenasMaisSorteadas, sorteio.a5) || dezenasMaisSorteadas.push(new MaisSorteado(sorteio.a5)))
    dados.getCSV().forEach((sorteio: Megasena) => verificarNumeroExiste(dezenasMaisSorteadas, sorteio.a6) || dezenasMaisSorteadas.push(new MaisSorteado(sorteio.a6)))

    dezenasMaisSorteadas.sort((a, b) => b.count - a.count)

    let posicao = 1
    let x = 0
    let numeroAnterior = -1
    while (posicao <= 6) {
        console.log(`${posicao}º - Numero: ${dezenasMaisSorteadas[x].number < 10 ? "0" + dezenasMaisSorteadas[x].number : dezenasMaisSorteadas[x].number} - Quantidade: ${dezenasMaisSorteadas[x].count}`)
        if (numeroAnterior != dezenasMaisSorteadas[x].count) {
            posicao++
        }
        numeroAnterior = dezenasMaisSorteadas[x].count
        x++
    }
}

export default dezenasMaisSorteadas