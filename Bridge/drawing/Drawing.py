from typing import List
from shapes import Shape
from draw_api import DrawAPI

class Drawing:
    def __init__(self, draw_api: DrawAPI):
        self.draw_api = draw_api
        self.shapes: List[Shape] = []

    def add_shape(self, shape: Shape):
        self.shapes.append(shape)

    def render(self):
        self.draw_api.begin_drawing()
        for shape in self.shapes:
            shape.draw()
        self.draw_api.end_drawing()

    def change_renderer(self, new_draw_api: DrawAPI):
        self.draw_api = new_draw_api
        for shape in self.shapes:
            shape.draw_api = new_draw_api