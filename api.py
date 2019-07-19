#!/usr/bin/env python
from flask import Flask, request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
import base64
import sys
from test_class import Test
from style_transfer import StyleTransfer

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/style-transfer", methods = ['GET', 'POST'])
def result():
    # for testing purposes
    if request.method == 'GET':
        temp = Test()
        return temp.hello() # should return "hello world" onto screen

    if request.method == 'POST':
        # get two images
        data = request.get_data()
        data_split = data.decode().split(',')
      
        content_img = data_split[1]
        style_img = data_split[3]

        # decode the two input from base64 to Images
        content_decode = base64.b64decode(content_img)
        style_decode = base64.b64decode(style_img)

        # run style transfer code on the content and style images
        style_transfer_obj = StyleTransfer()
        result = style_transfer_obj.run(content_decode, style_decode)

        # encode the resulting image and return to frontend
        result_encode = base64.b64encode(result)
        return result_encode

if __name__ == '__main__':
    app.run(debug=False, port=40001)
