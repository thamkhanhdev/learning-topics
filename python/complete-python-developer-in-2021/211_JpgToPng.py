import sys
import os
from PIL import Image, ImageFilter

# Grab first and second arguments
try:
    image_folder = sys.argv[1]
    output_folder = sys.argv[2]
    print(image_folder, output_folder)
except IndexError as err:
    print(err)

# Check is new/ exists, if not creates it
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# loop through Pokedex,
# convert images to pgn
# save to the new folders
for filename in os.listdir(image_folder):
    img = Image.open(f'{image_folder}{filename}')
    clean_name = os.path.splitext(filename)
    img.save(f'{output_folder}{clean_name[0]}.png', 'png')
    print('Done!')


#Execute commands
# 211_JpgToPng.py Pokedex/ new