package com.example.kotlin_android_jetpack_conmpose_new

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.example.kotlin_android_jetpack_conmpose_new.ui.theme.KotlinandroidjetpackconmposenewTheme

class SecondActivity: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            KotlinandroidjetpackconmposenewTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    var alpha by remember { mutableStateOf(1f) }
                    Column(
                        verticalArrangement = Arrangement.Center,
                        horizontalAlignment = Alignment.CenterHorizontally,
                        modifier = Modifier
                            .fillMaxSize()
                    ) {
                        /*3. TODO Poniżej znajduje się kod, który obsługuje kliknięcia dwóch przycisków,
                               jednak na wyświetlającym się widoku nie są one podpisane. Twoim
                               zadaniem jest wywnioskowanie co kliknięcie na poszczególny przycisk zmienia
                               i adekwatne podpisanie tych przycisków.
                               Kolejne zadanie znajduje się poniżej.

                               Podpisanie - chodzi o dodanie composabla Text.
                        */
                        Image(
                            painter = painterResource(id = R.drawable.ic_baseline_android_24),
                            contentDescription = "",
                            alpha = alpha,
                            modifier = Modifier.size(200.dp)
                        )

                        Spacer(modifier = Modifier.height(16.dp))

                        Button(onClick = { alpha = 0f}) {

                        }
                        Spacer(modifier = Modifier.height(16.dp))

                        Button(onClick = { alpha = 1f }) {

                        }
                        Spacer(modifier = Modifier.height(16.dp))

                        /*4. TODO W tym activity znajduje się jeszcze jeden przycisk niestety kliknięcie
                                  na niego nic nie robi. Twoim zadaniem jest implementacja kliknięcia w taki sposób,
                                  aby jak obrazek jest widoczy przycisk chował obrazek, w przeciwnym wypadku,
                                  gdy obrazek jest schowany po kliknięciu obrazek ma się pojawić. Dodatkowo należy
                                  przerobić onClicki poprzednich obrazków tak, aby np. Klikając na przycisk do chowania
                                  obrazka, chował on obrazek, a w przypadku kliknięcia, gdy obrazek jest niewidoczny
                                  wyświetlał informację o tym, obrazek jest już niewidoczny (np. za pomocą Toast lub
                                  SnackBar lub AlertDialog). Podobnie dla drugiego przycisku odpowiedzialnego za
                                  wyświetlanie obrazka. Jednocześnie zmień widok tego przycisku tak, aby nie wszystkie
                                  litery, były pisane wielką literą.
                                  Kolejne zadanie znajduje się poniżej.
                         */

                        /*5. TODO Ostatnie zadanie polega na dodaniu przycisku pozwalającego na przejście spowrotem
                                  do MainActivity. Tutaj jednak nie chcemy, abyś otwierał nowe activity, tylko po
                                  kliknięcku przycisku zamknął aktualne, ponieważ pod aktualnie wyświetlanym activity
                                  jest już instancja MainActivity.

                         */

                        /* TODO Zadanie Dodatkowe. Tutaj masz zupełną dowolność, jeśli masz jeszcze czas
                                i ochotę zrób coś kreatywnego, ale jednocześnie prostego,
                                pamiętaj jednak, aby nie naruszyć tym kodu,
                                który realizuje poprzednich zadań. Nie jest to zadanie obowiązkowe.
                      */
                        Button(onClick = {  }) {

                        }

                    }
                }
            }
        }
    }
}