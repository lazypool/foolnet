import numpy as np
import foolnet as fn

func = lambda x: np.log(1 / (np.sin(x) + 2)) # 生成具有非线性可分性的数据
dataset = fn.ClassificationDataset(x_dim=2, n_class=3, nums=999, nonlinear_fn=func)

# 两层网络
dense1 = fn.DenseLayer(2, 3, fn.ReLU())
dense2 = fn.DenseLayer(3, 3, fn.Softmax())

lossfn = fn.CrossEntropyLoss()

for i in range(10):
    loss, acc = np.array([]), np.array([])
    for x, y in dataset.trainset:
        # 前向传播
        dense1.forward(x)
        dense2.forward(dense1.output)

        loss = np.append(loss, lossfn(dense2.output, y))

        # 反向传播
        lossfn.backward(dense2.output, y)
        dense2.backward(lossfn.dinputs)
        dense1.backward(dense2.dinputs)

        dense1.update(0.5)
        dense2.update(0.5)

    # 在测试集上计算准确率
    for x, y in dataset.testset:
        dense1.forward(x)
        dense2.forward(dense1.output)

        acc = np.append(acc, np.mean(np.argmax(dense2.output, axis=1) == y))

    print(f"epoch{i} loss {np.mean(loss):.5f} acc {np.mean(acc):.5f}\n")

dataset.show()
