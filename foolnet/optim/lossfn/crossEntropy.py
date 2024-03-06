import numpy as np

from . import Loss


class CrossEntropyLoss(Loss):
    """
    Cross Entropy Loss Function.

    Args:
        y_pred (np.ndarray):
            Predicted values, shape [N, C].
            N is samples num. C is category num.
        y_true (np.ndarray):
            True values, shape [N, 1] or [N].

    Example:
        loss = CrossEntropyLoss()

        y_pred = [[ 0.2, 0.3, 0.5 ],
                  [ 0.1, 0.8, 0.1 ],
                  [ 0.4, 0.3, 0.3 ]]
        y_true = [ 2, 0, 1 ]

        loss(y_pred, y_true) # aprox 1.40
    """

    def forward(self, y_pred: np.ndarray, y_true: np.ndarray) -> None:
        yp_clip = np.clip(y_pred, 1e-7, 1 - 1e-7)
        self.output = -np.log(yp_clip[range(len(y_pred)), y_true])

    def backward(self, y_pred: np.ndarray, y_true: np.ndarray) -> None:
        n, c = y_pred.shape
        yt_onehot = np.eye(c)[y_true]
        self.dinputs = -yt_onehot / y_pred / n
