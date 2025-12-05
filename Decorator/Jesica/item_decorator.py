from character import Character

class ItemDecorator(Character):
    def __init__(self, character):
        self._character = character

    def get_attack(self):
        return self._character._get_attack()
    
    def get_defense(self):
        return self._character._get_defense()
    
    def get_speed(self):
        return self._character._get_speed()
    
    def get_description(self):
        return self._character._get_description()
    
    