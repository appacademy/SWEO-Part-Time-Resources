from flask import Flask, session
import os

app = Flask(__name__)

app.config['greeting'] = 'Hello from App'
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

@app.route('/')
def root_dir():
  return f'<h1>{app.config["greeting"]}</h1>'

@app.route('/visits')
def visits():
  if 'visits' in session:
    session['visits'] = session.get('visits')+1
  else:
    session['visits'] = 1
  return f"<h1>Visit Count: {session.get('visits')}</h1>"

@app.route('/delete_visits')
def delete_visits():
  session.pop('visits', None)
  return '<h1>Visits Deleted</h1>'