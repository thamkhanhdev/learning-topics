from translate import Translator

try:
    with open('hello.txt', mode='r') as my_file:
        print(my_file.read())
except FileNotFoundError as error:
    print('File not found!')
