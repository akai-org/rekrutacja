# Currency converter

In this task your job is to develop simple software, with which user will be able to see current exchange rate of given
currencies.

1. For this you'll have to use API documented here: https://exchangerate.host/#/,
2. For each exchange rate you'll have to save it in json file to save bandwidth for future use. For example if user asks
   how much EUR will he receive for any amount of PLN you will have to fetch this data from API and save the ratio and
   date. When the next request involving EUR and PLN occurs you should read this data from json file instead of fetching
   it again if day is the same as given in json file. You'll find example file in directory.
3. The program can be used from console as follows:
   ```python converter.py {base currency amount} {base currency} {target currency}```
   Example:

```
python converter.py 734.54 USD EUR  
```

Example output:

```
734.54 USD = 671.7329675683179 EUR
```

4. Only changes (and their descriptions) you need to do are located in `converter/RatioObtainer.py`

Good luck
