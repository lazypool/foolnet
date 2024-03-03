# FoolNet - v0.1.2

A package `designed for the new hand` about the Neural Network and Deep Learning.

Not used for the application but `for the learning purpose` with easy-reading code.

## Introduction

Through the `source code` of this package, equipped with the awesome
`website` we built, you're able to know more clearly about how the
Neural Network work.

In this package, all the components of Neural Network, such as *activation*,
*loss function*, *BP algorithm* are built from scratch, totally via the
`numpy`! Therefore you can easily read the code and understand the meaning
of this part without extra effort.

What's more, we created a website for the users to understand the `mathematical
logic` behind the code, and why we implement it in that way, so users can
understand some deeper principles, and not only 'How can I use it'.

## The Package

### Installation

Just use `pip` to install it from **PypI**. We maintain it for free!

```bash
pip install foolnet
```

Requirements: python >= 3.9 ; numpy >= 1.20.0; matplotlib >= 3.8.0

### Usage

A usage example under version 0.1.2.

```python
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
```

## The Website

The website is built by [@CoderSerio](https://github.com/CoderSerio),
with the [dumi](https://d.umijs.org/) framework.

### Online

For online website, you may goto https://lazypool.github.io/foolnet/.

### Offline

For you wish downloading the documents to your local, just clone this repository.

```bash
git clone 'git@github.com:lazypool/foolnet.git'
cd foolnet/docs/
```

Then run the next commands, supose that you have downloaded the `npm`.

```bash
$ npm install
$ npm run start
```

Now you should be able to visit the website at `https://localhost:8000`,
which has the same content with the online website.
