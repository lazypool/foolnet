import numpy as np

from . import Activation


class Softmax(Activation):
    """
    Softmax Activation Function

    Example:
        softmax = Softmax()
        z = [[ 2.08, -0.22,  2.15],
             [-0.08,  0.24,  1.26],
             [ 1.35,  1.56,  1.27]]

        softmax.forward(z)
        # output = [[ 0.38,  0.09,  0.53],
                    [ 0.10,  0.18,  0.72],
                    [ 0.29,  0.36,  0.35]]

        softmax.backward(delta)
        # too completed! please see docs.
    """

    def forward(self, inputs: np.ndarray) -> None:
        exps = np.exp(inputs - np.max(inputs, axis=1, keepdims=True))
        probs = exps / np.sum(exps, axis=1, keepdims=True)
        self.output = probs

    def backward(self, delta: np.ndarray) -> None:
        dcell = np.array([ np.diagflat(p) - np.outer(p, p) for p in self.output ])

        # dcell: [B, C, C]
        # delta: [B, C]
        self.dinputs = np.array([np.dot(dc, de) for dc, de in zip(dcell, delta)])
