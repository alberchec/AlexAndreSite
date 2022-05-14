import sqlConnection
from sqlConnection import connection,read_query,execute_query
from shutil import copyfile as cp
from shutil import move as mv
from ImageResize import resize

query = "SELECT id,path,compressed FROM piwigo_images WHERE compressed=0"
results = read_query(connection,query)

if results == []:
    connection.close()
    quit()

for result in results:
    path = "/var/www/html/piwigo_app/" + result[1][2:]
    filename = result[1][20:]
    path2 = "/home/alberchec/temp/" + filename
    pathm = "/var/www/html/imagesdb/med-" + filename
    paths = "/var/www/html/imagesdb/sml-" + filename
    cp(path,path2)
    resize(path2)
    cp(path2,pathm)
    resize(pathm,"-m")
    cp(path2,paths)
    resize(paths,"-s")
    mv(path2,path)
    query = "UPDATE piwigo_images SET compressed=1 WHERE id=" + str(result[0])
    execute_query(connection,query)    

connection.close()