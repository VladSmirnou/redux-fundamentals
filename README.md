- View the live version of the project -> https://vladsmirnou.github.io/redux-fundamentals/

- Run via Docker ->
1) clone the repo
2) cd to the root of the project
3) Run ```docker image build --tag redux-fundamentals .```
4) Run ```docker container run --rm -d --log-driver none --name redux-fundamentals --publish 127.0.0.1:3000:3000 redux-fundamentals```
5) navigate to http://127.0.0.1:3000
6) stop the container and remove the image if you want
  - ```docker container stop redux-fundamentals```
  - ```docker image rm redux-fundamentals```
\
\
\
Course link: https://redux.js.org/tutorials/fundamentals/part-1-overview