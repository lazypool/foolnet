import numpy as np


class DenseLayer:
    def __init__(self, n_inputs, n_output, activation):
        self.weight = 0.01 * np.random.randn(n_inputs, n_output)
        self.bias = np.zeros((1, n_output))
        self.activation = activation

    def forward(self, inputs):
        self.inputs = np.array(inputs)
        self.logits = np.dot(self.inputs, self.weight) + self.bias
        self.output = self.activation(self.logits)

    def backward(self, delta):
        self.delta = self.activation(delta, derivative=True)
        self.d_weight = np.dot(self.inputs.T, self.delta)
        self.d_bias = np.sum(self.delta, axis=0, keepdims=True)
        self.dinputs = np.dot(self.delta, self.weight.T)

    def update(self, lr):
        self.weight += -lr * self.d_weight
        self.bias += -lr * self.d_bias
