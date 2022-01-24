# K8Appstack

The aim of this project was to translate project that used docker compose to its K8 counterpart. I've used BMI calculator which I've build previously (accessable at https://github.com/spin311/Appstack) as starting point for this project. 

### *Requierments:*
Make sure you have Docker (or VirtualBox) installed beforehand.
You need to have Minikube and Kubectl installed. You can download Minikube by following instructions: https://phoenixnap.com/kb/install-minikube-on-ubuntu 
and for kubectl: 
https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
You can check kuberl binary with: ```echo "$(<kubectl.sha256)  kubectl" | sha256sum --check ``` 

###### **Instructions:**

1. Clone the repository:
```Shell 
git clone https://github.com/spin311/K8AppStack
```
2. move to K8Appstack folder:
```Shell 
cd K8AppStack
```
3. Start the minicube

```Shell 
start minicube
```
4. run the following script:
```Shell 
kubectl apply -f app-claim0-persistentvolumeclaim.yaml,mongo-express-deployment.yaml,app-deployment.yaml,mongo-express-service.yaml,app-service.yaml,mongo-service.yaml,gcc-deployment.yaml,mongobmi-persistentvolumeclaim.yaml,mongo-deployment.yaml                  
```
5. run 
```Shell 
minikube service mongo
```
The App service is now running!

*How to use web service:*
![Solution](./pictures/Solution.png?raw=true "Solution")
The aim of web service is to calculate (and save) your BMI together with its date and your name. You can input your height and weight, together with your name and the app will calculate your BMI and save it. Because the project uses volumes the data you give as input will be saved and accessible the next time you decide to use it. 

# Solution and Software

*Kompose*
Biggest challenge personally was dealing with and fixing the yaml syntax. The project wasn't very difficult per say, but the challenge was finding the best tools for the job and for that some extensive research on the subject at hand had to be done.
The aim of this project was to use k8s for the docker-compose Appstack used in previous project. I've transormed docker compose to kubernetes yaml files using a handy tool named Kompose and running 
```Shell 
kompose --file docker-compose.yml convert
```
the output files were ofcourse not perfect and had to be changed to fit the project. Overall I'm glad I've learned to use Kompose as it saved me a lot of time. 

*Minikube*
I've used minikube to run k8s locally. it is lightweight and easy to use, which were the reasons for my selection.
![Solution](./pictures/baza.png?raw=true "Baza")

*kubectl*
I've used kubectl to perform kubernetes operations, as a client for Kubernetes API.

### Containers:

The kubernetes stack I've created uses four containers:
1. multistage container named app, which is the complex one, using nginx and gcc, used to send some data to server using gcc.


2. nginx, used in multistage

3. mongo as backend for data used in web app.

4. mongo-express for hosting the data used.
I've used containers for persistant data.
I've used containers and their configurations from my previous project as blue print for this one, changing properties and settings where necessary.
Each container has its own (or even multiple) yaml file. A service yaml file was also needed where database/app communicates with a server. 

### CI/CD
![CI/CD](./pictures/CICD.png?raw=true "CI/CD")
CI/CD used in the project

# Final words
The aim of the project was to learn the basics of K8s and more importantly to find the right tools for the job. The yaml syntax continues to give me troubles as I do not find it intuitive. If I had more time for the project I could build a proxy and implement 0 time deployment, but unfortunalty I did not have the time and resources for that step.







