from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
@app.route('/<name>', methods=['GET'])
def index(name=None):
	return render_template('index.html', name=name)