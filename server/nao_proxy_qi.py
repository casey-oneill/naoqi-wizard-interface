import time

from naoqi import ALProxy
from nao_proxy import NaoProxy


class NaoqiProxy(NaoProxy):

    # NAO modules
    motion = None
    posture = None
    autonomous_life = None
    animated_speech = None
    animated_speech_config = {"bodyLanguageMode":"contextual"}

    def __init__(self, nao_ip, nao_port):
        self.nao_ip = nao_ip
        self.nao_port = nao_port

        # Initialize module proxies
        self.motion = ALProxy("ALMotion", self.nao_ip, self.nao_port)
        self.posture = ALProxy("ALRobotPosture", self.nao_ip, self.nao_port)
        self.animated_speech = ALProxy("ALAnimatedSpeech", self.nao_ip, self.nao_port)
        self.autonomous_moves = ALProxy("ALAutonomousMoves", self.nao_ip, self.nao_port)

        # Reset NAO behaviour
        self.motion.wakeUp()
        time.sleep(0.5)
        self.posture.goToPosture("Sit", 0.5)
        time.sleep(0.5)
        self.autonomous_moves.setExpressiveListeningEnabled(True)

    def __del__(self):
        self.motion.rest()

    def sayAnimated(self, s):
        self.animated_speech.say("\\rspd=80\\\\vct=80\\\\vol=65\\{}".format(s), self.animated_speech_config)

    def stand(self):
        self.posture.goToPosture("Stand", 0.5)

    def sit(self):
        self.posture.goToPosture("Sit", 0.5)
