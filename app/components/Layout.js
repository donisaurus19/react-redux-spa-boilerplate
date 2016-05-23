import React, { PropTypes } from "react";

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

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
