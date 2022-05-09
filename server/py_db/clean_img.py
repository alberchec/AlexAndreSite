##################################################
###Program intended to remove all images that are
###not associated with the database.
##################################################
import sqlConnection
from sqlConnection import connection,read_query
from os import remove
from glob import glob

files = glob("/var/www/html/images/med-*.jpg")

for file in files:
	filename = file[25:]
	query = "SELECT id FROM piwigo_images WHERE path LIKE '%" + filename + "'"
	results = read_query(connection,query)

	if results == []:
		remove(file)
		remove("/var/www/html/images/sml-" + filename)

connection.close()