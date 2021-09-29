import './IntroBottom.css';

function IntroBottom() {
    return (
        <div className="intro-botton-wrapper">
            <div className="table">
                <div className="items" style={{ borderRight: '1px solid #F4F4F4'}}>
                    <div className="title" style={{ color: '#F99805'}}>
                        Where
                    </div>
                    <div className="sub">
                        Dubai
                    </div>
                </div>
                <div className="items" style={{ borderRight: '1px solid #F4F4F4'}}>
                    <div className="title">
                        Date
                    </div>
                    <div className="sub">
                        Select date
                    </div>
                </div>
                <div className="items">
                    <div className="title">
                        Traveller
                    </div>
                    <div className="sub">
                        How many travellers
                    </div>
                </div>
                <div className="items">
                    <div className="title">
                        Where
                    </div>
                    <div className="sub">
                        Dubai
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroBottom;