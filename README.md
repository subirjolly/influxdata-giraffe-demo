## Setup to Environment variables

Either rename `.env.sample` to `.env` and edit the file with correct environment variable information, OR export environment vars in terminal.

## Data
For valid data, change the base query in `Configuration` index.jsx class to affect all graphs, or implement specific query per plot type by creating a getQuery() function in the desired `GaugeLayer`, `LineLayer`, or `ScatterLayer` index.jsx file.

## Install and Start App

```
yarn
yarn start
```
