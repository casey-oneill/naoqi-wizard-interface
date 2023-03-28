import time

from naoqi import ALBroker, ALProxy
from nao_proxy import NaoProxy


class NaoqiProxy(NaoProxy):
    """ A class for controlling NAO robot.
    """

    # Broker
    broker = None

    # NAO modules
    motion = None
    posture = None
    life = None
    animated_speech = None
    animated_speech_config = {"bodyLanguageMode": "contextual"}

    def __init__(self, nao_ip, nao_port, nao_version):
        self.nao_ip = nao_ip
        self.nao_port = nao_port
        self.nao_version = nao_version

        # Initialize broker
        self.broker = ALBroker("myBroker", "0.0.0.0", 0, self.nao_ip, self.nao_port)

        # Initialize module proxies
        self.motion = ALProxy("ALMotion")
        self.posture = ALProxy("ALRobotPosture")
        self.leds = ALProxy("ALLeds")
        self.animated_speech = ALProxy("ALAnimatedSpeech")
        self.life = ALProxy("ALAutonomousLife")

        # Reset NAO behaviour
        self.motion.wakeUp()
        self.posture.goToPosture("Sit", 0.5)
        self.life.setState("solitary")

    def __del__(self):
        if self.life != None:
            self.life.setState("disabled")
        if self.motion != None:
            self.motion.rest()
        if self.broker != None:
            self.broker.shutdown()

    def sayAnimated(self, s):
        self.animated_speech.say("\\rspd=80\\\\vct=100\\\\vol=80\\{}".format(s), self.animated_speech_config)

    def stand(self):
        self.posture.goToPosture("Stand", 0.5)

    def sit(self):
        self.posture.goToPosture("Sit", 0.5)
    
    def fakeError(self):
        self.animated_speech.say("\\rspd=85\\\\vct=90\\\\vol=85\\Here is the", self.animated_speech_config)
        self.animated_speech.say("\\rspd=60\\\\vct=45\\\\vol=85\\next\\pau=50\\", self.animated_speech_config)
        self.animated_speech.say("\\rspd=30\\\\vct=20\\\\vol=85\\question\\pau=75\\", self.animated_speech_config)
        self.animated_speech.say("\\rspd=10\\\\vct=5\\\\vol=90\\question\\pau=75\\", self.animated_speech_config)
        self.animated_speech.say("\\rspd=5\\\\vct=5\\\\vol=90\\question", self.animated_speech_config)
        self.animated_speech.say("\\rspd=5\\\\vct=5\\\\vol=90\\I\\pau=100\\I\\pau=100\\I\\pau=100\\", self.animated_speech_config)
        self.motion.rest()
        self.leds.rasta(5)
        self.motion.wakeUp()
        self.sayAnimated("Whoops! What happened? Let's continue.")
