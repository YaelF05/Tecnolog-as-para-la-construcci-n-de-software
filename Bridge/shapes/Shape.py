from abc import ABC, abstractmethod
from draw_api import DrawAPI

class Shape(ABC):
    def __init__(self, draw_api: DrawAPI, color="black", alpha=1.0):
        self.draw_api = draw_api
        self.color = color
        self.alpha = alpha

    @abstractmethod
    def draw(self):
        pass