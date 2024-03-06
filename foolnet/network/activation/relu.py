import numpy as np

from . import Activation


class ReLU(Activation):
    """
    ReLU Activation Function.

    Example:
        relu = ReLU()
        z = [[ 2.08, -0.22,  2.15],
             [-0.08,  0.24,  1.26],
             [ 1.35,  1.56,  1.27]]
        delta = [[-0.20, -2.20,  0.74],
                 [-0.68,  0.87,  0.39],
                 [ 0.63, -1.29, -0.91]]

        relu.forward(z)
        # output = [[ 2.08,    .0,  2.15],
                    [   .0,  0.24,  1.26],
                    [ 1.35,  1.56,  1.27]]

        relu.backward(delta)
        # dinputs = [[-0.20,   0.0,  0.74],
                     [  0.0,  0.87,  0.39],
                     [ 0.63, -1.29, -0.91]]
    """

    def forward(self, inputs: np.ndarray) -> None:
        self.output = np.maximum(inputs, 0)

    def backward(self, delta: np.ndarray) -> None:
        self.dinputs = delta * np.minimum(self.output, 1)
