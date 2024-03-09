import numpy as np

from .. import Component


class Layer(Component):
    """
    Base class for middle layer.

    Attribute:
        output (np.ndarray):
            Output of this layer, updated by `forward`.
        dinputs (np.ndarray):
            Derivative of loss to this layer's inputs, updated by `backward`.
        params (dict[str, np.ndarray]):
            Store piars of parameters' names and corresponding values.
        d_params (dict[str, np.ndarray]):
            Store piars of parameters' names and corresponding update amount.

    Methods:
        forward(inputs: np.ndarray) -> None:
            - `inputs` is the output of last layer (activation layer OR pooling layer)
            - `inputs` shape [B, H]
        backward(delta: np.ndarray) -> None:
            - `delta` is derivative of loss to this layer's output
        update(lr: float) -> None:
            update the parameters of this layer. `lr` means 'learning rate'.
    """

    def __init__(self) -> None:
        self.output = np.ndarray(0)
        self.dinputs = np.ndarray(0)
        self.params = dict()
        self.d_params = dict()

    def forward(self, inputs: np.ndarray) -> None:
        if inputs != None:
            raise NotImplementedError

    def backward(self, delta: np.ndarray) -> None:
        if delta != None:
            raise NotImplementedError
