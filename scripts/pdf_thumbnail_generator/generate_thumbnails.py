from pdf2image import convert_from_path
from PIL import Image
import glob

def resize_to_contain(pil_img, size, background_color):
  t_width, t_height = size
  s_width, s_height = pil_img.size

  if s_width/s_height > t_width/t_height:
    pil_img = pil_img.resize((t_width, int(round(t_width/s_width * s_height))), Image.ANTIALIAS)

  else:
    pil_img = pil_img.resize( (int(round(t_height/s_height * s_width)), t_height), Image.ANTIALIAS)

  result = Image.new(pil_img.mode, size, background_color)
  result.paste(pil_img, (int((t_width-pil_img.size[0])/2), int((t_height-pil_img.size[1])/2)))
	
  return result


def generate_thumbnail(pdf_file):
  images = convert_from_path(pdf_file, dpi=60, first_page=1, last_page=2)

  widths, heights = zip(*(i.size for i in images))

  total_width = sum(widths)
  max_height = max(heights)

  new_im = Image.new('RGB', (total_width, max_height))

  x_offset = 0
  for im in images:
    new_im.paste(im, (x_offset,0))
    x_offset += im.size[0]

  new_im = resize_to_contain(new_im, (500, 320), "#ffffff")

  new_im.save(pdf_file[:(len(pdf_file)-4)] + '.jpg' , "JPEG", quality=70)

dir = "./"
pdf_files = glob.glob(dir + '*.pdf')

for pdf_file in pdf_files:
  generate_thumbnail(pdf_file)
  print(pdf_file)


