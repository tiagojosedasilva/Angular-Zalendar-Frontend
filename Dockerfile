FROM node:24-alpine

WORKDIR /usr/src/app

# Instala a CLI do Angular globalmente no contêiner
RUN npm install -g @angular/cli@latest

COPY package*.json ./

RUN npm install

COPY . .

# Expõe a porta de desenvolvimento do Angular
EXPOSE 4200

# O script precisa rodar escutando em todas as interfaces de rede (0.0.0.0) para o Docker expor corretamente
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]
