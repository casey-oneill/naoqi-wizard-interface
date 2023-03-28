import sys
import time

from data import introductions

from naoqi import ALProxy
from naoqi import ALBroker
from naoqi import ALModule
import argparse

# Global variable to store the ReactToTouch module instance
ReactToTouch = None
memory = None
version = 3

class ReactToTouch(ALModule):
    """ A simple module able to react to touch events.
    """

    animatedSpeechConfig = {"bodyLanguageMode": "contextual"}

    def __init__(self, name):
        ALModule.__init__(self, name)

        # Create a proxies for later use
        self.animatedSpeech = ALProxy("ALAnimatedSpeech")
        self.leds = ALProxy("ALLeds")
        self.life = ALProxy("ALAutonomousLife")
        self.motion = ALProxy("ALMotion")
        self.posture = ALProxy("ALRobotPosture")

        # Reset NAO behaviour
        self.motion.wakeUp()
        self.posture.goToPosture("Sit", 0.5)
        self.life.setState("solitary")

        # Subscribe to TouchChanged event:
        global memory
        memory = ALProxy("ALMemory")
        memory.subscribeToEvent("MiddleTactilTouched", "ReactToTouch", "onMiddleTactilTouched")
        memory.subscribeToEvent("HandLeftBackTouched", "ReactToTouch", "onHandLeftBackTouched")
    
    def __del__(self):
        if self.life != None:
            self.life.setState("disabled")
        if self.motion != None:
            self.motion.rest()

    def onMiddleTactilTouched(self, var, val):
        """ This will be called each time a middle tactil touch is detected.

        """
        # Unsubscribe to the event when talking, to avoid repetitions
        memory.unsubscribeToEvent("MiddleTactilTouched", "ReactToTouch")

        global version
        for s in introductions[version]:
            self.say(s)

        # Subscribe again to the event
        memory.subscribeToEvent("MiddleTactilTouched", "ReactToTouch", "onMiddleTactilTouched")

    def onHandLeftBackTouched(self, var, val):
        """ This will be called each time a middle tactil touch is detected.

        """
        # Unsubscribe to the event when talking, to avoid repetitions
        memory.unsubscribeToEvent("HandLeftBackTouched", "ReactToTouch")

        self.say("Okay. Let's start the scavenger hunt. Please wait while I load your game's data.")
        self.leds.rasta(10)
        
        # Subscribe again to the event
        memory.subscribeToEvent("HandLeftBackTouched", "ReactToTouch", "onHandLeftBackTouched")

    def say(self, s):
        self.animatedSpeech.say("\\rspd=80\\\\vct=90\\\\vol=80\\{}".format(s), self.animatedSpeechConfig)


def main(ip, port):
    """ Main entry point.
    """
    # The broker must stay alive until the program exists
    myBroker = ALBroker("myBroker", "0.0.0.0", 0, ip, port)

    global ReactToTouch
    ReactToTouch = ReactToTouch("ReactToTouch")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("Interrupted by user, shutting down.")
        myBroker.shutdown()
        sys.exit(0)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--ip", type=str, default="192.168.2.251", help="Robot ip address")
    parser.add_argument("--port", type=int, default=9559, help="Robot port number")
    args = parser.parse_args()
    main(args.ip, args.port)
