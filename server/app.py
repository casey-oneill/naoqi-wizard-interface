import os

from os.path import join, dirname

from dotenv import load_dotenv
from flask import Flask, Response, request

from nao_proxy_cmd import NaoCommandProxy
from nao_proxy_qi import NaoqiProxy
from nao_proxy import NaoProxy

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

NAO_IP = os.getenv("NAO_IP")
NAO_PORT = os.getenv("NAO_PORT")

nao = NaoProxy()
if os.getenv("MODE") == "naoqi":
    nao = NaoqiProxy(NAO_IP, NAO_PORT)
else:
    nao = NaoCommandProxy(1.5)

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return "Hello World!"

@app.route('/sayAnimated', methods=['POST'])
def sayAnimated():
    nao.sayAnimated(request.get_json().get('str'))    
    return Response()

@app.route('/fakeError', methods=['GET'])
def fakeError():
    nao.fakeError()
    return Response()
