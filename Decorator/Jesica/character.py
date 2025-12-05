from abc import ABC, abstractmethod

class Character(ABC):
    def get_attack(self):
        pass

    def get_defense(self):
        pass

    def get_speed(self):
        pass

    def get_description(self):
        pass