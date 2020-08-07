from selenium import webdriver    # 라이브러리에서 사용하는 모듈만 호출

options = webdriver.ChromeOptions()
options.add_argument('headless')    # 웹 브라우저를 띄우지 않는 headless chrome 옵션 적용

chromedriver = r'c:\Users\ADMIN\Desktop\chromedriver.exe'

driver = webdriver.Chrome(chromedriver, options = options)
driver.get(r'http://www.megabox.co.kr/movie/')    # 크롤링할 사이트 호출

mydata = driver.find_element_by_class_name('tit-area')
movieList = driver.find_element_by_id('movieList')

print(movieList.text)


