import lerCSV from "../func/lerCSV";
import Megasena from "../models/Megasena";

class Dados {
    static CSV: Megasena[] = [];
    
    public async loadCSV() {
        Dados.CSV = await lerCSV()
    }

    public getCSV(): Megasena[] {
        return Dados.CSV
    }
 }

const dados = new Dados()

export default dados;
