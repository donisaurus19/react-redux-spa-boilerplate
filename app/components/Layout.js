import React from "react";

const Layout = ({ children }) => (
    <div id="layout">
        <header>
            <h1>Boilerplate</h1>
        </header>
        <main className="container">
            {children}
        </main>
        <footer>
            <h6>
                <a href="https://github.com/phitranphitranphitran"
                    target="_blank">
                    made by phitranphitranphitran
                </a>
            </h6>
        </footer>
    </div>
);

export default Layout;
