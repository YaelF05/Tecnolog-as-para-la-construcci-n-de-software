from draw_api.DrawAPI import DrawAPI

class DrawToSVG(DrawAPI):
    def __init__(self):
        self._svg_elements = []

    def begin_drawing(self):
        self._svg_elements.append('<svg xmlns="http://www.w3.org/2000/svg">')

    def end_drawing(self):
        self._svg_elements.append("</svg>")
        with open("output.svg", "w", encoding="utf-8") as f:
            f.write("\n".join(self._svg_elements))
        print("SVG guardado como 'output.svg'\n")

    def draw_circle(self, x, y, radius, color, alpha):
        self._svg_elements.append(
            f'<circle cx="{x}" cy="{y}" r="{radius}" fill="{color}" fill-opacity="{alpha}"/>'
        )

    def draw_rectangle(self, x, y, width, height, color, alpha):
        self._svg_elements.append(
            f'<rect x="{x}" y="{y}" width="{width}" height="{height}" fill="{color}" fill-opacity="{alpha}"/>'
        )