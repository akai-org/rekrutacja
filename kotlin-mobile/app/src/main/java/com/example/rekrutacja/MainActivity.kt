package com.example.rekrutacja


import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button.setOnClickListener {
            onButtonClick()

        }
    }

    /*1.TODO Pierwszym z zadań jest implementacja metody, w taki sposób, aby
            kliknięcie przycisku powodowało otwarcie activity SeciondActivity, gdy
            wpisanym przez użytkownika tekstem jest 'AKAI'.
            Kolejne zadanie znajdziesz w pliku activity_main.xml.

            Podpowiedź poczytaj o Intent.
     */
    private fun onButtonClick() {
        textView.text = editText.text.toString()
    }

    /*2.b TODO Druga część tego zadania polega na implementacji metody, która zmienia
            wszyskie literzy we wpisanym przez użytkownika tekscie na wielkie i
            wstawienie przerobionego tekstu do textView. Nie zapomnij dodać do metody
            OnCreate() OnClickListenera słuchającego na kliknięcia wstawionego przez Ciebie
            przycisku.
            Kolejne zadanie czeka na Ciebie w pliku SecondActiviy
     */
    private fun onYourButtonClick() {

    }
}
