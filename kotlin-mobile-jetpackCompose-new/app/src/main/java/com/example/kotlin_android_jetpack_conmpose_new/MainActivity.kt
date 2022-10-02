package com.example.kotlin_android_jetpack_conmpose_new

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.kotlin_android_jetpack_conmpose_new.ui.theme.KotlinandroidjetpackconmposenewTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            KotlinandroidjetpackconmposenewTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    MainScreen()
                }
            }
        }
    }
}

@Composable
fun MainScreen() {
    Column(
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier
            .fillMaxSize()
    ) {
        /*1 a. TODO Witaj Androidowy Entuzjasto, w zadaniach, które na Ciebie czekają
                    zmierzysz się sie kilkoma mechanizmami jakie oferuje Developerom framework Android
                    oraz bardzo dynamicznie rozwijana biblioteka Jetpack Compose
                    jest to nowa alternatywa tworzenia natywnych (i nie tylko! ale o tym na kole) aplikacji
                    zachęcam do zaznajomienia się z treścią zadań a w razie problemów...
                    przeglądania dokumentacji, ale jest to jedna tych bardziej przejrzystych dokumentacji
                    nie przejmuj się jeśli któreś z zadań sprawi Ci większy kłopot, feedback który dostaniesz na pewno pomoże Ci
                    rozwiać wszelkie wątpliwości i zoruzmieć działanie tych komponentów
                    A na kole na pewno będziesz w stanie nauczyć się znacznie znacznie więcej, więc do dzieła!
                    Twoim pierwszym zadaniem jest utworzenie zmiennej, która będzie zachowywana w aplikacji pomimo
                    odświeżania się ekranu aplikacji
                    Zmienna powinna na początku być pustym Stringiem

                    Podpowiedź:
                    Trochę o stanie plus 3 sposoby na deklarowanie zmiennych
                    https://developer.android.com/jetpack/compose/state
        */
        Text(text = "Rekrutacja")
        Spacer(modifier = Modifier.height(4.dp))
        TextField(
            value = "",
            onValueChange = { /*todo 1.b przypisz tu swojej zmiennej wartość
                                                 it czyli lokalnej zmiennej tekstowej komponentu
                                                            przypisz swoją zmienną do value
                                                            */
            },
            maxLines = 1
        )
        Spacer(modifier = Modifier.height(4.dp))
        Button(onClick = { } ) {
            Text(text = "Przycisk")
        }
    }
}

/*  2. TODO Drugim z zadań jest implementacja metody, w taki sposób, aby
            kliknięcie przycisku powodowało otwarcie activity SecondActivity, gdy
            wpisanym przez użytkownika tekstem jest 'AKAI'.
            Kolejne zadanie znajdziesz poniżej.
            Podpowiedź poczytaj o Intent
*/

/*  3.a TODO Kolejnym zadaniem jest wstawienie nowego przycisku
             do tego widoku. Przycisk należy wstawić tak, aby
             wyświetlał się pomiędzy TextFieldem, a przyciskiem o z napisem "Przycisk",
             Dodatkowo na przycisku ma wyświetlać się napis 'Kliknij mnie'.
             Kolejny podpunkt znajdziesz w poniżej :)
             Aby zachować spójność i estetykę widoku dla użytkowników możesz dodać również
             odstęp między przyciskiem a innymi elementami
             możesz użyć gotowych componentów toolkitu Jetpack Compose
             lub parametrów obiektu modifier
             https://developer.android.com/jetpack/compose/modifiers
*/

/*  3.b TODO Druga część tego zadania polega na implementacji metody, która zmienia
             wszyskie litery we wpisanym przez użytkownika tekscie na wielkie i
             wstawienie przerobionego tekstu do TextFielda. Nie zapomnij dodać tej metody
             do utworzonego przez Ciebie przycisku
             Kolejne zadanie czeka na Ciebie w pliku SecondActivity
*/

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    KotlinandroidjetpackconmposenewTheme {
        MainScreen()
    }
}