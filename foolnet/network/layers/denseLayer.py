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
        self.params = {
            'weight': 0.01 * np.random.randn(n_inputs, n_output),
            'bias': np.zeros((1, n_output)),
        }
        self.d_params = {
            'weight': np.zeros_like(self.params['weight']),
            'bias': np.zeros_like(self.params['bias']),
        }
        self.classname = "DenseLayer(" + str(
            { name: param.shape 
                for name, param in self.params.items() }
        ) + ")"

    def forward(self, inputs: np.ndarray) -> None:
        self.inputs = np.array(inputs)
        self.output = np.dot(self.inputs, self.params['weight']) + self.params['bias']

    def backward(self, delta: np.ndarray) -> None:
        self.d_params['weight'] = np.dot(self.inputs.T, delta)
        self.d_params['bias'] = np.sum(delta, axis=0, keepdims=True)
        self.dinputs = np.dot(delta, self.params['weight'].T)
