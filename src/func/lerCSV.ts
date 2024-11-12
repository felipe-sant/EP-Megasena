import readline from "node:readline";
import fs from "fs";
import Megasena from "../models/Megasena";

async function lerCSV(): Promise<Megasena[]> {
    const dados: Megasena[] = [];
    
    const rl = readline.createInterface({
        input: fs.createReadStream("./csv/Megasena.csv"),
        output: process.stdout,
        terminal: false
    })

    let isFirstLine = true;

    return new Promise((resolve, reject) => {
        rl.on("line", (line) => {
            if (isFirstLine) {
                isFirstLine = false;
                return;
            }

            const [concurso, data, a1, a2, a3, a4, a5, a6, ganhadores, premio, apostas] = line.split(";");
            const megasena = new Megasena(concurso, data, a1, a2, a3, a4, a5, a6, ganhadores, premio, apostas)
            dados.push(megasena);
        })

        rl.on("close", () => {
            resolve(dados);
        })

        rl.on("error", (error) => {
            reject(error);
        })
    })
}

export default lerCSV;