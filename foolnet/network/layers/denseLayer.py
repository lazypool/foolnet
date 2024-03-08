import numpy as np

from . import Layer


class DenseLayer(Layer):
    """
    DenseLayer class, used in fully connected net.

    Args:
        n_inputs (int):
            The dimension of the inputed tensors.
        n_output (int):
            The dimension of the outputed tensors.

    Attribute:
        weight (np.ndarray):
            Weight to multiply with inputs, shape [n_inputs, n_output].
        bias (np.ndarray):
            Bias to add with the weighted sum, shape [1, n_output].
        d_weight (np.ndarray):
            The derivative of loss to this layer's weight, share same shape with `weight`.
        d_bias (np.ndarray):
            The derivative of loss to this layer's bias, share same shape with `bias`.
    """

    def __init__(self, n_inputs: int, n_output: int) -> None:
        self.classname = f"DenseLayer([{n_inputs}, {n_output}])"

        # initialize parameters
        self.weight = 0.01 * np.random.randn(n_inputs, n_output)
        self.bias = np.zeros((1, n_output))
        self.d_weight = np.ndarray(0)
        self.d_bias = np.ndarray(0)

    def forward(self, inputs: np.ndarray) -> None:
        self.inputs = np.array(inputs)
        self.output = np.dot(self.inputs, self.weight) + self.bias

    def backward(self, delta: np.ndarray) -> None:
        self.d_weight = np.dot(self.inputs.T, delta)
        self.d_bias = np.sum(delta, axis=0, keepdims=True)
        self.dinputs = np.dot(delta, self.weight.T)

    def update(self, lr: float) -> None:
        self.weight += -lr * self.d_weight
        self.bias += -lr * self.d_bias
