# Studio-X Soup

An online infrastructure to stitch the Studio-X Global Network sites together into a single global interior through selective sharing in and with the public.

Capture devices distributed across Studio-X sites collect information, prinicipally photos, and send them to a server that performs analysis, storage and serves a web site for Studio-X directors and the public to interact with the captured content. The server also provides an API for additional application layers to be built.

Studio-X Soup is an architecture API.




## Components

1.	Public interface: a public Tumblr for Studio-X directors to share visual messages with each other and the world that allows submissions from Studio-X visitors through social media channels.

2.	Capture Device: a designed object embedded with a camera and other sensors and actuators controlled by a Raspberry Pi and Arduino that is deployed in Studio-X sites and connected to the server over wifi.

3.	Administrative Interface: a private website for Studio-X directors to administer Studio-X Soup.

4.	Server: a server that collects inputs in a database, performs analysis like computer vision, serves web pages, and provides an API for others to access the database and information.

5.	Printer: a thermal printer in Studio-X locations that is controlled by the server.




## 1. Public Interface

The new public face of Studio-X

A Tumblr theme that users can follow, interact with, share from, and generally consu

### Page: Home
(Jim, Leo, Allen)

A catch-all for every Soup image coming from each Studio-X location integrated with content coming from social media.

Goals
*	randomized by ordered chronological stream that should be easy to scroll
*	limited and useful interactivity


### Page: Guest Book
(Jim, Ebbe)

A view showing only the people/circles.

Goals
*	show the vast amounts of people around the world who course through Studio-X Global Network (one large room around the world full of people)
*	identify the people who visit Studio-X (alumni, super users, disciplinary breakdown) by crowdsourcing their identification using interaction with the page itself and social media
*	sort the people/circles by the event they attended






## Capture Device

### Custom Markers for Capturing and Cropping

The image capture is triggered by placing custom markers similar to Post-It Notes in front of any of the capture device cameras. Cropplr is used to crop the image by the polygon articulated by the custom markers. The number of verticies of the polygon determine the action to be performed.

### Directed Sharing

The color of the custom markers allows a push notification to be sent to specific Studio-X locations to allow for a inter-network direct messaging. Each region has a specific color with another color used for broadcast.




## Social Media Input

By tweeting or Instagramming @ any of the Studio-X Twitter or Instagram handle, or to the @StudioXSoup handle, tweets and Instgram photos can be added to the Studio-X Soup public interface.




## Event Calendar Integration

All posts captured during a Studio-X event that is registered on the [GSAPP Events Calendar](events.gsapp.org) will be posted with the hashtag that corresponds to that event as stored in the GSAPP Events Calendar.




## Environmental Data Tags

All posts will have additional tags automatically appended depending on environmental data. For example:
*	#temperature-72F
*	#pressure-XXX
*	#lumens-XXX
*	additional tags corresponding to the portfolio of sensors




## API

The server will present a public API for additional apps to be built on top of the database, effectively open sourcing the data feeds coming out of Studio-X.




#### Circle - Guest Book

A circle is a person or people. It logs all the people into a Studio-X guest book. It attaches them to whatever event was happening at the time. It runs computer vision facial recognition and stores the image on the Studio-X Guest Book and tweets to the Studio-X Guest Book instagram account. The image then leads to a survey to collect information on who the person is (alumni, architect/planner/designer/critic/journalist, their twitter account, etc). Once their identity is confirmed (how?) they can then tweet/instagram into the soup.


#### Triangle - Twitter

Depending on the color of the croppr, if in a triangle, it will be sent with a generic twitter message to the corresponding Studio-X region:

eg: @studio-x-nyc wants @studio-x-rio and @studio-x-sao-paolo to know... #studio-x-soup-share via @studio-x-soup-share


#### Four or more verticies - print!









## Admin Interface

Interactive architecture drawings that allow the architect and daily managers of the site to identify where the hot zones are, where the capture devices are, etc. 




## Thermal Printer
(Leo, Christina, Ebbe)

