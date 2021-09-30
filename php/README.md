# Instalacja

## Windows

* Pobierz PHP (26.09.2019 - Aktualna wersja to 7.3.9, używamy x64 Thread Safe)
  [PHP Windows Downloads](https://windows.php.net/download/)
* Wypakuj w wybrane przez ciebie miejsce. Sugerujemy ```C:\bin```.
* Dodaj ścieżkę z wypakowaną zawartością do zmiennej środowiskowej ```PATH``` [Instrukcja](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)
* Zainstaluj [Composer](https://getcomposer.org/download/)
* Przy pomocy konsoli wykonaj komende ```composer install``` w folderze z zadaniem, jeżeli zadanie tego wymaga
  (zmień bieżący folder za pomocą komendy ```cd```)

## Linux - Debianopochodne

* ```sudo apt install php```
* Zainstaluj [Composer](https://getcomposer.org/download/)
* Przy pomocy konsoli wykonaj komendę ```composer install``` w folderze z zadaniem, jeżeli zadanie tego wymaga
  (zmień bieżący folder za pomocą komendy ```cd```)

## Mac OS

* Zainstaluj [Homebrew](https://brew.sh/index_pl) (darmowy otwartoźródłowy menadżer pakietów dla macOS)
* ```brew install php```
* Zainstaluj [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
* Przy pomocy konsoli wykonaj komende ```composer install``` w folderze z zadaniem, jeżeli zadanie tego wymaga (zmień bieżący folder za pomocą komendy ```cd```)

# Uruchomienie serwera w aktualnym folderze

```php -S localhost:8000```

Stronę można już odwiedzić w przeglądarce pod adresem `http://localhost:8000`