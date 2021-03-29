# api/user.py
from http.server import BaseHTTPRequestHandler
from os.path import join
import numpy as np
import pickle


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()

        model = pickle.load(open('data', 'double-model.pk', 'rb'))

        prediction = model.predict(100)

        self.wfile.write(str(prediction)).encode())
        return
