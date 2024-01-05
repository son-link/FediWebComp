# FediWebComp

Various web components to embed into any web page and display your latest posts from various Fediverse platforms, such as Mastodon, PixelFeed and PeerTube.

It's very easy to use:

* 0 dependencies, just import the script of the component to use.
* Add the tag to the page and define the values of the attributes of your user and instance.
* Define the value of other attributes to customize it (height, colours, what media to show, etc.)
* Works in any updated browser

Under the MIT license

## Mastodon

Show your latest toots, not including replies or retoots.

![Mastodon screenshot](screenshot.png)

### How to use

```html
<script type="text/javascript" src="fwb-mastodon.js"></script>
<fwb-mastodon username="youruser" instance="mastodoninstance.org" />
```

### Attributes:

* username: Your mastodon user name, without the @
* instance: The mastodon instance where you have the account. No need to add https:// at the beginning. For example: mastodon.social
* widget-text: The text color of the component. \*
* widget-bg: The background color of the component. \*
* toots-text: The text color of the toots \*
* toots-bg: The background color of the toots list \*
* links: The text color of the links \*
* height: Set the widget height. You can use any CSS size value (px, pt, vh, etc)
* medias: Comma-separated values to indicate which media files you want to display. The values are: all (default), none, image, video, audio. **Note:** **None** prevails over **all**, and **all** over the rest, keep this in mind when defining this value.

> \* You can use any CSS color value, such as hexadecimal (#ffffff), color name (white), rgb (rgb(255,255,255)) and rgba (rgba(255,255,255,0.8))

