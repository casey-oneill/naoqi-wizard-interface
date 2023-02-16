class NaoProxy(object):

    def say(self, s):
        raise NotImplementedError("Subclasses must override NaoProxy")

    def stand(self):
        raise NotImplementedError("Subclasses must override NaoProxy")

    def sit(self):
        raise NotImplementedError("Subclasses must override NaoProxy")
