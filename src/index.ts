import dados from "./const/Dados";
import MenuPrincipal from "./menu/MenuPrincipal";

async function main() {
    await dados.loadCSV()
    const menuPrincipal = new MenuPrincipal()
    while (menuPrincipal.executando) {
        menuPrincipal.executar()
    }
}

main()