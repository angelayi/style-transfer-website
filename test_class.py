from io import BytesIO
from PIL import Image 

class Test:
    def hello(self):
        print("hello world!")
        return "hello world"


    def getImage(self, img):
        print("hello picture!")
        image = Image.open(BytesIO(img))
        image.show()
        return img

    def getStyle(self, content_img, style_img):
        print("hello style!")
        image = Image.open(BytesIO(content_img))
        image.show()
        image = Image.open(BytesIO(style_img))
        image.show()
        return style_img