// <--------------------- Starter Page ------------------->

import Arancinni from "../../assets/StarterArancini.jpg";
import BruschettaalPomodoro from "../../assets/StarterBruschettaalPomodoro.jpg";
import CalamariFritti from "../../assets/StarterCalamariFritti.jpg";
import CarpacciodiManzo from "../../assets/StarterCarpacciodiManzo.jpg";
import ChickenBruschetta from "../../assets/StarterChickenBruschetta.jpg";
import FocacciaBread from "../../assets/StarterFocacciaBread.jpg";
import FunghiRipieni from "../../assets/StarterFunghiRipieni.jpg";
import GarlicBread from "../../assets/StarterGarlicBread.jpg";
import MinestroneSoup from "../../assets/StarterMinestroneSoup.jpg";
import MozzarellaSticks from "../../assets/StarterMozzarellaSticks.jpg";
import ProsciuttoeMelon from "../../assets/StarterProsciuttoeMelon.jpg";
import ShrimpScampi from "../../assets/StarterShrimpScampi.jpg";
import TomatoBasilSoup from "../../assets/StarterTomatoBasilSoup.jpg";
import VerdureGrigliate from "../../assets/StarterVerdureGrigliate.jpg";
import PolentaFritta from "../../assets/StarterPolentaFritta.jpg";
import ZucchiniFritti from "../../assets/StarterZucchiniFritti.jpg";
import RicottaconMiele from "../../assets/StarterRicottaconMiele.jpg";
import VitelloTonnato from "../../assets/StarterVitelloTonnato.jpg";


export const VegetarianStarters = [
    { imag: BruschettaalPomodoro, name: "Bruschetta al Pomodoro", price: "220"},
    { imag: GarlicBread, name: "Garlic Bread", price: "180" },
    { imag: VerdureGrigliate, name: "Verdure Grigliate", price: "260" },
    { imag: FunghiRipieni, name: "Funghi Ripieni", price: "380" },
    { imag: PolentaFritta, name: "Polenta Fritta", price: "260" },
    { imag: ZucchiniFritti, name: "Zucchini Fritti", price: "320" },
  ];

export  const NonVegetarianStarters = [
    { imag: ProsciuttoeMelon, name: "Prosciutto e Melon", price: "350" },
    { imag: CalamariFritti, name: "Calamari Fritti", price: "420" },
    { imag: ShrimpScampi, name: "Shrimp Scampi", price: "480" },
    { imag: CarpacciodiManzo, name: "Carpaccio di Manzo", price: "520" },
    { imag: ChickenBruschetta, name: "Chicken Bruschetta", price: "320" },
    { imag: VitelloTonnato, name: "Vitello Tonnato", price: "450" },
  ];

 export const CheeseBreads = [
    { imag: FocacciaBread, name: "Focaccia Bread", price: "200" },
    { imag: MozzarellaSticks, name: "Mozzarella Sticks", price: "250" },
    { imag: RicottaconMiele, name: "Ricotta con Miele", price: "300" },
  ];

 export const HotItalianStarters = [
    { imag: Arancinni, name: "Arancinni", price: " 300" },
    { imag: MinestroneSoup, name: "Minestrone Soup", price: "220" },
    { imag: TomatoBasilSoup, name: "Tomato Basil Soup", price: "210" },
  ];



  // <------------------------ Lunch and Dinner Page --------------------->

import Bistecca from "../../assets/Bistecca.jpg";
import CaesarSalad from "../../assets/CaesarSalad.jpg";
import CapreseSalad from "../../assets/CapreseSalad.jpg";
import ChickenBBQPizza from "../../assets/ChickenBBQPizza.jpg";
import ChickenMarsala from "../../assets/ChickenMarsala.jpg";
import ChickenParmesan from "../../assets/ChickenParmesan.jpg";
import ChickenPiccata from "../../assets/ChickenPiccata.jpg";
import FettuccineAlfredo from "../../assets/FettuccineAlfredo.jpg";
import FourCheesePizza from "../../assets/FourCheesePizza.jpg";
import FunghiPizza from "../../assets/FunghiPizza.jpg";
import GnocchialPesto from "../../assets/GnocchialPesto.jpg";
import GreekSalad from "../../assets/GreekSalad.jpg";
import MargheritaPizza from "../../assets/MargheritaPizza.jpg";
import MushroomRisotto from "../../assets/MushroomRisotto.jpg";
import OssoBuco from "../../assets/OssoBuco.jpg";
import PenneAlfredo from "../../assets/PenneAlfredo.jpg";
import PenneArrabbiata from "../../assets/PenneArrabbiata.jpg";
import PepperoniPizza from "../../assets/PepperoniPizza.jpg";
import RavioliRicottaeSpinaci from "../../assets/RavioliRicottaeSpinaci.jpg";
import RisottoallaMilanese from "../../assets/RisottoallaMilanese.jpg";
import Saltimbocca from "../../assets/Saltimbocca.jpg";
import SeafoodRisotto from "../../assets/SeafoodRisotto.jpg";
import SpaghettiCarbonara from "../../assets/SpaghettiCarbonara.jpg";
import VeggiePizza from "../../assets/VeggiePizza.jpg";

