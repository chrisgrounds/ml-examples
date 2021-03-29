# api/user.py
from http.server import BaseHTTPRequestHandler
from os.path import join
from pickle import load
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()

        model = load(open(join('data', 'increment-model.pk'), 'rb'))

        prediction = model.predict(100)

        # with open(join('data', 'file.txt'), 'r') as file:
        #     for line in file:
        #         self.wfile.write(line.encode())
        # self.wfile.write(str(np.random.choice([1, 2, 3, 4, 5, 6])).encode())

        self.wfile.write(str(prediction).encode())

        return
