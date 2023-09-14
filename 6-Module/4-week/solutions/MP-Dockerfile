FROM python:3.9-slim

WORKDIR /app

EXPOSE 5000

# Copies script file to set permissions to run the migration
COPY ./entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh