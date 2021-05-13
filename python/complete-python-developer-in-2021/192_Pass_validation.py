import re

rePass = re.compile(r"[A-Za-z0-9$%#@]{8,}\d")

password = 'ashkdjsah$#%78'

check = rePass.fullmatch(password)

print(check)