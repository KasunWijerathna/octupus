# octupusBiFrontEnd

01).Steps to create Docker image for React JS

https://github.com/KasunWijerathna/octupus

1. Clone project and navigate to octupus/ project folder
2. Install packages (npm install)
3. Build project (npm run build)
4. Create a file with name `Dockerfile` in project folder and paste following code

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY build/ .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

5. Open Docker desktop and also open terminal and command prompt. Then run following two commands
- Docker build command: docker build -t octupus-ui:latest .
- Docker run command: docker run -d -p 3000:80 octupus-ui:latest
6. Open http://localhost:3000 in your browser.
 
