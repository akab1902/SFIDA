from flask import Flask, jsonify
from flask import request
import os
from pathlib import Path
import file_scraper
from werkzeug.datastructures import FileStorage
import datetime


app = Flask(__name__)
app.config["DEBUG"] = True


DATABASE_DIRECTORY = Path(os.getcwd()) / "database"
UPLOAD_DIRECTORY = DATABASE_DIRECTORY / "upload_files"
GENERATE_DIRECTORY = DATABASE_DIRECTORY / "generate_files"

@app.route('/uploadreport', methods=['POST'])
def uploadreport():
    file = request.files['File']
    # file_bin = file.read()
    reportName = request.form.get('reportName')
    reportType = request.form.get('reportType')
    reportDescription = request.form.get('reportDescription')
    reportYear = request.form.get('reportYear')
    if not reportName or reportName == '':
        now = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        reportName = f'file-{now}'
    filename = file.filename
    if 'apple' in filename:
        reportName = filename
    else:
        filetype = filename.split('.')[-1]
        reportName += ('.' + filetype)
    werkzeug_file = FileStorage(file)
    path = os.path.join(UPLOAD_DIRECTORY, reportName)
    werkzeug_file.save(path)
    esg_score = file_scraper.get_esg_score(path, filetype)
    return jsonify(esg_score)


app.run(host='127.0.0.1', port=5000)