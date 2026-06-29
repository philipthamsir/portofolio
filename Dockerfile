FROM nginx:alpine

# Copy seluruh file HTML, CSS, JS kamu ke folder default Nginx
COPY . /usr/share/nginx/html

# Ekspos port default Nginx
EXPOSE 80