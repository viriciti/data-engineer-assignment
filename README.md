
# ViriCiti Data Engineer Assignment
![
](https://imgs.xkcd.com/comics/machine_learning.png)

This repository holds the ViriCiti Data engineer assignment. In this project you will find the description regarding the assignment for you to do. This assignment represent what we do on a day to day basis. We receive raw data from vehicles store it on database.

## Getting Started
First of all, fork the repository at:

`https://github.com/viriciti/data-engineer-assignment`

Then open up your terminal and clone the forked repository

<sup>Replace [YOUR_USERNAME] with your name</sup>

`git clone https://github.com/[YOUR_USERNAME]/data-engineer-assignment.git`

Enter the directory

`cd data-engineer-assignment`

Install all the dependencies

`npm i`

Run [NATS](https://nats.io/) on a docker container (make sure that you've [installed docker](https://docs.docker.com/install/))

`npm run start-nats`

Run the project

`npm run start-broadcast`


## The Assignment

### Get Creative!

### The data
The assignment is based on a vehicle data generator. It publishes vehicle data on a nats topics namespaced by parametes such as `vehicle:test-bus-1:voltage` with the following JSON as an example
```JS
{
  time: 1511512585495,
  value: 12,
}
```

You will find some parameters being broadcast ed `NATS`:
* Voltage (V)
* Current (A)
* Speed (km/h)
* Odometer (km)

## Read up material
Looking to level up your knowledge and skills? These are some good articles/courses that you can check out.
* [Node.js Streams API](https://nodejs.org/api/stream.html)
* [Readable Streams & Back-pressure](https://www.transitions-now.com/2015/12/06/merging-time-series-data-streams-a-node-js-streams-case-part-2/)
* [Node.js TCP server](https://nodejs.org/api/net.html)
* [Docker](https://www.docker.com/)
* [Testing REST API](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)

### General
* Learn [Node.js and it's modules](http://nodeschool.io/#workshoppers)

## Questions
If you have any questions about the assignment or project setup feel free to contact us at <a href='mailto:s.surur@viriciti.com'>s.surur@viriciti.com</a>. You can also come by the office. We're always ready to help.

Good luck with the assignment!
