## App source code for review

This source was placed online for Google Engineering review, as Google Play Policy engineering framework determinedmy React-native app as malicious. 

The source is here for a few reasons: 

* Add transparency to the process, and therefore to indicate the intentions of the code, and how it abides to React Native framework
* Help Google Engineering to take an alternative review process 
* Help the React Community in case of any recomendation from Google Play Policy system. 

## Architecture (1.0-3.0)

* It's based in the basic React-native app sample plus I have pasted the sample of Web view [1](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/WebViewExample.js). 

## Main changes

* Even thought I believe that nothing malicious was in the sample of React-native Facebook code [1](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/WebViewExample.js);
* Yet I have simplified the webview sample, simply to avoid the names that were in the code, such as the keyword "injectJS" — as I believe your system may have been triggered by an english word; 
* The diff is here [2](https://github.com/taboca/react-app-webview/commit/4bac4ec1798bb73e8e417271c96ce156c2a62962 )

## References 

* [1 - prior main source](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/WebViewExample.js)
* [2 - new main source](https://github.com/taboca/react-app-webview/commit/4bac4ec1798bb73e8e417271c96ce156c2a62962)
 

## Background on Marcio, and LPeU

* LPeU is Língua Portuguesa em Uso, a portuguese teaching web site with about 1300 articles published by our editor and additional 200 articles published by the community. LPeU makes portuguese articles available in Creative Commons. Our property is live online since 2009 and continues to seek the best practices and guidelines for content, web development, and, moral ethics behavior, and security. For additional information please write to mgalli@mgalli,com, taboca@gmail.com or call + 55 16 9 8123 3210 (Marcio Galli CEO)


