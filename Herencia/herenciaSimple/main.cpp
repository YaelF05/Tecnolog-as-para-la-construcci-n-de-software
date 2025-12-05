#include <iostream>

class Animal {
    public:
        virtual ~Animal() = default;
        void respirar() const {std::cout << "respirar\n";}
};

struct Perro: public Animal {
    void ladrar() const {std::cout << "woof\n";}
};

struct Gato: public Animal {
    void maullar() const {std::cout << "miau\n";}
};


int main() {
    Perro p;
    Gato g;

    p.ladrar();
    g.maullar();
    p.respirar();
    g.respirar();

    return 0;
}