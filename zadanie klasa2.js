function stworzUczen(imie, klasa, pesel) {
    let prywatnyPesel = pesel; // to jest prywatne

    return {
        imie: imie,
        klasa: klasa,

        pokazDane() {
            console.log(`${this.imie} z klasy ${this.klasa}`);
        },

        pokazPesel() {
            console.log(`PESEL: ${prywatnyPesel}`);
        },

        ustawPesel(nowyPesel) {
            prywatnyPesel = nowyPesel;
        }
    };
}

const uczen = stworzUczen("oskar", "4tia", "12345678901");

uczen.pokazDane();    // oskar z klasy 4tia
uczen.pokazPesel();   // PESEL: 1234567890