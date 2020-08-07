import numpy as np
from bs4 import BeautifulSoup

import requests
import re

# def main():
#     r = requests.get("http://www.megabox.co.kr/movie/")
#     c = r.content
#     soup = BeautifulSoup(c,"html.parser") 
#     movielist = soup.find("ol", {"id": "movieList"})
#     titles = [ title.text for title in movielist.find_all('p','tit')]
#     print(titles)
  
 
# #   return titles

# if __name__ == "__main__":
#     main()
# print("")
r = requests.get("http://www.megabox.co.kr/movie/")
c = r.content
soup = BeautifulSoup(c,"html.parser") 
print(soup)

# titles = soup.select("p.tit")

titles = soup.select(" ol.movieList")
print(titles)
print("------------------------------------------")
movielist = soup.find("ol", {"id": "movieList"})
movielist = soup.find("p", {"class": "tit"})
print(movielist)
titles = [ title.text for title in movielist.find_all('p','tit')]
print(titles)