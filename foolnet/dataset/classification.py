from typing import Any, Callable, Union

import matplotlib.pyplot as plt
import numpy as np

from . import Dataset


class ClassificationDataset(Dataset):
    """
    A class to generate a classification dataset.

    Args:
        nums (int):
            Number of samples to generate.
        x_dim (int):
            Dimensionality of input features.
        n_class (int):
            Number of classes.

    Optional Args:
        batchsize (int):
            Size of mini-batch. Defaults to 32.
        split_ratio (float):
            Ratio of test set to the entire dataset. Defaults to 0.2.
        nonlinearity (bool):
            Whether to apply nonlinearity to the dataset. Defaults to True.
        noise (float):
            Standard deviation of the noise added to the data. Defaults to 0.3.
        nonlinear_fn (Union[Callable, np.ufunc]):
            Nonlinearity function to apply to the dataset. Defaults to np.exp.
    """

    def __init__(self, nums: int, x_dim: int, n_class: int,
        batchsize: int = 32, **kwargs: Any) -> None:

        super().__init__(batchsize)
        self.nums = nums
        self.x_dim = x_dim
        self.n_class = n_class
        self.generate(**kwargs)

    def generate(self, split_ratio: float=0.2, nonlinearity: bool=True,
        noise: float=0.3, nonlinear_fn: Union[Callable, np.ufunc]=np.exp) -> None:

        centers = np.random.randn(self.n_class, self.x_dim)
        nums_train, nums_test = self.nums, int(self.nums * split_ratio)

        # Trainset
        self.trainset.y = np.random.randint(0, self.n_class, size=nums_train)
        self.trainset.x = np.array([
            centers[c] + np.random.randn(self.x_dim) * noise for c in self.trainset.y
        ])

        # Testset
        self.testset.y = np.random.randint(0, self.n_class, size=nums_test)
        self.testset.x = np.array([
            centers[c] + np.random.randn(self.x_dim) * noise for c in self.testset.y
        ])

        # Add Nonlinearity to Original Data
        if nonlinearity:
            self.trainset.x = nonlinear_fn(self.trainset.x)
            self.testset.x = nonlinear_fn(self.testset.x)

    def show(self) -> None:
        plt.scatter(
            self.trainset.x[:, 0],
            self.trainset.x[:, 1],
            c=self.trainset.y, s=40, cmap="brg"
        )
        plt.show()
