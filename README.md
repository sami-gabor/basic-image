1. create express server
2. create Dockerfile
3. cd to current folder
4. `docker image build -t simplest_node_image .`
5. `docker container run -p 3000:3030 simplest_node_image`
6. `docker image tag simplest_node_image samoilagabor/simplest_node_image` - Docker Hub fromat
7. `docker push samoilagabor/simplest_node_image` - push image to DockerHub (must be logged in)