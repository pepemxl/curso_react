from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def get_data():
    # Here you would typically fetch data from your database or another source
    data = {
        "nodes": [
            {"id": 1, "value": 10},
            {"id": 2, "value": 20},
            {"id": 3, "value": 15},
            {"id": 4, "value": 12},
            {"id": 5, "value": 12},
            {"id": 6, "value": 12},
            {"id": 7, "value": 13},
            # Add more nodes as needed
        ],
        "links": [
            {"source": 1, "target": 2}
            # Add more links as needed
        ]
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
