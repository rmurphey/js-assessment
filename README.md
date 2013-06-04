# JS assessment 中文版

此Repository包含了一系列的測試檔案，用以評量或加強對於Javascript的瞭解程度。

## 如何使用
首先，必須要在您的機器上安裝Node.js，
[官網下載連結](http://nodejs.org/#download) 。

再來，複製或下載此Git Repo，並於該資料夾執行下列指令：

    npm install
    node bin/serve

正常啓動後，連至
[http://localhost:4444](http://localhost:4444)會看到測試結果頁面。

一開始所有測試結果都是失敗的（紅色），而您的目標是到`app/`目錄下完成各檔案的內容，使得`tests/app/`目錄下的測試碼能夠正確地執行。當您修改程式碼之後直接重新整理頁面即可，所有的測試碼是在瀏覽器上而非Node.js執行的。

如果您想在Node.js上作測試，可以執行以下命令：

    npm test



## 看不懂要如何修改？

開啟`tests/app/`中的檔案為測試檔，每一個`it('中文敘述', function() { //測試區塊})`都是一個測試。`beforeEach`是每個測試的前置作業，範例：`array.js`中的beforeEach設定了`a=[1,2,3,4];`，也就是所有測試都可以取得一個名為`a`的陣列（當然，他們是互相獨立的）。`answers`對應的就是`app/`裡相同檔名的模組，範例：`answers.indexOf()`對應的就是`indexOf:`的程式區段。而您的目標是完成每個測試區塊中的expect條件，多數expect呼叫方式很直觀，如有不懂可至[expect.js](https://github.com/LearnBoost/expect.js/blob/master/README.md)找尋更多使用範例。


# License
注意：此repo是從[js-assessment](https://github.com/rmurphey/js-assessment) fork而來。

Copyright &copy; 2012 Rebecca Murphey & Fin Chen.

This work is licensed under the [Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
license. You are free to share and remix the work, and to use it for commercial
purposes under the following conditions:

- *Attribution* — You must attribute the work in the manner specified by the
  author or licensor (but not in any way that suggests that they endorse you or
  your use of the work).
- *Share Alike* — If you alter, transform, or build upon this work, you may
  distribute the resulting work only under the same or similar license to this
  one.

Any of these conditions can be waived if you get permission from the copyright
holder.
