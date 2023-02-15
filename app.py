import time

from nao_scripts import Nao

from flask import Flask, jsonify, request
from flask import render_template

NAO_IP = "192.168.2.251"
NAO_PORT = 9559

# nao = Nao(NAO_IP, NAO_PORT)
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	if request.method == "POST":
		print(request.form['actionOne'])
		# action()
	return render_template('index.html')

# def action():
# 	nao.stand()
# 	time.sleep(1)
# 	nao.sit()
