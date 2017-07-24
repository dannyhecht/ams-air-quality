# This script reads a GPS track in CSV format and prints a list of coordinate pairs

import csv
 
# Set up input and output variables for the script
gpsTrack = open("C:\\data\\Geog485\\gps_track.txt", "r")
 
# Set up CSV reader and process the header
csvReader = csv.reader(gpsTrack)
header = csvReader.next()
latIndex = header.index("lat")
lonIndex = header.index("long")
 
# Make an empty list
coordList = []
 
# Loop through the lines in the file and get each coordinate
for row in csvReader:
    lat = row[latIndex]
    lon = row[lonIndex]
    coordList.append([lat,lon])
 
# Print the coordinate list
print coordList

''' DATA STRUCTURE: header \n raw data

type,ident,lat,long,y_proj,x_proj,new_seg,display,color,altitude,depth,temp,time,model,filename,ltime
TRACK,ACTIVE LOG,40.78966141,-77.85948515,4627251.76270444,1779451.21349775,True,False,255,358.228393554688,0,0,2008/06/11-14:08:30,eTrex Venture, ,2008/06/11 09:08:30

'''
