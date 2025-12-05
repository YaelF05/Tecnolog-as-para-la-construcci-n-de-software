from datetime import datetime, date

class Logger:
    _instance = None
    _logs:list[str] = []

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def log(self, mensaje: str) -> None:
        self._logs.append(f"[{datetime.now().strftime("%Y-%m-%d %I:%M %p")}] {mensaje}")
    
    def show_logs(self) -> list[str]:
        return self._logs

class Usuario:
    def __init__(self, usuario_id: int, nombre: str):
        self.id = usuario_id
        self.nombre = nombre
        self.pedidos:list["Pedido"] = []
    
    def registrar(self) -> None:
        logger = Logger()
        logger.log(f"El usuario {self.nombre} se ha registrado")
    
    def agregar_pedido(self, pedido: "Pedido") -> None:
        self.pedidos.append(pedido)
        logger = Logger()
        logger.log(f"El pedido {pedido.id} se agrego al usuario {self.nombre}")
    
    def get_pedidos(self) -> list["Pedido"]:
        return self.pedidos

class Pedido:
    def __init__(self, pedido_id: int, fecha: date, monto: float):
        self.id = pedido_id
        self.fecha = fecha
        self.monto = monto
        self.estado = "Pendiente"

    def procesar(self) -> None:
        self.estado = "Procesado"
        logger = Logger()
        logger.log(f"El pedido {self.id} se ha procesado")
    
    def cancelar(self) -> None:
        self.estado = "Cancelado"
        logger = Logger()
        logger.log(f"El pedido {self.id} se ha cancelado")
    
    def mostrar_detalles(self) -> str:
        return f"Pedido: {self.id} | Fecha: {self.fecha} | Monto: {self.monto} | Estado: {self.estado}"
    
if __name__ == "__main__":
    usuario = Usuario(1, "Fernandito")
    usuario.registrar()

    p1 = Pedido(101, date.today().strftime("%Y-%m-%d"), 3214.43)
    usuario.agregar_pedido(p1)
    p1.procesar()

    p2 = Pedido(102,  date.today().strftime("%Y-%m-%d"), 322345.53)
    usuario.agregar_pedido(p2)
    p2.cancelar()

    print(f"\nPedidos del usuario {usuario.nombre}: ")
    for pedido in usuario.get_pedidos():
        print(pedido.mostrar_detalles())
    
    pepe_de_jesus = Logger()
    
    print("\nRegistros del sistema: ")
    for pepe in pepe_de_jesus.show_logs():
        print(pepe)
    
    print()