import mysql.connector
from mysql.connector import Error
import pandas as pd

file = open("/home/alberchec/.db_snh.txt","r")
fcontent = file.read().splitlines()
file.close()

host_name = fcontent[0]
user_name = fcontent[1]
db_name = fcontent[2]
user_password = fcontent[3]
fcontent = ""

def create_db_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        #print("MySQL Database connection successful")
    except Error as err:
        print(f"Error: '{err}'")
    return connection

connection = create_db_connection(host_name,user_name,user_password,db_name)
user_password = ""

def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        #print("Query successful")
    except Error as err:
        print(f"Error: '{err}'")

def read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as err:
        print(f"Error: '{err}'")
