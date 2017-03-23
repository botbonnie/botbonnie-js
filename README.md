# [BotBonnie Javascript SDK](https://botbonnie.com)

## Usage

### Script Tag

Add the following code towards the end of the `body` section on your page. Placing it at the end allows the rest of the page to load first.

```html
<script src="https://d2ilc8y2nu13we.cloudfront.net/botbonnie.min.js"></script>
```


Initialize the plugin using this code snippet

```html
<script>
  BotBonnie.init({
    appId: 'your_facebook_login_app_id',
    pageId: 'your_facebook_fanpage_id'
  });
</script>
```

## API

### Individual functions

#### init(options)
Initializes the BotBonnie SDK in the web page using the specified options.

##### Options

| Option | Optional? | Default value | Description |
| --- | --- | --- | --- |
| appId | No | - | Your facebook login app id |
| pageId | No | - | Your facebook fan page id |
| hostOrigin | Yes | `window.location.origin` | Your website host origin |
| hidden | Yes | `true` | Whether to hide send to messenger plugin |
| containerId | Yes | - | Div id to put send to messenger plugin |

```javascript
BotBonnie.init({
  appId: 'your_facebook_login_app_id',
  pageId: 'your_facebook_fanpage_id',
  hostOrigin: 'https://botbonnie.com',
  hidden: true,
  containerId: 'container_div_id'
});

```


#### sendMessage()
Send the message to user via Facebook messenger. It returns a promise that will resolve when the message sent.

```javascript
BotBonnie.sendMessage().then(function() {
  console.log('send message success')
})
```

### Clone the git repo
```
git clone https://github.com/roylo/botbonnie-js
```
