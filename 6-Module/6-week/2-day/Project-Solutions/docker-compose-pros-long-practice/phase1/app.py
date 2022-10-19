from flask import Flask, request, jsonify
from redis import Redis

#  This is our basic Flask Server
#  It accepts GET and POST requests
app = Flask(__name__)

#  create a redis interface using the name of the `redis` service you'll be creating
redis = Redis(host="redis", db=0, socket_timeout=5, charset="utf-8", decode_responses=True)

@app.route('/', methods=['POST', 'GET'])
def index():

    if request.method == 'POST':
        name = request.json['name']
        redis.rpush('dogs', {'name': name})
        #  we want to respond with json to post requests
        return jsonify({'name': name})

    if request.method == 'GET':
        #  we want to respond with json to get requests
        return jsonify(redis.lrange('dogs', 0, -1))