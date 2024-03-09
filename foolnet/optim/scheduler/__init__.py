class Scheduler:
    def __init__(self) -> None:
        self.tick = 0
        self.init_lr = 0.
        self.lr = 0.

    def __call__(self, lr: float) -> float:
        if self.tick == 0:
            self.init_lr = lr
        self.stepHandler()
        return self.lr

    def step(self) -> None:
        self.tick += 1
        self.stepHandler()

    def stepHandler(self) -> None:
        raise NotImplementedError
