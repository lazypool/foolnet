from . import Activation
import numpy as np


class ReLU(Activation):
    def forward(self, inputs):
        self.output = np.maximum(inputs, 0)

    def backward(self, delta):
        self.dinputs = delta * np.minimum(self.output, 1)
