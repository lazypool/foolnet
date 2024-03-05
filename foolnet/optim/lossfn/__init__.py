import numpy as np


class Loss:
    def __call__(self, y_pred, y_true):
        loss = self.forward(y_pred, y_true)
        return np.mean(loss)

    def forward(self, y_pred, y_true):
        assert y_pred.shape == y_true.shape
        raise NotImplemented

    def backward(self, y_pred, y_true):
        if y_pred.shape == y_true.shape:
            raise NotImplemented
