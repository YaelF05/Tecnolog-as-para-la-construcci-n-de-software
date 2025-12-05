from draw_api.DrawOnPaper import DrawOnPaper
from draw_api.DrawOnScreen import DrawOnScreen
from draw_api.DrawToSVG import DrawToSVG
from drawing.Drawing import Drawing
from shapes.Circle import Circle
from shapes.Rectangle import Rectangle

if __name__ == "__main__":
    screen = DrawOnScreen()
    paper = DrawOnPaper()
    svg = DrawToSVG()

    circle = Circle(100, 100, 50, screen, color="red", alpha=0.8)
    rect = Rectangle(200, 150, 80, 40, screen, color="blue", alpha=0.6)

    drawing = Drawing(screen)
    drawing.add_shape(circle)
    drawing.add_shape(rect)

    print("\n--- Renderizando en pantalla ---")
    drawing.render()

    print("--- Cambiando renderizador a papel ---")
    drawing.change_renderer(paper)
    drawing.render()

    print("--- Exportando a SVG ---")
    drawing.change_renderer(svg)
    drawing.render()
