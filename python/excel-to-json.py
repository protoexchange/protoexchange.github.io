import requests

#key = "12_qZKlF36eQXtTXluDq2Xa5XIHQgC-uqWjC8KP1-Ohk"
url = "https://spreadsheets.google.com/feeds/list/12_qZKlF36eQXtTXluDq2Xa5XIHQgC-uqWjC8KP1-Ohk/default/public/basic?hl=en_US&alt=json"

r = requests.get(url)

partners_file = open("../json/manufacturing-resources.json", "w")

data = r.text
partners_file.write(data)