import sqlConnection
from sqlConnection import connection,read_query
from shutil import copyfile as cp

file = open("last_img_added.txt","r")
id_value = file.readline()
file.close()

query = "SELECT id,path FROM piwigo_images WHERE id > " + id_value + " ORDER BY id ASC"
results = read_query(connection,query)
id_value = int(id_value)

for result in results:
    file = open("last_img_added.txt","w")
    path = "/var/www/html/images/" + result[1][2:]
    filename = result[1][20:]
    print(str(result[0]) + " " + filename + " " +path)
    #cp(path,"temp/"+filename)
    file.write(str(result[0]) )
