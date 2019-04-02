import React, {Component} from 'react';
import './style.css'

class About extends Component {
    render() {
        return (
            <div id="about" className='container-fluent bg-dark backgroundAbout'>
                <div className="row justify-content-between">
                    <div className="col-10 mx-auto col-md-4 my-5 mx-5">
                        <div className="divStudies">
                            <h1>Studia</h1>
                            <p>Jestem studenetem III roku informatyki na Państwowej Wyższej Szkole Zawodowej w
                                Tarnowie. Na uczelni głownie zajmujemy się pisaniem w języku Java (Spring), a od tego semestru Angular. </p>
                            <p>Zdobyta wiedza uczelniana pozwala mi szybko poznawać nowe języki programowania oraz wyszukiwać  i rozwiązywać różnego rodzaju problemy czekające na osoby piszące kod </p>
                        </div>
                    </div>

                    <div className="col-10 mx-auto col-md-5 my-5 mx-5">
                        <div className="divInterests">
                            <h1>Zainteresowania</h1>
                            <p>Moją pasją jest jazda na rowerze. W każdej wolnej chwili wybieram się na różnego rodzaju
                                trasy rowerowe. W poprzednim sezonie przejechałem prawie 2000km.
                            </p>
                            <p>Od jakiegoś czasu intensywnie uczę się Reacta i próbuje tworzyć coraz lepsze strony. Zainteresowałem się tą biblioteką po używaniu React Native, pomyślałem - dlaczego nie spróbować stworzyć swojej własnej strony internetowej.</p>
                        </div>
                    </div>
                </div>
                    <div className="row justify-content-center">
                    <div className="col-10 mx-auto col-md-6 my-5 mx-5">
                        <div className="divStudies">
                            <h1>Inne</h1>
                            <p>Aktualnie poszukuję stażu letniego ( lipiec-wrzesień ). Mieszkam w okolicach Tarnowa, jednak na okres umowy planuję przeprowadzić się do miasta w którym będę pracował. Z chęcią po odbyciu stażu będę chciał kontynuować pracę w przypadku obustronnego zadowolenia ze wspólpracy.</p>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}
export default About;
