import './about.css';

function AboutPage(){
    return (
        <div className='page'>
            <div className='title_wrapper'>
                <div className='title'>
                    <h2>About Me</h2>
                </div>
                <div className='title'>
                    <h1>Let me introduce myself.</h1>
                </div>
            </div>
            <div className='content__wrapper'>
                <div className='content__image'>
                    <div className='image'></div>
                </div>
                <div className='content__right'>
                    <div className='right__about-me'>
                        <p> Hello! My name is Nicole Buckley </p>
                        <br />
                        <p>I blurb sentence here and her is where a blub about me would go about what I professionaly enjoy doing! and other things that I like doing and intersection of this and that and i am so cool</p>
                        <br />
                        <p>I also like ! all of these things like lattes and hiking and other exciting nature thingies and wow im so quircky and different</p>
                        <br />
                        <p>These are some technologies I’ve recently worked with:</p>
                        <br />
                    </div>
                    <div className='right__skill-wrapper'>
                        <div className='skill__item'>React</div>
                        <div className='skill__item'>Java</div>
                        <div className='skill__item'>Python</div>
                        <div className='skill__item'>CSS</div>
                    </div>
                    <div className='right__button'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;