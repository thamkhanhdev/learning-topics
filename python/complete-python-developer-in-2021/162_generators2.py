

def generator_func(num):
    for i in range(num):
        yield i*2
g = generator_func(100)

print(type(g))
