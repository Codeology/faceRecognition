

import pyrebase
import cv2
import os
import shutil
import face_recognition
from os import listdir
from PIL import Image


filelist = [f for f in os.listdir(
    ".") if f.endswith('.jpg') or f.endswith('.png')]
for f in filelist:
    os.remove(os.path.join('.', f))
shutil.rmtree(os.path.join('.', 'known'))

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

# storage.child("Steph Curry.jpg").download("steph curry.jpg")

all_files = storage.list_files()
files = []
os.makedirs(os.path.join('.', 'known'))
for file in all_files:
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


# # load unknown faces and encodings
# unknown_images_dir = "unknown"
# filepath = "unknown/gs_lineup.jpg"
# pic2 = face_recognition.load_image_file(filepath)
# image_array = pic2
# pic2 = cv2.cvtColor(pic2, cv2.COLOR_BGR2RGB)
# unknown_encodings = face_recognition.face_encodings(pic2)
# unk_names = []

# finalImg = Image.open(filepath)
# w = finalImg.width
# textscale = (w/1200)*0.4

# for enc in unknown_encodings:
#     results = face_recognition.compare_faces(known_encodings, enc)
#     if True in results:
#         unk_names.append(names[results.index(True)])
#     else:
#         unk_names.append('unknown')

# print(unk_names)

# # ----------------------------------------
# # #haar cascade detection method
# # gray_img = cv2.cvtColor(pic2, cv2.COLOR_BGR2GRAY)

# # haar_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# # # haar_cascade = cv2.CascadeClassifier('Cascades/haarcascade_frontalface_default.xml')
# # faces_rect = haar_cascade.detectMultiScale(
# #     gray_img,
# #     scaleFactor=1.2,
# #     minNeighbors=6,
# #     minSize=(30, 30),
# #     flags = cv2.CASCADE_SCALE_IMAGE)
# # ---------------------------------------------

# faces = face_recognition.face_locations(pic2)

# for ((top, right, bottom, left), name) in zip(faces, unk_names):
#     # rescale the face coordinates
#     # draw the predicted face name on the image
#     cv2.rectangle(pic2, (left, top), (right, bottom),
#                   (0, 255, 0), int(textscale))
#     cv2.putText(pic2, name, (left, bottom), cv2.FONT_HERSHEY_SIMPLEX,
#                 textscale, (0, 255, 0), int(textscale))

# # crop face from image----------------------
# # for face_location in faces:
# #     top, right, bottom, left = face_location
# #     coordinates = image_array[top:bottom, left:right]
# #     # cv2.rectangle(pic2, (left, top), (right, bottom), (0, 255, 0), 2)
# #     face = Image.fromarray(coordinates)
# #     face.show()
# # ------------------------------------------

# # show image
# cv2.imshow("frame", pic2)
# cv2.waitKey(0)
