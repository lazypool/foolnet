import numpy as np


class Layer:
    def __init__(self) -> None:
        self.output = np.ndarray(0)
        self.dinputs = np.ndarray(0)

    def forward(self, inputs: np.ndarray) -> None:
        if inputs != None:
            raise NotImplementedError

    def backward(self, delta: np.ndarray) -> None:
        if delta != None:
            raise NotImplementedError
