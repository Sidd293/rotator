# rotator

Hello this is Siddhartha Bajpai. Here I present my `rotator.js` javaScript library, which can be used to animate the components in your HTML page with few lines of code. 

### Usage
 
```js
rotator_object_name = new rotator(target_object,inertia,velocity);
```
    
### Example

Suppose the component which we want to spin has the id "rotor".
Now you can use `rotator.js` to instantiate a rotator instance with the selected component.

```js
var rect  = document.getElementById('rect');
var r  = new rotator(rect, 0.1, 40);
```    
### Thanks

I hope you guys like it.
The working codepen is available for further help-  https://codepen.io/siddhartha-bajpai/pen/VwbvgrG
