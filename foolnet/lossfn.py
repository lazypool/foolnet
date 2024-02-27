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


class CrossEntropyLoss(Loss):
    def forward(self, y_pred, y_true):
        yp_clip = np.clip(y_pred, 1e-7, 1 - 1e-7)
        return -np.log(yp_clip[range(len(y_pred)), y_true])

    def backward(self, y_pred, y_true):
        n, c = y_pred.shape
        yt_onehot = np.eye(c)[y_true]
        self.dinputs = -yt_onehot / y_pred / n
