from flask import Flask,send_file
app = Flask(__name__)
@app.route("/")
def returnpage():
    return send_file("./index.html")
@app.route("/main.js")
def js_file():
    return send_file("./main.js")
if __name__ == '__main__':
    print("OK!Server is runing!Please to localhost:4000!")
    app.run(port=4000)