# coding=utf-8
from src.App import App


print("Rozpoczynanie pracy aplikacji... \n")
application = App()

while application.is_active:
    application.print_data()
    application.get_input()
    application.execute_command()
del application

print("Do zobaczenia! \n")
