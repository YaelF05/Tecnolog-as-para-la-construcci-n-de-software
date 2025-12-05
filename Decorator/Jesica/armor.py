from item_decorator import ItemDecorator
from character import Character

class LeatherArmorDecorator(ItemDecorator):
    def __init__(self, character, defense_bonus=15):
        super().__init__(character)
        self._defense_bonus = defense_bonus

    def get_defense(self):
        return self._character.get_defense() + self._defense_bonus
    
    def get_description(self):
        return f'{self._character._get_description()}'
    
class IronArmorDecorator(ItemDecorator):
    def __init__(self, character, defense_bonus=20, speed_penalty=4):
        super().__init__(character)
        self._defense_bonus = defense_bonus
        self._speed_penalty = speed_penalty
    
    def get_defense(self):
        return self._character.get_defense() + self._defense_bonus
    
    def get_speed(self):
        return max(1, self._character._get_speed())
    
    def get_description(self):
        return f'{self._character._get_description()} + Armadura de hierro'