from datetime import datetime, date

class Logger:
    def __init__(self):
        self._logs = []
    
    def log(self, mensaje:str) -> None:
        self._logs.append(f"[{datetime.now().strftime("%Y-%m-%d %H:%M")}] {mensaje}")
    
    def show_logs(self) -> list[str]:
        return self._logs

class Usuario:
    def __init__(self, usuario_id:int, nombre: str):
        self.id = usuario_id
        self.nombre = nombre
        self.pedidos:list["Pedido"] = []
        self.logger = Logger()
    
    def registrar(self) -> None:
        self.logger.log(f"El usuario {self.nombre} se ha registrado")
    
    def agregar_pedido(self, pedido: "Pedido") -> None:
        self.pedidos.append(pedido)
        self.logger.log(f"El pedido {pedido.id} se agrego al usuario {self.nombre}")
    
    def get_pedidos(self) -> list["Pedido"]:
        return self.pedidos

class Pedido:
    def __init__(self, pedido_id:int, fecha: date, monto:float):
        self.id = pedido_id
        self.fecha = fecha
        self.monto = monto
        self.estado = "Pendiente"
        self.logger = Logger()
    
    def procesar(self) -> None:
        self.estado = "Procesado"
        self.logger.log(f"El pedido {self.id} se ha procesado")
    
    def cancelar(self) -> None:
        self.estado = "Cancelado"
        self.logger.log(f"El pedido {self.id} se ha cancelado")
    
    def mostrar_detalles(self) -> str:
        return f"Pedido: {self.id} | Fecha: {self.fecha} | Monto: {self.monto} | Estado: {self.estado}"

if __name__ == "__main__":
    usuario = Usuario(1, "Fernandito")
    usuario.registrar()

    p1 = Pedido(101, date.today().strftime("%Y-%m-%d"), 43523.34)
    usuario.agregar_pedido(p1)
    p1.procesar()

    p2 = Pedido(102, date.today().strftime("%Y-%m-%d"), 23674.32)
    usuario.agregar_pedido(p2)
    p2.cancelar()

    print(f"\nPedidos del usuario {usuario.nombre}: ")
    for pedido in usuario.get_pedidos():
        print(pedido.mostrar_detalles())
    
    print("\nRegistros del usuario: ")
    for log_usuario in usuario.logger.show_logs():
        print(log_usuario)
    
    print("\nRegistros del pedido: ")
    for log_pedido_1 in p1.logger.show_logs():
        print(log_pedido_1)

    print("\nRegistros del pedido 2: ")
    for log_pedido_2 in p2.logger.show_logs():
        print(log_pedido_2)

    print()