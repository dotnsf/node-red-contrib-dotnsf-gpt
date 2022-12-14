# GPT(3.5) based query Node for Node-RED


## Overview

Query-able node based on GPT(3.5)

[2022121500.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121500.png?raw=true)


## Pre-requisite

You need to get (free)account in [Open AI API beta](https://beta.openai.com/) first.

You also have to prepare API Key [here](https://beta.openai.com/account/api-keys).

At last, you would prepare [Node-RED](https://nodered.org/).


## How to use

1. In Node-RED, you can search [node-red-contrib-dotnsf-gpt](https://www.npmjs.com/package/node-red-contrib-dotnsf-gpt) node. You need to install this node in your Node-RED.

[2022121501.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121501.png?raw=true)

2. You will see **GPT** node under `function` category. Drag & Drop this node into Node-RED's canvas.

[2022121502.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121502.png?raw=true)

3. In Node-RED canvas, setup input node(**Injection**), output node(**Debug**), and **GPT** node between them. You need to wire them.

[2022121503.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121503.png?raw=true)

4. Open properties box. You need to edit **API Key** field with your API Key. You can change other properties, but leave them as default now.

[2022121504.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121504.png?raw=true)

5. You also need to input query text in **Injection** node. For example, "IBM Cloud について教えて". In **Injection** node, this text would be send in **msg.payload**.

[2022121505.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121505.png?raw=true)

6. Now you can **deploy** this flow with upper-right button.

[2022121506.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121506.png?raw=true)

7. After deployment, you can click left-side button in **Injection** node to send query text into **GPT** node.

[2022121507.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121507.png?raw=true)

8. **GPT** node needs about 5-10 seconds to query. While waiting for reply, **GPT** node shows green status indicator.

[2022121508.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121508.png?raw=true)

9. After replied, **GPT** node send result in **msg.payload**. In this flow, **Debug** node would output query result in debug window.

[2022121509.png](https://github.com/dotnsf/node-red-contrib-dotnsf-gpt/blob/main/imgs/2022121509.png?raw=true)


## Licensing

This code is licensed under MIT.


## Copyright

2022 K.Kimura @ Juge.Me all rights reserved.

