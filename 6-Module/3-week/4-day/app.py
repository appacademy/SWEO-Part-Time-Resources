from flask import Flask, session
import os

app = Flask(__name__)

# other configuration of the Flask application object
app.config['greeting'] = 'hi from app'
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

@app.route('/')
def root_dir():
  return f'<h1>{app.config["greeting"]}</h1>'

@app.route('/visits')
def visits():
  if 'visit_count' in session:
    session['visit_count'] = session.get('visit_count')+1
  else:
    session['visit_count'] = 1
  return f'Visits: {session.get("visit_count")}'

@app.route('/visit_delete')
def visit_delete():
  session.pop('visit_count', None)
  return 'Visits Deleted'