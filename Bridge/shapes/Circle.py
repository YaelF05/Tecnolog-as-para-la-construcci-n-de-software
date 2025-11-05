from draw_api import DrawAPI
from shapes.Shape import Shape


class Circle(Shape):
    def __init__(self, x, y, radius, draw_api: DrawAPI, color="black", alpha=1.0):
        super().__init__(draw_api, color, alpha)
        self.x = x
        self.y = y
        self.radius = radius

    def draw(self):
        self.draw_api.draw_circle(self.x, self.y, self.radius, self.color, self.alpha)