import numpy as np


class Loss:
    """
    Base class for loss function, callable.

    Attribute:
        output (np.ndarray):
            Output of the loss function, updated by `forward`.
        dinputs (np.ndarray):
            Derivative to the predicted value, updated by `backward`.

    Methods:
        forward(y_pred: np.ndarray, y_true: np.ndarray) -> None:
            Calculate the loss between predicted and true value.
        backward(y_pred: np.ndarray, y_true: np.ndarray) -> None:
            Calculate the derivative to the predicted value when given true value.
    """

    def __init__(self) -> None:
        self.output = np.ndarray(0)
        self.dinputs = np.ndarray(0)

    def __call__(self, y_pred: np.ndarray, y_true: np.ndarray) -> np.floating:
        assert len(y_pred) == len(y_true), \
            "Predicted Value and True Value must have the same length."
        self.forward(y_pred, y_true)
        return np.mean(self.output)

    def forward(self, y_pred: np.ndarray, y_true: np.ndarray) -> None:
        if y_pred != None or y_true != None:
            raise NotImplementedError

    def backward(self, y_pred: np.ndarray, y_true: np.ndarray) -> None:
        if y_pred !=None or y_true != None:
            raise NotImplementedError
