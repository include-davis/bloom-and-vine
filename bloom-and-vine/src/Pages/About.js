import React from "react";
import "./About.css";
import bekah from "../Images/bekah.jpg";
import bouqet from "../Images/bouqet.png";
import brideFlowers from "../Images/brideFlowers.png";
import sunsetCouple from "../Images/sunsetCouple.png";
import couple from "../Images/couple.png";
import weddingCouple from "../Images/weddingCouple.png";
import ScrollToTopButton from "../Components/scroll-to-top-button/scrollToTop";

function About(props) {
    document.body.style = "background: #faf0ef;";
    return (
        <article className="aboutCont">
            {/* Header */}
            <h1 className="title">Get to Know Me!</h1>

            {/* Introduction: Hello */}
            <section className="introCont">
                <img className="introImg" src={bekah} alt="" />
                <div className="introText">
                    <div className="highlightCont introHighlightCont">
                        <h2 className="highlightText introHighlight">
                            Hello! I'm Bekah Tsai,
                        </h2>
                    </div>
                    <p className="desc">
                        I’m a trained biologist turned floral designer with a
                        passion for combining florals to make your event
                        unforgettable.
                    </p>
                    <p className="mobileDesc">
                        I’m a trained biologist turned floral designer with a passion for combining florals to make your event unforgettable. From weddings to showers to funerals, I am happy to provide complimentary consultations, where I can get to know you and thoroughly understand your vision.
                    </p>
                </div>
            </section>

            {/* I love... */}
            <section className="loveCont">
                <img className="brideFlowersMobile" src={brideFlowers} alt="" />
                <div className="loveText">
                    <div className="highlightCont loveHighlightCont">
                        <h2 className="highlightText loveHighlight">I love...</h2>
                    </div>
                    <p className="desc">
                        Using texture and unusual design elements to elevate my
                        flower combinations.
                    </p>
                    <p className="mobileDesc">
                        Using texture and unusual design elements to elevate my
                        flower combinations.
                    </p>
                </div>
                <div className="loveImgs">
                    <img className="bouqetImg" src={bouqet} alt="" />
                    <img
                        className="brideFlowersImg"
                        src={brideFlowers}
                        alt=""
                    />
                </div>
            </section>

            {/* I believe in... */}
            <section className="believeCont">
                <img className="weddingCouple" src={weddingCouple} alt="" />
                <div className="believeImgs">
                    <img className="sunsetCouple" src={sunsetCouple} alt="" />
                    <img className="couple" src={couple} alt="" />
                </div>
                <div className="believeText">
                    <div className="highlightCont believeHighlightCont">
                        <h2 className="highlightText believeHighlight">
                            I believe in...
                        </h2>
                    </div>
                    <p className="desc">
                        Focusing all of my creative attention on you and your
                        event. From weddings to showers to funerals, I am happy
                        to provide complimentary consultations, where I can get
                        to know you and thoroughly understand your vision.
                    </p>
                    <p className="mobileDesc">
                        Focusing all of my creative attention on you and your event.
                    </p>
                </div>
            </section>
            <div className="scroll-to-top-container-about">
                <ScrollToTopButton />
            </div>
        </article>
    );
}

export default About;
