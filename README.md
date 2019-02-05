
# ViriCiti Data Engineer Assignment
![
](https://imgs.xkcd.com/comics/machine_learning.png)

This repository holds the ViriCiti data engineer assignment.
In this project you will find the description of your assignment. 
This assignment represent what we do on a day-to-day basis: 
receiving raw data from vehicles, transform it, and store it in a database.

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


### The Data

The assignment is based on a vehicle data generator.
It publishes vehicle data on a nats topics namespaced by parameter names such as `vehicle:test-bus-1:voltage` with the following JSON as an example
```JS
{
  time: 1511512585495,
  value: 12,
}
```

You will find some parameters being broadcasted:
* Voltage (V)
* Current (A)
* Speed (km/h)
* Odometer (km)


### The Task

Your task is to write a program that consumes the broadcasted data and store it in a suitable way to a suitable database.
In addition you need, based on the broadcasted data, calculate the power output over time and the energy used over time by the vehicle. The power and energy should also be published on nats.

The power is 
```
power = voltage * current 
```
The unit is watt.

Energy is the time-integrated power. For each new power measurment the energy contribution `delta_energy` can be approximated (is it a good one?)
```
delta_energy = previously_measured_power * delta_time
```
where `delta_time` is the time since the previous power measurement.
We want the energy in units of kWh.

To be very explicit; we want a new power and energy value for every change in current and/or voltage.

As you are going to present your solution (explaining your choices and convincing us that the data is correctly handled), you also need to display the data somehow.
This is not a frontend assignment, so some static plots are fine (in addition to the live demo of the system).

You should be able to explain the data.

## Time to spend on this task

There is no strict deadline on this assignment, but we estimate it's about two days of effort.

## Reading Material
Looking freshen up on your knowledge and skills? These are some good articles/courses that you can check out.

* [docker](https://www.docker.com/)
* [power](https://en.wikipedia.org/wiki/Power_(physics))
* [nats](https://nats.io/documentation/)
* [node](https://nodejs.org)
* [coffeescript](https://coffeescript.org)

## Questions
If you have any questions about the assignment or project setup feel free to contact us at <a href='mailto:s.surur@viriciti.com'>s.surur@viriciti.com</a>. You can also come by the office. We're always ready to help.

Good luck with the assignment!
