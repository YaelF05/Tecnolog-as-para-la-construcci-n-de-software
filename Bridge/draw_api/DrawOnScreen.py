from draw_api.DrawAPI import DrawAPI

class DrawOnScreen(DrawAPI):
    def begin_drawing(self):
        print("Comenzando dibujo en pantalla...")

    def end_drawing(self):
        print("Dibujo finalizado en pantalla.\n")

    def draw_circle(self, x, y, radius, color, alpha):
        print(f"Círculo en ({x},{y}), radio {radius}, color {color}, transparencia {alpha}")

    def draw_rectangle(self, x, y, width, height, color, alpha):
        print(f"Rectángulo en ({x},{y}), {width}x{height}, color {color}, transparencia {alpha}")