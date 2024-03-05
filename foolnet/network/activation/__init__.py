import numpy as np


class Activation:
    def __init__(self):
        self.output = .0
        self.dinputs = .0

    def __call__(self, x, derivative=False):
        if not derivative:
            self.forward(x)
            return self.output
        else:
            self.backward(x)
            return self.dinputs

    def forward(self, inputs):
        if not inputs:
            raise NotImplemented

    def backward(self, delta):
        if not delta:
            raise NotImplemented
