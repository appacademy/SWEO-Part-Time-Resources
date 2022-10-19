FROM python:3.7.0-alpine3.8

WORKDIR /usr/src/app

# copy over our dependencies from the texfiles
COPY requirements.txt ./

# install our python dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app.py

CMD flask run --host=0.0.0.0