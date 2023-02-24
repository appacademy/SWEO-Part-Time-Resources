#!/usr/bin/env bash
pip3 install -r /app/requirements.txt
python3 book_ratings.py db upgrade
python3 book_ratings.py run -h 0.0.0.0