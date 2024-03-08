import numpy as np

from . import Activation


class ReLU(Activation):
    """
    ReLU Activation Function.

    f(z) = max(z, 0)
    """
    classname = "ReLU"

    def forward(self, inputs: np.ndarray) -> None:
        self.output = np.maximum(inputs, 0)

    def backward(self, delta: np.ndarray) -> None:
        self.dinputs = delta * np.minimum(self.output, 1)
