from PIL import Image, ImageFilter

img = Image.open('./Pokedex/pikachu.png')

filter_img = img.filter(ImageFilter.BLUR)

filter_img.save('blur.jpg', 'png')
print(img)
