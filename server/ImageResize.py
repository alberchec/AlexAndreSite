from PIL import Image, ImageFilter, ImageOps

def resize(file,size="-l"):

	#SET RESULT IMAGE SIZE, first larger value
	if(size == "-m"): size = 800,600
	elif(size == "-s"): size = 200,150
	else: size = 1500,1125

	#MODIFY IMAGES
	im=Image.open(file)
	image=ImageOps.exif_transpose(im)
	im.close()
	pixels = image.size

	if(pixels[0] < pixels[1]):
		size = size[1],size[0]

	#CHECK IF IMAGE IS BIGGER THAN RESIZE VALUE
	size_ratio = size[0] / size[1]
	img_ratio = pixels[0] / pixels[1]

	if(img_ratio >= size_ratio and pixels[0] > size[0]):
		y_size = int(size[0]/img_ratio)
		size = size[0],y_size
		image = image.resize(size)
	elif(img_ratio < size_ratio and pixels[1] > size[1]):
		x_size = int(img_ratio * size[1])
		size = x_size,size[1]
		image = image.resize(size)

	image = image.filter(ImageFilter.GaussianBlur(radius=0.5) )
	image.save(file,optimize=True,quality=80)

	image.close()
