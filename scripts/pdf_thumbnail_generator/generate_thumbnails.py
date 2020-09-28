from pdf2image import convert_from_path
from PIL import Image
import glob

def generate_thumbnail(pdf_file):
  images = convert_from_path(pdf_file, dpi=25, first_page=1, last_page=2)

  widths, heights = zip(*(i.size for i in images))

  total_width = sum(widths)
  max_height = max(heights)

  new_im = Image.new('RGB', (total_width, max_height))

  x_offset = 0
  for im in images:
    new_im.paste(im, (x_offset,0))
    x_offset += im.size[0]

  new_im.save(pdf_file[:(len(pdf_file)-4)] + '.jpg' , "JPEG")

dir = "./scripts/pdf_thumbnail_generator/"
pdf_files = glob.glob(dir + '*.pdf')

for pdf_file in pdf_files:
  generate_thumbnail(pdf_file)
  print(pdf_file)



