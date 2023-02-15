import time
from naoqi import ALProxy

class Nao:
	nao_ip = "192.168.2.251"
	nao_port = 9559

	motion = None
	posture = None

	def __init__(self, nao_ip, nao_port):
		self.motion = ALProxy("ALMotion", nao_ip, nao_port)
		self.posture = ALProxy("ALRobotPosture", nao_ip, nao_port)
		self.tts = ALProxy("ALTextToSpeech", nao_ip, nao_port)
		self.motion.wakeUp()
		time.sleep(0.5)
		self.posture.goToPosture("Sit", 0.5)
		time.sleep(0.5)
		self.motion.rest()

	def say(self, s):
		self.tts.say("\\rspd=110\\\\vct=125\\\\vol=80\\{}".format(s))

	def stand(self):
		self.motion.wakeUp()
		self.posture.goToPosture("Stand", 0.5)
		self.motion.rest()

	def sit(self):
		self.motion.wakeUp()
		self.posture.goToPosture("Sit", 0.5)
		self.motion.rest()

	def introduction(self, i, j):
		with open('data/introductions.txt', 'r') as introductions:
			dialogues = [x.split(';') for x in introductions.readlines()]
			self.say(dialogues[i][j])
