import styles from './Section.style';

const Section = (props) => {
    return (
        <styles.SectionWrapper className={props.className}>
            { !props.loader.loading ? props.children : <styles.LoadingIcon />}
        </styles.SectionWrapper>
    );
};

export default Section;