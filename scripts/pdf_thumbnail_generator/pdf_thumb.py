from pdf2image import convert_from_path
from PIL import Image
import glob
import sys

# example
# python pdf_thumb.py 'path_to_pdfs/*.pdf'
# saves .jpg files next to source .pdf files

def resize_to_contain(pil_image, image_size):

  if pil_image.size[1] > pil_image.size[0]:
    return pil_image.resize((image_size, int(round(pil_image.size[1]/pil_image.size[0] * image_size))))
  else:
    return pil_image.resize((int(round(pil_image.size[0]/pil_image.size[1] * image_size)), image_size))




def generate_thumbnail(pdf_file):
  images = convert_from_path(pdf_file, dpi=120, first_page=1, last_page=2)

  widths, heights = zip(*(i.size for i in images))

  total_width = sum(widths)
  max_height = max(heights)

  new_im = Image.new('RGB', (total_width, max_height))

  x_offset = 0
  for im in images:
    new_im.paste(im, (x_offset,0))
    x_offset += im.size[0]

  new_im = resize_to_contain(new_im, 628)

  new_im.save(pdf_file[:(len(pdf_file)-4)] + '.jpg' , "JPEG", quality=70)

assert(len(sys.argv) == 2 and sys.argv[1].endswith('.pdf'))

pdf_files = glob.glob(sys.argv[1])

for pdf_file in pdf_files:
  try:
    print(pdf_file)
    generate_thumbnail(pdf_file)
  except Exception as e:
    print(e)

