import sqlConnection
from sqlConnection import connection,read_query

lastmod = open("/home/alberchec/server/py_db/lastmodified.txt","r").read().splitlines()[0]

query = "SELECT lastmodified FROM piwigo_images ORDER BY lastmodified DESC LIMIT 1"
date = read_query(connection,query)[0][0].strftime("%Y%m%d%H%M%S")

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

	list = []
	for result in results:
		dic = img_info.copy()
		dic["name"] = result[0]
		dic["comment"] = result[1]
		dic["file"] = result[2][20:]

		list.append(dic)
	json_string = json.dumps(list)
	img_data = img_data + album[0] + "='" + json_string + "';"


from glob import glob
from os import remove

files = glob("/var/www/html/images.json?*")
for file in files:
	remove(file)

lastmod = open("/home/alberchec/server/py_db/lastmodified.txt","w")
lastmod.write(date)
lastmod.close()

fileout = open("/var/www/html/images.json?" + date,"w")
fileout.write(img_data)
fileout.close()

connection.close()