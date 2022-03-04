---
title: TensorFlow 2.0 快速入门笔记
date: 2021-08-16
tags: [python, 深度学习, TensorFlow, 笔记]
---

## 使用 pip 安装 TensorFlow
`tensorflow`：支持 CPU 和 GPU 的最新稳定版（适用于 Ubuntu 和 Windows）
`tf-nightly`：预览 build（不稳定）。Ubuntu 和 Windows 均包含 GPU 支持。

### 1. 环境准备
检查 `python` 和 `pip` 命令是否可用。

### 2. 创建虚拟环境（推荐）
Python 虚拟环境用于将软件包安装与系统隔离开来。
```bash
python -m venv .\venv
.\venv\Scripts\activate
python -m pip install --upgrade pip
```
退出虚拟环境
```bash
deactivate
```

### 3. 安装 TensorFlow pip 软件包
在虚拟环境中执行
```bash
pip install tensorflow
```

测试环境
```python
print(tf.add(tf.constant([1,2,3,4]),tf.constant([2,1,5,3])))
# 期望输出 tf.Tensor([3 3 8 7], shape=(4,), dtype=int32)
```

## TensorFlow2 快速入门
[参考文档](https://github.com/czy36mengfei/tensorflow2_tutorials_chinese/blob/master/001-keras_overview.ipynb)

TensorFlow2推荐使用tf.keras构建网络，常见的神经网络都包含在tf.keras.layer中(最新的tf.keras的版本可能和keras不同)
```python
import tensorflow as tf
from tensorflow.keras import layers
print(tf.__version__)
print(tf.keras.__version__)
```

### 1. 模型构建
最常见的模型类型是层的堆叠：`tf.keras.Sequential` 模型
```python
model = tf.keras.Sequential()
model.add(layers.Dense(32, activation='relu'))
model.add(layers.Dense(32, activation='relu'))
model.add(layers.Dense(10, activation='softmax'))
```

也可以直接放入 list 中
```python
model = tf.keras.Sequential([
  layers.Dense(32, activation='relu'),
  layers.Dense(32, activation='relu'),
  layers.Dense(10, activation='softmax')
])
```

### 2. 参数配置
tf.keras.layers中主要的网络配置参数如下：
- `activation`：设置层的激活函数。此参数可以是函数名称字符串，也可以是函数对象。默认情况下，系统不会应用任何激活函数。
- `kernel_initializer` 和 `bias_initializer`：创建层权重（核和偏置）的初始化方案。此参数是一个名称或可调用的函数对象，默认为 "Glorot uniform" 初始化器。
- `kernel_regularizer` 和 `bias_regularizer`：应用层权重（核和偏置）的正则化方案，例如 L1 或 L2 正则化。默认情况下，系统不会应用正则化函数。
```python
layers.Dense(32, activation='sigmoid')
layers.Dense(32, activation=tf.sigmoid)
layers.Dense(32, kernel_initializer='orthogonal')
layers.Dense(32, kernel_initializer=tf.keras.initializers.glorot_normal)
layers.Dense(32, kernel_regularizer=tf.keras.regularizers.l2(0.01))
layers.Dense(32, kernel_regularizer=tf.keras.regularizers.l1(0.01))
```

### 3. 训练和评估
#### 训练配置
构建好模型后，通过调用 compile 方法配置该模型的学习流程：
```python
model.compile(optimizer=tf.keras.optimizers.Adam(0.001),
             loss=tf.keras.losses.categorical_crossentropy,
             metrics=[tf.keras.metrics.categorical_accuracy])
```

#### 输入数据
##### 小型数据
使用 `numpy`
```python
import numpy as np

train_x = np.random.random((1000, 72))
train_y = np.random.random((1000, 10))

val_x = np.random.random((200, 72))
val_y = np.random.random((200, 10))

model.fit(train_x, train_y, epochs=10, batch_size=100,
          validation_data=(val_x, val_y))
```

##### 大型数据集
使用 `tf.data` ，具体使用方法查阅 `tf.data.Dataset`
```python
dataset = tf.data.Dataset.from_tensor_slices((train_x, train_y))
dataset = dataset.batch(32)
dataset = dataset.repeat()
val_dataset = tf.data.Dataset.from_tensor_slices((val_x, val_y))
val_dataset = val_dataset.batch(32)
val_dataset = val_dataset.repeat()

model.fit(dataset, epochs=10, steps_per_epoch=30,
          validation_data=val_dataset, validation_steps=3)
```

#### 评估和预测
评估和预测函数：`tf.keras.Model.evaluate` 和 `tf.keras.Model.predict` 方法，都可以可以使用NumPy和 `tf.data.Dataset` 构造的输入数据进行评估和预测

区别在于，`evaluate` 需要与真实标签比较预测效果，而 `predict` 只输出预测结果。
```python
test_x = np.random.random((1000, 72))
test_y = np.random.random((1000, 10))
model.evaluate(test_x, test_y, batch_size=32)
test_data = tf.data.Dataset.from_tensor_slices((test_x, test_y))
test_data = test_data.batch(32).repeat()
model.evaluate(test_data, steps=30)

result = model.predict(test_x, batch_size=32)
print(result)
```

### 4. 构建复杂模型
#### 函数式API
`tf.keras.Sequential` 模型是层的简单堆叠，无法表示任意模型。使用 Keras 的函数式 API 可以构建复杂的模型拓扑，例如：
- 多输入模型，
- 多输出模型，
- 具有共享层的模型（同一层被调用多次），
- 具有非序列数据流的模型（例如，残差连接）。

使用函数式 API 构建的模型具有以下特征：
- 层实例可调用并返回张量。
- 输入张量和输出张量用于定义 `tf.keras.Model` 实例。
- 此模型的训练方式和 `Sequential` 模型一样。

```python
input_x = tf.keras.Input(shape=(72,))
hidden1 = layers.Dense(32, activation='relu')(input_x) # 表示与input_x连接
hidden2 = layers.Dense(16, activation='relu')(hidden1)
pred = layers.Dense(10, activation='softmax')(hidden2)
# 构建tf.keras.Model实例
model = tf.keras.Model(inputs=input_x, outputs=pred)
model.compile(optimizer=tf.keras.optimizers.Adam(0.001),
             loss=tf.keras.losses.categorical_crossentropy,
             metrics=['accuracy'])
model.fit(train_x, train_y, batch_size=32, epochs=5)
```

#### 模型子类化
不如上面的好看，具体见[原文](https://github.com/czy36mengfei/tensorflow2_tutorials_chinese/blob/master/001-keras_overview.ipynb)

#### 自定义层
不如上面的好看，具体见[原文](https://github.com/czy36mengfei/tensorflow2_tutorials_chinese/blob/master/001-keras_overview.ipynb)

#### 回调
回调是传递给模型以自定义和扩展其在训练期间的行为的对象。我们可以编写自己的自定义回调，或使用 `tf.keras.callbacks` 中的内置函数，常用内置回调函数如下：
- `tf.keras.callbacks.ModelCheckpoint`：定期保存模型的检查点。
- `tf.keras.callbacks.LearningRateScheduler`：动态更改学习率。
- `tf.keras.callbacks.EarlyStopping`：验证性能停止提高时进行中断培训。
- `tf.keras.callbacks.TensorBoard`：使用 TensorBoard 监视模型的行为。

```python
callbacks = [
    tf.keras.callbacks.EarlyStopping(patience=2, monitor='val_loss'),
    tf.keras.callbacks.TensorBoard(log_dir='./logs')
]
model.fit(train_x, train_y, batch_size=16, epochs=5,
         callbacks=callbacks, validation_data=(val_x, val_y))
```

### 5. 模型保存与恢复
#### 保存权重
```python
model.save_weights('./weights/model')
model.load_weights('./weights/model')

# 或者保存为h5格式
model.save_weights('./model.h5', save_format='h5')
model.load_weights('./model.h5')
```

#### 保存网络结构
json格式
```python
import json
import pprint
json_str = model.to_json()
pprint.pprint(json.loads(json_str))

# 读取
fresh_model = tf.keras.models.model_from_json(json_str)
```
yaml格式
```python
yaml_str = model.to_yaml()
print(yaml_str)

# 读取
fresh_model = tf.keras.models.model_from_yaml(yaml_str)
```

#### 保存整个模型
```python
model.save('all_model.h5')

# 读取
model = tf.keras.models.load_model('all_model.h5')
```

## 常用函数速查

### 常用 Layer
#### Dense 全连接层
进行 $f(wx+b)$ 运算

[参数](https://www.w3cschool.cn/tensorflow_python/tensorflow_python-rn6a2tps.html)
- `units`：整数或长整数,输出空间的维数
- `activation`：激活功能(可调用),将其设置为“None”以保持线性激活.
- `use_bias`：Boolean,表示该层是否使用偏差.

```python
layers.Dense(32, activation='relu')
layers.Dense(8, activation='softmax')
```

#### Conv2D 卷积层
[参数](https://www.w3cschool.cn/tensorflow_python/tensorflow_python-p6qw2t3y.html)
- `filters`：整数,输出空间的维数(即卷积中的滤波器数).
- `kernel_size`：2个整数的整数或元组/列表,指定2D卷积窗口的高度和宽度.可以是单个整数,以指定所有空间维度的相同值.
- `activation`：激活功能(可调用),将其设置为“None”以保持线性激活.
- `padding`：可以是"valid"或"same"(不区分大小写).

```python
layers.Conv2D(16, 3, activation='relu')
layers.Conv2D(64, 3, activation='relu', padding='same')
```

#### Conv2DTranspose 逆卷积层
相当于卷积的逆运算

[参数](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv2DTranspose)
- `filters`	Integer, the dimensionality of the output space (i.e. the number of output filters in the convolution).
- `kernel_size`	An integer or tuple/list of 2 integers, specifying the height and width of the 2D convolution window. Can be a single integer to specify the same value for all spatial dimensions.
```python
layers.Conv2DTranspose(16, 3, activation='relu')
```

#### MaxPool2D 池化层
[参数](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/MaxPool2D?hl=en)
- `pool_size`：2个整数的整数或元组/列表：(pool_height,pool_width),用于指定池窗口的大小；可以是单个整数,以指定所有空间维度的相同值.
- `strides`：2个整数的整数或元组/列表,指定池操作的步幅；可以是单个整数,以指定所有空间维度的相同值.
- `padding`：一个字符串；表示填充方法,可以是“valid”或“same”,不用区分大小写.
```python
layers.MaxPool2D(3)
```

#### UpSampling2D 上采样层
上采样，相当于池化的逆运算

[参数](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/UpSampling2D?hl=en)
- `size` Int, or tuple of 2 integers. The upsampling factors for rows and columns.
```python
layers.UpSampling2D(3)
```

#### Reshape
将输入重塑为给定形状的层。

[参数](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Reshape?hl=enl)
- `target_shape` Tuple of integers, does not include the samples dimension (batch size).
```python
layers.Reshape((4, 4, 1))
```

#### Dropout
Dropout层在训练时间内，每一步都会随机将输入单位设置为0，频率为rate，这有助于防止过拟合。未设置为0的输入会被放大1/(1-rate)，这样所有输入的总和就不会改变。

[参数](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dropout?hl=en)
- `rate`：退出率,介于0和1之间；例如rate=0.1,输出单位将减少10％.
```python
layers.Dropout(0.5)
```

#### 其他
见 [Google 官方文档](https://tensorflow.google.cn/api_docs/python/tf/keras/layers?hl=enl)

### 常用工具函数
#### 模型结构表和模型结构图
```python
model.summary()
keras.utils.plot_model(model, 'mnist_model.png')
keras.utils.plot_model(model, 'model_info.png', show_shapes=True)
```

## 参考示例
[tensorflow2中文教程](https://github.com/czy36mengfei/tensorflow2_tutorials_chinese)
