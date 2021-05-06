# 164 Under hood of generators

# Section 1

# def special_for(iterable):
#     iterator = iter(iterable)
#     while True:
#         try:
#             print(iterator)
#             next(iterator)
#         except StopIteration:
#             break

# special_for([1, 2, 3])

# Result of above codes
# <list_iterator object at 0x000002581F6EB730>
# <list_iterator object at 0x000002581F6EB730>
# <list_iterator object at 0x000002581F6EB730>
# <list_iterator object at 0x000002581F6EB730>

# Section 2:
class MyGen():
    current = 0

    def __init__(self, first, last):
        self.first = first
        self.last = last

    def __iter__(self):
        return self

    def __next__(self):
        if MyGen.current < self.last:
            num = MyGen.current
            MyGen.current += 1
            return num
        raise StopIteration


gen = MyGen(0, 100)
for i in gen:
    print(i)
