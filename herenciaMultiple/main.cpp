#include <iostream>

class Volador {
    public:
        virtual ~Volador() = default;
        virtual void volar() const = 0;
};

class Nadador {
    public:
        virtual ~Nadador() = default;
        virtual void nadar() const = 0;
};

class Pato : public Volador, public Nadador {
    public:
        void volar() const{std::cout << "El pato vuela\n";}
        void nadar() const{std::cout << "El pato nada\n";}
        void cuack() const{std::cout << "cuack\n";}
};

int main() {
    Pato pato;

    pato.volar();
    pato.nadar();
    pato.cuack();

    return 0;
}