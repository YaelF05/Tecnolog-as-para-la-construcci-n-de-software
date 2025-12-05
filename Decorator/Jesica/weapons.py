from item_decorator import ItemDecorator
from character import Character

class SwordDecorator(ItemDecorator):
    def __init__(self, character, damage_bonus):
        super().__init__(character)
        self._damage_bonus = damage_bonus

    def get_attack(self):
        return self._character.get_attack() + self._damage_bonus
    
    def get_description(self):
        return f'{self._character._get_description()} + Espada (+{self._damage_bonus})'
    

class BowDecorator(ItemDecorator):

    def __init__(self, character, damage_bonus=10, speed_bonus=5):
        super.__init__(character)
        self._damage_bonus = damage_bonus
        self._speed_bonus = speed_bonus

        def get_attack(self):
            return self._character._get_attack() + self._damage_bonus
        
        def get_speed(self):
            return self._character._get_speed() + self._speed_bonus
        
        def get_description(self):
            return (f'{self._character._get_description()} + Arco '
                    f'(+{self._damage_bonus} ATK, + {self._speed_bonus} SPD)')
        
class MagicStaffDecorator(ItemDecorator):
    def __init__(self, character, damage_bonus, speed_penalty):
        super().__init__(character)
        self._damage_bonus = damage_bonus
        self._speed_penalty = speed_penalty

    def get_attack(self):
        return self._character.get_attack() + self._damage_bonus
    
    def get_speed(self):
        return max(1, self._character._get_speed() - self._speed_penalty)
    
    def get_description(self):
        return (f'{self._character._get_description()}')