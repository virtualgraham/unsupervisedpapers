from geopatterns import GeoPattern
import os 
import random
import base64


directory = './bg_gen'

if not os.path.exists(directory):
    os.mkdir(directory)

for id in range(500):
    pattern = GeoPattern(
        str(random.random()), 
        generator=random.choice(['bricks','hexagons','overlapping_circles','overlapping_rings','plaid','plus_signs','rings','sinewaves','squares','triangles','xes'])
    )

    textfile = open(directory + '/' + str(id) + ".svg", 'w')
    textfile.write(pattern.svg_string)
    textfile.close()