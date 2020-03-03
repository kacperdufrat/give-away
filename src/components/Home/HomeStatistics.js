import React from "react";
import "../../scss/HomeStatistics.scss";

const HomeStatistics = () => {
    return (
        <section className="statistics-container">
            <div>
                <h2 className="statistics-title">10</h2>
                <h3 className="statistics-info">oddanych worków</h3>
                <p className="statistics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <h2 className="statistics-title">5</h2>
                <h3 className="statistics-info">wspartych organizacji</h3>
                <p className="statistics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <h2 className="statistics-title">7</h2>
                <h3 className="statistics-info">zorganizowanych zbiórek</h3>
                <p className="statistics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>
    )
}

export default HomeStatistics;