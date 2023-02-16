import time

from nao_proxy import NaoProxy


class NaoCommandProxy(NaoProxy):

    def __init__(self, delay, prefix="[NAO]"):
        self.delay = delay
        self.prefix = prefix

    def say(self, s):
        time.sleep(self.delay)
        print("{} {}".format(self.prefix, s))

    def stand(self):
        print("{} Standing...".format(self.prefix))

    def sit(self):
        print("{} Sitting...".format(self.prefix))
