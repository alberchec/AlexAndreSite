##################################################
###Program intended to remove all images that are
###not associated with the database.
##################################################
import sqlConnection
from sqlConnection import connection,read_query
import os
from glob import glob
from time import sleep

os.nice(10)

files = glob("/var/www/html/imagesdb/med-*.jpg")
sleep(0.01)

for file in files:
	filename = file[27:]
	query = "SELECT id FROM piwigo_images WHERE path LIKE '%" + filename + "'"
	results = read_query(connection,query)
	sleep(0.01)

	if results == []:
		os.remove(file)
		os.remove("/var/www/html/imagesdb/sml-" + filename)

	sleep(0.01)

connection.close()