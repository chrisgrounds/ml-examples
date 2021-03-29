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

        model = pickle.load(open(join('data', 'increment-model.pk'), 'rb'))

        prediction = model.predict(100)

        # with open(join('data', 'file.txt'), 'r') as file:
        #     for line in file:
        #         self.wfile.write(line.encode())
        # self.wfile.write(str(np.random.choice([1, 2, 3, 4, 5, 6])).encode())

        self.wfile.write(str(prediction).encode())

        return
