# Studio-Xoup

An online infrastructure to stitch the Studio-X Global Network sites together into a single global interior through selective sharing in and with the public.

Capture devices distributed across Studio-X sites collect information, prinicipally photos, and send them to a server that performs analysis, storage and serves a web site for Studio-X directors and the public to interact with the captured content. The server also provides an API for additional application layers to be built.

Studio-X Soup is an architecture API.




## Components

All components communicate over Web Sockets and are connected using [Spacebrew](docs.spacebrew.cc).

1.	Public interface: a public Tumblr for Studio-X directors to share visual messages with each other and the world that allows submissions from Studio-X visitors through social media channels.

2.	Capture Device: a designed object embedded with a camera and other sensors and actuators controlled by a Raspberry Pi and Arduino that is deployed in Studio-X sites and connected to the server over wifi.

3.	Administrative Interface: a private website for Studio-X directors to administer Studio-X Soup.

4.	Server: a server that collects inputs in a database, performs analysis like computer vision, serves web pages, and provides an API for others to access the database and information.

5.	Thermal Printer: a thermal printer in Studio-X locations that is controlled by the server.




## 1. Public Interface

### Page: Home

A catch-all chronological feed of every image coming from each of the capture devices installed in Studio-X sites integrated with content coming from social media.

Features:
*	visually randomized reverse chronologically ordered vertical stream of cropped images and social media inputs
*	spartan interface with simple menu
*	ability to share each image and social media input directly from the homepage
	*	tweet
	*	share on facebook
	*	reblog and like on tumblr
	*	+1 on Google+
*	links:
	*	arch.columbia.edu
	*	arch.columbia.edu/studiox
	*	studiox-global.tumblr.com
	*	all Studio-X social media channels
*	sort by:
	*	automatically generated event hashtag
	*	range of environmental data
*	colored by sending location


### Page: Guest Book

A view showing only the people/circles.

Features:
*	show the vast amounts of people around the world who course through Studio-X Global Network at a glance
*	identify the people who visit Studio-X (alumni, super users, disciplinary breakdown) by crowdsourcing their identification using interaction with the page itself and social media
*	sort by:
	*	automatically generated event hashtag
	*	range of environmental data
*	colored by sending location


### Page: About

Visual and textual documentation of the entire project, explaining how it works, what it looks like, installation photos, etc.

Features:
*	illustrated description of Studio-X Soup and how it works
*	installation photos
*	capture device photos and link to fabrication files on Github
*	link to this Github repository
*	same links from homepage


### Page: API Documentation

Describes the API and its calls (can be a link to www.apiary.io).


### Social Media Input

By tweeting or Instagramming @ any of the Studio-X Twitter or Instagram handle, or to the @StudioXSoup handle, tweets and Instgram photos can be added to the Studio-X Soup public interface.

TODO: we still need to figure out the rules for limiting this (only people who are physically inside of a Studio-X? Only people who are in the Guest Book?)


## Event Calendar Integration

All posts captured during a Studio-X event that is registered on the [GSAPP Events Calendar](events.gsapp.org) will be posted with the hashtag that corresponds to that event as stored in the GSAPP Events Calendar. This takes advantage of the GSAPP Event Calendar API.




## 2. Capture Device

We may design multiple different types of capture devices, each of which will have the same sensors, actuators and general features, controlled by a Raspberry Pi running Node.js.



### Custom Markers for Capturing and Cropping

The image capture is triggered by placing custom markers similar to Post-It Notes in front of any of the capture device cameras. Cropplr is used to crop the image by the polygon articulated by the custom markers. The number of verticies of the polygon determine the action to be performed.



### Directed Sharing

The color of the custom markers allows a push notification to be sent to specific Studio-X locations to allow for a inter-network direct messaging. Each region has a specific color with another color used for broadcast.



### Environmental Data Tags

All posts will have additional tags automatically appended depending on environmental data. For example:
*	#temperature-72F
*	#pressure-XXX
*	#lumens-XXX
*	additional tags corresponding to the portfolio of sensors



### Shapes

Each shape will determine a different action, as listed below:


#### Circle - Guest Book

A circle should always contain one or more people. The server applies Open CV facial recognition to all circular images, plotting an X in the corresponding color of the Studio-X site at which the image was recorded. It tags the circular image with #guest, which adds it to the Guest Book page of the public interface.


#### Triangle - Twitter

A triangular image will be tweeted from the @StudioXSoup account. If any of the Studio-X region-specific colors are used in the markers, the tweet will mention the twitter handles of each of those locations (up to three). If the broadcast color is used, all Studio-X location handles will be mentioned.

Example twitter message attached to the image:

	Soup message from @studio-x-nyc to @studio-x-rio and @studio-x-sao-paolo #StudioXSoup


#### Pentagon - Print

A pentagon is sent to the thermal printer at another Studio-X site. If any of the Studio-X region-specific colors are used in the markers, it will print only at the corresponding locations (up to five). If the broadcast color is used, it will print at all Studio-X locations (including the sending location).


#### All other shapes

All other shapes simply get placed in the Studio-X Soup feed.




## 3. Administrative Interface

Interactive architecture drawings that allow the original architect and daily managers of the site to identify where the capture devices are placed and illustrates how they affect the space.

Features
*	Plan view
*	Elevation or section view
*	illustration of location and orientation of all capture devices
*	illustration of the camera throw of all capture devices
*	real-time readouts of environmental sensors
*	enable/disable control for all capture devices
*	user authentication (eg. login)





## 4. Server

A Node.js server that collects the inputs from each capture device, hosts a database, performs complex analysis, routes messages to and from social media channels, serves the public and admin interfaces and provides an API.


### Reading from Capture Devices and Storing

Receives and parses custom Spacebrew messages from the capture devices and inserts into a MongoDB database using Mongoose.

Input message schema:
	
	{
		timestamp: Integer,
		location: String,			//eg. "Studio-X New York City"
		verticies: Integer, 		//number of vertices in the shape
		markers: [  				//markers used to create croppedpolygon verticies
			{
				"x": String,
				"y": String,
				"color": String,	//marker color
			},
			{
				"x": String,
				"y": String,
				"color": String,	//marker color
			}
		],
		inputs: {
			"temperature": "67F",	//temperature in Fahrenheit
			"humidity": "XXX",
			"lumens": "XXX"
		},
		image: String 				//stringified base-64 encoded buffer
	}

This schema is mapped onto a MongoDB database using Mongoose.


### Sending to Tumblr

The Tumblr API is used to send a post to Tumblr with all of the appropriate hashtags required for rendering by the Tumblr theme.


### Sending to Twitter

All triangular posts are also sent to Twitter using the Node.js Twitter module.


### Sending to Thermal Printer

All pentagonal posts are sent to the appropriate thermal printers by sending Web Socket messages.


### Public and Admin Interface

An Express app using Passport for authentication is used to serve the public and admin interfaces.


### Computer Vision

The node-opencv bindings for the Open CV C library is used to perform facial recognition on all circular images.

### API

The server will present a public API for additional apps to be built on top of the database, effectively open sourcing the data feeds coming out of Studio-X. The API will be served by an Express app.

TODO: API protocol to be determined.




## 5. Thermal Printer

A thermal printer in a designed casing is installed in all Studio-X locations and connected via a Raspberry Pi to wifi. The printer will be controlled by the server as a way to more actively share across the Studio-X network.

### Messages

All pentagonal images will be sent to one or more thermal printers. The image itself, cropped to a pentagon, will be sent to print in black and white, along with the link to the post on Tumblr.

