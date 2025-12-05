from base_character import BaseCharacter
from weapons import SwordDecorator, BowDecorator, MagicStaffDecorator
from armor import LeatherArmorDecorator, IronArmorDecorator
from accesories import BootsOfSpeedDecorator, ShieldDecorator

def print_character_stats(character):
    print('\n' + "="*60)
    print(character._get_description())
    print("-"*60)
    print(f'ATK: {character._get_attack()}')
    print(f'DEF: {character._get_defense()}')
    print(f'SPD: {character._get_speed()}')
    print('='*60)

def main():
    print('\n ARQUERO')
    archer = BaseCharacter('Arquero', base_attack=12, base_defense=3, base_speed=12)
    archer = BowDecorator(archer, damage_bonus=10, speed_bonus=1)
    archer = LeatherArmorDecorator(archer, defense_bonus=1)
    archer = BootsOfSpeedDecorator(archer, speed_bonus=10)
    print_character_stats(archer)

    print('\n GUERRERO')
    warrior = BaseCharacter('Guerrero', base_attack=12, base_defense=3, base_speed=12)
    warrior = BowDecorator(warrior, damage_bonus=10, speed_bonus=1)
    warrior = LeatherArmorDecorator(warrior, defense_bonus=1)
    warrior = BootsOfSpeedDecorator(warrior, speed_bonus=10)
    print_character_stats(archer)