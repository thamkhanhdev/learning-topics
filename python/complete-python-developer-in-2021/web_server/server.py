from flask import Flask, render_template, url_for, request, redirect
from flask.wrappers import Request

app = Flask(__name__)


@app.route('/')
def default_page():
    return render_template('./index.html')


@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)

@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == ('POST'):
        data = request.form.to_dict()
        print(data)
        return redirect('/thankyou.html')
    else:
        return 'Something is wrong'