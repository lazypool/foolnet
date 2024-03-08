import numpy as np

from . import Activation


class Softmax(Activation):
    """
    Softmax Activation Function

    f(z) = exp(z) / sum(exp(zi))
    """
    classname = "Softmax"

    def forward(self, inputs: np.ndarray) -> None:
        exps = np.exp(inputs - np.max(inputs, axis=1, keepdims=True))
        probs = exps / np.sum(exps, axis=1, keepdims=True)
        self.output = probs

    def backward(self, delta: np.ndarray) -> None:
        dcell = np.array([ np.diagflat(p) - np.outer(p, p) for p in self.output ])

        # dcell: [B, C, C]
        # delta: [B, C]
        self.dinputs = np.array([np.dot(dc, de) for dc, de in zip(dcell, delta)])
