import numpy as np

import foolnet as fn

np.random.seed(42)

func = lambda x: np.log(1 / (np.sin(x) + 2)) # 生成具有非线性可分性的数据
dataset = fn.ClassificationDataset(x_dim=2, n_class=3, nums=999, nonlinear_fn=func)

# 两层网络
model = fn.Stack(
    fn.DenseLayer(2, 3),
    fn.ReLU(),
    fn.DenseLayer(3, 3),
    fn.Softmax()
)

lossfn = fn.CrossEntropyLoss()

for i in range(30):
    loss, acc = np.array([]), np.array([])
    for x, y in dataset.trainset:
        # 前向传播
        output = model(x)
        loss = np.append(loss, lossfn(output, y))

        # 反向传播
        lossfn.backward(output, y)
        model.backward(lossfn.dinputs)

        # 更新参数
        for pair in model.parameters():
            pair[0] += -0.5 * pair[1]

    # 在测试集上计算准确率
    for x, y in dataset.testset:
        output = model(x)
        acc = np.append(acc, np.mean(np.argmax(output, axis=1) == y))

    print(f"epoch{i} loss {np.mean(loss):.5f} acc {np.mean(acc):.5f}\n")

dataset.show()
