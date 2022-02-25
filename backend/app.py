from flask import Flask
from flask import request
from flask import jsonify, make_response
from flask_cors import CORS
import csv
import traceback

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/getdata.csv', methods=['GET'])
def get_data():
    with open('data.csv', 'r') as f:
        output = make_response(f.read())
        output.headers["Content-Disposition"] = "attachment; filename=data.csv"
        output.headers["Content-type"] = "text/csv"
        return output

@app.route('/', methods=['POST'])
def save():
    data = request.get_json()
    fields = ['author', 'date', 'period', 'observation', 'role', 'solution', 'enfants']
    with open('data.csv', 'a') as f:
        writer = csv.DictWriter(f, fields, quoting=csv.QUOTE_ALL)
        enc = {}
        for key in data:
            if key == 'date' and data['date']:
                data['date'] = data['date'][:10]
            if data[key]:
                enc[key] = data[key].encode('utf-8')
            else:
                enc[key] = ''
        writer.writerow(enc)
    return jsonify({'success': 'ok'})

if __name__ == '__main__':
    app.run(debug=True)
