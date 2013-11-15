# Studio-Xoup Capture Device

A designed object embedded with a camera and other sensors and actuators controlled by a Raspberry Pi and Arduino that is deployed in Studio-X sites and connected to the server over wifi.

We may design multiple different types of capture devices, each of which will have the same sensors, actuators and general features, controlled by a Raspberry Pi running Node.js. 

## Programs

The capture device will perform the following three programs:

1. Surveillance - The capture device will passively record the image of public participants in Studio-X events

2. Content - The capture device will aid in the active and/or passive sharing of content across the Studio X network

3. Event Recording- The capture device will help to record and share not only event images, but also environmental data about each event, which will in turn assisnt in alternative methods of archiving and retrieving event information.



## Components/Requirements

###Microcomputer:
 Rasberry Pi
	* Direct access to HDMI port
	* Battery or direct power

 ###Microcontroller:
 Arduino
	* Usb cable
	* Clearance for sensors to plug into

###Sensors:
1. Barometric Pressure Sensor - BMP085 Breakout (https://www.sparkfun.com/products/11282)
	* Can be concealed inside object, but must be able to read data from ambient air to accurately gauge pressure and temperature.

2.  Humidity Sensor - HIH-4030 Breakout (https://www.sparkfun.com/products/9569)
	* Similar to the barometric pressure sensor, it has to have access to air, but does not need to be exposed.

3. Basic Photoresistor
	* Must be exposed to the exterior of the casing

4. Button


###Actuators:
1. LCD Screen
	* Must be exposed to the exterior
	* Needs relatively large, flat surface

2. LED Light



