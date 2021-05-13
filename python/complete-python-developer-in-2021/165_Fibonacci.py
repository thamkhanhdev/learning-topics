def fib_number(num):
    a = 0
    b = 1
    for i in range(num):
        yield a
        temp = a
        a = b
        b += temp


for x in fib_number(100):
    print((x))

y = 2.8