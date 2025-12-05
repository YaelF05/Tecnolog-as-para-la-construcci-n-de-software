class A:
    def method (self):
        print("From A")

class B(A):
    def method (self):
        print("From B")

class C(A):
    def method (self):
        print("From C")

class D (B,C):
    def hello (self):
        print("From D")

d = D()

print(D.mro)
d.method()
