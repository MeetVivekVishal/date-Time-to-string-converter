# date-Time-to-string-converter
Converts time in format new Date(2018,6,12, 9,5) to english readable format

# Getting Started

# 1.do we need to do something to run this project ?

The folder/project requires to run on local web server .

for quick start -> search web server for chrome extension --> add the extension to your browser-->
mention the folder you want to publish to the extension --> go to the default address to see files published-->
--> click on file see the output running .
direct link to the extension- https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en

# why its required to run on web server ?
Answer--> The js modules are hooked into html with file type = module. It creates CORS compliance 
for js files since browser cannot determine the origin of file .
which stops running html from local directory . This problem was a little  unexpected.

# 2. How it was run and tested while developement ?
Answer- used chrome web extension - "chrome web developer" , runs a web server on top of your selected directory.

# 3.Are code comments included?
Answer: yes . Js docs are also present in "out" folder.
