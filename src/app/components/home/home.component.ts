import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data:any[] = [
    {
      "name": "Pastor-americano",
      "category": "perro",
      "description": "El pastor australiano miniatura es un perro muy cariñoso, activo e inteligente, que adora pasar tiempo con sus cuidadores, así como jugando al aire libre o haciendo ejercicio.",
      "imageUrl": "file:///C:/Users/Personal/Downloads/pastor-americano.webp"
    },
    {
      "name": "Clumber-spaniel",
      "category": "perro",
      "description": "Son unos perros corpulentos y pesados con una gran osamenta y un tamaño mediano, siendo más largos que altos. Tienen un carácter excepcional y su entrenamiento y educación son sencillos debido a su inteligencia y buena actitud.",
      "imageUrl": "file:///C:/Users/Personal/Downloads/cumbler-spaniel.webp"
    },
    {
      "name": "Shih-tzu",
      "category": "perro",
      "description": "Estos tipos de perros son muy cariñosos e inteligentes y necesitan una atención constante por parte de sus dueños, así que no están recomendados para vivir fuera de las casas o para dejarlos mucho tiempo solos.",
      "imageUrl": "../../../assets/images/shih-tzu.jpg"
    },
    {
      "name": "Shiba-Inu",
      "category": "perro",
      "description": "Se trata de una raza, por lo general, muy afectuosa con los dueños y muy adaptable a distintos ambientes y familias. Algunas fuentes aseguran que es originario de Corea o el Sur de China, aunque popularmente se le atribuye origen Japonés..",
      "imageUrl": "file:///C:/Users/Personal/Downloads/shiba-inu.webp"
    },
    {
      "name": "Bichón-frisé",
      "category": "perro",
      "description": "En pocas palabras, se trata de la raza de perro perfecta para aquellas personas que no hayan adoptado antes o busquen un can fácil de adiestrar, a la par que juguetón y divertido. Convivir con un bichón frisé es realmente fácil, puesto que es un perro que se adapta perfectamente a cualquier persona.",
      "imageUrl": "../../../assets/imagesFood/colombia-bandeja-paisa.jpg"
    },
    {
      "name": "Perro-pomsky",
      "category": "perro",
      "description": "Precisamente por su apariencia, el perro pomsky ha ganado mucha popularidad en los últimos años. Por ello, proseguimos a detallar las principales características de esta nueva y maravillosa raza canina que ha llegado pisando fuerte y promete ganarse muchos corazones con esa ternura que derrocha allá donde va. .",
      "imageUrl": "../../../assets/images/bichon-frise.jpg"
    },
    {
      "name": "Fold-escocés",
      "category": "gato",
      "description": "Estos simpáticos gatos aparecieron después de una alteración en sus genes que hizo que sus orejas tuvieran una orientación hacia delante, como dobladas, de ahí su nombre 'fold'. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Fold-escoc%C3%A9s.webp"
    },
    {
      "name": "Sphynx",
      "category": "gato",
      "description": "Los sphynx o esfinges no son la única raza de gato que no tiene absolutamente ningún pelo, o que tiene poquísimos, pero sí son los más conocidos. Esto hace que sean ideales para los amantes de los felinos que, por desgracia, son alérgicos a su pelaje. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Sphynx.webp"
    },
    {
      "name": "Maine-Coon",
      "category": "gato",
      "description": "Estos gatos, procedentes del norte de América, son de gran tamaño y tienen unos colores y forma que durante mucho tiempo, y de manera errónea, se ha pensado que eran el resultado de una mezcla con un mapache.",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Maine-Coon.webp"
    },
    {
      "name": "Ragdoll",
      "category": "gato",
      "description": "Esta raza, conocida como Ragdoll en inglés (muñeca de trapo en español), es una de las más conocidas y es recomendada si nunca antes has tenido experiencia con felinos",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Ragdoll.webp"
    },
    {
      "name": "Siamés",
      "category": "gato",
      "description": "Los siameses son una de las razas de gatos más antiguas que se conocen y debe ser precisamente por su larga trayectoria cerca de los humanos por la cual se han convertido en uno de los felinos más cariñosos y amables con sus dueños. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Siam%C3%A9s.webp"
    },
    {
      "name": "Bombay",
      "category": "gato",
      "description": "Las supersticiones los han tachado como que los gatos negros son símbolo de mala suerte, pero lo cierto es que tener un gato Bombay en tu vida es todo un regalo. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/bombay.webp"
    },
    {
      "name": "Blanco-de-Hotot",
      "category": "conejo",
      "description": "Es una de las razas de conejo más bonitas y como características físicas resaltamos sus enormes ojos castaños enmarcados por un círculo negro que destaca sobre su manto de color blanco. Le encanta comer",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Blanco-de-Hotot.webp"
    },
    {
      "name": "Rex",
      "category": "conejo",
      "description": "Por lo general se trata de conejos muy activos que necesitan a una familia que le permita correr por la casa en diferentes momentos del día. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Rex.webp"
    },
    {
      "name": "Cabeza-de-león",
      "category": "conejo",
      "description": "El conejo cabeza de león destaca por ser una muy buena mascota para quienes adoran tener al conejo entre sus brazos largas horas ya que se trata de ejemplares simpáticos y calmados. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Cabeza-de-le%C3%B3n.webp"
    },
    {
      "name": "Belier",
      "category": "conejo",
      "description": "Hablamos de un conejo dócil y tranquilo, especialmente dulce, que te enamorará por su comportamiento delicado dentro del hogar. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Belier.webp"
    },
    {
      "name": "English-Angora",
      "category": "conejo",
      "description": "Se trata de ejemplares, por lo general, muy dóciles y tranquilos aunque a la llegada al hogar se mostrará tímido y reservado. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/English-Angora.webp"
    },
    {
      "name": "Toy-o-enano",
      "category": "conejo",
      "description": "Es más independiente que otros tipos de conejo, y es que el conejo toy es especialmente miedoso y desconfiado con los extraños. Con el tiempo se podrá acostumbrar a ti si te muestras paciente y amistoso. ",
      "imageUrl": "file:///C:/Users/Personal/Downloads/Toy-o-enano.webp"
    },
  ]
}
