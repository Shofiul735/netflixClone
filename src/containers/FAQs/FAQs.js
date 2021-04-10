import React, { Component } from 'react';
import FAQ from "./FAQ/FAQ";
import style from "./FAQs.module.css";

class FAQs extends Component {
    state = {
        faqs: [{
            id: 1,
            qus: "What is Netflix?",
            ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
            show: false
        }, {
            id: 2,
            qus: "How much does Netflix cost?",
            ans:
                `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD11.99 a month. No extra costs, no contracts.`,
            show: false
        }, {
            id: 3,
            qus: "Where can I watch it?",
            ans: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
            show: false
        }, {
            id: 4,
            qus: "How do I cancel?",
            ans: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
            show: false
        }, {
            id: 5,
            qus: "What can I watch on Netflix?",
            ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
            show: false
        }
        ],
        showId: null
    }
    showAnswer = (id) => {
        const state = [...this.state.faqs];
        let previousId = this.state.showId;
        let newID = null;
        if (previousId) {
            if (previousId === id) {
                state[id - 1].show = !state[id - 1].show;
            } else {
                state[previousId - 1].show = false;
                newID = id;
                state[id - 1].show = true;
            }
        } else {
            state[id - 1].show = !state[id - 1].show;
            newID = id;
        }

        const final = { faqs: state, showId: newID };
        this.setState(final);
    }
    render() {
        const FAQs = [...this.state.faqs];
        const faqs = FAQs.map(item => {
            return (
                    <FAQ
                        key={item.id}
                        qus={item.qus}
                        ans={item.ans}
                        show={item.show}
                        clicked={() => this.showAnswer(item.id)}
                    />
            );
        });
        return (
            <div className={style.netflixbg}>
                <h1>Frequently Asked Questions</h1>
                <div className={style.marginVertical}>
                    {faqs}
                </div>
            </div>
        );
    }
}
export default FAQs;