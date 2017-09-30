# [BotBonnie Javascript SDK](https://botbonnie.com)

## Usage

### Script Tag

Add the following code towards the end of the `body` section on your page. Placing it at the end allows the rest of the page to load first.

```html
<script src="https://d2ilc8y2nu13we.cloudfront.net/botbonnie-1.0.3.min.js"></script>
```


Initialize the plugin using this code snippet

```html
<script>
  BotBonnie.init({
    appId: 'REPLACE_WITH_YOUR_FACEBOOK_APP_ID',
    pageId: 'REPLACE_WITH_YOUR_FACEBOOK_FANPAGE_ID',
    containerId: 'REPLACE_WITH_YOUR_DIV_ID'
  });
</script>
```

## How to use example ?
This example can only run in http://localhost:9999, and it will send message to you from facebook [BotBonnie](https://www.facebook.com/BotBonnie/) fanpage.
1. `npm start`
2. open browser with http://localhost:9999

## Preparation for Production use
1. Build a bot using BotBonnie, bind to your fanpage.
2. Contact BotBonnie with the following information to setup whitelist domain
```
* Your facebook fanpage ID
* Your website domain
```
3. fill in the following required params
```
FB.init({
  //TODO: replace appId with your facebook login APP ID
  appId      : 'REPLACE_WITH_YOUR_FACEBOOK_APP_ID', 
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.8' // use graph api version 2.8
});
```
```
// TODO: replace the moduleId in BotBonnie
BotBonnie.sendMessage('BB_POSTBACK_MODULE', 'REPLACE_WITH_YOUR_BOTBONNIE_MODULE_ID')
```
```
BotBonnie.init({
  //TODO: replace appId with your facebook login APP ID
  appId: 'REPLACE_WITH_YOUR_FACEBOOK_APP_ID',
  
  //TODO: replace pageId with your facebook fanpage ID
  pageId: 'REPLACE_WITH_YOUR_FACEBOOK_FANPAGE_ID',
  
  // Optional: replace this with your website domain
  hostOrigin: 'REPLACE_WITH_YOUR_WEBSITE_DOMAIN',
  
  // TODO: replace this with html div id where to show facebook web plugin
  containerId: 'REPLACE_WITH_YOUR_DIV_ID',  
});
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
| hidden | Yes | `false` | Whether to hide send to messenger plugin |
| containerId | Yes | - | Div id to put send to messenger plugin |

```javascript
BotBonnie.init({
  appId: 'REPLACE_WITH_YOUR_FACEBOOK_APP_ID',
  pageId: 'REPLACE_WITH_YOUR_FACEBOOK_FANPAGE_ID',
  hostOrigin: 'REPLACE_WITH_YOUR_WEBSITE_DOMAIN',
  hidden: false,
  containerId: 'REPLACE_WITH_YOUR_DIV_ID'
});

```


#### sendMessage()
Send the message to user via Facebook messenger. It returns a promise that will resolve when the message sent.

```javascript
BotBonnie.sendMessage('BB_POSTBACK_MODULE', "REPLACE_WITH_YOUR_MODULE_ID").then(function() {
  console.log('send message success')
})
```

### Clone the git repo
```
git clone https://github.com/roylo/botbonnie-js
```
