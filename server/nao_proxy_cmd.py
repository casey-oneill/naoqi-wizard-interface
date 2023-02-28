import time

from nao_proxy import NaoProxy


class NaoCommandProxy(NaoProxy):

    def __init__(self, delay, prefix="[NAO]"):
        self.delay = delay
        self.prefix = prefix

    def sayAnimated(self, s):
        time.sleep(self.delay)
        print("{} {}".format(self.prefix, s))

    def stand(self):
        time.sleep(self.delay)
        print("{} Standing...".format(self.prefix))

    def sit(self):
        time.sleep(self.delay)
        print("{} Sitting...".format(self.prefix))

    def fakeError(self):
        time.sleep(self.delay)
        print("{} Faking error...").format(self.prefix)
