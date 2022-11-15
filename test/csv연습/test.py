import requests
import json
import csv
import pandas as pd

# 관측소번호, 시작날짜, 종료날짜 입력 필수
url = requests.get("https://api.themoviedb.org/3/movie/popular?api_key=8513510776c862bf8d57bb36d072f05e&language=ko-KR&page=50")
text = url.text

# JSON 데이터에 액세스
data = json.loads(text)
data = data['results']
# print(data)

# df = pd.json_normalize(data['response']['resultData'])

# csv 저장
# data.to_csv("sample.csv")

with open('names.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['id', 'title', 'genre', 'actors','overview','popularity','release_date','vote_average','vote_count']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for d in data:
        url2 = requests.get(f"https://api.themoviedb.org/3/movie/{d['id']}/credits?api_key=8513510776c862bf8d57bb36d072f05e&language=ko-KR")
        text2 = url2.text
        casts = json.loads(text2)
        casts = casts['cast']
        actors = []
        for cast in casts:
            actors.append([cast['id'], cast['name'], cast['profile_path']])
        writer.writerow({'id': d['id'], 'title': d['title'], 'genre':d['genre_ids'], 'actors':actors, 
        'overview':d['overview'],'popularity':d['popularity'],'release_date':d['release_date'],'vote_average':d['vote_average'],'vote_count':d['vote_count']})