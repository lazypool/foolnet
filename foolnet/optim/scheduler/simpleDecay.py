from . import Scheduler


class InverseTimeDecay(Scheduler):
    def __init__(self, beta=0.1) -> None:
        super().__init__()
        self.beta = beta

    def stepHandler(self) -> None:
        self.lr = self.init_lr / (1. + self.beta * self.tick)
