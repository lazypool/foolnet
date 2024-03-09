from typing import Dict, List, Tuple, Union

import numpy as np

from .. import Component
from ..activation import Activation
from ..layers import Layer


class Stack(Component):
    def __init__(self, *cmps: Union[Layer, Activation]) -> None:
        if not all(isinstance(c, Union[Layer, Activation]) for c in cmps):
            raise TypeError("All args should be type `Layer` or `Activation`.")
        self.stack = list(cmps)
        self.output = np.ndarray(0)
        self.dinputs = np.ndarray(0)

    def __call__(self, inputs: np.ndarray) -> np.ndarray:
        self.forward(inputs)
        return self.output

    def forward(self, inputs: np.ndarray) -> None:
        output = inputs
        for cmp in self.stack:
            cmp.forward(output)
            output = cmp.output
        self.output = output

    def backward(self, delta: np.ndarray) -> None:
        dinputs = delta
        for cmp in reversed(self.stack):
            cmp.backward(dinputs)
            dinputs = cmp.dinputs
        self.dinputs = dinputs

    def show(self) -> None:
        for cmp in self.stack:
            print(cmp)

    def parameters(self) -> List[List[np.ndarray]]:
        return [
            [cmp.params[k], cmp.d_params[k]]
            for cmp in self.stack if isinstance(cmp, Layer)
            for k in cmp.params.keys()
        ]
