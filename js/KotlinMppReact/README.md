# KotlinMppReact


## Run
* ./gradlew run --continuous

## Docker
Run gradle tasks
``` 
    Tasks > kotlin browser > browserDevelopmentWebpack
    Task > other > copyToDocker
```

build
``` 
docker image build -t kotlinmppreact:app .
``` 
Verify Image
``` 
docker image ls
docker container run -it kotlinmppreact:app bash
    cd /etc/nginx/conf.d
    ls
    more default.conf
    cd /usr/share/nginx/html
    ls
    exit to quit
``` 
run
``` 
docker container run -i -p 8080:80 kotlinmppreact:app
http://localhost:8080
``` 
remove image
``` 
docker rmi -f kotlinmppreact:app
``` 
## PWA parts

pwa is all javascript. 
TODO: Convert service-worker.js to kotlin

- [icons](src/main/resources/image/icons)
- [install.js](src/main/resources/install.js)
- [install.svg](src/main/resources/install.svg)
- [manifest.json](src/main/resources/manifest.json)
- [offline.html](src/main/resources/offline.html)
- [service-worker.js](src/main/resources/service-worker.js)

* Uninstall
    1. In a new browser tab, open chrome://apps
    2. Right click (alt-click) on the KotlinMppReact PWA.
    3. Click Remove from Chrome...
    
    
### Resources
[snrostov/kotlin-full-stack-application-demo](https://github.com/snrostov/kotlin-full-stack-application-demo)
[kotlin-hands-on/web-app-react-kotlin-js-gradle](https://github.com/kotlin-hands-on/web-app-react-kotlin-js-gradle)
[snrostov/kotlin-full-stack-application-demo](https://github.com/snrostov/kotlin-full-stack-application-demo/tree/snrostov/kotlin-1.3.40/client)
[Your First Progressive Web App](https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0)
[googlecodelabs/your-first-pwapp](https://github.com/googlecodelabs/your-first-pwapp)


