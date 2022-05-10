import sqlConnection
from sqlConnection import connection,read_query

lastmod = open("lastmodified.txt","r").read().splitlines()[0]

query = "SELECT lastmodified FROM piwigo_images ORDER BY lastmodified DESC LIMIT 1"
date = read_query(connection,query)[0][0].strftime("%Y%m%d%H%M%S")

if(lastmod == date):
	connection.close()
	quit()

img_info = {
		"name":"",
		"comment":"",
		"file":"",
}

img_data = {
	"Base de Piso" : [],
	"Pavimentação" : [],
	"Corte e Aterro" : [],
	"Pavimento Externo" : [],
	"Loteamentos" : [],
	"Drenagem" : [],
	"Demolição" : [],
	"Infraestrutura" : []
}

albums = [
	["Base de Piso",1],
	["Pavimentação",3],
	["Corte e Aterro",4],
	["Pavimento Externo",5],
	["Loteamentos",6],
	["Drenagem",7],
	["Demolição",10],
	["Infraestrutura",9]
]

for album in albums:
	query = "SELECT A.name,A.comment,A.path FROM piwigo_images \
	AS A INNER JOIN piwigo_image_category AS B ON \
	A.id=B.image_id WHERE B.category_id=" + str(album[1]) + " ORDER BY \
	A.date_available DESC LIMIT 50"

	results = read_query(connection,query)

	list = []
	for result in results:
		dic = img_info.copy()
		dic["name"] = result[0]
		dic["comment"] = result[1]
		dic["file"] = result[2][20:]

		list.append(dic)

	img_data[album[0]] = list


import json
from glob import glob
from os import remove

files = glob("/var/www/html/images.json?*")
for file in files:
	remove(file)

lastmod = open("lastmodified.txt","w")
lastmod.write(date)
lastmod.close()

with open("/var/www/html/images.json?" + date,"w") as outfile:
	json.dump(img_data,outfile)

connection.close()