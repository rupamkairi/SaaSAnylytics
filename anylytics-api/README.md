# Elysia with Bun runtime

```
docker build --platform linux/amd64 --tag rupamkairi/anylytics-api --file Dockerfile-api .
docker push rupamkairi/anylytics-api:latest

docker run --name anylytics-api -p 3003:3003 -d rupamkairi/anylytics-api:latest
```

```
docker build --platform linux/amd64 --tag rupamkairi/anylytics-ws --file Dockerfile-ws .
docker push rupamkairi/anylytics-ws:latest

docker run --name anylytics-ws -p 3004:3004 -d rupamkairi/anylytics-ws:latest
```

```
# Use arm build for development
docker build --tag rupamkairi/anylytics .
# Use amd build for production
docker build --platform linux/amd64 --tag rupamkairi/anylytics .
docker push rupamkairi/anylytics:latest

docker run --name anylytics -p 3002:3002 -d rupamkairi/anylytics-api:latest
```

