import os

from os.path import join, dirname

from dotenv import load_dotenv
from flask import Flask, Response, request
# from flask_cors import CORS # Remove on deploy

from nao_proxy_cmd import NaoCommandProxy
from nao_proxy_qi import NaoqiProxy
from nao_proxy import NaoProxy

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

NAO_IP = "192.168.2.251"
NAO_PORT = 9559

nao = NaoProxy()
if os.getenv("MODE") == "console":
    nao = NaoCommandProxy(3)
else:
    nao = NaoqiProxy(NAO_IP, NAO_PORT)

app = Flask(__name__)
# CORS(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    return "Hello World!"

@app.route('/say', methods=['POST'])
def say():
    print(request.get_json())
    nao.say(request.get_json().get('str'))
    
    return Response()
