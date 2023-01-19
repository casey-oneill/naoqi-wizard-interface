from flask import Flask
from flask import render_template, send_from_directory

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	return render_template('index.html')
