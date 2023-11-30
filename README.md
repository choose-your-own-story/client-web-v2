[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

# Choose your own story Editor website
This website is the story reader. It allows the users to read all stories created by the community

## Development Stack
We have used react+vite.
For production, we deploy the compiled output through a Nginx server. 

The application has been containerized using docker for local development and for now, the same image is being used in prod in a k8s orchesteor.
The readme assumes the developer has docker-compose installed as well.

## Current Production URL
We are currently hosting the application in private server. Example url:

```shell script
curl --location 'https://story-maker-client.jrojaspin.com.ar' 
```

# Local Development
1. Create your own .env file
```shell script
cp .env.dist .env
```

2. Run the command 
```shell script
docker-compose up
``` 

# Deployment To prod
While standing in the root directory
```shell script
docker build -t jotaram/story-maker-client-v3:<x.y.z> --build-arg VITE_APP_PUBLIC_PATH="/" --build-arg VITE_BASE_URL="/" --build-arg VITE_APP_API_HOST="https://story-maker-api.jrojaspin.com.ar" .
docker image push jotaram/story-maker-client-v3:<x.y.z>
```
