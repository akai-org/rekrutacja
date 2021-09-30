from .json.Importer import Importer
from .json.Exporter import Exporter


class App:
    is_active = True
    current_command = None
    command_args = []
    output_data = None
    tasks = []

    def __init__(self):
        self.tasks = []
        self.load_json_data()
        self.is_active = True

    def print_data(self):
        if self.tasks:
            print("ID \t IS_DONE \t NAME")
            for index, task in enumerate(self.tasks):
                print(str(index) + "\t" + str(task['done']) + "\t\t" + task['content'])

    def get_input(self):
        given_input = input()
        given_arguments = given_input.split()
        self.current_command = given_arguments[0]
        self.command_args = given_arguments[1:]

    def execute_command(self):
        if self.current_command == "done":
            self.tasks[int(self.command_args[0])]['done'] = True

        if self.current_command == "undone":
            self.tasks[int(self.command_args[0])]['done'] = False

        if self.current_command == "remove":
            del self.tasks[int(self.command_args[0])]

        if self.current_command == "add":
            self.add_task()

        if self.current_command == "load":
            self.load_json_data()

        if self.current_command == "save":
            self.save_json_data()

        if self.current_command == "exit":
            self.is_active = False

    def load_json_data(self):
        print("Ładuję dane...")
        importer = Importer()
        importer.read_tasks()
        self.tasks = importer.get_tasks()
        print("Dane załadowane")

    def save_json_data(self):
        print("Zapisuję dane...")
        exporter = Exporter()
        exporter.save_tasks(self.tasks)
        print("Dane zapisane")

    def add_task(self):
        separator = " "
        self.tasks.append({
            "content": separator.join(self.command_args),
            "done": False,
        })
