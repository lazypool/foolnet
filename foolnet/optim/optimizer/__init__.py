import numpy as np

from ...network.stack import Stack
from ..scheduler import Scheduler


class Optimizer:
    def __init__(self, model: Stack, lr: float, sch: Scheduler) -> None:
        self.model = model
        self.lr = lr
        self.scheduler = sch

    def backward(self, delta: np.ndarray) -> None:
        self.model.backward(delta)

    def step(self) -> None:
        # update learning rate
        self.lr = self.scheduler(self.lr)
        self.stepHandler()

    def stepHandler(self) -> None:
        raise NotImplementedError
