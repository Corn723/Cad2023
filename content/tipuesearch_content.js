var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n \n https://s1511.cycu.org/~cad41123135/cad2023 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '進度', 'text': '', 'tags': '', 'url': '進度.html'}, {'title': 'W4', 'text': '建立考試帳號 \n 利用replit把github更新並推送更新內容 \n 選用繪圖軟體( Solidworks ) \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '學習使用 CoppeliaSim套件 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '進行九人分組 \n 獲取CoppeliaSim展示用IPv6位址 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '學習使用透過localhost方式更新github \n 獲取新的教室網路設定檔案 \n 開始繪製任務一零件 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '學習使用自架主機維護網站 \n 第一次考試(考兩次，分數平均) \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '期中考(考兩次) \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '講解wink使用方法 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '校慶運動會\xa0 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '填位置座標 \n 並且按照位置排序出座位表 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '考試點名 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': '任務一', 'text': '零組件檔案 \n', 'tags': '', 'url': '任務一.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'replit', 'text': '1.進入replit內自己的專案，並且RUN \n \n 2.在網址打上專案名稱.使用者名稱.repl.co，並且登入進去 \n \n 3.更新完並且按save \n \n 4.更新完轉靜態 \n \n 5.回replit進入git，並且輸入備註確認 \n \n 6.進行push \n \n \n', 'tags': '', 'url': 'replit.html'}, {'title': 's1511.cycu.org', 'text': '1.開啟ssh_cad學號.bat \n \n \n 2.輸入密碼(在自己的email有) \n \n 3.進入 cad2023 \n \n 4.輸入python3 server.py&(&是背景執行的意思)，他會給你一個你背景執行的編號 \n \n 5.成功執行，進入 https://s1511.cycu.org :分配到的外部 埠 號 \n \n 6.登入進去並且進行更新 \n \n 7.更新完轉靜態(convert)，按下acp並且輸入備註，把檔案推回github \n \n 8.完成更新 \n', 'tags': '', 'url': 's1511.cycu.org.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};