# Currency converter
In this task your job is to develop simple software, with which user will be able to see current exchange rate of given currencies.

1. For this you'll have to use API documented here: https://exchangeratesapi.io/,
2. for each exchange rate you'll have to save it in json file to save bandwidth for future use. For example if user asks how much
EUR will he receive for any amount of PLN you will have to fetch this data from API and save the ratio and date. When the next 
request involving EUR and PLN occurs you should read this data from json file instead of fetching it again if day is the same as
given in json file. You'll find example file in directory. 
