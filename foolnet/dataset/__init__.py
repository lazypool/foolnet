import numpy as np


class Dataset:
    """
    Base class for various tasks.

    Args:
        batchsize (int):
            Size of mini-batch.

    Attribute:
        trainset (IterDataset):
            Dataset used in trainging process.
        testset (IterDataset):
            Dataset used to evaluate the model.
    """

    def __init__(self, batchsize: int) -> None:
        self.trainset = IterDataset(batchsize)
        self.testset = IterDataset(batchsize)


class IterDataset:
    """
    Iterable dataset with given batchsize.

    Args:
        batchsize (int):
            Size of mini-batch.

    Attribute:
        x (np.ndarray):
            Input data with the shape [N, Dx].
        y (np.ndarray):
            Target values with the shape [N, Dy].
    """

    def __init__(self, batchsize: int) -> None:
        self.bs = batchsize
        self.x = np.ndarray(shape=0)
        self.y = np.ndarray(shape=0)

    def __iter__(self):
        assert len(self.x) == len(self.y)
        self.idx = np.random.permutation(len(self.x))
        return self

    def __next__(self):
        if len(self.idx) <= 0:
            raise StopIteration
        ids = self.idx[: self.bs]
        self.idx = self.idx[self.bs :]
        return self.x[ids], self.y[ids]
