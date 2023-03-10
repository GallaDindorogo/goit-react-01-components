import PropTypes from 'prop-types';

import styles from "./section.module.css";

    
export const Section = ({ title, children }) => {
    return (
        <section className={title ? styles.superSection : styles.baseSection}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
        </section>
    )

}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

