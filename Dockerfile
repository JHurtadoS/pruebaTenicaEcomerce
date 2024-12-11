# Etapa de Construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar todo el código fuente
COPY . .

# Ejecutar las pruebas unitarias
RUN npm run test:unit

# Construir la aplicación Next.js
RUN npm run build

# Verificar que se haya generado la carpeta .next
RUN ls -la .next

# Etapa de Producción
FROM node:18-alpine AS production

WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instalar solo dependencias de producción
RUN npm install --production

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]
