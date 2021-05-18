from selenium import webdriver


chorme_browser = webdriver.Chrome('./chromedriver')

chorme_browser.maximize_window()
chorme_browser.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')