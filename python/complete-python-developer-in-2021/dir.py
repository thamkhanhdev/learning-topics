import os

# Path
path = 'D:\\learning-topics\\nodejs'

# Check whether the
# specified path is
# an existing file
isdir = os.path.isdir(path)

print(isdir)