import sqlConnection
from sqlConnection import connection,read_query
from shutil import copyfile as cp
from shutil import move as mv
from ImageResize import resize

file = open("last_img_added.txt","r")
id_value = file.readline()
file.close()

query = "SELECT id,path FROM piwigo_images WHERE id > " + id_value + " ORDER BY id ASC"
results = read_query(connection,query)
id_value = int(id_value)

for result in results:
    path = "/var/www/html/piwigo_app/" + result[1][2:]
    filename = result[1][20:]
    path2 = "/home/alberchec/temp/" + filename
    pathm = "/var/www/html/images/med-" + filename
    paths = "/var/www/html/images/sml-" + filename
    cp(path,path2)
    resize(path2)
    cp(path2,pathm)
    resize(pathm,"-m")
    cp(path2,paths)
    resize(paths,"-s")
    mv(path2,path)
    file = open("last_img_added.txt","w")
    file.write(str(result[0]) )
    file.close()

connection.close()