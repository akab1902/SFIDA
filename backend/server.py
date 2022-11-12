from flask import Flask
import requests
from datetime import date
import pandas as pd
import yahoo_fin.stock_info as si
from yahoo_fin import news
import json
from numerize import numerize

from flask import Flask, jsonify, Response
from flask import request
import os
from pathlib import Path
import file_scraper
from werkzeug.datastructures import FileStorage
import datetime

def numMarketcap(x):
    try:
        return numerize.numerize(x)
    except:
        return x


app = Flask(__name__)

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
    response = Response(json.dumps(esg_score))
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

@app.route("/dashboard<count>")
def topNcompanies(count):
    df = si.get_day_most_active(count=count).fillna(0)
    df['Avg Vol (3 month)'] = df['Avg Vol (3 month)'].apply(numerize.numerize)
    df['Volume'] = df['Volume'].apply(numerize.numerize)
    df.columns = ['ticker', 'name', 'price', 'absChange', 'relChange', 'volume', 'avgVolume', 'marketCap', 'peratio']
    df['marketCap'] = df['marketCap'].apply(numMarketcap)
    top_companies = [dict(row[1]) for row in df.iterrows()]
    comMap = {"companies": top_companies}
    top_companies_json = json.dumps(comMap)
    return top_companies_json

@app.route("/companyPage/<tickername>")
def companyPage(tickername):
    
    company_info = si.get_company_info(tickername)
    company_info.loc['ticker','Value'] = tickername
    website_link = company_info.loc['website','Value']
    company_info.loc['imagelink','Value'] = f'<img src="//logo.clearbit.com/{website_link}">'

    quarterly_financials = si.get_income_statement(tickername, yearly=False)
    quarterly_financials.index.name = None
    quarterly_financials = quarterly_financials.T.reset_index()
    quarterly_financials['endDate'] = quarterly_financials['endDate'].apply(lambda x: x.isoformat())
    quarterly_financials = quarterly_financials.dropna(axis=1)
    quarterly_financials = [row.to_dict() for index,row in quarterly_financials.iterrows()]

    stock_price = si.get_data( tickername, interval='1mo').reset_index()
    stock_price['index'] = stock_price['index'].apply(lambda x: x.isoformat())
    stock_price = [row.to_dict() for index,row in stock_price.iterrows()]
    company = {'info': company_info['Value'].to_dict(), 'quarterly': quarterly_financials, 'price':stock_price} 
    
    return json.dumps(company)

if __name__ == '__main__':
    app.run(debug=True)
