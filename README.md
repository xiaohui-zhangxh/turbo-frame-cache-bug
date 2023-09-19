# README

how to repro this issue:

```
bin/dev
```

- open `http://localhost:3000/` in browser
- open browser inspector and check the console output
- click link `Page1 not in frame`, `Page2 not in frame` and `Page3 not in frame`, `turbo:before-cache` is caching previous page
- click link `Page1`, `Page2` and `Page3`, `turbo:before-cache` is caching current page


## What this affects

due to incorrect caching, data-turbo-temporary is not working as expected.

see https://github.com/xiaohui-zhangxh/turbo-frame-cache-bug/commit/de98cf2344de79361b728bd23e2a547ff64cb681

repro steps:

- open `http://localhost:3000/` in browser
- open browser inspector and check the console output
- click link `Page1`, click `Page2`
- click browser backward button once, no error, `Page1` is rendered
- click browser backward button again, error occurs, `Home` is rendered, error message "Uncaught TypeError: Cannot read properties of undefined (reading '_x_refs')"

this is because Home page is not cached hence `[data-turbo-temporary]` is not removed before cache.
## screenshots

### open http://localhost:3000/
![image](screenshots/home.png)

### click `Page1 not in frame`

![image](screenshots/page1%20not%20in%20frame.png)

### click `Page1`

![image](screenshots/page1%20in%20frame.png)
