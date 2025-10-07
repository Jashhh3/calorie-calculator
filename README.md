# Calorie Calculator - DevOps Deployment

This repository demonstrates a complete **DevOps workflow** for a **Next.js application** deployed on **Microsoft Azure Virtual Machine** using **Docker**, **GitHub Actions**, and **Kubernetes (Minikube)**.

---

## 📌 Project Overview

The goal of this project is to:
- Containerize a Next.js application using Docker  
- Automate image builds and pushes using GitHub Actions and GitHub Container Registry (GHCR)  
- Deploy the application on Kubernetes (Minikube) inside an Azure VM  
- Access the deployed app externally through NodePort  

---

## ⚙️ Setup Instructions

### Prerequisites
Make sure the following are installed on your system (or Azure VM):

- Node.js (v18 or above)  
- Docker  
- Minikube  
- kubectl  
- Git  

### Clone the Repository
```bash
git clone https://github.com/Jashhh3/calorie-calculator.git
cd calorie-calculator

💻 Local Run Commands
- npm install
- npm run dev
Access the application at:
👉 http://localhost:3000

🐳 Docker Setup
Build Docker Image
docker build -t calorie-calculator .

Run Docker Container
docker run -d -p 3000:3000 calorie-calculator

Verify
Open your browser and go to:
http://localhost:3000

🚀 GitHub Actions (CI/CD)
The CI/CD pipeline builds and pushes the Docker image to GitHub Container Registry (GHCR) automatically on every push to the main branch.
Workflow file: .github/workflows/docker.yml
Image URL: ghcr.io/jashhh3/calorie-calculator:latest

☸️ Kubernetes Deployment (Minikube)

Start Minikube
minikube start --driver=docker

Apply Kubernetes Manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

Check Deployment
kubectl get pods
kubectl get svc

Expected output:
NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
next-app-service   NodePort    10.102.53.202   <none>        80:30080/TCP   2m
 🌐 How to Access the Deployed Application
Option 1: From Minikube (Local Access)
minikube service next-app-service --url


You will get a URL similar to:
http://192.168.49.2:30080

calorie-calculator/
│
├── app/                     # Next.js source code
├── public/                  # Static files
├── styles/                  # CSS and styling
│
├── k8s/
│   ├── deployment.yaml       # Kubernetes Deployment configuration
│   └── service.yaml          # Kubernetes Service configuration
│
├── .github/
│   └── workflows/
│       └── docker.yml        # GitHub Actions CI/CD workflow
│
├── Dockerfile               # Multi-stage Docker build file
├── package.json             # Project dependencies
├── package-lock.json        # Dependency locks
├── README.md                # Project documentation (this file)

🧩 Technologies Used

Next.js – Frontend framework
Docker – Containerization
GitHub Actions – CI/CD automation
GitHub Container Registry (GHCR) – Image storage
Kubernetes (Minikube) – Container orchestration
Microsoft Azure VM – Cloud environment
