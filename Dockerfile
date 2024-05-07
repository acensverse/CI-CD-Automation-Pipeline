# Use the official Nginx image as the base image
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY images/location.png /usr/share/nginx/html/images/
COPY images/sun-shining-dark-clouds-green-field.jpg /usr/share/nginx/html/images/

EXPOSE 80