export const PastaDishes = [
  { imag: SpaghettiCarbonara, name: "Spaghetti Carbonara", price: "480" },
  { imag: PenneAlfredo, name: "Penne Alfredo", price: "420" },
  { imag: PenneArrabbiata, name: "Penne Arrabbiata", price: "400" },
  { imag: GnocchialPesto, name: "Gnocchi al Pesto", price: "520" },
  { imag: FettuccineAlfredo, name: "Fettuccine Alfredo", price: "460" },
  { imag: RavioliRicottaeSpinaci, name: "Ravioli Ricotta e Spinaci", price: "580"},
];

export const PizzaDishes = [
  { imag: MargheritaPizza, name: "Margherita Pizza", price: "420" },
  { imag: PepperoniPizza, name: "Pepperoni Pizza", price: "480" },
  { imag: FourCheesePizza, name: "Four Cheese Pizza", price: "520" },
  { imag: VeggiePizza, name: "Veggie Pizza", price: "460" },
  { imag: ChickenBBQPizza, name: "Chicken BBQ Pizza", price: "520" },
  { imag: FunghiPizza, name: "Funghi Pizza", price: "480" },
];

export const SaladLightMeals = [
  { imag: CaesarSalad, name: "Caesar Salad", price: "350" },
  { imag: GreekSalad, name: "Greek Salad (Italian style)", price: "380" },
  { imag: CapreseSalad, name: "Caprese Salad", price: "420" },
];

export const ItalianMainCourses = [
  { imag: ChickenPiccata, name: "Chicken Piccata", price: "620" },
  { imag: ChickenMarsala, name: "Chicken Marsala", price: "580" },
  { imag: ChickenParmesan, name: "Chicken Parmesan", price: "560" },
  { imag: OssoBuco, name: "Osso Buco", price: "780" },
  { imag: Saltimbocca, name: "Saltimbocca", price: "730" },
  { imag: Bistecca, name: "Bistecca", price: "850" },
];

export const RiceOtherDishes = [
  { imag: RisottoallaMilanese, name: "Risotto alla Milanese", price: "530" },
  { imag: MushroomRisotto, name: "Mushroom Risotto", price: "450" },
  { imag: SeafoodRisotto, name: "Seafood Risotto", price: "600" },
];



// <----------------Dessert ---------------->

import Cannoli from "../../assets/DessertCannoli.jpg";
import CassataSicilian from "../../assets/DessertCassataSicilian.jpg";
import Gelato from "../../assets/DessertGelato.jpg";
import PannaCotta from "../../assets/DessertPannaCotta.jpg";
import Tiramisu from "../../assets/DessertTiramisu.jpg";
import Zabaglione from "../../assets/DessertZabaglione.jpg";
import Panettone from "../../assets/DessertPanettone.jpg";
import TortadellaNonna from "../../assets/TortadellaNonna.jpg";
import Bomboloni from "../../assets/DessertBomboloni.jpg";
import Biscotti from "../../assets/DessertBiscotti.jpg";
import Cornetto from "../../assets/DessertCornetto.jpg";
import WatermelonGranita from "../../assets/DessertWatermelonGranita.jpg";
import Semifreddo from "../../assets/DessertSemifreddo.jpg";
import TortaCaprese from "../../assets/DessertTortaCaprese.jpg";
import TartufodiPizzo from "../../assets/DessertTartufodiPizzo.jpg";


 export const ClassicItalianDesserts = [
    { imag: Tiramisu, name: "Tiramisu", price: "360" },
    { imag: PannaCotta, name: "Panna Cotta", price: "300" },
    { imag: Gelato, name: "Gelato", price: "260" },
    { imag: Cannoli, name: "Cannoli", price: "380" },
    { imag: Zabaglione, name: "Zabaglione", price: "400" },
    { imag: TortaCaprese, name: "Torta Caprese", price: "300" },
  ];

 export const CakesPastries = [
    { imag: CassataSicilian, name: "Cassata Sicilian", price: "450" },
    { imag: Panettone, name: "Panettone", price: "540" },
    { imag: TortadellaNonna, name: "Torta della Nonna", price: "520" },
  ];

 export const RegionalItalianDesserts = [
    { imag: Bomboloni, name: "Bomboloni", price: "240" },
    { imag: Biscotti, name: "Biscotti", price: "240" },
    { imag: Cornetto, name: "Cornetto", price: "200" },
  ];

 export const ColdLightDesserts = [
    { imag: WatermelonGranita, name: "Watermelon Granita", price: " 200" },
    { imag: Semifreddo, name: "Semifreddo", price: "290" },
    { imag: TartufodiPizzo, name: "Tartufo di Pizzo", price: "320" },
  ];

// <------------------------Soft Drinks---------------------->

