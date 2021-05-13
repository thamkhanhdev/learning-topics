import re

string = 'try to find something from this file'

test = re.compile('try to find')

a = re.search('find', string)
b = test.search(string)
c = test.findall(string)
d = test.fullmatch(string)
e = test.match(string)

print(a.group())
print(b)
print(c)
print(d)
print(e)
