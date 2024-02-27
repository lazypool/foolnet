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


class ReLU(Activation):
    def forward(self, inputs):
        self.output = np.maximum(inputs, 0)

    def backward(self, delta):
        self.dinputs = delta * np.minimum(self.output, 1)


class Softmax(Activation):
    def forward(self, inputs):
        exps = np.exp(inputs - np.max(inputs, axis=1, keepdims=True))
        probs = exps / np.sum(exps, axis=1, keepdims=True)
        self.output = probs

    def backward(self, delta):
        dcell = np.array([ np.diagflat(p) - np.outer(p, p) for p in self.output ])

        # dcell: [B, C, C]
        # delta: [B, C]
        self.dinputs = np.array([np.dot(dc, de) for dc, de in zip(dcell, delta)])
