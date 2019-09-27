# Parsowanie JSONa

## Opis
JSON jest często używanym formatem wymiany danych pomiędzy systemami informatycznymi. Będziesz miał z nim mnóstwo
styczności na każdym etapie swojego rozwoju w branży, dlatego chciałbym abyś już teraz zaznajomił sie z nim oraz nauczył
pozyskiwać zakodowane za jego pomocą dane pozyskane z zewnętrznych serwisów i kodować w nim swoje własne dane. 

## Zadanie
Mamy aplikację konsolową, to-do listę. Wszystkie taski są trzymane w plikach JSON, toteż aplikacja potrzebuje
możliwości zapisu danych w tym formacie oraz ich odczytu. Twoim zadaniem jest zapewnienie tej funkcjonalności.
W katalogu znajduje się plik taski.json, który będzie stanowił naszą bazę danych. To w nim muszą znaleźć się wszystkie
taski stworzone przez użytkownika oraz ich szczegóły. Podczas uruchomienia program ma odczytywać dane zawarte w tym
pliku a podczas pracy programu użytkownik powinien mieć możliwość jego ponownego przeładowania i zapisania zmian.
Odpowiedni szkielet programu został już przygotowany przeze mnie, Twoim zadaniem jest jedynie uzupełnienie wskazanych
metod tak, aby spełniały warunki zadania.Instrukcje na temat kodu do uzupełnienia zostały zawarte w klasach Importera i
Exportera w 
`/src/json/`

### Uruchomienie programu
Program możemy uruchomić przez wykonanie pliku tasker.py. Dostępne polecenia to:
* `exit` - wyjście z programu, 
* `done <id>` - oznaczenie zadania jako zrobione,
* `undone <id>` - oznaczenie zadania jako niezrobione, 
* `add <content>` - dodanie zadania o podanej treści,
* `remove <id>` - usunięcie zadania o podanym ID,
* `save` - zapisuje listę zadań do pliku JSON, 
* `load` - ładuje listę zadań z pliku JSON


Powodzenia!