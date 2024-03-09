from typing import Union

import numpy as np

from .. import Component
from ..activation import Activation
from ..layers import Layer


class Stack(Component):
    def __init__(self, *args: Union[Layer, Activation]) -> None:
        if not all(isinstance(a, Union[Layer, Activation]) for a in args):
            raise TypeError(
                f"Unexpected arg type: \
                all args should be type `Layer` or `Activation`."
            )
        self.stack = list(args)
        self.output = np.ndarray(0)
        self.dinputs = np.ndarray(0)

    def __call__(self, inputs: np.ndarray) -> np.ndarray:
        self.forward(inputs)
        return self.output

    def forward(self, inputs: np.ndarray) -> None:
        output = inputs
        for component in self.stack:
            component.forward(output)
            output = component.output
        self.output = output

    def backward(self, delta: np.ndarray):
        dinputs = delta
        for component in self.stack:
            component.backward(dinputs)
            dinputs = component.dinputs
        self.dinputs = dinputs

    def show(self) -> None:
        for component in self.stack:
            print(component)
