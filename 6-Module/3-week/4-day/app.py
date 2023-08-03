from flask import Flask


app = Flask(__name__)

# other configuration of the Flask application object
app.config['greeting'] = 'Hello from App'

@app.route('/')
def root_dir():
  return f'<h1>{app.config["greeting"]}</h1>'