---
title: 'Logistic regression'
date: '2020-01-10'
field: statistics
area: regression
slug: logistic-regression
category: 'statistics'
tags: deep learning, neural networks, machine learning
draft: true
---

Given an input x in R^n, a parameter w in R^n and a number b.

Sigmoid function applied to a linear transformation of the input vector x.

# Loss function

We need to define a loss function in order to measure how good our output is compared to the real
output.

# Logistic regression loss function

L(y^, y) = -(ylogy^ + (1-y)log(1-y^))

This allows to measure the quality of one output.

# Logistic regression cost function

For the entire dataset, we can compute the average of the individual loss functions

J(w, b) = (1/m) sum_i(L(y^, y)) = -(1/m) sum_i(y_i logy^\_i + (1-y_i)log(1-y^\_i))
