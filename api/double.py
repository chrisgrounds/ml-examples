# api/user.py
from http.server import BaseHTTPRequestHandler
from os.path import join
from joblib import load


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()

        model = load(open(join('data', 'increment-model.job'), 'rb'))

        prediction = model.predict(100)

        self.wfile.write(str(prediction).encode())
        return
