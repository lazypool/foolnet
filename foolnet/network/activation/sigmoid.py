import numpy as np

from . import Activation


class Logistic(Activation):
    """
    Logistic Activation Function

    f(z) = 1 / (1 + exp(-z))
    """
    classname = "Logistic"

    def forward(self, inputs: np.ndarray) -> None:
        self.output = 1 / (1 + np.exp(-inputs))

    def backward(self, delta: np.ndarray) -> None:
        self.dinputs = delta * self.output * (1 - self.output)


class Tanh(Activation):
    """
    Tanh Activation Function

    f(z) = (exp(z) - exp(-z)) / (exp(z) + exp(-z))
    """
    classname = "Tanh"

    def forward(self, inputs: np.ndarray) -> None:
        exps = np.exp(inputs)
        self.output = 1 - 2 / (1 + exps**2)

    def backward(self, delta: np.ndarray) -> None:
        self.dinputs = delta * (1 - self.output**2)
