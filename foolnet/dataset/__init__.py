import numpy as np


class Dataset:
    def __init__(self, batchsize):
        self.trainset = IterDataset(batchsize)
        self.testset = IterDataset(batchsize)


class IterDataset:
    def __init__(self, batchsize):
        self.bs = batchsize
        self.x = np.ndarray(shape=0)
        self.y = np.ndarray(shape=0)

    def __iter__(self):
        assert len(self.x) == len(self.y)
        self.idx = np.random.permutation(len(self.x))
        return self

    def __next__(self):
        if(len(self.idx) <= 0):
            raise StopIteration
        ids = self.idx[:self.bs]
        self.idx = self.idx[self.bs:]
        return self.x[ids], self.y[ids]
