import numpy as np

import foolnet as fn

np.random.seed(42)

def func(data: np.ndarray) -> np.ndarray:
    x, y = data[:,0], data[:,1]
    theta = np.random.uniform(-4., 7., len(x))
    r = (1. + np.arctan(x+y) / np.pi) * np.exp(.1 * theta)
    return np.stack((r * np.cos(theta), r * np.sin(theta)), axis=1)

dataset = fn.ClassificationDataset(x_dim=2, n_class=3, nums=999, nonlinear_fn=func)

# 两层网络
model = fn.Stack(
    fn.DenseLayer(2, 5),
    fn.ReLU(),
    fn.DenseLayer(5, 3),
    fn.Softmax()
)

scheduler = fn.InverseTimeDecay() # 学习率调度器
optimizer = fn.SGD(model, 1., scheduler) # 优化器
lossfn = fn.CrossEntropyLoss() # 损失函数

for i in range(100):
    loss, acc = np.array([]), np.array([])

    for x, y in dataset.trainset:
        # 前向传播
        output = model(x)
        loss = np.append(loss, lossfn(output, y))

        # 反向传播
        lossfn.backward(output, y)
        optimizer.backward(lossfn.dinputs)
        optimizer.step()

    scheduler.step()

    if not i % 10:
        # 在测试集上计算准确率
        for x, y in dataset.testset:
            output = model(x)
            acc = np.append(acc, np.mean(np.argmax(output, axis=1) == y))
        print(f"epoch{1 + i // 100} loss {np.mean(loss):.5f} acc {np.mean(acc):.5f}\n")

dataset.show()
