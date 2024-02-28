from . import Dataset
import numpy as np
import matplotlib.pyplot as plt


class ClassificationDataset(Dataset):
    def __init__(self, x_dim, n_class, batchsize=16, *args, **kwargs):
        super().__init__(batchsize)
        self.x_dim = x_dim
        self.n_class = n_class
        self.generate(*args, **kwargs)

    def generate(self, nums, nonlinearity=True, noise=0.3, nonlinear_fn=np.exp):
        centers = np.random.randn(self.n_class, self.x_dim)

        self.y = np.random.randint(0, self.n_class, size=nums)
        self.x = np.array([ centers[c] + np.random.randn(self.x_dim) * noise for c in self.y ])

        if nonlinearity:
            self.x = nonlinear_fn(self.x)

    def show(self):
        plt.scatter(self.x[:,0], self.x[:,1], c=self.y, s=40, cmap='brg')
        plt.show()
