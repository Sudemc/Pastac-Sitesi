FROM nginx:alpine

# Nginx config dosyasını kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Frontend dosyalarını kopyala
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Görselleri kopyala
COPY tatlıfoto/ /usr/share/nginx/html/tatlıfoto/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
