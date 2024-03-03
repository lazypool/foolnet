from . import Dataset
import numpy as np
import matplotlib.pyplot as plt


class ClassificationDataset(Dataset):
    def __init__(self, x_dim, n_class, batchsize=16, *args, **kwargs):
        super().__init__(batchsize)
        self.x_dim = x_dim
        self.n_class = n_class
        self.generate(*args, **kwargs)

    def generate(self, nums, split_ratio=0.2, nonlinearity=True, noise=0.3, nonlinear_fn=np.exp):
        centers = np.random.randn(self.n_class, self.x_dim)

        self.trainset.y = np.random.randint(0, self.n_class, size=nums)
        self.trainset.x = np.array([ centers[c] + np.random.randn(self.x_dim) * noise for c in self.trainset.y ])

        self.testset.y = np.random.randint(0, self.n_class, size=int(nums * split_ratio))
        self.testset.x = np.array([ centers[c] + np.random.randn(self.x_dim) * noise for c in self.testset.y ])

        if nonlinearity:
            self.trainset.x = nonlinear_fn(self.trainset.x)
            self.testset.x = nonlinear_fn(self.testset.x)

    def show(self):
        plt.scatter(self.trainset.x[:,0], self.trainset.x[:,1], c=self.trainset.y, s=40, cmap='brg')
        plt.show()
