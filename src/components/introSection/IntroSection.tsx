import Aux from '../../hoc/Aux';
import IntroBottom from '../introBottom/IntroBottom';
import './IntroSection.css';

function IntroSection() {
    return (
        <Aux>
            <div className="intro-wrapper">
                <div className="intro-left">
                    <div className="intro-title">
                        Let's Discover <br />
                        The World
                    </div>
                    <div className="intro-text">
                        Take the unique chance to get the most uforgatable experience. These are the emotions you will never forget!
                    </div>
                    <div className="intro-btn">
                        <div className="btn">
                            <button>
                                <div className="text">Plan your trip</div>
                                <div className="icon"></div>
                            </button>
                        </div>
                        <div className="text">
                            <button>
                                <div className="icon"></div>
                                <div className="text">See our journey</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="intro-right">

                </div>
            </div>
            <IntroBottom />
        </Aux>
    )
}

export default IntroSection;
