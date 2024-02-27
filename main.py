import numpy as np
import foolnet as fn

import nnfs
from nnfs.datasets import vertical_data
nnfs.init()

x, y = vertical_data(samples=300, classes=3)

dense1 = fn.DenseLayer(2, 3, fn.ReLU())
dense2 = fn.DenseLayer(3, 3, fn.Softmax())

lossfn = fn.CrossEntropyLoss()

for i in range(10):
    dense1.forward(x)
    dense2.forward(dense1.output)

    print(
        "loss", lossfn(dense2.output, y),
        "acc", np.sum(np.argmax(dense2.output, axis=1) == y) / len(dense2.output)
    )

    lossfn.backward(dense2.output, y)
    dense2.backward(lossfn.dinputs)
    dense1.backward(dense2.dinputs)

    dense1.update(1.0)
    dense2.update(1.0)
