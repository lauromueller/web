---
title: 'Introduction to Neural Networks'
date: '2020-01-10'
field: machine-learning
area: deep-learning
slug: neural-networks
category: 'machine learning'
tags: deep learning, neural networks
draft: true
---

In very simple terms, a neural network:

1. Several inputs
2. Several neurons that take the inputs and produce an output
3. Multiple layers of neurons

[image](./assets/neural-network-introduction.png)

- Larger NNs have better performance but they also need much more data to have this better performance.
- Data should be labeled
- If there is not a lot of data, the relative performance order is not very well defined.
- It is only in the large data domain that large NNs have a clear advantage.

[image](./assets/neural-network-performance.png)

# Binary classification

Goal is to build a classifier that receives an input array and outputs a 1 (truthy prediction) or 0
(falsy prediction).

The labeled training set is composed of (x, y), where x belongs to R^n and y belongs to {0, 1}

We can also group inputs into a matrix of n \* m, where n is the size of the input vector and m
is the number of points in the dataset.

We can do the same for y, which results in a 1 \* m matrix. In the end, we will have one value of
y per column in the X matrix.

[image](./assets/neural-network-notation.png)

# Implementation techniques
