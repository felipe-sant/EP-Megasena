import Entrada from "../io/Entrada"

abstract class Menu {
    public abstract mostrar(): void
    public abstract executar(): void
    public executando: boolean = true
    public entrada: Entrada = new Entrada()
    public opcao: number = 0
}

export default Menu