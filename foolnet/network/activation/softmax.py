from . import Activation
import numpy as np


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
