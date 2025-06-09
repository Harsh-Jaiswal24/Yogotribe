# 🔢 Prime Number Checker API (Express.js)

This is a simple REST API built with **Node.js** and **Express** that checks whether a given number is a **prime number** or not.

---

## 📦 Features

- Accepts a number via query parameter.
- Returns a JSON response indicating if the number is prime.
- Built using Express.js.

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Harsh-Jaiswal24/Yogotribe
cd Yogotribe
 
### 2. Install Dependencies

- npm install

--- 
## Run the server

- node index.js

--- 
## How to Use
### ✅ Endpoint
- GET /is-prime?number=<number>

- Replace <number> with the number you want to check.
- example : http://localhost:3000/is-prime?number=1


### Response Example
## If the number is prime:

## json
{
  "number": 17,
  "isPrime": true
}

## If the number is not prime:

## json
{
  "number": 15,
  "isPrime": false
}
