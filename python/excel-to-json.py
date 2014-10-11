import requests

key = "12_qZKlF36eQXtTXluDq2Xa5XIHQgC-uqWjC8KP1-Ohk"
url = "https://spreadsheets.google.com/feeds/list/"+key+"/od6/public/basic?hl=en_US&alt=json"

r = requests.get(url)

partners_file = open("../json/partners.json", "w")

data = r.text
partners_file.write(data)