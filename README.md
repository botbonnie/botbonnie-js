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
Initializes the Smooch widget in the web page using the specified options. It returns a promise that will resolve when the widget is ready.

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
Send the message to user via Facebook messenger, the return value is a promise

```javascript
BotBonnie.sendMessage().then(function() {
  console.log('send message success')
})
```

#### close()
Closes the conversation widget (noop when embedded)

```javascript
Smooch.close();
```

#### isOpened()
Tells if the widget is currently opened or closed.

```javascript
Smooch.isOpened();
```

#### login(userId [, jwt] [, attributes])
Logs a user in the widget, retrieving the conversation that user already had on other browsers and/or devices. This will destroy and reinitialize the widget with the user's data. Note that you don't need to call this after `init`, it's already done internally. This returns a promise that resolves when the widget is ready again.
```
Smooch.login('some-id');

// in case you are using the jwt authentication
Smooch.login('some-id', 'some-jwt');

// in case you want to update user attributes at the same time
Smooch.login('some-id', { email: 'my@new-email.com'});

// in case you want to update user attributes at the same time and use jwt
Smooch.login('some-id', 'some-jwt', { email: 'my@new-email.com'});

```

#### logout()
Logs out the current user and reinitialize the widget with an anonymous user.This returns a promise that resolves when the widget is ready again.

```
Smooch.logout();
```

#### destroy()
Destroys the widget and makes it disappear. The widget has to be reinitialized with `init`  to be working again because it also clears up the app token from the widget. It will also unbind all listeners you might have with `Smooch.on`.

```
Smooch.destroy();
```

#### sendMessage(message)
Sends a message on the user's behalf

```javascript
Smooch.sendMessage({
    type: 'text',
    text: 'hello'
});

// OR

Smooch.sendMessage('hello');
```

#### updateUser(user)
Updates user information

```javascript
Smooch.updateUser({
    givenName: 'Updated',
    surname: 'Name',
    email: 'updated@email.com',
    properties: {
      'justGotUpdated': true
    }
});
```

#### getUserId()
Returns the userId of the current user.

```javascript
Smooch.getUserId()
```

#### getConversation()
Returns promise that resolves to conversation object, or rejects if none exists

```javascript
Smooch.getConversation().then(conversation => ...);
```

#### track(eventName)
Tracks an event for the current user.

```javascript
Smooch.track('item-in-cart');
```

#### getCore()
Returns an instance of [smooch-core](https://github.com/smooch/smooch-core-js) to allow access to APIs the Web Messenger doesn't expose. For more information on how to use Smooch-Core, please visit the [documentation](http://docs.smooch.io/rest/?javascript).

### Events
If you want to make sure your events are triggered, try to bind them before calling `Smooch.init`.

To bind an event, use `Smooch.on(<event name>, <handler>);`. To unbind events, you can either call `Smooch.off(<event name>, handler)` to remove one specific handler, call `Smooch.off(<event name>)` to remove all handlers for an event, or call `Smooch.off()` to unbind all handlers.

#### ready
```
// This event triggers when init completes successfully... Be sure to bind before calling init!
Smooch.on('ready', function(){
    console.log('the init has completed!');
});

Smooch.init(...);
```

#### destroy
```
// This event triggers when the widget is destroyed.
Smooch.on('destroy', function(){
    console.log('the widget is destroyed!');
});

Smooch.destroy();
```

#### message:received
```
// This event triggers when the user receives a message
Smooch.on('message:received', function(message) {
    console.log('the user received a message', message);
});
```

### Clone the git repo
```
git clone https://github.com/roylo/botbonnie-js
```
