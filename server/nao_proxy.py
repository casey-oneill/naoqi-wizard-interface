class NaoProxy(object):

    def sayAnimated(self, s):
        raise NotImplementedError("Subclasses must override NaoProxy")

    def stand(self):
        raise NotImplementedError("Subclasses must override NaoProxy")

    def sit(self):
        raise NotImplementedError("Subclasses must override NaoProxy")
    
    def fakeError(self):
        raise NotImplementedError("Subclasses must override NaoProxy")
