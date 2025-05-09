# Stack

The site is built on [Tailwindcss v4](https://v4.tailwindcss.com) and HTML.

## Deployment

```bash
    ## Sign into VPS
    ssh [username]@[hostname] -p [port number]

    ## Create folder for the site
    mkdir /var/www/html/supremesalonug

    ## Download the build
    wget https://github.com/mikemukiibi2005/supremesalonug/blob/main/site.tar.gz .

    ## Extract build
    tar -xzf ./site.tar.gz -C /var/www/html/supremesalonug

    ## Update server package repository
    sudo apt update

    ## Install PM2
    sudo npm install -g pm2

    ## Start the application with PM2
    pm2 start /var/www/html/supremesalonug/.svelte-kit/output/server/index.js
    
    ## Save PM2 process list
    pm2 startup
    pm2 save
```

## Set up Nginx as reverse proxy

### Install Nginx

```bash
    ## Install Nginx
    sudo apt install nginx

    ## Configure Nginx
    sudo nano /etc/nginx/sites-available/supremesalonug.com
```

### Edit Nginx config in nano
```nano

    server {
    listen 80;
    server_name supremesalonug.com www.supremesalonug.com;

        location / {
            proxy_pass http://localhost:5173;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $websocket_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
```

### Create symbolic link to enable site
```bash
    sudo ln -s /etc/nginx/sites-available/supremesalonug.com /etc/nginx/sites-enabled/
```

### Test Nginx config for errors
```bash
    sudo nginx -t
```

### Reload Nginx to apply changes
```bash
    sudo systemctl reload nginx
```


## Configure DNS A Record
Set up an A record to point the IPv4 address of Hostinger VPS.

## Set up SSL/TLS Certificate using Let's Encrypt
### Install Certbot and the Nginx plugin
```bash
    sudo apt install certbot python3-certbot-nginx
```

### Obtain and install the certificate
```bash
    sudo certbot --nginx -d supremesalonug.com -d www.supremesalonug.com
```

## Done !
The site should be available with SSL enabled.