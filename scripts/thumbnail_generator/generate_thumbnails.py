from PIL import Image
import glob

def resize_to_contain(pil_img, size, background_color):
  t_width, t_height = size
  s_width, s_height = pil_img.size

  if s_width/s_height > t_width/t_height:
    pil_img = pil_img.resize((t_width, int(round(t_width/s_width * s_height))), Image.ANTIALIAS)

  else:
    pil_img = pil_img.resize( (int(round(t_height/s_height * s_width)), t_height), Image.ANTIALIAS)

  result = Image.new("RGB", size, background_color)
  result.paste(pil_img, (int((t_width-pil_img.size[0])/2), int((t_height-pil_img.size[1])/2)))
	
  return result


def generate_thumbnail(src_img_file):
  new_im = Image.open(src_img_file)

  new_im = resize_to_contain(new_im, (500, 320), "#ffffff")
  new_im.save(src_img_file[:(len(src_img_file)-4)] + '-thumb.jpg' , "JPEG", quality=70)

  # new_im = resize_to_contain(new_im, (1200, 628), "#ffffff")
  # new_im.save(src_img_file[:(len(src_img_file)-4)] + '-card.jpg' , "JPEG", quality=70)

dir = "./"
src_img_files = glob.glob(dir + '*.png')

for src_img_file in src_img_files:
  generate_thumbnail(src_img_file)
  print(src_img_file)


