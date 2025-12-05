from draw_api import DrawAPI
from shapes.Shape import Shape

class Rectangle(Shape):
    def __init__(self, x, y, width, height, draw_api: DrawAPI, color="black", alpha=1.0):
        super().__init__(draw_api, color, alpha)
        self.x = x
        self.y = y
        self.width = width
        self.height = height

    def draw(self):
        self.draw_api.draw_rectangle(self.x, self.y, self.width, self.height, self.color, self.alpha)