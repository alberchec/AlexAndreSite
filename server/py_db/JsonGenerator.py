import sqlConnection
from sqlConnection import connection,read_query
import os
from time import sleep

os.nice(10)

lastmod = open("/home/alberchec/server/py_db/lastmodified.txt","r").read().splitlines()[0]

query = "SELECT lastmodified FROM piwigo_images WHERE compressed=1 ORDER BY lastmodified DESC LIMIT 1"
date = read_query(connection,query)[0][0].strftime("%Y%m%d%H%M%S")
sleep(0.01)

if(lastmod == date):
	connection.close()
	quit()

import json

img_info = {
		"name":"",
		"comment":"",
		"file":"",
}

img_data = ""

albums = [
	["BasePiso",1],
	["Pav",3],
	["CorteAterro",4],
	["PavExt",5],
	["Lot",6],
	["Dren",7],
	["Dem",10],
	["Infra",9]
]

for album in albums:
	query = "SELECT A.name,A.comment,A.path FROM piwigo_images \
	AS A INNER JOIN piwigo_image_category AS B ON \
	A.id=B.image_id WHERE B.category_id=" + str(album[1]) + " \
	AND A.compressed=1 ORDER BY A.date_available DESC LIMIT 50"

	results = read_query(connection,query)
	sleep(0.01)

	list = []
	for result in results:
		dic = img_info.copy()
		dic["name"] = result[0]
		dic["comment"] = result[1]
		dic["file"] = result[2][20:]

		list.append(dic)
	json_string = json.dumps(list,ensure_ascii=False).encode('utf8').decode()
	img_data = img_data + album[0] + "='" + json_string + "';"
	sleep(0.01)


lastmod = open("/home/alberchec/server/py_db/lastmodified.txt","w")
lastmod.write(date)
lastmod.close()
sleep(0.01)

fileout = open("/var/www/html/images.js","w")
fileout.write(img_data)
fileout.close()

#Add images.js version to html file
from datetime import datetime
date = datetime.now()
date = date.strftime("%Y%m%d%H%M%S")

with open("/home/alberchec/server/py_db/index.html", "rt") as fin:
	with open("/var/www/html/index.html", "wt") as fout:
		for line in fin:
			fout.write(line.replace('Replace_with_images.js_version', date))
			fout.write(line.replace('Replace_with_textoObras.js_version', date))


connection.close()