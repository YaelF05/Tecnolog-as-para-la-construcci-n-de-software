from character import Character

class BaseCharacter(Character):
    def __init__(self, name, base_attack=10, base_defense=5, base_speed=10):
        self.name = name
        self.base_attack = base_attack
        self.base_defense = base_defense
        self.base_speed = base_speed

    def get_attack(self):
        return self.base_attack
    
    def get_defense(self):
        return self.base_defense
    
    def get_speed(self):
        return self.base_speed
    
    def get_description(self):
        return f'{self.name} (Sin equipamiento)'
        