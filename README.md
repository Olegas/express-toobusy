express-toobusy
===============

Keep your Express server responsive even under heavy load!
This trivial middleware uses [toobusy-js](https://npmjs.org/package/toobusy-js) library which is doing all the magic.
Express-toobusy is just a handy wrapper middleware for Express.

Usage
-----

```javascript

    app.use(require('express-toobusy'));

```

If you want to specify your own max lag value, use it like this:

```javascript

    app.use(require('express-toobusy')(40));

```

For details on max lag meaning and default values refer to [toobusy-js](https://npmjs.org/package/toobusy-js) documentation.