import Amaretto from "../../assets/DrinkAmaretto.jpg";
import AperolSpritz from "../../assets/DrinkAperolSpritz.jpg";
import Aranciata from "../../assets/DrinkAranciata.jpg";
import AranciataRossa from "../../assets/DrinkAranciataRossa.jpg";
import Barolo from "../../assets/DrinkBarolo.jpg";
import Bellini from "../../assets/DrinkBellini.jpg";
import BrunellodiMontalcino from "../../assets/DrinkBrunellodiMontalcino.jpg";
import CampariSpritz from "../../assets/DrinkCampariSpritz.png";
import Chinotto from "../../assets/DrinkChinotto.jpg";
import HugoSpritz from "../../assets/DrinkHugoSpritz.jpg";
import Limonata from "../../assets/DrinkLimonata.jpg";
import Mirto from "../../assets/DrinkMirto.jpg";
import MontepulcianodAbruzzo from "../../assets/DrinkMontepulcianodAbruzzo.jpg";
import Negroni from "../../assets/DrinkNegroni.jpg";

import PinotGrigio from "../../assets/DrinkPinotGrigio.jpg";
import Rossini from "../../assets/DrinkRossini.jpg";
import Sambuca from "../../assets/DrinkSambuca.jpg";
import SanbittèrOrange from "../../assets/DrinkSanbittèrOrange.jpg";
import Soave from "../../assets/DrinkSoave.jpg";
import Spuma from "../../assets/DrinkSpuma.jpg";
import Verdicchio from "../../assets/DrinkVerdicchio.jpg";

export const NonAlcoholic = [
    { imag: Chinotto, name: "Chinotto", price: "180"},
    { imag: SanbittèrOrange, name: "Sanbittèr Orange", price: "220" },
    { imag: Aranciata, name: "Aranciata", price: "180" },
    { imag: AranciataRossa, name: "Aranciata Rossa", price: "200" },
    { imag: Limonata, name: "Limonata", price: "180" },
    { imag: Spuma, name: "Spuma", price: "180" },
  ];

export  const AlcoholicAperitivi = [
    { imag: AperolSpritz, name: "Aperol Spritz", price: "480" },
    { imag: CampariSpritz, name: "Campari Spritz", price: "580" },
    { imag: Negroni, name: "Negroni", price: "620" },
    { imag: Bellini, name: "Bellini", price: "600" },
    { imag: Rossini, name: "Rossini", price: "520" },
    { imag: HugoSpritz, name: "Hugo Spritz", price: "520" },  
  ];

 export const Wines = [
    { imag: Barolo, name: "Barolo", price: "800" },
    { imag: BrunellodiMontalcino, name: "Brunello di Montalcino", price: "900" },
    { imag: MontepulcianodAbruzzo, name: "Montepulciano d'Abruzzo", price: "720" },
    { imag: PinotGrigio, name: "Pinot Grigio", price: "550" },
    { imag: Verdicchio, name: "Verdicchio", price: "520" },
    { imag: Soave, name: "Soave", price: "520" },
  ];

 export const ItalianDigestivi = [
  { imag: Amaretto, name: "Minestrone Soup", price: "420" },
    { imag: Mirto, name: "Mirto", price: " 500" },
    { imag: Sambuca, name: "Tomato Basil Soup", price: "520" },
  ];


// <------------------ Coffee & Tea --------------->

import Affogato from "../../assets/CoffeeAffogato.jpg";
import Americano from "../../assets/CoffeeAmericano.jpg";
import CaffèCorretto from "../../assets/CoffeeCaffèCorretto.jpg";
import CaffèconPanna from "../../assets/CoffeeCaffèconPanna.jpg";
import Cappuccino from "../../assets/CoffeeCappuccino.jpg";
import CaramelMacchiato from "../../assets/CoffeeCaramelMacchiato.jpg";
import Doppio from "../../assets/CoffeeDoppio.jpg";
import Espresso from "../../assets/CoffeeEspresso.jpg";
import Mocha from "../../assets/CoffeeMocha.jpg";
import TèaLimone from "../../assets/TeaTèaLimone.jpg";
import TèallaMenta from "../../assets/TeaTèallaMenta.jpg";
import TèVerde from "../../assets/TeaTèVerde.jpg";

export const ClassicHotTea = [
    { imag: TèVerde, name: "Tè Verde", price: "180"},
    { imag: TèallaMenta, name: "Tè alla Menta", price: "160" },
    { imag: TèaLimone, name: "Tèa Limone", price: "170" },
  ];

 export const ClassicCoffees = [
    { imag: Espresso, name: "Espresso", price: "140" },
    { imag: Doppio, name: "Doppio", price: "180" },
    { imag: Americano, name: "Americano", price: "200" },
  ];

 export const MilkBasedCoffees = [
    { imag: Cappuccino, name: "Cappuccino", price: "220" },
    { imag: CaramelMacchiato, name: "Caramel Macchiato", price: "260" },
     { imag: CaffèconPanna, name: "Caffè con Panna", price: "280" },
  ];

 export const SpecialItalianCoffees = [
    { imag: Mocha, name: "Mocha", price: " 260" },
    { imag: Affogato, name: "Affogato", price: "320" },
    { imag: CaffèCorretto, name: "Caffè Corretto", price: "299" },
  ];


