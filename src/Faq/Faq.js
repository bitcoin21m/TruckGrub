import React from "react";
import { useContext, useEffect, useState } from "react";
import { tgc } from "../App";
import { APIRouter } from "../Data/Middleware";
import styles from './Faq.style';

const Faq = () => {
    //state
    const [faqs, setFaqs] = useState([]);

    //context
    const { setLoader, loader } = useContext(tgc);

    useEffect(() => {
        APIRouter(setLoader, loader, 'faq').then(res => {
            res.data.forEach((f) => {
                f.closed = true;
            });
            setFaqs(res.data);
        });
    }, []);

    const toggleFaq = (index) => {
        let faqTemp = JSON.parse(JSON.stringify(faqs));
        faqTemp[index].closed = !faqTemp[index].closed;
        setFaqs(faqTemp);
    };

    return (
        <styles.FaqWrapper loader={loader}>
            <styles.FaqTitle>
                FAQ
            </styles.FaqTitle>
            <styles.FaqList>
                {
                    faqs?.map((f, i) => {
                        return (
                            <React.Fragment key={i}>
                            { f.closed ? <styles.FaqTogglePlus onClick={() => toggleFaq(i)} /> : <styles.FaqToggleMinus onClick={() => toggleFaq(i)} /> }
                            <styles.FaqItem
                                closed={f.closed}
                            >
                                {f.question}
                                { !f.closed && <styles.FaqItemAnswer>{f.answer}</styles.FaqItemAnswer> }
                            </styles.FaqItem>
                            </React.Fragment>
                        )
                    })
                }
            </styles.FaqList>
        </styles.FaqWrapper>
    );
};

export default Faq;