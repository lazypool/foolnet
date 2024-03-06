import numpy as np


class Activation:
    """
    Base class for activation function, callable.

    Args:
        z (np.ndarray):
            Inputs values, before activate, shape [B, H].
            B is batched samples num. H is output dim of last layer.
        derivative (bool):
            Whether calculate the derivative. Defaults to False.

    Attribute:
        output (np.ndarray):
            Output of the activation function, updated by `forward`.
        dinputs (np.ndarray):
            Derivative of loss to the `z`, namely 'error at this layer', updated by `backward`.

    Methods:
        forward(inputs: np.ndarray) -> None:
            - `inputs` is the value before activate, shape [B, H]
        backward(delta: np.ndarray) -> None:
            - `delta` is derivative of loss to activation values (next layer's inputs), shape [B, H].
    """

    def __init__(self) -> None:
        self.output = np.ndarray(0)
        self.dinputs = np.ndarray(0)

    def __call__(self, z: np.ndarray, derivative: bool=False) -> np.ndarray:
        if not derivative:
            self.forward(z)
            return self.output
        else:
            self.backward(z)
            return self.dinputs

    def forward(self, inputs: np.ndarray) -> None:
        if inputs != None:
            raise NotImplementedError

    def backward(self, delta: np.ndarray) -> None:
        if delta != None:
            raise NotImplementedError
