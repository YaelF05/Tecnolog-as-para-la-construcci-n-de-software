from draw_api.DrawAPI import DrawAPI

class DrawOnPaper(DrawAPI):
    def begin_drawing(self):
        print("Comenzando dibujo en papel...")

    def end_drawing(self):
        print("Dibujo finalizado en papel.\n")

    def draw_circle(self, x, y, radius, color, alpha):
        print(f"Dibujo círculo en papel (r={radius}) con tinta color {color}")

    def draw_rectangle(self, x, y, width, height, color, alpha):
        print(f"Dibujo rectángulo en papel ({width}x{height}) color {color}")