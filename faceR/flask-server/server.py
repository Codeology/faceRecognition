from flask import Flask
from flask import jsonify
import pyrebase
import cv2
import os
import shutil
import face_recognition
from PIL import Image


app = Flask(__name__)


# config = {
#     "apiKey": "AIzaSyBbC1mlnZQol6Iqhewi_vr731JqX-8ejK4",
#     "authDomain": "facer-67b46.firebaseapp.com",
#     "projectId": "facer-67b46",
#     "storageBucket": "facer-67b46.appspot.com",
#     "messagingSenderId": "1059662869767",
#     "appId": "1:1059662869767:web:721a07fe011e1577a081a2",
#     "measurementId": "G-HY8E2WVCKW",
#     "databaseURL": "",
#     "serviceAccount": "serviceAcc.json"

# }

# firebase_storage = pyrebase.initialize_app(config)
# storage = firebase_storage.storage()

# # storage.child("Steph Curry.jpg").download("steph curry.jpg")

# all_files = storage.list_files()
# # all_files = []

# for file in all_files:
#     file.download_to_filename(file.name)
#     print(file.name)

# @app.route("/members")
# def members():
#     print(42)
#     storage.child('test1.jpg').put("test.jpg")

#     return "2"


config = {
    "apiKey": "AIzaSyBbC1mlnZQol6Iqhewi_vr731JqX-8ejK4",
    "authDomain": "facer-67b46.firebaseapp.com",
    "projectId": "facer-67b46",
    "storageBucket": "facer-67b46.appspot.com",
    "messagingSenderId": "1059662869767",
    "appId": "1:1059662869767:web:721a07fe011e1577a081a2",
    "measurementId": "G-HY8E2WVCKW",
    "databaseURL": "",
    "serviceAccount": "serviceAcc.json"
}

firebase_storage = pyrebase.initialize_app(config)
storage = firebase_storage.storage()
# all_files = storage.li()

# for file in all_files:
#     print(file.name)
storageRef = storage.ref("attendance")

# storage.child("Steph Curry.jpg").download("steph curry.jpg")
all_files = storageRef.listAll()
files = []
for file in all_files:
    print(file.name)


@app.route("/members")
def members():
    filelist = [f for f in os.listdir(
        ".") if f.endswith('.jpg') or f.endswith('.png')]
    for f in filelist:
        os.remove(os.path.join('.', f))
    if (os.path.exists("./known")):
        shutil.rmtree(os.path.join('.', 'known'))
    if (os.path.exists("./unknown")):
        shutil.rmtree(os.path.join('.', 'unknown'))

    # storage.child("Steph Curry.jpg").download("steph curry.jpg")
    all_files = storage.child('attendance').list_files()
    files = []
    for file in all_files:
        print(file.name)
    os.makedirs(os.path.join('.', 'known'))
    os.makedirs(os.path.join('.', 'unknown'))
    for file in all_files:
        if file.name.startswith('test'):
            file.download_to_filename("unknown/"+file.name)
        else:
            file.download_to_filename("known/" + file.name)
        print(file.name)
    # load known faces and encodings
    known_images_dir = "known"
    names = []
    known_encodings = []
    for img in os.listdir(known_images_dir):
        pic = face_recognition.load_image_file(known_images_dir + "/" + img)
        # rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        encoding = face_recognition.face_encodings(pic)[0]
        known_encodings.append(encoding)
        name = img.split('.')[0]
        names.append(name)
    # print(names)
    # print(len(known_encodings))
    # load unknown faces and encodings
    unknown_images_dir = "unknown"
    filepath = "unknown/test.jpg"
    pic2 = face_recognition.load_image_file(filepath)
    image_array = pic2
    pic2 = cv2.cvtColor(pic2, cv2.COLOR_BGR2RGB)
    unknown_encodings = face_recognition.face_encodings(pic2)
    unk_names = []
    finalImg = Image.open(filepath)
    w = finalImg.width
    textscale = (w/1200)*0.4
    for enc in unknown_encodings:
        results = face_recognition.compare_faces(known_encodings, enc)
        if True in results:
            unk_names.append(names[results.index(True)])
        else:
            unk_names.append('unknown')
    print(unk_names)
    # label image with names
    faces = face_recognition.face_locations(pic2)
    for ((top, right, bottom, left), name) in zip(faces, unk_names):
        # rescale the face coordinates
        # draw the predicted face name on the image
        pic2 = cv2.rectangle(pic2, (left, top), (right, bottom),
                             (0, 255, 0), int(textscale))
        pic2 = cv2.putText(pic2, name, (left, bottom), cv2.FONT_HERSHEY_SIMPLEX,
                           textscale, (0, 255, 0), int(textscale))
    # show image
    cv2.imwrite("unknown/test.jpg", pic2)
    storage.child('test.jpg').put("unknown/test.jpg")
    print(42)

    return jsonify(unk_names)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=3000)
