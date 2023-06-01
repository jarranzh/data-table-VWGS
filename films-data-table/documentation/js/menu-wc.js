'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">films-data-table documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-9fbd9cce779f1c72a5c9a5e5b55fbce898e0d7e89d9842263c0bfb66932d7848fbdeb92597a7e4d9f35f7894fd87cc93b6223bfd93abc44eb9c4bb8011971103"' : 'data-bs-target="#xs-components-links-module-AppModule-9fbd9cce779f1c72a5c9a5e5b55fbce898e0d7e89d9842263c0bfb66932d7848fbdeb92597a7e4d9f35f7894fd87cc93b6223bfd93abc44eb9c4bb8011971103"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9fbd9cce779f1c72a5c9a5e5b55fbce898e0d7e89d9842263c0bfb66932d7848fbdeb92597a7e4d9f35f7894fd87cc93b6223bfd93abc44eb9c4bb8011971103"' :
                                            'id="xs-components-links-module-AppModule-9fbd9cce779f1c72a5c9a5e5b55fbce898e0d7e89d9842263c0bfb66932d7848fbdeb92597a7e4d9f35f7894fd87cc93b6223bfd93abc44eb9c4bb8011971103"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilmDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilmDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilmEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilmEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilmsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilmsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DeleteFilmAction.html" data-type="entity-link" >DeleteFilmAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFilmDetailsAction.html" data-type="entity-link" >GetFilmDetailsAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFilmsListAction.html" data-type="entity-link" >GetFilmsListAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetGenresListAction.html" data-type="entity-link" >GetGenresListAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/SaveFilmAction.html" data-type="entity-link" >SaveFilmAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFilmAction.html" data-type="entity-link" >UpdateFilmAction</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FilmsService.html" data-type="entity-link" >FilmsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilmState.html" data-type="entity-link" >FilmState</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BelongsToCollection.html" data-type="entity-link" >BelongsToCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Film.html" data-type="entity-link" >Film</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilmDetailsResponse.html" data-type="entity-link" >FilmDetailsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilmDetailsStateModel.html" data-type="entity-link" >FilmDetailsStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilmResponse.html" data-type="entity-link" >FilmResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilmsStateModel.html" data-type="entity-link" >FilmsStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilmStateModel.html" data-type="entity-link" >FilmStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Genre.html" data-type="entity-link" >Genre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenresResponse.html" data-type="entity-link" >GenresResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenresStateModel.html" data-type="entity-link" >GenresStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductionCompany.html" data-type="entity-link" >ProductionCompany</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductionCountry.html" data-type="entity-link" >ProductionCountry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpokenLanguage.html" data-type="entity-link" >SpokenLanguage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});