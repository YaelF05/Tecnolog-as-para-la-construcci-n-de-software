from abc import ABC, abstractmethod

class DrawAPI(ABC):

    @abstractmethod
    def draw_circle(self, x, y, radius, color, alpha):
        pass

    @abstractmethod
    def draw_rectangle(self, x, y, width, height, color, alpha):
        pass

    @abstractmethod
    def begin_drawing(self):
        pass

    @abstractmethod
    def end_drawing(self):
        pass