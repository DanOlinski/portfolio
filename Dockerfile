FROM ubuntu
RUN apt update
CMD ["whoami"]
##to build this docket image run; docker build -t <immageName>
##check if image was created by running; docker images
##to start up the container with the image run; docker run --name <containerName> <immageName>

##here is the code I used to create this image; 
##docker build -t ubuntuportfolio .
##docker run --name potfoliocontainer ubuntuportfolio