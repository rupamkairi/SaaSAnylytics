FROM oven/bun

WORKDIR /app

COPY package*.json ./
COPY . .

RUN bun install

EXPOSE 3002
# EXPOSE 3003
# EXPOSE 3004

CMD [ "bun", "dev" ]
