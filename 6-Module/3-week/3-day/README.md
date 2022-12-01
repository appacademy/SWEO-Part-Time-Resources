# Flask Sessions

Allows us to save data across sessions

- Similar to local & session storage in the browser

To get a value, use `session.get('key_name')`

- You can also simply key in like you would a dictionary
- `session['key_name']`

To set a value, simply use a key/value pair assignment like you would a dictionary

To remove a value, use `session.pop('key_name', default_value)`

```py
from flask import Flask, render_template, session

app = Flask(__name__)


def track_wins_losses(did_win):
    if did_win:
        session['wins'] = session.get('wins') + 1
    else:
        session['losses'] = session.get('losses') + 1

    return f"You currently have {session.get('wins')} wins and {session.get('losses')} losses"


@app.route('/')
def main():
    if 'wins' not in session:
        session['wins'] = 0
    if 'losses' not in session:
        session['losses'] = 0

    return render_template("game.html")


@app.route('/result')
def result():
    res = game_played() # Pretend a game was played

    score = track_wins_losses(res.did_win)

    return render_template("play_again.html", score=score)


@app.route('/submit-scores')
def submit_scores():
    wins = session.pop('wins', 'no')
    losses = session.pop('losses', 'no')

    return f"Thanks for playing! You ended with {wins} wins and {losses} losses"
```
