package com.example.rekrutacja;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView textView;
    private Button button;
    private EditText editText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textView = findViewById(R.id.textView);
        button = findViewById(R.id.button);
        editText = findViewById(R.id.editText);

        button.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                onButtonClick();
            }
        });
    }

    /*1.TODO Pierwszym z zadań jest implementacja metody, w taki sposób, aby
          kliknięcie przycisku powodowało otwarcie activity SeciondActivity, gdy
          wpisanym przez użytkownika tekstem jest 'AKAI'.
          Kolejne zadanie znajdziesz w pliku activity_main.xml.

          Podpowiedź poczytaj o Intent.
   */
    private void onButtonClick() {
        textView.setText(editText.getText().toString());
    }

    /*2.b TODO Druga część tego zadania polega na implementacji metody, która zmienia
            wszyskie literzy we wpisanym przez użytkownika tekscie na wielkie i
            wstawienie przerobionego tekstu do textView. Nie zapomnij dodać do metody
            OnCreate() OnClickListenera słuchającego na kliknięcia wstawionego przez Ciebie
            przycisku.
            Kolejne zadanie czeka na Ciebie w pliku SecondActiviy
     */
    private void onYourButtonClick() {

    }
}
