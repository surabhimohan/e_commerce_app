from flask import Flask, jsonify     # flask is python's library & Flask is a calss, jsonify is a functn that converts python var to json
from flask_cors import CORS

app = Flask(__name__)   # instance of Flask class, app is variable.
CORS(app)

@app.route("/fruits")
def index():
    data=[{
        "url": "img/food-vegetables/beans-haricot.jpg",
        "name": "Beans",
        "price": 50,
        "qty": "500 gms"
    },
    {
        "url": "img/food-vegetables/capsicum.jpg",
        "name": "Capsicum",
        "price": 150,
        "qty": "100 gms"
    },
    {
        "url": "img/food-vegetables/carrot.jpg",
        "name": "Carrot",
        "price": 250,
        "qty": "1 Kg"
    },
    {
        "url": "img/food-vegetables/ladies-finger.jpg",
        "name": "Ladies Finger",
        "price": 20,
        "qty": "500 gms"
    }
]
    return jsonify(data)


app.run()


