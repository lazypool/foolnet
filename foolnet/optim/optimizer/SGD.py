from ...network.stack import Stack
from ..scheduler import Scheduler
from . import Optimizer


class SGD(Optimizer):
    def __init__(self, model: Stack, lr: float, scheduler: Scheduler) -> None:
        super().__init__(model, lr, scheduler)

    def stepHandler(self) -> None:
        for params in self.model.parameters():
            params[0] += -self.lr * params[1]
