from item_decorator import ItemDecorator
from character import Character

class BootsOfSpeedDecorator(ItemDecorator):
    def __init__(self, character, speed_bonus):
        super().__init__(character)
        self._speed_bonus = speed_bonus

    def get_speed(self):
        return self._character.get_speed() + self._speed_bonus
    
    def get_description(self):
        return f'{self._character._get_description()} + Botas (+{self._speed_bonus} SPD)'
    
class ShieldDecorator(ItemDecorator):
    def __init__(self, character, defense_bonus=12, speed_penalty=2):
        super().__init__(character)
        self._defense_bonus = defense_bonus
        self._speed_penalty = speed_penalty

    def get_defense(self):
        return self._character._get_defense() + self._defense_bonus
    
    def get_speed(self):
        return max(1, self._character._get_speed() - self._speed_penalty)
    
    def get_description(self):
        return (f'{self._character.get_description()} + Escudo '
                f'(+{self._defense_bonus} DEF, - {self._speed_penalty} SPD)')