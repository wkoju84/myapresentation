import { useState } from "react";


function Sidebar() {

    

    return (
        <>
            {/* -- */}

            {/* 1. Esta sessão deverá ser apresentada
            sempre que houver o click no botão MENU: */}

            <div>
                
                
                <ul className="menu-list">
                    <li className="list-menu"><a className="c-nav__item" href="#sobre-mim"></a>William</li>
                    <li className="list-menu"><a className="c-nav__item" href="#sobre-mim">sobre mim</a></li>
                    <li className="list-menu"><a className="c-nav__item" href="#sobre-mim">contatos</a></li>
                </ul>
                <button className="l-sidebar__btn" type="button">Menu</button>
            </div>

            

            {/* -- */}
            <div className="l-sidebar">


                <h1 className="l-logo">William</h1>
                <nav className="c-sidebar">
                    <a className="c-nav__item" href="#sobre-mim">sobre mim</a>
                    <a className="c-nav__item" href="#contatos">contatos</a>
                </nav>


            </div>

            {/* -- */}

            {/* 1.1. Quando houver o click do usuário,
                a sidebar deverá ser apresentada. */}

            <div className="l-sidebar">
                ...
            </div>

            {/* -- */}

            {/* <button className="l-sidebar__btn" type="button">Menu</button> */}

            {/* --

                2. O usuário poderá usar o teclado para abrir ou fechar
                a sidebar. No caso, as tecla Space.

                3. O usuário poderá usar o mouse para abrir ou fechar
                a sidebar. No caso, um duplo click em qualquer local
                do site irá abrir ou fechar a sidebar.

                -- */}

        </>
    )
}
export default Sidebar;